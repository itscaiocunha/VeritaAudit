import React from "react";
import { Upload } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import FormTemplate from "./FormTemplate";

export function AdditionalInfoForm() {
  const { formData, setFormData, handleRegister } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, document: e.target.files[0] });
    }
  };

  return (
    <FormTemplate title="" description="">
    <form onSubmit={handleRegister} className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">Informações Extras</h2>

      {/* CEP */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.cep}
          onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
        />
      </div>

      {/* Endereço */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      {/* Bairro */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.neighborhood}
          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
        />
      </div>

      {/* Grid: Número, Complemento, UF, Cidade */}
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.complement}
            onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">UF</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
      </div>

      {/* Upload de Documento */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Documento¹</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <span>Enviar arquivo</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">¹RG, CNH ou Passaporte</p>
          </div>
        </div>
      </div>

      {/* Vínculo CNPJ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vínculo CNPJ</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.cnpjLink}
          onChange={(e) => setFormData({ ...formData, cnpjLink: e.target.value })}
          placeholder="00.000.000/0000-00"
        />
      </div>

      {/* Botão de Finalização */}
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Finalizar
        </button>
      </div>
    </form>
    </FormTemplate>
  );
}
