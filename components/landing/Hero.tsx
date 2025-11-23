import React from 'react';
import { Button } from '../ui/Button';
import { Calendar, FileText, Star, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartBooking }) => {
  return (
    <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Your space, <br/>
              <span className="text-gray-900">spotless</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Professional cleaning services for homes and offices. Eco-friendly products, flexible scheduling, and a 100% satisfaction guarantee.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={onStartBooking} size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule cleaning
              </Button>
              <Button onClick={onStartBooking} variant="secondary" size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto bg-gray-100 text-gray-900 hover:bg-gray-200">
                <FileText className="mr-2 h-5 w-5" />
                Get quote
              </Button>
            </div>
            
            {/* Quick Stats / Trust */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
               <div className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-3 border border-gray-100">
                  <span className="font-bold text-2xl text-gray-900">01</span>
                  <div className="text-xs text-gray-500 font-medium leading-tight">Book<br/>online</div>
               </div>
               <div className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-3 border border-gray-100">
                  <span className="font-bold text-2xl text-gray-900">02</span>
                  <div className="text-xs text-gray-500 font-medium leading-tight">We<br/>clean</div>
               </div>
               <div className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-3 border border-gray-100">
                  <span className="font-bold text-2xl text-gray-900">03</span>
                  <div className="text-xs text-gray-500 font-medium leading-tight">You<br/>relax</div>
               </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center lg:justify-start text-xs font-medium text-gray-400">
               <ShieldCheck size={14} className="mr-1" />
               <span className="mr-4">Deep cleaned to perfection</span>
               <Star size={14} className="mr-1" />
               <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-blue-50">
               {/* 
                 Updated image to match the modern office lounge aesthetic in the screenshot
               */}
               <img 
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                 alt="Modern Office Lounge" 
                 className="w-full h-[600px] object-cover"
               />
               
               {/* Decorative Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>

               {/* Floating Element: 100% Satisfaction */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center space-x-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-sm font-medium text-gray-800">Deep cleaned to perfection</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};