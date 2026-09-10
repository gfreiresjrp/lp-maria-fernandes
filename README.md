# Maria Fernandes Bride

Landing page estática em português, focada em agendamento pelo WhatsApp.

## Conteúdo

- Site: `dist/index.html`, `dist/styles.css` e `dist/script.js`.
- Imagens reais fornecidas pelo cliente, convertidas de HEIC para JPEG em `dist/assets/`.
- Destino das chamadas: `https://wa.me/5521985481826`, com mensagens preenchidas por contexto. O visitante confirma o envio no WhatsApp.
- Nenhum formulário, cookie de marketing ou rastreador instalado. O JavaScript emite o evento local `whatsapp-click`, com `detail.placement`, para eventual integração de métricas.
- Todos os links funcionam sem JavaScript.

## Fontes consultadas em 9 de setembro de 2026

- https://www.instagram.com/mariafernandesbride/ — nome, locação de grinaldas e acessórios, Barra da Tijuca/RJ.
- https://bio.site/mariafernandesbride — atendimento presencial e online, WhatsApp e link oficial de localização.
- Fotos IMG_2740, IMG_2742, IMG_2743 e IMG_2745 fornecidas pelo usuário — identidade visual e acervo.

Não foram inventados preços, avaliações, depoimentos, prazos ou condições contratuais. Disponibilidade e condições de locação são confirmadas durante o atendimento.

## Redesign editorial

Direção visual inspirada na referência fornecida https://drahelenafavaro.com.br/, ampliada após o pedido de mais presença visual: fundo com gradientes de marfim e dourado, fotografias sobrepostas, galeria em alturas alternadas e seção editorial azul profundo. Quatro seções com textos curtos. Botões sem setas, animações de entrada ao rolar e zoom suave das fotos ao passar o cursor. As animações respeitam movimento reduzido e todo o conteúdo permanece acessível sem JavaScript. Não há etapas, FAQ ou encerramento duplicado.

Fotos adicionais obtidas do Instagram indicado pelo cliente e armazenadas localmente:
- `noiva-floral.jpg`: https://www.instagram.com/mariafernandesbride/p/Dc61BynFF-A/
- `noiva-grinalda.jpg`: https://www.instagram.com/mariafernandesbride/p/DdFNBDJlFA5/
- `tiara-perolas.jpg`: https://www.instagram.com/mariafernandesbride/p/Dc11hU5lNaD/

## Execução local

Estilos consolidados em `dist/styles.css`, com layouts fluidos e pontos de adaptação em 960, 700 e 380 px. No celular, apresentação e atendimento ficam em uma coluna; o acervo usa duas colunas e uma terceira foto centralizada. Controles de contato com área mínima de toque de 44 px, `viewport-fit=cover`, margens de segurança e zoom permitido. As verificações de navegador das versões anteriores não se aplicam a este novo layout; nesta revisão foram conferidos os arquivos estáticos, referências locais, âncoras, destinos de contato e sintaxe JavaScript.

Execute `python3 -m http.server 4173 --directory dist --bind 127.0.0.1` na raiz e abra http://127.0.0.1:4173/.

## Publicação

O manifesto `.openai/hosting.json` identifica o projeto Sites e o diretório estático. A versão inicial é privada para revisão do proprietário; liberar o acesso público antes de usar o endereço em campanhas.
