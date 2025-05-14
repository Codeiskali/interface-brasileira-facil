
import React from 'react';
import { ArrowLeft, Heart, Droplet, Brain, Shield, Baby, User, Syringe, Dna } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PatientTypeCard from '@/components/PatientTypeCard';

const SpecialPatientsPage = () => {
  const navigate = useNavigate();

  const patientTypes = [
    {
      id: 'cardiopata',
      icon: <Heart size={48} strokeWidth={1.5} className="text-red-500" />,
      title: 'Cardiopata',
      description: 'Cuidados especiais com pacientes cardíacos'
    },
    {
      id: 'diabetico',
      icon: <Droplet size={48} strokeWidth={1.5} className="text-blue-500" />,
      title: 'Diabético',
      description: 'Condutas para pacientes com diabetes'
    },
    {
      id: 'hipertenso',
      icon: <Brain size={48} strokeWidth={1.5} className="text-purple-500" />,
      title: 'Hipertenso',
      description: 'Manejo de pacientes com hipertensão'
    },
    {
      id: 'imunocomprometido',
      icon: <Shield size={48} strokeWidth={1.5} className="text-yellow-500" />,
      title: 'Paciente Imunocomprometido',
      description: 'Cuidados com pacientes imunossuprimidos'
    },
    {
      id: 'pediatrico',
      icon: <Baby size={48} strokeWidth={1.5} className="text-green-500" />,
      title: 'Pediátrico',
      description: 'Atendimento de pacientes infantis'
    },
    {
      id: 'idoso',
      icon: <User size={48} strokeWidth={1.5} className="text-gray-500" />,
      title: 'Idoso',
      description: 'Cuidados com pacientes idosos'
    },
    {
      id: 'anticoagulantes',
      icon: <Syringe size={48} strokeWidth={1.5} className="text-pink-500" />,
      title: 'Paciente em uso de Anticoagulantes',
      description: 'Manejo de pacientes anticoagulados'
    },
    {
      id: 'alergias',
      icon: <Dna size={48} strokeWidth={1.5} className="text-amber-500" />,
      title: 'Alergias conhecidas a Anestésicos',
      description: 'Alternativas para pacientes alérgicos'
    }
  ];

  const handlePatientTypeClick = (patientTypeId: string) => {
    navigate(`/pacientes-especiais/${patientTypeId}`);
  };

  return (
    <div className="min-h-screen bg-odonto-bg flex flex-col">
      <div className="w-full max-w-4xl mx-auto px-5 py-8 flex-1">
        {/* Cabeçalho */}
        <header className="mb-6">
          <div className="flex items-center mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="p-1">
                <ArrowLeft className="h-6 w-6 text-odonto-dark" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Pacientes Especiais</h1>
          </div>
          <h2 className="text-xl font-medium text-odonto-medium">Condutas especiais por tipo de paciente</h2>
        </header>

        {/* Conteúdo da página */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patientTypes.map((type) => (
            <PatientTypeCard 
              key={type.id}
              icon={type.icon}
              title={type.title}
              description={type.description}
              onClick={() => handlePatientTypeClick(type.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialPatientsPage;
