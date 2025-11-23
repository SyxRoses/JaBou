import React from 'react';
import { Home, Building2, Leaf } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <div className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
             <div className="p-6">
               <div className="flex justify-between items-start mb-4">
                 <h3 className="text-xl font-bold text-gray-900">Residential cleaning</h3>
                 <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                   <Home size={20} />
                 </div>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed mb-6">
                 Regular house cleaning, deep cleans, move-in/out, and post-construction cleanup.
               </p>
             </div>
             <div className="rounded-2xl overflow-hidden h-48">
               <img 
                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Residential" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
             <div className="p-6">
               <div className="flex justify-between items-start mb-4">
                 <h3 className="text-xl font-bold text-gray-900">Office cleaning</h3>
                 <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                   <Building2 size={20} />
                 </div>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed mb-6">
                 Daily, weekly, or monthly office cleaning. Restrooms, break rooms, and workspaces.
               </p>
             </div>
             <div className="rounded-2xl overflow-hidden h-48">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                 alt="Office" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
             <div className="p-6">
               <div className="flex justify-between items-start mb-4">
                 <h3 className="text-xl font-bold text-gray-900">Eco-friendly</h3>
                 <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                   <Leaf size={20} />
                 </div>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed mb-6">
                 Safe for kids and pets. Green certified products and sustainable cleaning practices.
               </p>
             </div>
             <div className="rounded-2xl overflow-hidden h-48">
               <img 
                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                 alt="Eco" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};