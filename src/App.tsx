
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
import ManualsPage from "./pages/ManualsPage";
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
            <Route path="/manuais" element={<ManualsPage />} />
            
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
