
import React, { useState } from 'react';
import { ArrowLeft, Book, Syringe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ManualsPage = () => {
  const [activeTab, setActiveTab] = useState("anatomy");

  return (
    <div className="min-h-screen bg-odonto-bg flex flex-col">
      <div className="w-full max-w-4xl mx-auto px-5 py-8 flex-1 flex flex-col">
        {/* Cabeçalho */}
        <header className="mb-6">
          <div className="flex items-center mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="p-1">
                <ArrowLeft className="h-6 w-6 text-odonto-dark" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-odonto-dark ml-2">Manuais e Guias</h1>
          </div>
        </header>

        {/* Conteúdo da página */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="anatomy" className="flex items-center gap-2">
              <Book size={18} />
              <span className="hidden sm:inline">Anatomia Dental</span>
              <span className="sm:hidden">Anatomia</span>
            </TabsTrigger>
            <TabsTrigger value="anesthesia" className="flex items-center gap-2">
              <Syringe size={18} />
              <span className="hidden sm:inline">Manual de Anestesia</span>
              <span className="sm:hidden">Anestesia</span>
            </TabsTrigger>
            <TabsTrigger value="summaries" className="flex items-center gap-2">
              <FileText size={18} />
              <span className="hidden sm:inline">Resumos</span>
              <span className="sm:hidden">Resumos</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Tab de Anatomia Dental */}
          <TabsContent value="anatomy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Anatomia dos Dentes e Inervações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Estrutura dental</h3>
                  <p className="mt-2">Os dentes são compostos por várias camadas:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Esmalte:</strong> Tecido mais duro do corpo humano, cobre a coroa do dente.</li>
                    <li><strong>Dentina:</strong> Camada sob o esmalte, menos mineralizada e mais sensível.</li>
                    <li><strong>Polpa:</strong> Tecido conjuntivo rico em vasos e nervos.</li>
                    <li><strong>Cemento:</strong> Reveste a raiz e ajuda na fixação ao osso alveolar.</li>
                  </ul>
                </div>

                <Separator />
                
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Inervação maxilar</h3>
                  <p className="mt-2">Ramo do nervo trigêmeo (V par craniano):</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Nervo alveolar superior posterior:</strong> Molares superiores</li>
                    <li><strong>Nervo alveolar superior médio:</strong> Pré-molares superiores</li>
                    <li><strong>Nervo alveolar superior anterior:</strong> Caninos e incisivos superiores</li>
                    <li><strong>Nervo palatino maior:</strong> Mucosa palatina posterior</li>
                    <li><strong>Nervo nasopalatino:</strong> Mucosa palatina anterior</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Inervação mandibular</h3>
                  <p className="mt-2">Também derivado do nervo trigêmeo:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Nervo alveolar inferior:</strong> Dentes inferiores até linha média</li>
                    <li><strong>Nervo lingual:</strong> Dois terços anteriores da língua e mucosa lingual</li>
                    <li><strong>Nervo bucal:</strong> Mucosa jugal e gengiva vestibular</li>
                    <li><strong>Nervo mentual:</strong> Lábio inferior e mento</li>
                  </ul>
                </div>
                
                <Alert className="bg-odonto-light border-odonto-medium mt-6">
                  <AlertTitle className="text-odonto-dark">Ponto importante:</AlertTitle>
                  <AlertDescription>
                    O forame mandibular, ponto de entrada do nervo alveolar inferior, está localizado na face medial do ramo mandibular, coberto pela língula. É um ponto de referência crítico para o bloqueio do nervo alveolar inferior.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Tab de Manual de Anestesia */}
          <TabsContent value="anesthesia" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Anestésicos Locais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Lidocaína 2%</h3>
                  <p className="mt-1">Anestésico mais utilizado na odontologia:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Início de ação:</strong> 2-3 minutos</li>
                    <li><strong>Duração:</strong> Com vasoconstritor: 1-2 horas / Sem vasoconstritor: 30-45 minutos</li>
                    <li><strong>Dose máxima:</strong> 4,4 mg/kg ou 300 mg total (7 tubetes)</li>
                    <li><strong>Contraindicações:</strong> Hipersensibilidade, alergia ao sulfito (quando com epinefrina)</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Mepivacaína 3%</h3>
                  <p className="mt-1">Boa opção sem vasoconstritor:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Início de ação:</strong> 1-2 minutos</li>
                    <li><strong>Duração:</strong> 20-40 minutos (sem vasoconstritor)</li>
                    <li><strong>Dose máxima:</strong> 4,4 mg/kg ou 300 mg total (5 tubetes)</li>
                    <li><strong>Indicações:</strong> Pacientes com restrição a vasoconstritores</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Articaína 4%</h3>
                  <p className="mt-1">Alta potência e boa difusão tissular:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Início de ação:</strong> 1-2 minutos</li>
                    <li><strong>Duração:</strong> Com vasoconstritor: 60-75 minutos</li>
                    <li><strong>Dose máxima:</strong> 7 mg/kg ou 500 mg total (7 tubetes)</li>
                    <li><strong>Observações:</strong> Excelente para infiltrações na mandíbula por sua difusão</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-bold text-odonto-dark">Considerações por ASA</h3>
                  <table className="w-full border-collapse mt-2">
                    <thead>
                      <tr className="bg-odonto-medium text-white">
                        <th className="border p-2 text-left">ASA</th>
                        <th className="border p-2 text-left">Recomendações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">ASA I</td>
                        <td className="border p-2">Sem restrições na escolha do anestésico.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">ASA II</td>
                        <td className="border p-2">Limitação de vasoconstritor (máx. 2 tubetes com epinefrina 1:100.000).</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">ASA III</td>
                        <td className="border p-2">Considerar anestésico sem vasoconstritor ou com menor concentração. Monitoramento recomendado.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">ASA IV</td>
                        <td className="border p-2">Ambiente hospitalar recomendado. Sem vasoconstritor adrenérgico.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Alert className="bg-odonto-light border-odonto-accent mt-6">
                  <AlertTitle className="text-odonto-dark">Importante:</AlertTitle>
                  <AlertDescription>
                    Sempre verificar interações medicamentosas. Pacientes em uso de betabloqueadores não seletivos devem evitar epinefrina pelo risco de crise hipertensiva. Pacientes com hipertireoidismo não controlado devem evitar vasoconstritores adrenérgicos.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Tab de Resumos */}
          <TabsContent value="summaries" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Protocolos Clínicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-odonto-dark">Exodontia Simples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">Anestesia recomendada:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Maxila: Infiltrativa supraperiosteal</li>
                          <li>Mandíbula: Bloqueio alveolar inferior</li>
                        </ul>
                        <p className="font-medium mt-2">Tempo médio:</p>
                        <p>20-30 minutos</p>
                      </div>
                      <div>
                        <p className="font-medium">Cuidados pós-operatórios:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Compressa fria nas primeiras 24h</li>
                          <li>Repouso por 48h</li>
                          <li>Evitar alimentos quentes ou muito duros</li>
                          <li>Analgésicos por 3-5 dias</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-bold text-odonto-dark">Restauração</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">Anestesia recomendada:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Maxila: Infiltrativa supraperiosteal</li>
                          <li>Mandíbula: Infiltrativa ou bloqueio</li>
                        </ul>
                        <p className="font-medium mt-2">Tempo médio:</p>
                        <p>30-60 minutos</p>
                      </div>
                      <div>
                        <p className="font-medium">Cuidados pós-operatórios:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Evitar mastigar do lado operado por 24h</li>
                          <li>Não ingerir alimentos corados nas primeiras 48h</li>
                          <li>Analgésicos se necessário</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-bold text-odonto-dark">Raspagem</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">Anestesia recomendada:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Infiltrativa por sextante ou quadrante</li>
                          <li>Complementação com anestesia palatina</li>
                        </ul>
                        <p className="font-medium mt-2">Tempo médio:</p>
                        <p>45-60 minutos por sessão</p>
                      </div>
                      <div>
                        <p className="font-medium">Cuidados pós-operatórios:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Evitar escovação agressiva por 24h</li>
                          <li>Bochecho com antisséptico por 7 dias</li>
                          <li>Anti-inflamatório se houver desconforto</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-bold text-odonto-dark">Endodontia de Urgência</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">Anestesia recomendada:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Infiltrativa com complementação palatina</li>
                          <li>Bloqueio alveolar inferior + infiltrativa</li>
                          <li>Considerar anestesia intraligamentar</li>
                        </ul>
                        <p className="font-medium mt-2">Tempo médio:</p>
                        <p>40-90 minutos</p>
                      </div>
                      <div>
                        <p className="font-medium">Cuidados pós-operatórios:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Evitar mastigar do lado tratado</li>
                          <li>Analgésicos por 2-3 dias</li>
                          <li>Antibiótico se houver indicação</li>
                          <li>Retornar para finalizar o tratamento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="bg-odonto-light border-odonto-medium mt-4">
                    <AlertTitle className="text-odonto-dark">Observação:</AlertTitle>
                    <AlertDescription>
                      Estes são protocolos gerais. Cada caso deve ser avaliado individualmente, considerando histórico médico, características anatômicas e particularidades do procedimento.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManualsPage;
