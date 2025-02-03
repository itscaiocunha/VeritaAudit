import { Eye } from 'lucide-react';
import { useState } from 'react';
import { ForgotPasswordModal } from './ForgotPasswordModal';

interface LoginFormProps {
  formData: {
    primaryEmail: string;
    password: string;
  };
  setFormData: (data: any) => void;
  setCurrentStep: (step: 'login' | 'register' | 'additional' | 'dashboard' | 'reset-password') => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function LoginForm({ formData, setFormData, setCurrentStep, handleSubmit }: LoginFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleForgotPassword = (email: string) => {
    // Here you would implement the password recovery logic
    console.log('Password recovery requested for:', email);
    setIsModalOpen(false);
    // Simulate email sent, then redirect to reset password page
    setTimeout(() => {
      setCurrentStep('reset-password');
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
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
            Senha
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
          <div className="mt-1 text-right">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Esqueci a Senha!
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Logar
          </button>
          
          <button
            type="button"
            onClick={() => setCurrentStep('register')}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Não possuo login!
          </button>
        </div>
      </form>

      <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleForgotPassword}
      />
    </>
  );
}