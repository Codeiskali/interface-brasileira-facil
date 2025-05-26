import React, { useState } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import MedicationSelector from '@/components/prescription/MedicationSelector';
import PrescriptionDisplay from '@/components/prescription/PrescriptionDisplay';
import PrescriptionForm from '@/components/prescription/PrescriptionForm';

interface MedicationOption {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  quantity: string;
  category: string;
}

const PrescriptionPage = () => {
  const { toast } = useToast();
  const [patientName, setPatientName] = useState('');
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [showPrescription, setShowPrescription] = useState(false);

  const medications: MedicationOption[] = [
    // CONTROLE DA DOR - Analgésicos e Antitérmicos
    {
      id: 'paracetamol',
      name: 'Paracetamol 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 6 em 6 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'dipirona',
      name: 'Dipirona Monohidratada 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 6 em 6 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'nimesulida',
      name: 'Nimesulida 100mg',
      dosage: '100mg',
      instructions: 'Tomar 01 (um) comprimido de 12 em 12 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'aas',
      name: 'Ácido Acetilsalicílico 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'mefenamico',
      name: 'Ácido Mefenâmico 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'ibuprofeno',
      name: 'Ibuprofeno 600mg',
      dosage: '600mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'diclofenaco',
      name: 'Diclofenaco Potássico 50mg',
      dosage: '50mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },
    {
      id: 'naproxeno',
      name: 'Naproxeno 550mg',
      dosage: '550mg',
      instructions: 'Tomar 01 (um) comprimido de 12 em 12 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos e Antitérmicos'
    },

    // ANALGÉSICOS OPIÓIDES
    {
      id: 'codeina',
      name: 'Paracetamol 500mg + Fosfato de Codeína 30mg',
      dosage: '500mg + 30mg',
      instructions: 'Tomar 01 (um) comprimido de 6 em 6 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos Opióides'
    },
    {
      id: 'tramadol',
      name: 'Cloridrato de Tramadol 50mg',
      dosage: '50mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 3 dias.',
      quantity: '01 CX',
      category: 'Analgésicos Opióides'
    },

    // ANTIBIÓTICOS
    {
      id: 'amoxicillin',
      name: 'Amoxicilina 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) cápsula de 8 em 8 horas por 7 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },
    {
      id: 'clavulin',
      name: 'Amoxicilina 500mg + Ácido Clavulânico 125mg',
      dosage: '500mg + 125mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 7 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },
    {
      id: 'cefalexina',
      name: 'Cefalexina 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) cápsula de 6 em 6 horas por 7 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },
    {
      id: 'clindamicina',
      name: 'Clindamicina 300mg',
      dosage: '300mg',
      instructions: 'Tomar 01 (um) cápsula de 6 em 6 horas por 7 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },
    {
      id: 'azitromicina',
      name: 'Azitromicina 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido ao dia por 3 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },
    {
      id: 'metronidazol',
      name: 'Metronidazol 400mg',
      dosage: '400mg',
      instructions: 'Tomar 01 (um) comprimido de 8 em 8 horas por 7 dias.',
      quantity: '01 CX',
      category: 'Antibióticos'
    },

    // ANTIVIRAIS
    {
      id: 'aciclovir',
      name: 'Aciclovir 200mg',
      dosage: '200mg',
      instructions: 'Tomar 01 (um) comprimido de 4 em 4 horas por 5 dias.',
      quantity: '01 CX',
      category: 'Antivirais'
    },
    {
      id: 'valaciclovir',
      name: 'Valaciclovir 500mg',
      dosage: '500mg',
      instructions: 'Tomar 01 (um) comprimido de 12 em 12 horas por 5 dias.',
      quantity: '01 CX',
      category: 'Antivirais'
    },

    // ANTIFÚNGICOS
    {
      id: 'nistatina',
      name: 'Nistatina 100.000UI/mL',
      dosage: '100.000UI/mL',
      instructions: 'Aplicar 1mL na cavidade oral, 4 vezes ao dia por 7 dias.',
      quantity: '01 FR',
      category: 'Antifúngicos'
    },
    {
      id: 'fluconazol',
      name: 'Fluconazol 150mg',
      dosage: '150mg',
      instructions: 'Tomar 01 (um) comprimido, dose única.',
      quantity: '01 CP',
      category: 'Antifúngicos'
    },

    // ANTI-INFLAMATÓRIOS ESTEROIDAIS
    {
      id: 'prednisona',
      name: 'Prednisona 20mg',
      dosage: '20mg',
      instructions: 'Tomar 01 (um) comprimido ao dia por 5 dias.',
      quantity: '01 CX',
      category: 'Anti-inflamatórios Esteroidais'
    },
    {
      id: 'dexametasona',
      name: 'Dexametasona 0,1mg/mL (elixir)',
      dosage: '0,1mg/mL',
      instructions: 'Fazer bochecho com 10mL, 3 vezes ao dia por 3 dias.',
      quantity: '01 FR',
      category: 'Anti-inflamatórios Esteroidais'
    },

    // ANTISSÉPTICOS BUCAIS
    {
      id: 'chlorhexidine',
      name: 'Digluconato de Clorexidina 0,12%',
      dosage: '0,12%',
      instructions: 'Fazer bochecho leve, durante 01 (um) minuto, duas vezes ao dia, por 5 dias.',
      quantity: '01 FR',
      category: 'Antissépticos Bucais'
    },
    {
      id: 'pvpi',
      name: 'PVPI Iodopovidona 10mg/mL',
      dosage: '10mg/mL',
      instructions: 'Aplicar com cotonete na região afetada, 2 vezes ao dia por 5 dias.',
      quantity: '01 FR',
      category: 'Antissépticos Bucais'
    },

    // BENZODIAZEPÍNICOS
    {
      id: 'diazepam',
      name: 'Diazepam 10mg',
      dosage: '10mg',
      instructions: 'Tomar 01 (um) comprimido 1 hora antes do procedimento.',
      quantity: '02 CP',
      category: 'Benzodiazepínicos'
    },
    {
      id: 'alprazolam',
      name: 'Alprazolam 0,5mg',
      dosage: '0,5mg',
      instructions: 'Tomar 01 (um) comprimido 1 hora antes do procedimento.',
      quantity: '02 CP',
      category: 'Benzodiazepínicos'
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
              <PrescriptionForm
                patientName={patientName}
                onPatientNameChange={setPatientName}
                onGenerate={generatePrescription}
              />

              <MedicationSelector
                medications={medications}
                selectedMedications={selectedMedications}
                onMedicationToggle={handleMedicationToggle}
              />
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Receita Gerada</CardTitle>
            </CardHeader>
            <CardContent>
              <PrescriptionDisplay
                patientName={patientName}
                selectedMedicationsData={getSelectedMedicationsData()}
                onEdit={() => setShowPrescription(false)}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PrescriptionPage;
