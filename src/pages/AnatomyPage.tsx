
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnatomyPage = () => {
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
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Anatomia Dental</h1>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="flex-1">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Anatomia dos Dentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A anatomia dental é composta por três partes principais:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Coroa:</strong> Parte visível do dente acima da gengiva.</li>
                <li><strong>Colo:</strong> Região intermediária entre coroa e raiz.</li>
                <li><strong>Raiz:</strong> Parte do dente que fica dentro do osso alveolar.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Estrutura Interna</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Os dentes são compostos por:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Esmalte:</strong> Camada externa da coroa, substância mais dura do corpo.</li>
                <li><strong>Dentina:</strong> Camada sob o esmalte, composta por túbulos dentinários.</li>
                <li><strong>Polpa:</strong> Tecido mole no centro do dente, contém vasos sanguíneos e nervos.</li>
                <li><strong>Cemento:</strong> Reveste a raiz do dente.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inervação</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A inervação dos dentes é feita principalmente pelo nervo trigêmeo (V par craniano):</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Maxila:</strong> Nervo maxilar (V2) - nervos alveolares superiores.</li>
                <li><strong>Mandíbula:</strong> Nervo mandibular (V3) - nervos alveolares inferiores.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnatomyPage;
