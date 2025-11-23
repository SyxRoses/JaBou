import React from 'react';

// A mock map component using CSS grids and absolute positioning to simulate a map interface
// This avoids needing a real Mapbox API key for the generated code but demonstrates the intent.

interface Marker {
  lat: number;
  lng: number;
  id: string;
  status: string;
}

interface LiveMapProps {
  markers: Marker[];
}

export const LiveMap: React.FC<LiveMapProps> = ({ markers }) => {
  return (
    <div className="w-full h-full bg-[#1C1E26] relative rounded-xl overflow-hidden group">
      {/* Map Background Pattern (Simulating Streets) */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Mock Land Masses */}
      <div className="absolute top-10 left-10 w-40 h-32 bg-[#2A2D36] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#2A2D36] rounded-full blur-3xl opacity-40"></div>

      {/* Markers */}
      {markers.map((marker, idx) => (
        <div
          key={marker.id}
          className="absolute flex flex-col items-center justify-center transform hover:scale-110 transition-transform cursor-pointer"
          style={{
            top: `${50 + (idx * 15) * (idx % 2 === 0 ? 1 : -1)}%`,
            left: `${50 + (idx * 10) * (idx % 2 === 0 ? -1 : 1)}%`,
          }}
        >
          {/* Pulse Effect */}
          <div className={`absolute w-12 h-12 rounded-full opacity-30 animate-ping ${marker.status === 'working' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
          
          {/* Marker Dot */}
          <div className={`w-4 h-4 rounded-full border-2 border-[#1C1E26] shadow-lg z-10 ${marker.status === 'working' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
          
          {/* Tooltip */}
          <div className="mt-2 bg-[#0F1115] px-2 py-1 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-800">
            {marker.id} • {marker.status}
          </div>
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="w-8 h-8 bg-[#2A2D36] text-white rounded flex items-center justify-center hover:bg-[#3B82F6]">+</button>
        <button className="w-8 h-8 bg-[#2A2D36] text-white rounded flex items-center justify-center hover:bg-[#3B82F6]">-</button>
      </div>
    </div>
  );
};