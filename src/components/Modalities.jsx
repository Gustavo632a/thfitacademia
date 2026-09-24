import { ArrowUpRight } from 'lucide-react';
import { modalities } from '../data/modalities';
import { contactUrl } from '../data/config';
export default function Modalities() {
  return <section id="modalidades" className="section modalities container"><div className="section-heading reveal"><div><div className="eyebrow">01 <span /> MODALIDADES</div><h2>ENCONTRE SEU <em>RITMO.</em></h2></div><p>Escolha a modalidade<br />que combina com você.</p></div><div className="modality-grid">{modalities.map((item, i) => <a className="modality-card reveal" key={item.name} href={contactUrl} target="_blank" rel="noopener noreferrer" aria-label={`Saiba mais sobre ${item.name}`}><img src={`/images/${item.image}.webp`} alt={item.alt} width="600" height="800" loading="lazy" /><div className="card-overlay" /><span className="card-number">0{i + 1}</span><div className="card-content"><span className="card-tag">{item.tag}</span><h3>{item.name}<ArrowUpRight size={23} /></h3><p>{item.description}</p></div></a>)}</div></section>;
}
