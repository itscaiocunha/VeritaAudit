import { Calendar, Users } from 'lucide-react';

export function ProjectList() {
  const projects = [
    {
      id: 1,
      title: 'Projeto de Pesquisa em IA',
      status: 'Em andamento',
      deadline: '2024-12-31',
      members: 8,
      progress: 65,
    },
    {
      id: 2,
      title: 'Desenvolvimento Sustentável',
      status: 'Em andamento',
      deadline: '2024-08-15',
      members: 12,
      progress: 35,
    },
    {
      id: 3,
      title: 'Inovação em Saúde',
      status: 'Em planejamento',
      deadline: '2024-10-01',
      members: 5,
      progress: 15,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Projetos Ativos</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-800">
                {project.title}
              </h3>
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {project.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Prazo: {project.deadline}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{project.members} membros</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>Progresso:</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span>{project.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}