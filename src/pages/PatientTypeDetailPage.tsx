
import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const PatientTypeDetailPage = () => {
  const { typeId } = useParams<{ typeId: string }>();
  const navigate = useNavigate();

  const patientTypeData = useMemo(() => {
    // Define content for each patient type
    switch(typeId) {
      case 'cardiopata':
        return {
          title: '🫀 Paciente Cardiopata',
          icon: 'heart',
          color: 'text-red-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Evitar vasoconstritor em grandes quantidades.',
                'Preferência por anestésico sem adrenalina ou concentração reduzida (ex: 1:200.000).',
                'Avaliar pressão arterial antes do procedimento.',
                'Consultar cardiologista para casos mais graves.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Evitar AINEs em pacientes com uso de anticoagulantes.',
                'Preferência por paracetamol ou dipirona.',
                'Antibióticos podem ser prescritos normalmente, mas considerar interações.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Uso de anestésico com noradrenalina.',
                'Procedimentos longos sem intervalo em pacientes com ICC grave.',
                'Sedação sem monitoramento adequado.'
              ]
            }
          ]
        };
      case 'diabetico':
        return {
          title: '🩸 Paciente Diabético',
          icon: 'droplet',
          color: 'text-blue-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Preferir horários matutinos para o atendimento.',
                'Verificar glicemia antes do procedimento (ideal: entre 70-180 mg/dL).',
                'Ter fonte de glicose disponível em caso de hipoglicemia.',
                'Evitar sessões muito longas.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Corticosteroides podem descompensar a glicemia - usar com cautela.',
                'Preferir analgésicos que não interfiram no controle glicêmico.',
                'Antibióticos podem ser prescritos normalmente.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Procedimentos invasivos em pacientes descompensados (glicemia > 250 mg/dL).',
                'Uso excessivo de vasoconstritores em diabéticos com comprometimento vascular periférico.'
              ]
            }
          ]
        };
      case 'hipertenso':
        return {
          title: '🧠 Paciente Hipertenso',
          icon: 'brain',
          color: 'text-purple-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Verificar pressão arterial antes do procedimento (ideal < 140/90 mmHg).',
                'Limitar a quantidade de anestésico com vasoconstritor (máx. 2 tubetes com epinefrina 1:100.000).',
                'Evitar aspiração durante injeção anestésica.',
                'Sessões curtas e controle do estresse.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Cautela com AINEs - podem interferir na eficácia de anti-hipertensivos.',
                'Preferir paracetamol ou dipirona para analgesia.',
                'Evitar descongestionantes nasais.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Procedimentos eletivos em pacientes com PA > 180/110 mmHg.',
                'Uso de vasoconstritores tipo felipressina em hipertensos graves não controlados.'
              ]
            }
          ]
        };
      case 'imunocomprometido':
        return {
          title: '😷 Paciente Imunocomprometido',
          icon: 'shield',
          color: 'text-yellow-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Maior rigor nos protocolos de biossegurança e esterilização.',
                'Profilaxia antibiótica pode ser necessária.',
                'Avaliação dos níveis de células de defesa antes de procedimentos invasivos.',
                'Cuidado com infecções oportunistas.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Considerar profilaxia antimicrobiana para procedimentos invasivos.',
                'Atenção às interações medicamentosas com imunossupressores.',
                'Evitar AINEs em pacientes transplantados.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Procedimentos cirúrgicos extensos durante períodos de baixa imunidade.',
                'Tratamentos eletivos em pacientes neutropênicos graves.'
              ]
            }
          ]
        };
      // Add more patient types here
      case 'pediatrico':
        return {
          title: '🐣 Paciente Pediátrico',
          icon: 'baby',
          color: 'text-green-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Calcular doses de anestésicos com base no peso corporal.',
                'Usar técnicas de manejo comportamental adequadas à idade.',
                'Sessões mais curtas e adaptadas.',
                'Comunicação adequada com os pais/responsáveis.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Medicamentos em formulações pediátricas (gotas, suspensão).',
                'Cálculo preciso das doses por kg de peso.',
                'Evitar AINEs em crianças com histórico de asma ou reações alérgicas.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Anestésicos com felipressina em crianças menores de 4 anos.',
                'Uso de articaína em crianças menores de 4 anos (controverso).',
                'Procedimentos extensos sem sedação em crianças não colaborativas.'
              ]
            }
          ]
        };
      case 'idoso':
        return {
          title: '👵 Paciente Idoso',
          icon: 'user',
          color: 'text-gray-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Atenção às comorbidades múltiplas.',
                'Redução da dose de anestésicos (metabolismo diminuído).',
                'Posicionamento adequado na cadeira para conforto.',
                'Considerar a presença de polifarmácia.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Evitar medicamentos com excreção renal em pacientes com função renal diminuída.',
                'Interações medicamentosas são mais frequentes - checar todas as medicações em uso.',
                'Preferir doses menores inicialmente.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Sessões muito prolongadas em pacientes idosos frágeis.',
                'AINES em pacientes com problemas renais ou gástricos.',
                'Vasoconstritores em altas doses em idosos com doenças cardiovasculares.'
              ]
            }
          ]
        };
      case 'anticoagulantes':
        return {
          title: '💉 Paciente em uso de Anticoagulantes',
          icon: 'syringe',
          color: 'text-pink-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Verificar INR recente (ideal < 3.0 para procedimentos invasivos).',
                'Técnicas hemostáticas locais rigorosas.',
                'Sutura e compressão local mais prolongada.',
                'Planejamento cirúrgico cuidadoso.'
              ]
            },
            {
              title: '💊 Prescrição:',
              content: [
                'Evitar AINEs e medicamentos que interfiram na coagulação.',
                'Preferir paracetamol para analgesia.',
                'Consultar médico do paciente antes de suspender anticoagulantes.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Procedimentos cirúrgicos extensos sem ajuste da terapia anticoagulante.',
                'Bloqueios anestésicos profundos (ex: bloqueio do nervo alveolar inferior) sem avaliação do risco/benefício.',
                'Uso de AINEs no pós-operatório.'
              ]
            }
          ]
        };
      case 'alergias':
        return {
          title: '🧬 Alergias conhecidas a Anestésicos',
          icon: 'dna',
          color: 'text-amber-500',
          sections: [
            {
              title: '📌 Cuidados:',
              content: [
                'Teste de sensibilidade prévio ou teste intradérmico em ambiente hospitalar.',
                'Ter disponível kit de emergência para reações alérgicas.',
                'Considerar encaminhamento para ambiente hospitalar.',
                'Considerar anestesia alternativa ou técnicas não-anestésicas quando possível.'
              ]
            },
            {
              title: '💊 Alternativas:',
              content: [
                'Alergia a ésteres (procaína): usar anestésicos do grupo amida.',
                'Alergia a amidas (lidocaína): considerar anestesia geral em ambiente hospitalar.',
                'Alergia a sulfitos (presentes nos vasoconstritores): usar anestésico sem vasoconstritor.'
              ]
            },
            {
              title: '🚫 Contraindicações:',
              content: [
                'Uso do grupo anestésico ao qual o paciente é alérgico.',
                'Procedimentos com alto risco de dor sem alternativa anestésica viável.',
                'Atendimento sem recursos para emergências alérgicas.'
              ]
            }
          ]
        };
      default:
        navigate('/pacientes-especiais');
        return {
          title: 'Tipo de paciente não encontrado',
          icon: 'alert-triangle',
          color: 'text-red-500',
          sections: []
        };
    }
  }, [typeId, navigate]);

  if (!typeId || !patientTypeData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-odonto-bg flex flex-col">
      <div className="w-full max-w-3xl mx-auto px-5 py-8 flex-1">
        {/* Cabeçalho */}
        <header className="mb-6">
          <div className="flex items-center mb-4">
            <Link to="/pacientes-especiais">
              <Button variant="ghost" size="sm" className="p-1">
                <ArrowLeft className="h-6 w-6 text-odonto-dark" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">{patientTypeData.title}</h1>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="space-y-6">
          {patientTypeData.sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-odonto-dark">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          
          <Alert className="bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">Recomendação</AlertTitle>
            <AlertDescription className="text-blue-700">
              Sempre consulte o médico do paciente em caso de dúvidas sobre a conduta clínica mais adequada.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default PatientTypeDetailPage;
