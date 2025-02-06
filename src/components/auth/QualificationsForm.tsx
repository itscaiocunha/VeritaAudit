import React from "react";
import { useAuth } from "../../contexts/AuthContext"; // Importa o contexto de autenticação
import { Plus } from "lucide-react";

export function QualificationsForm() {
  const { formData, setFormData } = useAuth(); // Obtém os dados do contexto

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode adicionar uma chamada à API para salvar os dados
  };

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
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.profession}
            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cargo
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titulação
        </label>
        <button
          type="button"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => {
            const newTitle = prompt("Digite o título:");
            if (newTitle) {
              setFormData({ ...formData, titles: [...formData.titles, newTitle] });
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
                  className="text-red-500"
                  onClick={() => {
                    const newTitles = formData.titles.filter((_, i) => i !== index);
                    setFormData({ ...formData, titles: newTitles });
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
        <button type="submit" className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800">
          Finalizar
        </button>
      </div>
    </form>
  );
}
