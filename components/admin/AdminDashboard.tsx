import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { LayoutDashboard, Users, Map, Settings, Bell, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { LiveMap } from './LiveMap';
import { mockSupabase } from '../../services/supabaseMock';

// Mock chart data
const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [cleanerLocations, setCleanerLocations] = useState<any[]>([]);

  useEffect(() => {
    // Subscribe to mock realtime updates
    const unsubscribe = mockSupabase.subscribeToCleanerLocations((locs) => {
      setCleanerLocations(locs);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1115] text-white flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-20 lg:w-64 flex-shrink-0 border-r border-[#2A2D36] flex flex-col bg-[#0F1115]">
        <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-[#2A2D36]">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-0 lg:mr-3">
            <span className="font-bold">P</span>
          </div>
          <span className="hidden lg:block font-semibold tracking-wide">Pristine<span className="text-gray-500">Admin</span></span>
        </div>

        <div className="flex-1 py-6 space-y-2 px-3">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'bookings', icon: Calendar, label: 'Bookings' },
            { id: 'fleet', icon: Map, label: 'Fleet Map' },
            { id: 'users', icon: Users, label: 'Customers' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all ${
                activeTab === item.id 
                  ? 'bg-[#1C1E26] text-blue-500' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1C1E26]/50'
              }`}
            >
              <item.icon size={20} />
              <span className="hidden lg:block ml-3 font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-[#2A2D36]">
           <button onClick={onBack} className="text-xs text-gray-500 hover:text-white flex items-center">
             ← Back to Site
           </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-[#2A2D36] bg-[#0F1115]/95 backdrop-blur flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-3 pl-6 border-l border-[#2A2D36]">
              <div className="text-right hidden md:block">
                <div className="text-sm font-medium">Alex Chen</div>
                <div className="text-xs text-gray-500">CTO</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto dark-scroll p-8 bg-[#0F1115]">
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
             {[
               { label: 'Total Revenue', value: '$48,294', change: '+12%', color: 'text-green-500' },
               { label: 'Active Jobs', value: '24', change: 'Live', color: 'text-blue-500' },
               { label: 'Completion Rate', value: '98.5%', change: '+1.2%', color: 'text-green-500' },
               { label: 'Avg Rating', value: '4.92', change: '-0.1%', color: 'text-yellow-500' },
             ].map((stat, i) => (
               <div key={i} className="bg-[#1C1E26] p-6 rounded-xl border border-[#2A2D36] hover:border-gray-700 transition-colors">
                 <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                 <div className="flex items-end justify-between">
                   <div className="text-3xl font-bold">{stat.value}</div>
                   <div className={`text-sm font-medium ${stat.color} flex items-center`}>
                     {stat.change === 'Live' ? <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div> : <TrendingUp size={14} className="mr-1"/>}
                     {stat.change}
                   </div>
                 </div>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[500px]">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-[#1C1E26] rounded-xl border border-[#2A2D36] p-6 flex flex-col">
              <h3 className="text-lg font-medium mb-6">Revenue Analytics</h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2D36" vertical={false} />
                    <XAxis dataKey="name" stroke="#6B7280" tick={{fill: '#6B7280'}} axisLine={false} />
                    <YAxis stroke="#6B7280" tick={{fill: '#6B7280'}} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0F1115', border: '1px solid #2A2D36', borderRadius: '8px' }}
                      cursor={{fill: '#2A2D36', opacity: 0.4}}
                    />
                    <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Live Map Area */}
            <div className="lg:col-span-1 bg-[#1C1E26] rounded-xl border border-[#2A2D36] p-6 flex flex-col relative">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-medium">Fleet Live View</h3>
                 <span className="text-xs text-green-500 font-mono animate-pulse">● UPDATING</span>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <LiveMap markers={cleanerLocations.length > 0 ? cleanerLocations.map((l, i) => ({
                    id: l.cleaner_id,
                    lat: l.lat,
                    lng: l.lng,
                    status: l.status
                })) : [
                    { id: 'C-1', lat: 0, lng: 0, status: 'working' },
                    { id: 'C-2', lat: 0, lng: 0, status: 'driving' }
                ]} />
              </div>
              <div className="mt-4 space-y-3">
                 <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Cleaning
                    </div>
                    <span>12</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        En Route
                    </div>
                    <span>8</span>
                 </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};