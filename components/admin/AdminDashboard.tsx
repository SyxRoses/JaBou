import React from 'react';
import { 
  CloudSun, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin, 
  Plus, 
  Megaphone, 
  Truck, 
  DollarSign,
  ChevronRight,
  MoreHorizontal,
  Bell
} from 'lucide-react';
import { LiveMap } from './LiveMap';
import { Button } from '../ui/Button';

// --- Demo Data Configuration ---
const demoData = {
  user: {
    name: 'Jana',
    role: 'Owner'
  },
  metrics: {
    revenue: 3240,
    activeCrews: 8,
    totalCrews: 12,
    pendingBookings: 4
  },
  schedule: [
    { id: 101, time: '08:00 AM', client: 'The Royal Sonesta', service: 'Deep Clean', crew: 'Team Alpha', status: 'In Progress' },
    { id: 102, time: '09:30 AM', client: 'Garden District Estate', service: 'Standard', crew: 'Team Beta', status: 'In Progress' },
    { id: 103, time: '11:00 AM', client: 'French Quarter Loft', service: 'Move-out', crew: 'Team Gamma', status: 'Scheduled' },
    { id: 104, time: '01:00 PM', client: 'Convention Center', service: 'Sanitization', crew: 'Team Delta', status: 'Scheduled' },
    { id: 105, time: '03:15 PM', client: 'Mrs. Robichaux', service: 'Weekly Maint.', crew: 'Unassigned', status: 'Pending' },
  ],
  fleet: [
    { id: 'Van 1', lat: 0, lng: 0, status: 'working', rotation: 45 },
    { id: 'Van 2', lat: 0, lng: 0, status: 'working', rotation: 90 },
    { id: 'Van 3', lat: 0, lng: 0, status: 'driving', rotation: 180 },
    { id: 'Van 4', lat: 0, lng: 0, status: 'driving', rotation: -45 },
    { id: 'Van 5', lat: 0, lng: 0, status: 'offline', rotation: 0 },
  ]
};

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 text-zinc-900 font-sans p-6 md:p-8">
      
      {/* Top Navigation Bar (Dashboard specific) */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Admin<span className="text-gray-400">Panel</span></span>
        </div>
        <div className="flex items-center space-x-4">
            <button onClick={onBack} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                Exit Dashboard
            </button>
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm relative cursor-pointer hover:bg-gray-50">
                <Bell size={16} className="text-gray-600" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-black"></div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

        {/* 1. Welcome Card (Top Left) */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-48 relative overflow-hidden">
           <div className="z-10">
              <h1 className="text-2xl font-bold text-zinc-900">Good morning, <br/>{demoData.user.name}.</h1>
              <p className="text-zinc-500 text-sm mt-2 font-medium">{today}</p>
           </div>
           
           <div className="flex items-center justify-between z-10 border-t border-gray-50 pt-4 mt-2">
              <div className="flex items-center text-zinc-600 text-sm font-medium">
                 <CloudSun size={18} className="mr-2" />
                 <span>72° Sunny</span>
              </div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">New Orleans, LA</span>
           </div>

           {/* Decorative Background Blob */}
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* 2. Business Pulse Metrics (Top Right) */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm h-48 flex flex-col justify-between">
           <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-zinc-900 text-lg">Business Pulse</h3>
              <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <MoreHorizontal size={20} />
              </button>
           </div>
           
           <div className="grid grid-cols-3 gap-8 h-full items-center">
              {/* Metric 1 */}
              <div className="flex flex-col border-r border-gray-50 pr-4">
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wide mb-1">Today's Revenue</span>
                  <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-zinc-900">${demoData.metrics.revenue.toLocaleString()}</span>
                      <span className="ml-2 text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center">
                          <TrendingUp size={10} className="mr-1" /> +12%
                      </span>
                  </div>
              </div>
              
              {/* Metric 2 */}
              <div className="flex flex-col border-r border-gray-50 pr-4 pl-4">
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wide mb-1">Active Crews</span>
                  <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-zinc-900">{demoData.metrics.activeCrews}</span>
                      <span className="text-xl text-zinc-400 font-medium">/{demoData.metrics.totalCrews}</span>
                  </div>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col pl-4">
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wide mb-1">Pending Bookings</span>
                  <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-zinc-900">{demoData.metrics.pendingBookings}</span>
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <Clock size={20} />
                      </div>
                  </div>
              </div>
           </div>
        </div>

        {/* 3. Main Feature: Fleet Map (Center Left) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[24px] p-2 border border-gray-100 shadow-sm h-[420px] relative">
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-zinc-900 flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    Live Fleet
                </h3>
            </div>
            
            <div className="absolute top-6 right-6 z-10 flex space-x-2">
                <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center text-xs font-medium text-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    Cleaning
                </div>
                <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center text-xs font-medium text-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    Driving
                </div>
            </div>

            <div className="w-full h-full rounded-[20px] overflow-hidden">
                <LiveMap markers={demoData.fleet as any} />
            </div>
        </div>

        {/* 4. Live Schedule / Dispatch (Center Right) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm h-[420px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-zinc-900 text-lg">Live Schedule</h3>
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded">Today</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {demoData.schedule.map((job) => (
                    <div key={job.id} className="group flex items-start p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
                        <div className="flex flex-col items-center mr-4 pt-1">
                            <span className="text-xs font-bold text-zinc-900">{job.time.split(' ')[0]}</span>
                            <span className="text-[10px] text-zinc-400 uppercase">{job.time.split(' ')[1]}</span>
                            <div className="h-full w-px bg-gray-100 my-1 group-last:hidden"></div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-zinc-900">{job.client}</h4>
                            <div className="text-xs text-zinc-500 mb-2">{job.service} • {job.crew}</div>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                                job.status === 'In Progress' ? 'bg-green-50 text-green-700' :
                                job.status === 'Scheduled' ? 'bg-blue-50 text-blue-700' :
                                'bg-gray-100 text-gray-500'
                            }`}>
                                {job.status}
                            </span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-600 mt-2" />
                    </div>
                ))}
            </div>
            
            <button className="w-full mt-4 py-2 text-sm font-medium text-zinc-500 hover:text-black border-t border-gray-50 transition-colors">
                View Full Dispatch Board
            </button>
        </div>

        {/* 5. Quick Actions (Bottom) */}
        <div className="col-span-12 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-zinc-900 text-lg mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex items-center p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 group-hover:bg-gray-800 group-hover:text-blue-400">
                        <Plus size={20} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-sm">New Booking</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">Create job</div>
                    </div>
                </button>

                <button className="flex items-center p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3 group-hover:bg-gray-800 group-hover:text-purple-400">
                        <Megaphone size={20} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-sm">Broadcast</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">Message all crews</div>
                    </div>
                </button>

                <button className="flex items-center p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mr-3 group-hover:bg-gray-800 group-hover:text-orange-400">
                        <Truck size={20} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-sm">Manage Fleet</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">Track & assign</div>
                    </div>
                </button>

                <button className="flex items-center p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3 group-hover:bg-gray-800 group-hover:text-green-400">
                        <DollarSign size={20} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-sm">Payroll</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">Run payouts</div>
                    </div>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};