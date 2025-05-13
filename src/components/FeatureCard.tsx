
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-4 flex items-center shadow-sm mb-4 cursor-pointer hover:shadow-md transition-shadow", 
      className
    )}>
      <div className="mr-4 text-odonto-dark">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-xl font-bold text-odonto-dark">{title}</h3>
        <p className="text-odonto-dark opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
