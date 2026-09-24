import { LOGO_URL } from '../data/config';
export default function Brand() {
  return <a className="brand" href="#inicio" aria-label="TH Fit Academia — início">{LOGO_URL ? <img src={LOGO_URL} width="138" height="50" alt="TH Fit Academia" /> : <><strong>TH FIT<span>®</span></strong><small>ACADEMIA</small></>}</a>;
}
