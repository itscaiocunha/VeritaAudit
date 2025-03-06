import { Home, FileText, Building2, FlaskRound as Flask, User, LogOut, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

 type Page = "home" | "projects" | "universities" | "labs" | "profile";

 interface SidebarProps {
   currentPage: Page;
   onPageChange: (page: Page) => void;
   isCollapsed?: boolean;
   onToggle?: () => void;
 }

 export function Sidebar({ currentPage, onPageChange, isCollapsed = false, onToggle }: SidebarProps) {
   const navigate = useNavigate();
   
   const menuItems: { id: Page; label: string; icon: React.ElementType }[] = [
     { id: "home", label: "Home", icon: Home },
     { id: "projects", label: "Projetos/Pesquisas", icon: FileText },
     { id: "universities", label: "Universidades", icon: Building2 },
     { id: "labs", label: "Laboratórios", icon: Flask },
     { id: "profile", label: "Perfil", icon: User },
   ];

   return (
     <div
       className={`h-full bg-white shadow-lg flex flex-col transition-all duration-300 ${
         isCollapsed ? "w-16" : "w-64"
       }`}
     >
       {/* Cabeçalho do menu */}
       <div className="p-4 flex items-center justify-between border-b">
         {!isCollapsed && <span className="font-semibold text-gray-800">Menu</span>}
         {onToggle && (
           <button onClick={onToggle} className="p-1 rounded-md hover:bg-gray-200">
             <X className="h-5 w-5 text-gray-600" />
           </button>
         )}
       </div>

       {/* Navegação */}
       <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
         {menuItems.map((item) => {
           const Icon = item.icon;
           return (
             <button
               key={item.id}
               onClick={() => onPageChange(item.id)}
               className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                 currentPage === item.id
                   ? "bg-blue-50 text-blue-900"
                   : "text-gray-700 hover:bg-gray-50"
               }`}
               title={isCollapsed ? item.label : undefined}
             >
               <Icon
                 className={`h-5 w-5 flex-shrink-0 ${
                   currentPage === item.id ? "text-blue-900" : "text-gray-400"
                 }`}
               />
               {!isCollapsed && <span>{item.label}</span>}
             </button>
           );
         })}
       </nav>

       {/* Botão de Sair fixo na base */}
       <div className="mt-auto border-t">
         <button 
           onClick={() => navigate("/welcome")} 
           className="w-full flex items-center justify-center p-4 text-gray-600 hover:text-gray-800">
           <LogOut className="h-5 w-5" />
           {!isCollapsed && <span className="ml-2">Sair</span>}
         </button>
       </div>
     </div>
   );
 }
