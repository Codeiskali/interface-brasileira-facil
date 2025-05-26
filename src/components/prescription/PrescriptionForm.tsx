
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PrescriptionFormProps {
  patientName: string;
  onPatientNameChange: (name: string) => void;
  onGenerate: () => void;
}

const PrescriptionForm: React.FC<PrescriptionFormProps> = ({
  patientName,
  onPatientNameChange,
  onGenerate
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="patientName">Nome do Paciente</Label>
        <Input 
          id="patientName"
          value={patientName}
          onChange={(e) => onPatientNameChange(e.target.value)}
          placeholder="Digite o nome completo do paciente"
        />
      </div>

      <Button 
        onClick={onGenerate}
        className="w-full mt-6 bg-[#2c7d7b] hover:bg-[#1e5655]"
      >
        <FileText className="mr-2 h-4 w-4" />
        Gerar Receita
      </Button>
    </div>
  );
};

export default PrescriptionForm;
