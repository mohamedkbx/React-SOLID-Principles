import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import SolidPrinciples from './pages/SolidPrinciples';
import SRP from './pages/principles/SRP';
import OCP from './pages/principles/OCP';
import LSP from './pages/principles/LSP';
import ISP from './pages/principles/ISP';
import DIP from './pages/principles/DIP';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/solid-principles" element={<SolidPrinciples />} />
        <Route path="/srp" element={<SRP />} />
        <Route path="/ocp" element={<OCP />} />
        <Route path="/lsp" element={<LSP />} />
        <Route path="/isp" element={<ISP />} />
        <Route path="/dip" element={<DIP />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
