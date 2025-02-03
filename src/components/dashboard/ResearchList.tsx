import { Book, Calendar } from 'lucide-react';

export function ResearchList() {
  const researches = [
    {
      id: 1,
      title: 'Estudo sobre Energias Renováveis',
      area: 'Engenharia Ambiental',
      status: 'Em andamento',
      lastUpdate: '2024-03-15',
    },
    {
      id: 2,
      title: 'Análise de Dados em Saúde Pública',
      area: 'Ciências da Saúde',
      status: 'Em revisão',
      lastUpdate: '2024-03-10',
    },
    {
      id: 3,
      title: 'Impactos da IA na Educação',
      area: 'Tecnologia e Educação',
      status: 'Concluído',
      lastUpdate: '2024-03-01',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Pesquisas Recentes</h2>
      <div className="space-y-4">
        {researches.map((research) => (
          <div
            key={research.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {research.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <Book className="h-4 w-4" />
                  <span>{research.area}</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  research.status === 'Concluído'
                    ? 'bg-green-100 text-green-800'
                    : research.status === 'Em revisão'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {research.status}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Última atualização: {research.lastUpdate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}