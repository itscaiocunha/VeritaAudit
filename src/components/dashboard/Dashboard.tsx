import { Search, LogOut } from 'lucide-react';
import { ProjectList } from './ProjectList';
import { ResearchList } from './ResearchList';
import { StatsOverview } from './StatsOverview';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

interface DashboardProps {
  formData: {
    name: string;
  };
  setCurrentStep: (step: 'login' | 'register' | 'additional' | 'dashboard') => void;
}

export function Dashboard({ formData, setCurrentStep }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex h-[calc(100vh-8rem)]">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex-1 overflow-auto p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Bem-vindo(a), {formData.name || "Usuário"}
            </h2>
            <button
              onClick={() => setCurrentStep('login')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar projetos ou pesquisas..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          {currentPage === 'home' && (
            <>
              <StatsOverview />
              <ProjectList />
              <ResearchList />
            </>
          )}
          
          {currentPage === 'projects' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Projetos e Pesquisas</h2>
              <p className="text-gray-600">Conteúdo da página de projetos e pesquisas</p>
            </div>
          )}
          
          {currentPage === 'universities' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Universidades</h2>
              <p className="text-gray-600">Conteúdo da página de universidades</p>
            </div>
          )}
          
          {currentPage === 'labs' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Laboratórios</h2>
              <p className="text-gray-600">Conteúdo da página de laboratórios</p>
            </div>
          )}
          
          {currentPage === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Perfil</h2>
              <p className="text-gray-600">Conteúdo da página de perfil</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}