
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Book, UserPlus, FileText, Users, FilePlus } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "calculator" | "book" | "user-plus" | "file-text" | "users" | "file-plus";
  to: string;
  color: "teal" | "purple" | "orange" | "green" | "blue";
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, to, color }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "calculator": return <Calculator className="h-6 w-6 mr-2" />;
      case "book": return <Book className="h-6 w-6 mr-2" />;
      case "user-plus": return <UserPlus className="h-6 w-6 mr-2" />;
      case "file-text": return <FileText className="h-6 w-6 mr-2" />;
      case "users": return <Users className="h-6 w-6 mr-2" />;
      case "file-plus": return <FilePlus className="h-6 w-6 mr-2" />;
      default: return null;
    }
  };

  const getColorClass = (colorName: string) => {
    switch (colorName) {
      case "teal": return "bg-teal-50 text-teal-900 hover:bg-teal-100";
      case "purple": return "bg-purple-50 text-purple-900 hover:bg-purple-100";
      case "orange": return "bg-orange-50 text-orange-900 hover:bg-orange-100";
      case "green": return "bg-green-50 text-green-900 hover:bg-green-100";
      case "blue": return "bg-blue-50 text-blue-900 hover:bg-blue-100";
      default: return "bg-gray-50 text-gray-900 hover:bg-gray-100";
    }
  };

  return (
    <Link to={to} className={`block p-6 rounded-lg shadow-md transition duration-300 ease-in-out ${getColorClass(color)}`}>
      <div className="flex items-center mb-4">
        {getIcon(icon)}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
};

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2c7d7b] text-white p-6">
        <h1 className="text-3xl font-bold text-center">ANESTETICALC ODONTO</h1>
        <p className="text-center mt-2">A ferramenta definitiva para cálculos e protocolos em anestesiologia odontológica.</p>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Calculadora de Anestésicos" 
            description="Calcule doses de anestésicos com precisão, considerando o peso e as condições do paciente."
            icon="calculator" 
            to="/calculadora"
            color="teal" 
          />
          <FeatureCard 
            title="Manuais e Protocolos" 
            description="Acesse guias rápidos e protocolos atualizados para diferentes procedimentos e pacientes."
            icon="book" 
            to="/manuais"
            color="purple" 
          />
          <FeatureCard 
            title="Cadastro de Paciente" 
            description="Registre novos pacientes e mantenha um histórico detalhado de suas informações."
            icon="user-plus" 
            to="/cadastro-paciente"
            color="orange" 
          />
          
          <FeatureCard 
            title="Histórico de Pacientes" 
            description="Acesse o histórico completo de pacientes cadastrados e edite suas informações."
            icon="file-text" 
            to="/historico-pacientes"
            color="teal" 
          />
          
          <FeatureCard 
            title="Pacientes Especiais" 
            description="Gerencie informações e protocolos para pacientes com condições especiais."
            icon="users"
            to="/pacientes-especiais"
            color="green"
          />

          <FeatureCard 
            title="Gerador de Receitas" 
            description="Gere receitas médicas personalizadas com medicamentos pré-definidos e formatação profissional."
            icon="file-plus"
            to="/receitas"
            color="blue"
          />
        </div>
      </main>
      
      <footer className="bg-gray-100 text-gray-600 text-center p-4">
        <p>&copy; {currentYear} ANESTETICALC ODONTO. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
