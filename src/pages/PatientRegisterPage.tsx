
import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const PatientRegisterPage = () => {
  const { toast } = useToast();
  const [patient, setPatient] = useState({
    fullName: '',
    age: '',
    weight: '',
    sex: 'feminino',
    pregnant: 'não',
    breastfeeding: 'não',
    asaClassification: 'ASA II',
    allergies: {
      dipyrone: false,
      paracetamol: false,
      ibuprofen: false,
      antibiotics: ''
    },
    systemicConditions: '',
    procedure: 'Extração dentária'
  });

  const handleChange = (field, value) => {
    setPatient({
      ...patient,
      [field]: value
    });
  };

  const handleAllergiesChange = (field, value) => {
    setPatient({
      ...patient,
      allergies: {
        ...patient.allergies,
        [field]: value
      }
    });
  };

  const handleSavePatient = () => {
    // Here we would typically save the patient data
    console.log("Patient data:", patient);
    toast({
      title: "Paciente cadastrado",
      description: "Os dados do paciente foram salvos com sucesso.",
    });
  };

  const handleSuggestProcedure = () => {
    // Here we would typically generate procedure suggestions
    toast({
      title: "Sugestão de Procedimento",
      description: "Baseado no perfil ASA II e histórico do paciente, recomenda-se usar anestesia com controle da quantidade de vasoconstritor.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c7d7b] to-[#e6f7f5] flex flex-col">
      <header className="bg-[#2c7d7b] text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">ANESTETICALC ODONTO</h1>
      </header>

      <div className="w-full max-w-4xl mx-auto px-5 py-4 flex-1">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Cadastro de Paciente</CardTitle>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Gestante</Label>
                <Select 
                  value={patient.pregnant} 
                  onValueChange={(value) => handleChange('pregnant', value)}
                  disabled={patient.sex !== 'feminino'}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Gestante?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="não">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Lactante</Label>
                <Select 
                  value={patient.breastfeeding} 
                  onValueChange={(value) => handleChange('breastfeeding', value)}
                  disabled={patient.sex !== 'feminino'}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Lactante?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="não">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Classificação ASA</Label>
              <Select 
                value={patient.asaClassification} 
                onValueChange={(value) => handleChange('asaClassification', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a classificação ASA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASA I">ASA I</SelectItem>
                  <SelectItem value="ASA II">ASA II</SelectItem>
                  <SelectItem value="ASA III">ASA III</SelectItem>
                  <SelectItem value="ASA IV">ASA IV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ASA II Description Box */}
            {patient.asaClassification === 'ASA II' && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 text-sm">
                <p className="font-bold mb-1">Paciente com condição sistêmica levo como hipertensão controlada, diabetes tipo II leve, gestação saudável ou tabagismo leve.</p>
                <p>A anestesia pode ser reglizada normalmente, porem recomenda-se:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Reduzir o vasoconstritor (máx. 2 tubetes com epinéfrina 1:100.000).</li>
                  <li>Evitar procedimentos longos e estressantes.</li>
                  <li>Monitorar sinais vitais continuamente (se necesssário).</li>
                </ul>
              </div>
            )}

            {/* História de Alergias */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Historico de Alengias</h3>
              
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
                
                <div className="flex items-center space-x-2">
                  <Label>Alergia a paracetámol?</Label>
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
                <Label htmlFor="antibiotic-allergies">Alergia a antibidticos?</Label>
                <Input 
                  id="antibiotic-allergies" 
                  value={patient.allergies.antibiotics} 
                  onChange={(e) => handleAllergiesChange('antibiotics', e.target.value)} 
                  placeholder="Especifique os antibióticos"
                />
              </div>
            </div>

            {/* Tipo de anestésico */}
            <div className="space-y-2">
              <Label>Tipo de Anestésico Escolhido</Label>
              <Select 
                defaultValue="lidocaina-epi"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o anestésico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lidocaina-epi">Lidocaina 2% com epinefrina</SelectItem>
                  <SelectItem value="prilocaina-felipresin">Prilocaina com Felipresin</SelectItem>
                  <SelectItem value="mepivacaina">Mepivacaína 3%</SelectItem>
                  <SelectItem value="articaina">Articaína 4%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Procedimento */}
            <div className="space-y-2">
              <Label>Procedimento a ser realizado</Label>
              <Select 
                value={patient.procedure} 
                onValueChange={(value) => handleChange('procedure', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o procedimento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Extração dentária">Extração dentária</SelectItem>
                  <SelectItem value="Raspagem periodontal">Raspagem periodontal</SelectItem>
                  <SelectItem value="Restauração">Restauração</SelectItem>
                  <SelectItem value="Tratamento de canal">Tratamento de canal</SelectItem>
                  <SelectItem value="Cirurgia odontológica">Cirurgia odontológica</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleSuggestProcedure} 
              className="w-full bg-[#2c7d7b] hover:bg-[#1e5655]"
            >
              Sugerir Procedimento
            </Button>
          </CardContent>

          <CardFooter>
            <div className="mt-6 w-full">
              <h3 className="font-medium text-lg mb-4">Checklist Pré-Operatório</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-pressure" />
                  <Label htmlFor="check-pressure">Verificar pressão árterial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-allergies" />
                  <Label htmlFor="check-allergies">Conferir ficha de alergias</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-fasting" />
                  <Label htmlFor="check-fasting">Confirmár jejum ou alimentação adequada</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-anesthetic" />
                  <Label htmlFor="check-anesthetic">Revisar tipo e dose de anestesico</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-authorization" />
                  <Label htmlFor="check-authorization">Confirmar autorização verbal ou escrita do paciente</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-material" />
                  <Label htmlFor="check-material">Conferir material e EPIs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-pregnancy" />
                  <Label htmlFor="check-pregnancy">Avaliar risca gestacional (se aglicável)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-accompaniment" />
                  <Label htmlFor="check-accompaniment">Garantir que o paciente esta acompanhado (se necessário)</Label>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Prescrição Pós-Operatória</h3>
                <div className="space-y-2">
                  <ol className="list-decimal pl-5 space-y-4">
                    <li>Dipirona 500 mg – Tomar 1 comprimido a cada 6 horas se dor (máx, 4g/dia).</li>
                    <li>Nimeoulida 100 mg - Tomar 1 comprimido a cada 12 huras por 5 dias.</li>
                    <li>Clorexlidina 0.12% - Bochechar 15 ml por 30 segundos, 2x ao dia bor 3 dias</li>
                  </ol>
                </div>
              </div>

              <Button 
                onClick={handleSavePatient}
                className="w-full mt-6 bg-[#2c7d7b] hover:bg-[#1e5655]"
              >
                <Save className="mr-2 h-4 w-4" /> Salvar Paciente
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PatientRegisterPage;
