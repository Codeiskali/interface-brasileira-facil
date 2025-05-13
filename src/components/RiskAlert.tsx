
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface RiskAlertProps {
  reason: 'allergies' | 'asaLevel' | 'both'; 
  asaLevel?: string;
  onSaveAndRefer: () => void;
}

const RiskAlert = ({ reason, asaLevel, onSaveAndRefer }: RiskAlertProps) => {
  const getMessage = () => {
    switch (reason) {
      case 'allergies':
        return "Este paciente apresenta múltiplas contraindicações medicamentosas. O protocolo padrão de prescrição não pode ser aplicado com segurança.";
      case 'asaLevel':
        return `Este paciente apresenta classificação ${asaLevel}, indicando risco elevado. O procedimento está contraindicado em ambiente ambulatorial comum.`;
      case 'both':
        return `Este paciente apresenta múltiplas contraindicações medicamentosas e classificação ${asaLevel}, indicando risco elevado. O procedimento está contraindicado em ambiente ambulatorial comum.`;
      default:
        return "Este paciente apresenta contraindicações que requerem atenção especial.";
    }
  };

  return (
    <Alert className="bg-odonto-accent/15 border-odonto-accent mb-6">
      <AlertTriangle className="h-5 w-5 text-odonto-accent" />
      <AlertTitle className="text-odonto-accent font-bold flex items-center gap-2">
        Atenção: Risco Clínico Identificado
      </AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-3">{getMessage()}</p>
        <p className="mb-4">Recomendação: Encaminhamento para ambiente hospitalar ou avaliação médica especializada antes do procedimento.</p>
        <Button 
          onClick={onSaveAndRefer} 
          variant="outline" 
          className="border-odonto-accent text-odonto-accent hover:bg-odonto-accent/20 border-2 w-full md:w-auto"
        >
          📋 Salvar e Encaminhar
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default RiskAlert;
