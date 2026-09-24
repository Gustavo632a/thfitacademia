import { ArrowUp, MessageCircle } from 'lucide-react';
import { contactUrl } from '../data/config';
export default function FloatingWhatsApp() { return <div className="floating-controls"><a className="back-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp size={19} /></a><a className="floating-contact" href={contactUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} /><span className="desktop-label">Falar com a TH Fit</span><span className="mobile-label">Contato</span></a></div>; }
