import React, { useState } from "react";
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

type ViewState = 
  | "welcome"
  | "login"
  | "register"
  | "additional"
  | "biometric"
  | "qualifications"
  | "dashboard"
  | "reset-password";

function App() {
  const [currentStep, setCurrentStep] = useState<ViewState>("welcome");
  const [formData, setFormData] = useState({
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
    document: null as File | null,
    cnpjLink: "",
    profession: "",
    role: "",
    titles: [] as string[],
    curriculum: [] as string[],
    lattesUrl: "",
    extraInfo: [] as string[],
  });

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("https://backend-verita-audit.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao tentar fazer login");
      }

      localStorage.setItem("token", data.token);
      setCurrentStep("dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === "login") {
      await handleLogin(formData.primaryEmail, formData.password);
    } else if (currentStep === "register") {
      setCurrentStep("additional");
    } else if (currentStep === "additional") {
      setCurrentStep("biometric");
    } else if (currentStep === "qualifications") {
      setCurrentStep("dashboard");
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${currentStep === "dashboard" ? "h-screen" : ""}`}>
      <Header />

      <main className={`flex-grow ${currentStep === "dashboard" ? "h-[calc(100vh-4rem)]" : ""}`}>
        {currentStep === "welcome" ? (
          <WelcomeScreen setCurrentStep={setCurrentStep} />
        ) : currentStep === "reset-password" ? (
          <ResetPasswordPage onSubmit={() => setCurrentStep("login")} />
        ) : currentStep === "biometric" ? (
          <BiometricVerification onComplete={() => setCurrentStep("qualifications")} />
        ) : currentStep === "dashboard" ? (
          <Dashboard formData={formData} setCurrentStep={setCurrentStep} />
        ) : (
          <div className="container mx-auto px-4 py-8">
            <div className="w-full flex gap-8">
              <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">
                  {currentStep === "login" ? "LOGIN" : "CADASTRO"}
                </h1>
                <p className="text-gray-600 mb-8">
                  {currentStep === "login" ? "Acesse sua conta" : "Cadastre-se para acessar"}
                </p>

                {currentStep === "login" && (
                  <LoginForm
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    handleSubmit={handleSubmit}
                  />
                )}
                {currentStep === "register" && (
                  <RegisterForm
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    handleSubmit={handleSubmit}
                  />
                )}
                {currentStep === "additional" && (
                  <AdditionalInfoForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                )}
                {currentStep === "qualifications" && (
                  <QualificationsForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                )}
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
        )}
      </main>

      {currentStep !== "dashboard" && <Footer />}
    </div>
  );
}

export default App;
