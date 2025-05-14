import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface PatientData {
  id: string;
  fullName: string;
  age: string;
  weight: string;
  sex: string;
  pregnant: string;
  breastfeeding: string;
  asaClassification: string;
  allergies: {
    dipyrone: boolean;
    paracetamol: boolean;
    ibuprofen: boolean;
    antibiotics: string;
  };
  systemicConditions: string;
  procedure: string;
  notes: string;
  lastUpdated: string;
}

const PatientEditPage = () => {
  const { toast } = useToast();
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Load patient records
    const storedPatients = localStorage.getItem('patientRecords');
    if (storedPatients) {
      const patients = JSON.parse(storedPatients);
      const foundPatient = patients.find((p: PatientData) => p.id === patientId);
      
      if (foundPatient) {
        setPatient(foundPatient);
        setNotes(foundPatient.notes || '');
      }
    }
    setLoading(false);
  }, [patientId]);

  const handleChange = (field: keyof PatientData, value: any) => {
    if (patient) {
      setPatient({
        ...patient,
        [field]: value
      });
    }
  };

  const handleAllergiesChange = (field: string, value: any) => {
    if (patient) {
      setPatient({
        ...patient,
        allergies: {
          ...patient.allergies,
          [field]: value
        }
      });
    }
  };

  const handleSavePatient = () => {
    if (!patient) return;

    // Update patient with notes and last updated timestamp
    const updatedPatient = {
      ...patient,
      notes: notes,
      lastUpdated: new Date().toLocaleString('pt-BR')
    };

    // Get all patients, update the specific one
    const storedPatients = localStorage.getItem('patientRecords');
    let patients = storedPatients ? JSON.parse(storedPatients) : [];
    
    const patientIndex = patients.findIndex((p: PatientData) => p.id === patientId);
    if (patientIndex >= 0) {
      patients[patientIndex] = updatedPatient;
    } else {
      patients.push(updatedPatient);
    }

    // Save back to localStorage
    localStorage.setItem('patientRecords', JSON.stringify(patients));

    toast({
      title: "Paciente atualizado",
      description: "Os dados do paciente foram atualizados com sucesso.",
    });

    // Navigate back to patient history
    navigate('/historico-pacientes');
  };

  if (loading) {
    return <div className="p-8 text-center">Carregando dados do paciente...</div>;
  }

  if (!patient) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl mb-4">Paciente não encontrado</h2>
        <Link to="/historico-pacientes">
          <Button>Voltar para lista de pacientes</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c7d7b] to-[#e6f7f5] flex flex-col">
      <header className="bg-[#2c7d7b] text-white p-4 flex items-center">
        <Link to="/historico-pacientes" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">EDITAR PACIENTE</h1>
      </header>

      <div className="w-full max-w-4xl mx-auto px-5 py-4 flex-1">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Editar Dados do Paciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Dados básicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input 
                  id="fullName" 
                  value={patient.fullName} 
                  onChange={(e) => handleChange('fullName', e.target.value)} 
                  placeholder="Nome do paciente"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Idade</Label>
                <Input 
                  id="age" 
                  type="number" 
                  value={patient.age} 
                  onChange={(e) => handleChange('age', e.target.value)} 
                  placeholder="Idade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="sex">Sexo</Label>
                <Select 
                  value={patient.sex} 
                  onValueChange={(value) => handleChange('sex', value)}
                >
                  <SelectTrigger id="sex">
                    <SelectValue placeholder="Selecionar sexo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  value={patient.weight} 
                  onChange={(e) => handleChange('weight', e.target.value)} 
                  placeholder="Peso em kg"
                />
              </div>
            </div>

            {/* Sistema/Campo de comorbidades */}
            <div className="space-y-2">
              <Label htmlFor="systemicConditions">Condições Sistêmicas / Comorbidades</Label>
              <Select 
                value={patient.systemicConditions} 
                onValueChange={(value) => handleChange('systemicConditions', value)}
              >
                <SelectTrigger id="systemicConditions">
                  <SelectValue placeholder="Selecione a condição" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiopata">Cardiopata</SelectItem>
                  <SelectItem value="diabetico">Diabético</SelectItem>
                  <SelectItem value="hipertenso">Hipertenso</SelectItem>
                  <SelectItem value="imunocomprometido">Imunocomprometido</SelectItem>
                  <SelectItem value="gestante">Gestante</SelectItem>
                  <SelectItem value="pediatrico">Pediátrico</SelectItem>
                  <SelectItem value="idoso">Idoso</SelectItem>
                  <SelectItem value="anticoagulante">Em uso de anticoagulantes</SelectItem>
                  <SelectItem value="nenhuma">Nenhuma condição especial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientNotes">Anotações sobre o paciente</Label>
              <Textarea 
                id="patientNotes"
                placeholder="Adicione aqui observações importantes sobre o paciente..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px]"
              />
            </div>

            {/* História de Alergias */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Histórico de Alergias</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Label>Alergia a dipirona?</Label>
                  <div className="flex items-center space-x-4 ml-auto">
                    <RadioGroup 
                      value={patient.allergies.dipyrone ? "sim" : "não"} 
                      onValueChange={(value) => handleAllergiesChange('dipyrone', value === "sim")}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="sim" id="dipyrone-yes" />
                        <Label htmlFor="dipyrone-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="não" id="dipyrone-no" />
                        <Label htmlFor="dipyrone-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                {/* Other allergies fields remain the same */}
                <div className="flex items-center space-x-2">
                  <Label>Alergia a paracetamol?</Label>
                  <div className="flex items-center space-x-4 ml-auto">
                    <RadioGroup 
                      value={patient.allergies.paracetamol ? "sim" : "não"} 
                      onValueChange={(value) => handleAllergiesChange('paracetamol', value === "sim")}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="sim" id="paracetamol-yes" />
                        <Label htmlFor="paracetamol-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="não" id="paracetamol-no" />
                        <Label htmlFor="paracetamol-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Label>Alergia a ibuprofeno?</Label>
                  <div className="flex items-center space-x-4 ml-auto">
                    <RadioGroup 
                      value={patient.allergies.ibuprofen ? "sim" : "não"} 
                      onValueChange={(value) => handleAllergiesChange('ibuprofen', value === "sim")}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="sim" id="ibuprofen-yes" />
                        <Label htmlFor="ibuprofen-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="não" id="ibuprofen-no" />
                        <Label htmlFor="ibuprofen-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="antibiotic-allergies">Alergia a antibióticos?</Label>
                <Input 
                  id="antibiotic-allergies" 
                  value={patient.allergies.antibiotics} 
                  onChange={(e) => handleAllergiesChange('antibiotics', e.target.value)} 
                  placeholder="Especifique os antibióticos"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button 
              onClick={handleSavePatient}
              className="w-full mt-6 bg-[#2c7d7b] hover:bg-[#1e5655]"
            >
              <Save className="mr-2 h-4 w-4" /> Salvar Alterações
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PatientEditPage;
