
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface PatientRecord {
  id: string;
  fullName: string;
  age: string;
  sex: string;
  asaClassification: string;
  lastUpdated: string;
}

const PatientHistoryPage = () => {
  const { toast } = useToast();
  const [patients, setPatients] = useState<PatientRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load patient data from localStorage
  useEffect(() => {
    const storedPatients = localStorage.getItem('patientRecords');
    if (storedPatients) {
      setPatients(JSON.parse(storedPatients));
    }
  }, []);

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c7d7b] to-[#e6f7f5] flex flex-col">
      <header className="bg-[#2c7d7b] text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">HISTÓRICO DE PACIENTES</h1>
      </header>

      <div className="w-full max-w-4xl mx-auto px-5 py-4 flex-1">
        <Card className="bg-white shadow-md mb-4">
          <CardHeader>
            <CardTitle className="text-xl">Pesquisar Pacientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar por nome do paciente..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <Card key={patient.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium">{patient.fullName}</h3>
                      <p className="text-sm text-gray-500">
                        {patient.age} anos | {patient.sex} | {patient.asaClassification}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Última atualização: {patient.lastUpdated}
                      </p>
                    </div>
                    <Link to={`/editar-paciente/${patient.id}`}>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" /> Editar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center p-8">
              <p className="text-gray-500">
                {searchTerm ? 'Nenhum paciente encontrado com esse nome.' : 'Nenhum paciente cadastrado.'}
              </p>
              <Link to="/cadastro-paciente">
                <Button className="mt-4 bg-[#2c7d7b] hover:bg-[#1e5655]">
                  Cadastrar Novo Paciente
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientHistoryPage;
