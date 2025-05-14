
import React from 'react';
import { cn } from "@/lib/utils";

interface PatientTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}

const PatientTypeCard = ({ icon, title, description, onClick, className }: PatientTypeCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-4 flex items-center shadow-sm cursor-pointer hover:shadow-md transition-all hover:bg-gray-50", 
        className
      )}
      onClick={onClick}
    >
      <div className="mr-4">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-xl font-bold text-odonto-dark">{title}</h3>
        <p className="text-odonto-dark opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default PatientTypeCard;
