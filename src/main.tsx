import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

fetch('https://backend-verita-audit.vercel.app/')
  .then(res => res.json())
  .then(data => console.log(data));
