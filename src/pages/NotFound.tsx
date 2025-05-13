
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-odonto-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-odonto-dark">404</h1>
        <p className="text-xl text-odonto-dark mb-4">Ops! Página não encontrada</p>
        <a href="/" className="text-odonto-medium hover:text-odonto-dark underline">
          Voltar para o Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
