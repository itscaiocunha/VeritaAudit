import React, { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { AdditionalInfoForm } from './components/auth/AdditionalInfoForm';
import { ResetPasswordPage } from './components/auth/ResetPasswordPage';
import { WelcomeScreen } from './components/auth/WelcomeScreen';
import { Dashboard } from './components/dashboard/Dashboard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

type ViewState = 'welcome' | 'login' | 'register' | 'additional' | 'dashboard' | 'reset-password';

function App() {
  const [currentStep, setCurrentStep] = useState<ViewState>('welcome');
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    cpf: '',
    phone: '',
    primaryEmail: '',
    secondaryEmail: '',
    password: '',
    // Additional Info
    profession: '',
    role: '',
    titles: [] as string[],
    curriculum: [] as string[],
    lattesUrl: '',
    extraInfo: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 'register') {
      setCurrentStep('additional');
    } else if (currentStep === 'login') {
      setCurrentStep('dashboard');
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const handlePasswordReset = (newPassword: string) => {
    console.log('Password reset to:', newPassword);
    setCurrentStep('login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {currentStep !== 'welcome' && <Header />}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentStep === 'welcome' ? (
          <WelcomeScreen setCurrentStep={setCurrentStep} />
        ) : currentStep === 'reset-password' ? (
          <ResetPasswordPage onSubmit={handlePasswordReset} />
        ) : currentStep !== 'dashboard' ? (
          <div className="w-full flex gap-8">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-800">
                {currentStep === 'login' ? 'LOGIN' : 'CADASTRO'}
              </h1>
              {currentStep !== 'additional' && (
                <p className="text-gray-600 mb-8">
                  {currentStep === 'login'
                    ? 'Acesse sua conta gov.br'
                    : 'Cadastre-se para acessar os serviços públicos digitais'}
                </p>
              )}

              {currentStep === 'login' && (
                <LoginForm
                  formData={formData}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                  handleSubmit={handleSubmit}
                />
              )}
              {currentStep === 'register' && (
                <RegisterForm
                  formData={formData}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                  handleSubmit={handleSubmit}
                />
              )}
              {currentStep === 'additional' && (
                <AdditionalInfoForm
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Palácio do Planalto"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ) : (
          <Dashboard formData={formData} setCurrentStep={setCurrentStep} />
        )}
      </main>

      {currentStep !== 'welcome' && <Footer />}
    </div>
  );
}

export default App;