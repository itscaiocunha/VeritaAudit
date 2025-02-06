import { useState } from "react";
import { Fingerprint } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext"; // Certifique-se do caminho correto

export function BiometricVerification() {
  const { completeRegistration } = useAuth();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      completeRegistration(); // Agora a função existe e pode ser chamada
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Verificação de Biometria</h2>

      <div className="flex flex-col items-center space-y-6">
        <div
          className={`w-64 h-64 border-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isScanning ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <Fingerprint
            className={`w-32 h-32 transition-all duration-300 ${
              isScanning ? "text-blue-500 animate-pulse" : "text-gray-400"
            }`}
          />
        </div>

        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
            isScanning ? "bg-blue-400 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-800"
          }`}
        >
          {isScanning ? "Escaneando..." : "Confirmar Biometria"}
        </button>
      </div>
    </div>
  );
}
