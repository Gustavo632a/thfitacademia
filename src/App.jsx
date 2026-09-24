import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Modalities from './components/Modalities';
import LocationSchedule from './components/LocationSchedule';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
export default function App() {
  useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.1 }); document.querySelectorAll('.reveal').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); }); return () => observer.disconnect(); }, []);
  return <><a href="#main" className="skip-link">Pular para o conteúdo</a><Header /><main id="main"><Hero /><Modalities /><LocationSchedule /><ContactCTA /></main><Footer /><FloatingWhatsApp /></>;
}
