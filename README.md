# TH Fit Academia

Landing page em React + Vite, JavaScript, CSS e lucide-react. Seis seções, layout responsivo, menu móvel, animações leves, foco visível e respeito a movimento reduzido.

## Executar

Requer Node.js 22.12+ (ou 24 LTS).

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
npm run lint
```

O build estático é gerado em `dist/`.

## Dados da academia

Edite `src/data/config.js`:

- `WHATSAPP_URL`: substitua pelo endereço `https://wa.me/55DDDNUMERO`, apenas dígitos. A mensagem é acrescentada automaticamente. Enquanto não configurado, os contatos abrem o Instagram verdadeiro informado no briefing.
- `ADDRESS`: endereço completo confirmado.
- `MAPS_URL`: link HTTPS confirmado para a localização. O mapa e o botão Como chegar aparecem quando endereço e link estão preenchidos. Até lá, é exibida uma chamada para consultar a localização com a equipe.
- Adicione a **logo original**, sem alterações, em `public/images/logo-thfit.png` e configure `LOGO_URL` com `/images/logo-thfit.png`. A logo não foi fornecida e não foi recriada: o estado inicial usa apenas o nome em texto no header e no footer.

Horários ficam em `src/data/schedule.js`; modalidades em `src/data/modalities.js`.

## Imagens e fontes

As fotos locais WebP são ilustrativas, do Unsplash e Pexels, e não representam instalações ou alunos confirmados da TH Fit. Substitua por fotos oficiais quando disponíveis.

- Hero e musculação: https://images.unsplash.com/photo-1534438327276-14e5300c3a48
- Funcional: images.unsplash.com/photo-1517836357463-d25dfeac3438
- Dança: https://www.pexels.com/photo/women-doing-exercise-while-dancing-8957646/
- Jiu-jitsu: https://www.pexels.com/photo/two-men-practicing-brazilian-jiu-jitsu-8612498/

Oswald e Inter são carregadas via Google Fonts com `display=swap` e fontes de sistema como fallback. O favicon é um pictograma genérico de halter, não uma recriação da marca.

## Publicação

Publique `dist/` em uma hospedagem estática. Preencha os dados acima e use a URL pública absoluta em `og:image` no `index.html` para compartilhamento social. O Schema.org inclui somente nome, modalidades, Instagram e horários confirmados; não há telefone, endereço ou domínio inventados.

## Validação

Build de produção e lint disponíveis nos comandos acima. Não há backend, formulário, credenciais ou rastreadores. Links externos usam HTTPS e `noopener noreferrer`. O mapa somente carrega após configuração. A interface inclui links de navegação, retorno ao topo, menu com fechamento por Escape e por seleção, imagens com tamanho reservado e lazy loading nas modalidades.

