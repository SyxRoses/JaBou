import React from 'react';
import { Button } from '../ui/Button';
import { Clock, MapPin, Calendar, Star, ChevronRight, Home, CreditCard, MessageSquare, Plus, Sparkles } from 'lucide-react';

interface CustomerDashboardProps {
  onLogout: () => void;
  onNewBooking: () => void;
}

export const CustomerDashboard: React.FC<CustomerDashboardProps> = ({ onLogout, onNewBooking }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Boudreaux Cleaning</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm font-medium text-gray-500 hover:text-black">My Bookings</button>
          <button className="text-sm font-medium text-gray-500 hover:text-black">Wallet</button>
          <button className="text-sm font-medium text-gray-500 hover:text-black">Support</button>
          <div className="h-8 w-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer" onClick={onLogout}>
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Good morning, Elena</h1>
            <p className="text-gray-500 mt-1">Welcome back to your workspace.</p>
          </div>
          <Button onClick={onNewBooking}>
            <Plus size={18} className="mr-2" />
            New Task
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column (Active Status) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Active Booking Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Home size={120} />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                   <div className="flex items-center space-x-2 mb-1">
                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">In Progress</span>
                     <span className="text-gray-400 text-sm">• Just now</span>
                   </div>
                   <h2 className="text-2xl font-bold">Deep Home Clean</h2>
                   <p className="text-gray-500">San Francisco, CA</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">18:42</div>
                  <div className="text-sm text-gray-400">remaining</div>
                </div>
              </div>

              {/* Progress Visual */}
              <div className="mb-8">
                 <div className="flex justify-between text-sm mb-2 font-medium">
                   <span>Living Room</span>
                   <span>85%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                   <div className="bg-black h-full rounded-full w-[85%] relative">
                      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white/20 to-transparent"></div>
                   </div>
                 </div>
              </div>

              {/* Cleaner Info */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cleaner" className="w-full h-full object-cover"/>
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Sarah Chen</p>
                     <div className="flex items-center text-xs text-gray-500">
                        <Star size={12} className="text-yellow-400 fill-current mr-1" />
                        4.9 • Verified Pro
                     </div>
                   </div>
                </div>
                <div className="flex space-x-2">
                   <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600">
                     <MessageSquare size={20} />
                   </button>
                   <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600">
                     <MapPin size={20} />
                   </button>
                </div>
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div>
               <h3 className="text-lg font-bold mb-4">Upcoming</h3>
               <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
                 {[
                   { title: 'Weekly Maintenance', date: 'Tue, Mar 19 • 10:00 AM', status: 'Confirmed' },
                   { title: 'Office Deep Clean', date: 'Fri, Mar 22 • 6:00 PM', status: 'Pending' }
                 ].map((booking, i) => (
                   <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{booking.title}</p>
                          <p className="text-sm text-gray-500">{booking.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-700'}`}>
                          {booking.status}
                        </span>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
               <div className="grid grid-cols-2 gap-3">
                 <button className="p-4 rounded-xl border border-gray-100 hover:border-black hover:bg-gray-50 transition-all text-center flex flex-col items-center justify-center space-y-2 group" onClick={onNewBooking}>
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:bg-black group-hover:text-white transition-colors">
                      <Home size={20} />
                    </div>
                    <span className="text-sm font-medium">Book Clean</span>
                 </button>
                 <button className="p-4 rounded-xl border border-gray-100 hover:border-black hover:bg-gray-50 transition-all text-center flex flex-col items-center justify-center space-y-2 group">
                    <div className="bg-purple-50 p-2 rounded-lg text-purple-600 group-hover:bg-black group-hover:text-white transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <span className="text-sm font-medium">Support</span>
                 </button>
                 <button className="p-4 rounded-xl border border-gray-100 hover:border-black hover:bg-gray-50 transition-all text-center flex flex-col items-center justify-center space-y-2 group">
                    <div className="bg-orange-50 p-2 rounded-lg text-orange-600 group-hover:bg-black group-hover:text-white transition-colors">
                      <Clock size={20} />
                    </div>
                    <span className="text-sm font-medium">History</span>
                 </button>
                 <button className="p-4 rounded-xl border border-gray-100 hover:border-black hover:bg-gray-50 transition-all text-center flex flex-col items-center justify-center space-y-2 group">
                    <div className="bg-green-50 p-2 rounded-lg text-green-600 group-hover:bg-black group-hover:text-white transition-colors">
                      <CreditCard size={20} />
                    </div>
                    <span className="text-sm font-medium">Wallet</span>
                 </button>
               </div>
            </div>

            {/* Stats */}
            <div className="bg-black text-white rounded-2xl p-6 shadow-lg">
               <h3 className="font-bold mb-6">Your Impact</h3>
               <div className="space-y-6">
                 <div>
                   <div className="text-3xl font-bold text-blue-400">187</div>
                   <div className="text-sm text-gray-400">Hours saved this year</div>
                 </div>
                 <div className="h-px bg-gray-800"></div>
                 <div>
                   <div className="text-3xl font-bold text-green-400">15</div>
                   <div className="text-sm text-gray-400">Trees planted via eco-clean</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};