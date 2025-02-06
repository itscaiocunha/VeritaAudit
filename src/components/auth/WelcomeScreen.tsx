import { LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-12rem)] flex items-center">
      <div className="w-full lg:w-1/2 pr-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
            VERITA AUDIT
          </h1>

          <div className="mt-12 space-y-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 rounded-xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3 text-lg font-medium"
            >
              <LogIn className="h-6 w-6" />
              Entrar
            </button>

            <button
              onClick={() => navigate("/register")}
              className="w-full bg-white text-blue-900 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg border-2 border-blue-900 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <UserPlus className="h-6 w-6" />
              Criar conta
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 h-[calc(100vh-12rem)]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent rounded-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1711571603478-ff100499a459?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brasília"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
