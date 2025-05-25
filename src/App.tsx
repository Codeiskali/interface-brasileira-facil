
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AnatomyPage from "./pages/AnatomyPage";
import AnesthesiaPage from "./pages/AnesthesiaPage";
import CalculatorPage from "./pages/CalculatorPage";
import SummaryPage from "./pages/SummaryPage";
import PatientRegisterPage from "./pages/PatientRegisterPage";
import PatientHistoryPage from "./pages/PatientHistoryPage";
import PatientEditPage from "./pages/PatientEditPage";
import ManualsPage from "./pages/ManualsPage";
import SpecialPatientsPage from "./pages/SpecialPatientsPage";
import PatientTypeDetailPage from "./pages/PatientTypeDetailPage";
import PrescriptionPage from "./pages/PrescriptionPage";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  // Create QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calculadora" element={<CalculatorPage />} />
            <Route path="/cadastro-paciente" element={<PatientRegisterPage />} />
            <Route path="/historico-pacientes" element={<PatientHistoryPage />} />
            <Route path="/editar-paciente/:patientId" element={<PatientEditPage />} />
            <Route path="/manuais" element={<ManualsPage />} />
            <Route path="/pacientes-especiais" element={<SpecialPatientsPage />} />
            <Route path="/pacientes-especiais/:typeId" element={<PatientTypeDetailPage />} />
            <Route path="/receitas" element={<PrescriptionPage />} />
            
            {/* Redirecionar rotas antigas para a página de manuais */}
            <Route path="/anatomia" element={<Navigate to="/manuais?tab=anatomy" replace />} />
            <Route path="/anestesia" element={<Navigate to="/manuais?tab=anesthesia" replace />} />
            <Route path="/resumo" element={<Navigate to="/manuais?tab=summaries" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
