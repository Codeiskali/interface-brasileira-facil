
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const AnesthesiaPage = () => {
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
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Manual de Anestesia</h1>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="flex-1">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Tipos de Anestésicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold">Lidocaína 2%</h3>
                  <p className="text-sm">Com epinefrina 1:100.000</p>
                  <p className="text-sm">Dosagem: 4,4mg/kg (máximo 300mg)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold">Articaína 4%</h3>
                  <p className="text-sm">Com epinefrina 1:100.000</p>
                  <p className="text-sm">Dosagem: 7mg/kg (máximo 500mg)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold">Mepivacaína 3%</h3>
                  <p className="text-sm">Sem vasoconstritor</p>
                  <p className="text-sm">Dosagem: 4,4mg/kg (máximo 300mg)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Técnicas Anestésicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold">Bloqueio do Nervo Alveolar Inferior</h3>
                  <p className="text-sm">Anestesia o nervo alveolar inferior, lingual e bucal (complementar).</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold">Infiltrativa Supraperiosteal</h3>
                  <p className="text-sm">Técnica simples para anestesia pulpar de dentes superiores.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold">Bloqueio do Nervo Palatino Maior</h3>
                  <p className="text-sm">Anestesia a mucosa palatina desde o canino até a região dos molares.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Considerações Clínicas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sempre aspirar antes de injetar o anestésico.</li>
                <li>Injetar lentamente (1ml/min) para minimizar desconforto.</li>
                <li>Considerar histórico médico do paciente antes de escolher o anestésico.</li>
                <li>Para pacientes cardíacos, considerar anestésicos sem vasoconstritor ou com menor concentração.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnesthesiaPage;
