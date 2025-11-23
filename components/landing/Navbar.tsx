import React from 'react';
import { Button } from '../ui/Button';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => onNavigate('home')}>
             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-2">
                <Sparkles className="text-white w-5 h-5" />
             </div>
            <span className="font-bold text-xl tracking-tight">Boudreaux Cleaning</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact</a>
            <button onClick={() => onNavigate('admin')} className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Admin Demo</button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('customer')} 
              className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-gray-600 transition-colors"
            >
              Customer Login
            </button>
            <Button onClick={onOpenBooking} variant="primary" className="rounded-full px-6">Book now</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg px-4 py-6 space-y-4">
           <a href="#services" className="block text-lg font-medium text-gray-900">Services</a>
           <a href="#" className="block text-lg font-medium text-gray-900">Pricing</a>
           <button onClick={() => onNavigate('customer')} className="block text-lg font-medium text-gray-900">Login</button>
           <Button onClick={onOpenBooking} fullWidth className="mt-4">Book now</Button>
        </div>
      )}
    </nav>
  );
};