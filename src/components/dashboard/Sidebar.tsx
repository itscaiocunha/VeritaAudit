import { Home, FileText, Building2, FlaskRound as Flask, User, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ currentPage, onPageChange, isCollapsed = false, onToggle }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projetos/Pesquisas', icon: FileText },
    { id: 'universities', label: 'Universidades', icon: Building2 },
    { id: 'labs', label: 'Laboratórios', icon: Flask },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className={`h-full bg-white shadow-lg flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 flex items-center justify-between border-b">
        {!isCollapsed && <span className="font-semibold text-gray-800">Menu</span>}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-gray-100 rounded-md hidden lg:block"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-blue-50 text-blue-900'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`h-5 w-5 flex-shrink-0 ${
                currentPage === item.id ? 'text-blue-900' : 'text-gray-400'
              }`} />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}