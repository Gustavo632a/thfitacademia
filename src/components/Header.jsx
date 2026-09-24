import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';
import { contactUrl } from '../data/config';
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (e) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, []);
  return <header className="header"><div className="container header-inner"><Brand /><nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Menu principal">{[['Início', 'inicio'], ['Modalidades', 'modalidades'], ['Localização', 'localizacao'], ['Horários', 'horarios'], ['Contato', 'contato']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="button header-cta" href={contactUrl} target="_blank" rel="noopener noreferrer">Falar com a academia <ArrowUpRight size={17} /></a><button id="menu-toggle" className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
