import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import { AdditionalInfoForm } from "./components/auth/AdditionalInfoForm";
import { QualificationsForm } from "./components/auth/QualificationsForm";
import { BiometricVerification } from "./components/auth/BiometricVerification";
import { ResetPasswordPage } from "./components/auth/ResetPasswordPage";
import { WelcomeScreen } from "./components/auth/WelcomeScreen";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

interface FormTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

// Componente reutilizável para formulários
const FormTemplate: React.FC<FormTemplateProps> = ({ title, description, children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full flex gap-8">
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{title}</h1>
          <p className="text-gray-600 mb-8">{description}</p>
          {children}
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [] = useState({
    name: "",
    cpf: "",
    phone: "",
    primaryEmail: "",
    secondaryEmail: "",
    password: "",
    cep: "",
    address: "",
    neighborhood: "",
    number: "",
    complement: "",
    state: "",
    city: "",
    document: null,
    cnpjLink: "",
    profession: "",
    role: "",
    titles: [],
    curriculum: [],
    lattesUrl: "",
    extraInfo: [],
  });

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route
                path="/login"
                element={
                  <FormTemplate title="LOGIN" description="Acesse sua conta">
                    <LoginForm />
                  </FormTemplate>
                }
              />
              <Route
                path="/register"
                element={
                  <FormTemplate title="CADASTRO" description="Cadastre-se para acessar">
                    <RegisterForm />
                  </FormTemplate>
                }
              />
              <Route
                path="/additional-info"
                element={
                  <FormTemplate title="Informações Adicionais" description="Preencha os detalhes necessários">
                    <AdditionalInfoForm />
                  </FormTemplate>
                }
              />
              <Route
                path="/qualifications"
                element={
                  <FormTemplate title="Qualificações" description="Adicione suas qualificações">
                    <QualificationsForm />
                  </FormTemplate>
                }
              />
              <Route path="/biometric" element={<BiometricVerification />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
