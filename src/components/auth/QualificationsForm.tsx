import React from 'react';
import { Plus } from 'lucide-react';

interface QualificationsFormProps {
  formData: {
    profession: string;
    role: string;
    titles: string[];
    curriculum: string[];
    lattesUrl: string;
    extraInfo: string[];
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function QualificationsForm({ formData, setFormData, handleSubmit }: QualificationsFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">Qualificações e Times</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profissão
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.profession}
            onChange={(e) => setFormData({...formData, profession: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cargo
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titulação
        </label>
        <button
          type="button"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => {
            const newTitle = prompt('Digite o título:');
            if (newTitle) {
              setFormData({...formData, titles: [...formData.titles, newTitle]});
            }
          }}
        >
          <Plus className="h-4 w-4" />
          <span>Adicionar Título</span>
        </button>
        {formData.titles.length > 0 && (
          <div className="mt-2 space-y-2">
            {formData.titles.map((title, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span>{title}</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    const newTitles = formData.titles.filter((_, i) => i !== index);
                    setFormData({...formData, titles: newTitles});
                  }}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Currículo
        </label>
        <button
          type="button"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => {
            const newCurriculum = prompt('Adicione informações ao currículo:');
            if (newCurriculum) {
              setFormData({...formData, curriculum: [...formData.curriculum, newCurriculum]});
            }
          }}
        >
          <Plus className="h-4 w-4" />
          <span>Adicionar Currículo</span>
        </button>
        {formData.curriculum.length > 0 && (
          <div className="mt-2 space-y-2">
            {formData.curriculum.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span>{item}</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    const newCurriculum = formData.curriculum.filter((_, i) => i !== index);
                    setFormData({...formData, curriculum: newCurriculum});
                  }}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Currículo Lattes
        </label>
        <input
          type="url"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.lattesUrl}
          onChange={(e) => setFormData({...formData, lattesUrl: e.target.value})}
          placeholder="http://lattes.cnpq.br/..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Certificados e Qualificações
        </label>
        <button
          type="button"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => {
            const newInfo = prompt('Adicione certificado ou qualificação:');
            if (newInfo) {
              setFormData({...formData, extraInfo: [...formData.extraInfo, newInfo]});
            }
          }}
        >
          <Plus className="h-4 w-4" />
          <span>Adicionar</span>
        </button>
        {formData.extraInfo.length > 0 && (
          <div className="mt-2 space-y-2">
            {formData.extraInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span>{info}</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    const newExtraInfo = formData.extraInfo.filter((_, i) => i !== index);
                    setFormData({...formData, extraInfo: newExtraInfo});
                  }}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Finalizar
        </button>
      </div>
    </form>
  );
}