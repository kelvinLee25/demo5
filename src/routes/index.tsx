// src/routes/index.tsx
import { Routes, Route } from 'react-router-dom';
import App from '../App';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app" element={<div className="text-white">Grafilab</div>} />
    </Routes>
  );
};

export default AppRoutes;