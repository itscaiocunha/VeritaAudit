import { FileText, Users, Book, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchDashboardStats } from '../../services/dashboardService';

export function StatsOverview() {
  const [stats, setStats] = useState({
    pesquisas: 0,
    colaboradores: 0,
    centrosPesquisa: 0,
    empresas: 0,
    equipes: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados do dashboard');
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Pesquisas Ativas</p>
            <p className="text-2xl font-bold">{stats.pesquisas}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Colaboradores</p>
            <p className="text-2xl font-bold">{stats.colaboradores}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Book className="h-8 w-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600">Centro de Pesquisa</p>
            <p className="text-2xl font-bold">{stats.centrosPesquisa}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Calendar className="h-8 w-8 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Empresas Patrocinadoras</p>
            <p className="text-2xl font-bold">{stats.empresas}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Calendar className="h-8 w-8 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Equipes</p>
            <p className="text-2xl font-bold">{stats.equipes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}