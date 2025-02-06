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
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
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
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
