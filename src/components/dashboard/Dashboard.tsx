import { Search, Menu } from 'lucide-react';
import { ProjectList } from './ProjectList';
import { ResearchList } from './ResearchList';
import { StatsOverview } from './StatsOverview';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

type PageType = "home" | "projects" | "universities" | "labs" | "profile";

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed lg:static z-40 h-full transition-all duration-300 bg-white shadow-lg ${
          isSidebarOpen ? "w-64" : "w-16"
        } lg:w-64 lg:block ${isSidebarOpen ? "block" : "hidden"} md:flex`}
      >
        <Sidebar
          currentPage={currentPage}
          onPageChange={(page: PageType) => setCurrentPage(page)}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      
      {/* Conteúdo Principal */}
      <div className="flex-1 h-screen overflow-y-auto p-4 lg:p-8 bg-gray-50 transition-all duration-300">
        {/* Navbar Fixa e Sobrepondo Conteúdo */}
        <div className=" top-0 left-0 w-full bg-white z-50 shadow-md p-4 flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden bg-white p-2 rounded-md shadow-md"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            <span className="text-xl font-semibold">VeritaAudit</span>
          </div>
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Pesquisar projetos ou pesquisas..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Espaço para compensar a navbar fixa */}
        <div className="mt-24 lg:mt-28 space-y-6 lg:space-y-12">
          {currentPage === "home" && (
            <>
              <StatsOverview />
              <ProjectList />
              <ResearchList />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
