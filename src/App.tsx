
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AnatomyPage from "./pages/AnatomyPage";
import AnesthesiaPage from "./pages/AnesthesiaPage";
import CalculatorPage from "./pages/CalculatorPage";
import SummaryPage from "./pages/SummaryPage";
import PatientRegisterPage from "./pages/PatientRegisterPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anatomia" element={<AnatomyPage />} />
          <Route path="/anestesia" element={<AnesthesiaPage />} />
          <Route path="/calculadora" element={<CalculatorPage />} />
          <Route path="/resumo" element={<SummaryPage />} />
          <Route path="/cadastro-paciente" element={<PatientRegisterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
