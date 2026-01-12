import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Plan from '../pages/Plan';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/plan" element={<Plan />} />
    </Routes>
  );
}
