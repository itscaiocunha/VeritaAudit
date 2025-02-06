import React from "react";

interface FormTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

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

export default FormTemplate;
