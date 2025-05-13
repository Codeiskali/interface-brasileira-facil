
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CalculatorPage = () => {
  const [weight, setWeight] = useState<string>('');
  const [anesthetic, setAnesthetic] = useState<string>('lidocaine');
  const [result, setResult] = useState<number | null>(null);

  const calculateMaxCartucho = () => {
    if (!weight) return;
    
    const weightInKg = parseFloat(weight);
    if (isNaN(weightInKg) || weightInKg <= 0) return;
    
    let dosePerKg = 0;
    let concentration = 0;
    let cartridgeAmount = 0;
    
    switch (anesthetic) {
      case 'lidocaine':
        dosePerKg = 4.4; // mg/kg
        concentration = 36; // mg por cartucho (1.8ml de lidocaína 2%)
        break;
      case 'articaine':
        dosePerKg = 7.0; // mg/kg
        concentration = 72; // mg por cartucho (1.8ml de articaína 4%)
        break;
      case 'mepivacaine':
        dosePerKg = 4.4; // mg/kg
        concentration = 54; // mg por cartucho (1.8ml de mepivacaína 3%)
        break;
    }
    
    const maxDose = weightInKg * dosePerKg; // dose máxima em mg
    cartridgeAmount = maxDose / concentration;
    
    setResult(parseFloat(cartridgeAmount.toFixed(1)));
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
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Calculadora de Dose</h1>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="flex-1">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Calcular Dose Máxima de Anestésico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Peso do Paciente (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Ex: 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Tipo de Anestésico</Label>
                <RadioGroup value={anesthetic} onValueChange={setAnesthetic}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lidocaine" id="lidocaine" />
                    <Label htmlFor="lidocaine">Lidocaína 2%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="articaine" id="articaine" />
                    <Label htmlFor="articaine">Articaína 4%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mepivacaine" id="mepivacaine" />
                    <Label htmlFor="mepivacaine">Mepivacaína 3%</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-odonto-medium hover:bg-odonto-dark" 
                onClick={calculateMaxCartucho}
              >
                Calcular
              </Button>
            </CardFooter>
          </Card>

          {result !== null && (
            <Card>
              <CardHeader>
                <CardTitle>Resultado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Número máximo de cartuchos: <span className="font-bold text-xl">{result}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Considere sempre o estado clínico geral do paciente e ajuste conforme necessário.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
