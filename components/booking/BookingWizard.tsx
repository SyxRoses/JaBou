import React, { useState, useEffect } from 'react';
import { Service } from '../../types';
import { Button } from '../ui/Button';
import { ArrowLeft, Check, Calendar, CreditCard, Home, Sparkles } from 'lucide-react';
import { mockSupabase } from '../../services/supabaseMock';

interface BookingWizardProps {
  onClose: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockSupabase.getServices().then(data => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-900/50 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <span className="sr-only">Close</span>
            Close
          </button>
          <div className="flex items-center space-x-2">
             {[1, 2, 3].map((i) => (
               <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-black' : 'bg-gray-200'}`} />
             ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900">Select a Service</h2>
              <p className="text-gray-500">Choose the level of clean your home needs.</p>
              
              <div className="space-y-4">
                {loading ? (
                   <div className="text-center py-10">Loading services...</div>
                ) : (
                  services.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`group relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedService === service.id 
                          ? 'border-black bg-gray-50' 
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <img src={service.image_url} alt={service.name} className="w-24 h-24 object-cover rounded-lg" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                            <span className="font-semibold text-gray-900">${service.base_price}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{service.description}</p>
                          <div className="flex items-center mt-3 text-xs font-medium text-gray-400">
                             <Sparkles size={14} className="mr-1" />
                             Est. {service.duration_minutes / 60} hours
                          </div>
                        </div>
                        {selectedService === service.id && (
                          <div className="absolute top-4 right-4 bg-black text-white p-1 rounded-full">
                            <Check size={14} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {step === 2 && (
             <div className="space-y-6 animate-fade-in">
               <h2 className="text-3xl font-bold text-gray-900">When should we come?</h2>
               <p className="text-gray-500">Real-time availability from our top-rated pros.</p>
               
               {/* Calendar Mock */}
               <div className="grid grid-cols-3 gap-3">
                 {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                   <div key={day} className="border border-gray-200 rounded-lg p-3 text-center hover:border-black cursor-pointer">
                      <div className="text-xs text-gray-500 uppercase">{day}</div>
                      <div className="text-xl font-bold">14</div>
                   </div>
                 ))}
               </div>

               <div className="pt-4">
                 <h3 className="font-semibold mb-3">Available Times</h3>
                 <div className="grid grid-cols-2 gap-3">
                   {['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM'].map(time => (
                     <div key={time} className="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-50 cursor-pointer text-sm font-medium">
                       {time}
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
               <h2 className="text-3xl font-bold text-gray-900">Review & Pay</h2>
               
               <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">Service</span>
                   <span className="font-medium">Deep Clean</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">Date</span>
                   <span className="font-medium">Wed, Mar 14 • 10:00 AM</span>
                 </div>
                 <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
                   <span>Total</span>
                   <span>$250.00</span>
                 </div>
               </div>

               <div className="border border-gray-200 rounded-xl p-4 flex items-center space-x-4 cursor-pointer hover:border-blue-500">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <CreditCard className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                    <p className="text-xs text-gray-500">Expires 12/25</p>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex space-x-4">
            {step > 1 && (
              <Button onClick={prevStep} variant="outline" fullWidth>Back</Button>
            )}
            <Button 
              onClick={() => {
                if (step === 3) onClose();
                else nextStep();
              }} 
              fullWidth
              disabled={step === 1 && !selectedService}
            >
              {step === 3 ? 'Confirm Booking' : 'Continue'}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};