import { ArrowUpRight, Camera, MessageCircle } from 'lucide-react';
import { contactUrl, hasWhatsApp, INSTAGRAM_URL } from '../data/config';
export default function ContactCTA() {
  return <section id="contato" className="contact-section container reveal">
    <div className="contact-copy">
      <div className="eyebrow">SEU PRÓXIMO NÍVEL COMEÇA AGORA</div>
      <h2>PRONTO PARA <em>COMEÇAR?</em></h2>
      <p>Fale com a equipe da TH Fit e descubra como iniciar seus treinos.</p>
    </div>
    <div className="contact-actions">
      <a className="button" href={contactUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} />{hasWhatsApp ? 'Falar no WhatsApp' : 'Falar com a TH Fit'}<ArrowUpRight size={19} /></a>
      <a className="instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Camera size={18} /> Ver Instagram <span>@thfitacademia</span></a>
    </div>
  </section>;
}
