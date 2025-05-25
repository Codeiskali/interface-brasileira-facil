
import React, { useState } from 'react';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface MedicationOption {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  quantity: string;
}

const PrescriptionPage = () => {
  const { toast } = useToast();
  const [patientName, setPatientName] = useState('');
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [showPrescription, setShowPrescription] = useState(false);

  const medications: MedicationOption[] = [
    {
      id: 'amoxicillin',
      name: 'Amoxicilina 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) cápsula de 8 em 8 horas por 5 dias.',
      quantity: '01 CX'
    },
    {
      id: 'nimesulide',
      name: 'Nimesulida 100mg',
      dosage: '100mg',
      instructions: 'Tomar 01 (um) comprimido de 12 em 12 horas por 3 dias.',
      quantity: '01 CX'
    },
    {
      id: 'dipyrone',
      name: 'Dipirona Monohidratada 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 6 em 6 horas por 3 dias.',
      quantity: '01 CX'
    },
    {
      id: 'chlorhexidine',
      name: 'Digluconato de Clorexidina 0,12%',
      dosage: '0,12%',
      instructions: 'Fazer bochecho leve, durante 01 (um) minuto, duas vezes ao dia, por 5 dias.',
      quantity: '01 FR'
    }
  ];

  const handleMedicationToggle = (medicationId: string) => {
    setSelectedMedications(prev => 
      prev.includes(medicationId) 
        ? prev.filter(id => id !== medicationId)
        : [...prev, medicationId]
    );
  };

  const generatePrescription = () => {
    if (!patientName.trim()) {
      toast({
        title: "Nome do paciente obrigatório",
        description: "Por favor, insira o nome do paciente.",
        variant: "destructive"
      });
      return;
    }

    if (selectedMedications.length === 0) {
      toast({
        title: "Selecione pelo menos um medicamento",
        description: "É necessário selecionar ao menos um medicamento para gerar a receita.",
        variant: "destructive"
      });
      return;
    }

    setShowPrescription(true);
  };

  const getSelectedMedicationsData = () => {
    return medications.filter(med => selectedMedications.includes(med.id));
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c7d7b] to-[#e6f7f5] flex flex-col">
      <header className="bg-[#2c7d7b] text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">GERADOR DE RECEITAS</h1>
      </header>

      <div className="w-full max-w-4xl mx-auto px-5 py-4 flex-1">
        {!showPrescription ? (
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Gerar Receita Médica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="patientName">Nome do Paciente</Label>
                <Input 
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Digite o nome completo do paciente"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-medium">Selecione os Medicamentos:</Label>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Uso Interno (oral)</h4>
                  {medications.slice(0, 3).map((medication) => (
                    <div key={medication.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <Checkbox
                        id={medication.id}
                        checked={selectedMedications.includes(medication.id)}
                        onCheckedChange={() => handleMedicationToggle(medication.id)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={medication.id} className="font-medium cursor-pointer">
                          {medication.name}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{medication.instructions}</p>
                        <p className="text-sm text-gray-500">Quantidade: {medication.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Uso Externo</h4>
                  {medications.slice(3).map((medication) => (
                    <div key={medication.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <Checkbox
                        id={medication.id}
                        checked={selectedMedications.includes(medication.id)}
                        onCheckedChange={() => handleMedicationToggle(medication.id)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={medication.id} className="font-medium cursor-pointer">
                          {medication.name}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{medication.instructions}</p>
                        <p className="text-sm text-gray-500">Quantidade: {medication.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generatePrescription}
                className="w-full mt-6 bg-[#2c7d7b] hover:bg-[#1e5655]"
              >
                <FileText className="mr-2 h-4 w-4" />
                Gerar Receita
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Receita Gerada</CardTitle>
            </CardHeader>
            <CardContent>
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

                {/* Internal Use Medications */}
                {getSelectedMedicationsData().some(med => med.id !== 'chlorhexidine') && (
                  <div className="mb-6">
                    <h3 className="text-center font-bold underline mb-4">Uso Interno (oral)</h3>
                    {getSelectedMedicationsData()
                      .filter(med => med.id !== 'chlorhexidine')
                      .map((medication, index) => (
                        <div key={medication.id} className="mb-3">
                          <p className="mb-1">
                            <strong>{index + 1})</strong> <strong>{medication.name}</strong> 
                            <span className="float-right">{medication.quantity}</span>
                          </p>
                          <p className="ml-6 text-sm">{medication.instructions}</p>
                        </div>
                      ))}
                  </div>
                )}

                {/* External Use Medications */}
                {selectedMedications.includes('chlorhexidine') && (
                  <div className="mb-6">
                    <h3 className="text-center font-bold underline mb-4">USO EXTERNO</h3>
                    {getSelectedMedicationsData()
                      .filter(med => med.id === 'chlorhexidine')
                      .map((medication, index) => (
                        <div key={medication.id} className="mb-3">
                          <p className="mb-1">
                            <strong>{index + 1})</strong> <strong>{medication.name}</strong>
                            <span className="float-right">{medication.quantity}</span>
                          </p>
                          <p className="ml-6 text-sm">{medication.instructions}</p>
                        </div>
                      ))}
                  </div>
                )}

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
                  onClick={() => setShowPrescription(false)}
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
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PrescriptionPage;
