import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import { Dashboard } from "./components/dashboard/Dashboard";
import { WelcomeScreen } from "./components/auth/WelcomeScreen";
import { AdditionalInfoForm } from "./components/auth/AdditionalInfoForm";
import { QualificationsForm } from "./components/auth/QualificationsForm";
import { BiometricVerification } from "./components/auth/BiometricVerification";
import { ResetPasswordPage } from "./components/auth/ResetPasswordPage";
import { Header } from "./components/Header";
import { useAuth } from "./contexts/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/additional-info" element={<AdditionalInfoForm />} />
            <Route path="/qualifications" element={<QualificationsForm />} />
            <Route path="/biometric" element={<BiometricVerification />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;
