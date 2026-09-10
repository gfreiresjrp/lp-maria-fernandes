# Maria Fernandes Bride

Landing page estática em português, focada em agendamento pelo WhatsApp.

## Conteúdo

- Site: `dist/index.html`, `dist/styles.css` e `dist/script.js`.
- Imagens reais fornecidas pelo cliente, convertidas de HEIC para JPEG em `dist/assets/`.
- Destino das chamadas: `https://wa.me/5521985481826`, com mensagens preenchidas por contexto. O visitante confirma o envio no WhatsApp.
- Nenhum formulário, cookie de marketing ou rastreador instalado. O JavaScript emite o evento local `whatsapp-click`, com `detail.placement`, para eventual integração de métricas.
- Links e perguntas frequentes funcionam sem JavaScript.

## Fontes consultadas em 9 de setembro de 2026

- https://www.instagram.com/mariafernandesbride/ — nome, locação de grinaldas e acessórios, Barra da Tijuca/RJ.
- https://bio.site/mariafernandesbride — atendimento presencial e online, WhatsApp e link oficial de localização.
- Fotos IMG_2740, IMG_2742, IMG_2743 e IMG_2745 fornecidas pelo usuário — identidade visual e acervo.

Não foram inventados preços, avaliações, depoimentos, prazos ou condições contratuais. Disponibilidade e condições de locação são confirmadas durante o atendimento.

## Redesign editorial

Direção visual inspirada na referência fornecida https://drahelenafavaro.com.br/: recortes em arco, contornos delicados, composições sobrepostas, formas arredondadas e movimento sutil. Identidade e conteúdo próprios da Maria Fernandes.

Fotos adicionais obtidas do Instagram indicado pelo cliente e armazenadas localmente:
- `noiva-floral.jpg`: https://www.instagram.com/mariafernandesbride/p/Dc61BynFF-A/
- `noiva-grinalda.jpg`: https://www.instagram.com/mariafernandesbride/p/DdFNBDJlFA5/
- `tiara-perolas.jpg`: https://www.instagram.com/mariafernandesbride/p/Dc11hU5lNaD/

## Execução local

Responsividade conferida em 320, 375, 390, 430, 768, 960, 1024, 1440 e 1920 px, sem overflow horizontal. Cards e CTAs alinhados em desktop, FAQ expansível validado, nove destinos de WhatsApp conferidos e imagens carregadas sem erro. Ajustes finais em `dist/responsive.css`.

Revisão adicional mobile: tipografia mais legível, controles com área mínima de toque de 44 px, fotografias proporcionais, `viewport-fit=cover` e espaçamento com `safe-area-inset-*`. Verificados smartphones entre 320 e 480 px, larguras intermediárias de 600 e 760 px e orientação paisagem. Não há bloqueio de zoom no viewport.

Execute `python3 -m http.server 4173 --directory dist --bind 127.0.0.1` na raiz e abra http://127.0.0.1:4173/.

## Publicação

O manifesto `.openai/hosting.json` identifica o projeto Sites e o diretório estático. A versão inicial é privada para revisão do proprietário; liberar o acesso público antes de usar o endereço em campanhas.
