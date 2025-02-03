import { FileText, Users, Book, Calendar } from 'lucide-react';

export function StatsOverview() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Projetos Ativos</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Colaboradores</p>
            <p className="text-2xl font-bold">25</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Book className="h-8 w-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600">Pesquisas</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Calendar className="h-8 w-8 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Eventos</p>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}