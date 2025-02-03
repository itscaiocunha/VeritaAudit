import { Home, FileText, Building2, FlaskRound as Flask, User } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projetos/Pesquisas', icon: FileText },
    { id: 'universities', label: 'Universidades', icon: Building2 },
    { id: 'labs', label: 'Laboratórios', icon: Flask },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="p-4">
        <nav className="space-y-1">
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
              >
                <Icon className={`h-5 w-5 ${
                  currentPage === item.id ? 'text-blue-900' : 'text-gray-400'
                }`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}