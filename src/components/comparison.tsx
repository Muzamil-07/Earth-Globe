import React from 'react';
import { cn } from '@/lib/utils';

interface ComparisonBarProps {
  label: string;
  percentage: number;
  isOpenxAI: boolean;
  position: 'left' | 'right';
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ label, percentage, isOpenxAI, position }) => {
  return (
    <div className={cn(
      "flex flex-col items-center",
      position === 'left' ? "items-start" : "items-end"
    )}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-white text-sm font-medium">{label}</span>
        <span className="text-white text-sm font-medium">-{percentage}%</span>
      </div>
      <div className={cn(
        "bg-gray-800 rounded-full h-4 relative overflow-hidden",
        position === 'left' ? "w-full" : "w-full"
      )}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            isOpenxAI 
              ? "bg-gradient-to-r from-purple-500 to-blue-500" 
              : "bg-gray-600"
          )}
          style={{ 
            width: `${percentage}%`,
            marginLeft: position === 'right' ? 'auto' : '0',
            marginRight: position === 'left' ? 'auto' : '0'
          }}
        />
      </div>
    </div>
  );
};

const Comparison = () => {
  const comparisonData = [
    {
      category: "Cost & Energy",
      openxAI: { label: "OpenxAI", percentage: 30 },
      others: { label: "Others", percentage: 80 }
    },
    {
      category: "Content Censorship & Restrictions",
      openxAI: { label: "OpenxAI", percentage: 0 },
      others: { label: "Others", percentage: 92 }
    },
    {
      category: "Model Ownership, Data Control & Privacy",
      openxAI: { label: "OpenxAI", percentage: 100 },
      others: { label: "Others", percentage: 30 }
    }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative">
      {/* Vertical dividing line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2 z-0"></div>
      
      {/* Asterisk icon in bottom-left */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-semibold">*</span>
        </div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Closed AI vs OpenxAI
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From closed and costly to open, accessible, and user-owned —{' '}
            <span className="text-blue-500 font-semibold">OpenxAI shifts the power.</span>
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="space-y-12">
          {comparisonData.map((item, index) => (
            <div key={index} className="relative">
              <h3 className="text-white text-xl font-semibold mb-6 text-center">
                {item.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {/* Left side - OpenxAI */}
                <div className="flex flex-col items-end">
                  <ComparisonBar
                    label={item.openxAI.label}
                    percentage={item.openxAI.percentage}
                    isOpenxAI={true}
                    position="left"
                  />
                </div>
                
                {/* Right side - Others */}
                <div className="flex flex-col items-start">
                  <ComparisonBar
                    label={item.others.label}
                    percentage={item.others.percentage}
                    isOpenxAI={false}
                    position="right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;