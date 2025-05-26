
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface MedicationOption {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  quantity: string;
  category: string;
}

interface MedicationSelectorProps {
  medications: MedicationOption[];
  selectedMedications: string[];
  onMedicationToggle: (medicationId: string) => void;
}

const MedicationSelector: React.FC<MedicationSelectorProps> = ({
  medications,
  selectedMedications,
  onMedicationToggle
}) => {
  const categories = Array.from(new Set(medications.map(med => med.category)));

  return (
    <div className="space-y-4">
      <Label className="text-lg font-medium">Selecione os Medicamentos por Categoria:</Label>
      
      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h4 className="font-medium text-gray-700 text-sm bg-gray-100 p-2 rounded">
            {category}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {medications
              .filter(med => med.category === category)
              .map((medication) => (
                <div key={medication.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={medication.id}
                    checked={selectedMedications.includes(medication.id)}
                    onCheckedChange={() => onMedicationToggle(medication.id)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={medication.id} className="font-medium cursor-pointer text-sm">
                      {medication.name}
                    </Label>
                    <p className="text-xs text-gray-600 mt-1">{medication.instructions}</p>
                    <p className="text-xs text-gray-500">Quantidade: {medication.quantity}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicationSelector;
