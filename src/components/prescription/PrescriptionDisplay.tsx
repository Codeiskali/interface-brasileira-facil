
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface MedicationOption {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  quantity: string;
  category: string;
}

interface PrescriptionDisplayProps {
  patientName: string;
  selectedMedicationsData: MedicationOption[];
  onEdit: () => void;
}

const PrescriptionDisplay: React.FC<PrescriptionDisplayProps> = ({
  patientName,
  selectedMedicationsData,
  onEdit
}) => {
  const groupMedicationsByCategory = (medicationsData: MedicationOption[]) => {
    return medicationsData.reduce((acc, med) => {
      if (!acc[med.category]) {
        acc[med.category] = [];
      }
      acc[med.category].push(med);
      return acc;
    }, {} as Record<string, MedicationOption[]>);
  };

  return (
    <>
      <div className="prescription-content bg-white p-8 border border-gray-300" style={{ fontFamily: 'serif' }}>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-600 mb-2">Arthur Valente</h2>
          <p className="text-sm text-gray-500">IMPLANTODONTIA & CIRURGIA ORAL</p>
        </div>

        {/* Patient Name */}
        <div className="mb-6">
          <p className="text-lg">
            <strong>PARA:</strong> 
            <span className="border-b border-gray-400 ml-2 inline-block w-80">
              {patientName}
            </span>
          </p>
        </div>

        {/* Medications by Category */}
        {Object.entries(groupMedicationsByCategory(selectedMedicationsData)).map(([category, meds]) => (
          <div key={category} className="mb-6">
            <h3 className="text-center font-bold underline mb-4">
              {category === 'Antissépticos Bucais' ? 'USO EXTERNO' : 'Uso Interno (oral)'}
            </h3>
            {meds.map((medication, index) => (
              <div key={medication.id} className="mb-3">
                <p className="mb-1">
                  <strong>{index + 1})</strong> <strong>{medication.name}</strong> 
                  <span className="float-right">{medication.quantity}</span>
                </p>
                <p className="ml-6 text-sm">{medication.instructions}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Date and Location */}
        <div className="mt-8 text-right">
          <p>Rio, ___ de ________ de 22.</p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center border-t pt-4">
          <p className="font-bold">Walter Arthur Silva Valente – CRO 39.461</p>
          <p>Cirurgia e Traumatologia Bucomaxilofacial</p>
          <p>Doutor em Odontologia</p>
          <p>Hipnose Clínica</p>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button 
          onClick={onEdit}
          variant="outline"
          className="flex-1"
        >
          Editar
        </Button>
        <Button 
          onClick={() => window.print()}
          className="flex-1 bg-[#2c7d7b] hover:bg-[#1e5655]"
        >
          <Download className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
      </div>
    </>
  );
};

export default PrescriptionDisplay;
