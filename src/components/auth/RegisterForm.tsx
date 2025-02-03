import { Eye } from 'lucide-react';

interface RegisterFormProps {
  formData: {
    name: string;
    cpf: string;
    phone: string;
    primaryEmail: string;
    secondaryEmail: string;
    password: string;
  };
  setFormData: (data: any) => void;
  setCurrentStep: (step: 'login' | 'register' | 'additional' | 'dashboard') => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function RegisterForm({ formData, setFormData, setCurrentStep, handleSubmit }: RegisterFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CPF<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.cpf}
          onChange={(e) => setFormData({...formData, cpf: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefone/Celular<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-mail Principal<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.primaryEmail}
          onChange={(e) => setFormData({...formData, primaryEmail: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-mail Secundário
        </label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.secondaryEmail}
          onChange={(e) => setFormData({...formData, secondaryEmail: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Senha<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          type="submit"
          className="w-full bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Avançar
        </button>
        
        <button
          type="button"
          onClick={() => setCurrentStep('login')}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Já possuo login!
        </button>
      </div>
    </form>
  );
}