import { Search, LogOut, Menu } from 'lucide-react';
import { ProjectList } from './ProjectList';
import { ResearchList } from './ResearchList';
import { StatsOverview } from './StatsOverview';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

// Tipagem para as páginas aceitas
type PageType = "home" | "projects" | "universities" | "labs" | "profile";

interface DashboardProps {
  formData: {
    name: string;
  };
  setCurrentStep?: (step: "login" | "register" | "additional" | "dashboard") => void;
}

export function Dashboard({ formData, setCurrentStep }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Botão do Menu Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-5 left-4 z-50 bg-white p-2 rounded-md shadow-md"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Overlay para mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:static lg:translate-x-0 z-50 h-full transition-transform duration-300 ease-in-out`}
      >
        <Sidebar
          currentPage={currentPage}
          onPageChange={(page: PageType) => {
            setCurrentPage(page);
            setIsSidebarOpen(false);
          }}
          isCollapsed={!isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      
      {/* Conteúdo Principal */}
      <div className={`flex-1 overflow-auto p-4 lg:p-8 bg-gray-50 transition-all duration-300 ${
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* Seção de Boas-vindas */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
              Bem-vindo(a), {formData.name || "Usuário"}
            </h2>
            <button
              onClick={() => setCurrentStep?.("login")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </button>
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar projetos ou pesquisas..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          {/* Renderização de Conteúdo por Página */}
          {currentPage === "home" && (
            <div className="space-y-6 lg:space-y-8">
              <StatsOverview />
              <ProjectList />
              <ResearchList />
            </div>
          )}
          
          {currentPage === "projects" && (
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className="text-xl font-bold mb-4">Projetos e Pesquisas</h2>
              <p className="text-gray-600">Conteúdo da página de projetos e pesquisas</p>
            </div>
          )}
          
          {currentPage === "universities" && (
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className="text-xl font-bold mb-4">Universidades</h2>
              <p className="text-gray-600">Conteúdo da página de universidades</p>
            </div>
          )}
          
          {currentPage === "labs" && (
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className="text-xl font-bold mb-4">Laboratórios</h2>
              <p className="text-gray-600">Conteúdo da página de laboratórios</p>
            </div>
          )}
          
          {currentPage === "profile" && (
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className="text-xl font-bold mb-4">Perfil</h2>
              <p className="text-gray-600">Conteúdo da página de perfil</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
