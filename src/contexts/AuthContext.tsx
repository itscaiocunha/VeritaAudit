import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  cpf: string;
  phone: string;
  primaryEmail: string;
  secondaryEmail: string;
  password: string;
  cep: string;
  address: string;
  neighborhood: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  document: File | null;
  cnpjLink: string;
  profession: string;
  role: string;
  titles: string[];
  curriculum: string[];
  lattesUrl: string;
  extraInfo: string[];
}

interface AuthContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleRegister: () => Promise<void>;
  completeRegistration: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  // Recupera do localStorage
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {
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
    };
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // 🔹 Função para fazer login
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
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 🔹 Função para registrar novo usuário
  const handleRegister = async () => {
    if (!formData.name || !formData.cpf || !formData.phone || !formData.primaryEmail || !formData.secondaryEmail || !formData.password) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const response = await fetch("https://backend-verita-audit.vercel.app/api/auth/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.name,
          cpf: formData.cpf,
          telefone: formData.phone,
          email1: formData.primaryEmail,
          email2: formData.secondaryEmail,
          senha: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao registrar usuário");
      }

      navigate("/additional-info");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 🔹 Função para completar o registro após a biometria
  const completeRegistration = () => {
    console.log("Registro concluído com sucesso!");
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ formData, setFormData, handleLogin, handleRegister, completeRegistration, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};
