export const ADDRESS = 'Rua Zulmira Félix de Carvalho, 205 - Brisamar, João Pessoa - PB';
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
export const WHATSAPP_URL = 'https://wa.me/5583987180048';
export const INSTAGRAM_URL = 'https://www.instagram.com/thfitacademia/';
export const MESSAGE = 'Olá! Conheci a TH Fit pelo site e gostaria de saber mais sobre a academia, modalidades e planos.';
export const hasWhatsApp = /^https:\/\/wa\.me\/\d{12,13}$/.test(WHATSAPP_URL);
export const contactUrl = hasWhatsApp ? `${WHATSAPP_URL}?text=${encodeURIComponent(MESSAGE)}` : INSTAGRAM_URL;
export const hasLocation = ADDRESS !== 'Adicionar endereço da TH Fit' && MAPS_URL.startsWith('https://');
export const LOGO_URL = ''; // Preencha com /images/logo-thfit.png após adicionar a logo original.
