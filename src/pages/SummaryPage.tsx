
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import RiskAlert from '@/components/RiskAlert';

const SummaryPage = () => {
  const [notes, setNotes] = useState('');
  const [postOpCare, setPostOpCare] = useState({
    painMeds: false,
    coldCompress: false,
    softDiet: false,
    noStrenuous: false,
    noBrushing: false,
  });
  
  const [showSummary, setShowSummary] = useState(false);

  // Simular informações do paciente
  // Em uma aplicação real, estas viriam de um estado global ou API
  const [patientInfo] = useState({
    hasRisk: Math.random() > 0.7, // Simulando chance de risco para demonstração
    riskReason: Math.random() > 0.5 ? 'allergies' : 'asaLevel' as 'allergies' | 'asaLevel',
    asaLevel: 'ASA III',
    allergies: {
      dipyrone: true,
      paracetamol: true,
      ibuprofen: false,
      antibiotics: 'Amoxicilina, Azitromicina'
    }
  });

  const generateSummary = () => {
    // Se não houver risco, mostrar o resumo normalmente
    if (!patientInfo.hasRisk) {
      setShowSummary(true);
    } else {
      // Se houver risco, mostrar uma mensagem alternativa
      toast({
        title: "Risco Identificado",
        description: "Este paciente apresenta contraindicações importantes. Verifique o alerta na tela.",
        variant: "destructive"
      });
    }
  };

  const handleSaveAndRefer = () => {
    toast({
      title: "Paciente encaminhado",
      description: "O caso foi salvo e marcado para encaminhamento especializado.",
    });
  };

  return (
    <div className="min-h-screen bg-odonto-bg flex flex-col">
      <div className="w-full max-w-md mx-auto px-5 py-8 flex-1 flex flex-col">
        {/* Cabeçalho */}
        <header className="mb-6">
          <div className="flex items-center mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="p-1">
                <ArrowLeft className="h-6 w-6 text-odonto-dark" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Resumo do Procedimento</h1>
          </div>
        </header>

        {/* Exibir alerta de risco se necessário */}
        {patientInfo.hasRisk && (
          <RiskAlert 
            reason={patientInfo.riskReason} 
            asaLevel={patientInfo.asaLevel} 
            onSaveAndRefer={handleSaveAndRefer} 
          />
        )}

        {/* Conteúdo da página */}
        <div className="flex-1">
          {!showSummary ? (
            <>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Notas do Procedimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Descreva o procedimento realizado..." 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[120px]"
                  />
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Cuidados Pós-Operatórios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="painMeds" 
                      checked={postOpCare.painMeds}
                      onCheckedChange={(checked) => 
                        setPostOpCare({...postOpCare, painMeds: checked === true})
                      }
                    />
                    <Label htmlFor="painMeds">Medicamentos para dor conforme prescrito</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="coldCompress" 
                      checked={postOpCare.coldCompress}
                      onCheckedChange={(checked) => 
                        setPostOpCare({...postOpCare, coldCompress: checked === true})
                      }
                    />
                    <Label htmlFor="coldCompress">Aplicar compressa fria nas primeiras 24h</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="softDiet" 
                      checked={postOpCare.softDiet}
                      onCheckedChange={(checked) => 
                        setPostOpCare({...postOpCare, softDiet: checked === true})
                      }
                    />
                    <Label htmlFor="softDiet">Dieta macia por 24-48 horas</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="noStrenuous" 
                      checked={postOpCare.noStrenuous}
                      onCheckedChange={(checked) => 
                        setPostOpCare({...postOpCare, noStrenuous: checked === true})
                      }
                    />
                    <Label htmlFor="noStrenuous">Evitar atividades físicas intensas por 48h</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="noBrushing" 
                      checked={postOpCare.noBrushing}
                      onCheckedChange={(checked) => 
                        setPostOpCare({...postOpCare, noBrushing: checked === true})
                      }
                    />
                    <Label htmlFor="noBrushing">Não escovar a área operada por 24h</Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-odonto-medium hover:bg-odonto-dark" 
                    onClick={generateSummary}
                    disabled={patientInfo.hasRisk}
                  >
                    Gerar Resumo
                  </Button>
                </CardFooter>
              </Card>
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Resumo para o Paciente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">Procedimento Realizado:</h3>
                  <p className="mt-1">{notes || "Nenhuma nota registrada."}</p>
                </div>
                
                <div>
                  <h3 className="font-bold">Instruções Pós-Operatórias:</h3>
                  <ul className="list-disc pl-5 mt-1">
                    {postOpCare.painMeds && <li>Tomar medicamentos para dor conforme prescrito.</li>}
                    {postOpCare.coldCompress && <li>Aplicar compressa fria nas primeiras 24 horas.</li>}
                    {postOpCare.softDiet && <li>Manter dieta macia por 24-48 horas.</li>}
                    {postOpCare.noStrenuous && <li>Evitar atividades físicas intensas por 48 horas.</li>}
                    {postOpCare.noBrushing && <li>Não escovar a área operada por 24 horas.</li>}
                    {!Object.values(postOpCare).some(Boolean) && <li>Nenhum cuidado específico registrado.</li>}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold">Contato:</h3>
                  <p className="mt-1">Em caso de dúvidas ou complicações, entre em contato com o consultório.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline"
                  className="w-full border-odonto-medium text-odonto-dark" 
                  onClick={() => setShowSummary(false)}
                >
                  Editar
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
