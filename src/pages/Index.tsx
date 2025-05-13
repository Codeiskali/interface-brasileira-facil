
import React from 'react';
import { Stethoscope, Syringe, ShoppingBag, Search, User } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-odonto-bg flex flex-col">
      <div className="w-full max-w-md mx-auto px-5 py-8 flex-1 flex flex-col">
        {/* Cabeçalho */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold leading-tight text-odonto-dark text-center">
            ANESTETICALC<br />ODONTO
          </h1>
        </header>

        {/* Cards de funcionalidade */}
        <div className="flex-1">
          <Link to="/cadastro-paciente">
            <FeatureCard 
              icon={<User size={48} strokeWidth={1.5} />}
              title="Cadastro de Paciente"
              description="Gerenciar informações e histórico do paciente"
            />
          </Link>
          
          <Link to="/anatomia">
            <FeatureCard 
              icon={<Stethoscope size={48} strokeWidth={1.5} />}
              title="Anatomia Dental"
              description="Acesse informações importantes sobre a anatomia dos dentes"
            />
          </Link>
          
          <Link to="/anestesia">
            <FeatureCard 
              icon={<Syringe size={48} strokeWidth={1.5} />}
              title="Manual de Anestesia"
              description="Navegue pelos protocolos e diretrizes de dosagem"
            />
          </Link>
          
          <Link to="/calculadora">
            <FeatureCard 
              icon={<ShoppingBag size={48} strokeWidth={1.5} />}
              title="Calculadora de Dose"
              description="Calcule o número máximo de cartuchos de anestésico"
            />
          </Link>
          
          <Link to="/resumo">
            <FeatureCard 
              icon={<Stethoscope size={48} strokeWidth={1.5} />}
              title="Resumo"
              description="Resuma o procedimento e obtenha sugestões pós-operatórias"
            />
          </Link>
        </div>

        {/* Botão de Pesquisa */}
        <div className="mt-4 mb-8">
          <button className="w-full bg-odonto-medium hover:bg-odonto-dark text-white py-4 px-6 rounded-xl flex items-center justify-center transition-colors">
            <Search size={24} className="mr-2" />
            <span className="text-xl">Pesquisar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
