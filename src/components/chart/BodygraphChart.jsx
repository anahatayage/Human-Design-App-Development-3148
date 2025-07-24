import React from 'react';
import { motion } from 'framer-motion';

const BodygraphChart = ({ chartData }) => {
  if (!chartData) return null;

  const centers = [
    { id: 'head', name: 'Head', x: 50, y: 10, defined: chartData.definedCenters?.includes('head') },
    { id: 'ajna', name: 'Ajna', x: 50, y: 25, defined: chartData.definedCenters?.includes('ajna') },
    { id: 'throat', name: 'Throat', x: 50, y: 40, defined: chartData.definedCenters?.includes('throat') },
    { id: 'g', name: 'G Center', x: 50, y: 55, defined: chartData.definedCenters?.includes('g') },
    { id: 'heart', name: 'Heart', x: 25, y: 55, defined: chartData.definedCenters?.includes('heart') },
    { id: 'spleen', name: 'Spleen', x: 75, y: 55, defined: chartData.definedCenters?.includes('spleen') },
    { id: 'solar', name: 'Solar Plexus', x: 25, y: 70, defined: chartData.definedCenters?.includes('solar') },
    { id: 'sacral', name: 'Sacral', x: 50, y: 70, defined: chartData.definedCenters?.includes('sacral') },
    { id: 'root', name: 'Root', x: 50, y: 85, defined: chartData.definedCenters?.includes('root') },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-auto">
        {/* Connection Lines */}
        <g stroke="#e5e7eb" strokeWidth="0.5" fill="none">
          {/* Head to Ajna */}
          <line x1="50" y1="15" x2="50" y2="20" />
          {/* Ajna to Throat */}
          <line x1="50" y1="30" x2="50" y2="35" />
          {/* Throat to G */}
          <line x1="50" y1="45" x2="50" y2="50" />
          {/* G to Heart */}
          <line x1="45" y1="55" x2="30" y2="55" />
          {/* G to Spleen */}
          <line x1="55" y1="55" x2="70" y2="55" />
          {/* Heart to Solar */}
          <line x1="25" y1="60" x2="25" y2="65" />
          {/* G to Sacral */}
          <line x1="50" y1="60" x2="50" y2="65" />
          {/* Sacral to Root */}
          <line x1="50" y1="75" x2="50" y2="80" />
          {/* Solar to Root */}
          <line x1="30" y1="75" x2="45" y2="80" />
        </g>

        {/* Centers */}
        {centers.map((center, index) => (
          <motion.g
            key={center.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {center.id === 'head' || center.id === 'ajna' ? (
              // Triangle for Head and Ajna
              <polygon
                points={`${center.x},${center.y-3} ${center.x-3},${center.y+2} ${center.x+3},${center.y+2}`}
                fill={center.defined ? '#8b5cf6' : '#f3f4f6'}
                stroke={center.defined ? '#7c3aed' : '#d1d5db'}
                strokeWidth="0.5"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : center.id === 'g' ? (
              // Diamond for G Center
              <polygon
                points={`${center.x},${center.y-3} ${center.x+3},${center.y} ${center.x},${center.y+3} ${center.x-3},${center.y}`}
                fill={center.defined ? '#f59e0b' : '#f3f4f6'}
                stroke={center.defined ? '#d97706' : '#d1d5db'}
                strokeWidth="0.5"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : (
              // Square for other centers
              <rect
                x={center.x - 3}
                y={center.y - 3}
                width="6"
                height="6"
                fill={center.defined ? 
                  (center.id === 'throat' ? '#06b6d4' :
                   center.id === 'heart' ? '#ef4444' :
                   center.id === 'spleen' ? '#84cc16' :
                   center.id === 'solar' ? '#f97316' :
                   center.id === 'sacral' ? '#dc2626' :
                   center.id === 'root' ? '#7c2d12' : '#8b5cf6') 
                  : '#f3f4f6'
                }
                stroke={center.defined ? 
                  (center.id === 'throat' ? '#0891b2' :
                   center.id === 'heart' ? '#dc2626' :
                   center.id === 'spleen' ? '#65a30d' :
                   center.id === 'solar' ? '#ea580c' :
                   center.id === 'sacral' ? '#b91c1c' :
                   center.id === 'root' ? '#92400e' : '#7c3aed') 
                  : '#d1d5db'
                }
                strokeWidth="0.5"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            )}
            
            {/* Center labels */}
            <text
              x={center.x}
              y={center.y + 8}
              textAnchor="middle"
              className="text-xs fill-gray-600 font-medium"
              style={{ fontSize: '2px' }}
            >
              {center.name}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-4 text-center">
        <div className="flex justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
            <span className="text-gray-600">Defined</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-200 border border-gray-300 rounded-sm"></div>
            <span className="text-gray-600">Undefined</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodygraphChart;