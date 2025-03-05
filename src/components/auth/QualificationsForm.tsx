import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext"; // Importa o contexto de autenticação
import FormTemplate from "./FormTemplate";

export function QualificationsForm() {
  const { formData, setFormData, handleQualification } = useAuth(); // Obtém os dados do contexto

  // 🔹 Recupera CPF do localStorage ao carregar o componente
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.cpf && !formData.cpf) {
        setFormData((prevData) => ({ ...prevData, cpf: parsedData.cpf }));
      }
    }
  }, [setFormData, formData.cpf]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    handleQualification();
  };

  return (
    <FormTemplate title="" description="">
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
            Currículos Lattes
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.lattesUrl}
            onChange={(e) => setFormData({ ...formData, lattesUrl: e.target.value })}
          />
        </div>

        <div className="flex justify-end mt-8">
          <button type="submit" className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800">
            Finalizar
          </button>
        </div>
      </form>
    </FormTemplate>
  );
}
