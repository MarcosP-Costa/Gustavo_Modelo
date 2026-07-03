# ⚙️ Guia de Customização e Configuração — Gustavo_Modelo

Este arquivo contém todas as instruções necessárias para que você ou o modelo possam customizar as imagens, as cores, as fontes e colocar o site no ar através do GitHub Pages.

---

## 📸 1. Gestão de Imagens e Fotos

Para que o site mantenha a estética premium e não ocorram quebras de layout, siga as diretrizes abaixo para o tratamento das imagens.

### A. Onde Salvar as Imagens locais
Todas as fotos devem ser salvas na pasta:  
📁 `assets/images/`

### B. Proporções e Resoluções Recomendadas
O CSS está configurado para cortar as fotos automaticamente usando `object-fit: cover`. Isso significa que as imagens se ajustam para preencher o espaço sem distorcer (esticar ou amassar). No entanto, se as dimensões forem muito diferentes das recomendadas, partes importantes da foto podem ser cortadas.

| Tipo de Imagem | Caminho do Arquivo (Local) | Proporção | Resolução Recomendada | Tamanhos Críticos (Evitar) |
| :--- | :--- | :--- | :--- | :--- |
| **Foto de Perfil (Sobre)** | `assets/images/perfil.jpg` | **4:5** (Retrato) | **800 x 1000 px** | Menores que `400 x 500 px` (pixelado) ou resoluções horizontais/paisagem (corte agressivo nas laterais). |
| **Fotos do Portfólio** | `assets/images/portfolio_[tipo]_[num].jpg` | **4:5** (Retrato) | **800 x 1000 px** | Evitar fotos muito largas (16:9), pois o rosto do modelo pode ser cortado na renderização vertical. |

*Exemplo de nomenclatura sugerida para o portfólio:*
*   `portfolio_street_01.jpg`
*   `portfolio_goth_01.jpg`
*   `portfolio_art_01.jpg`

---

## 🔗 2. Como Usar Hospedagem Externa de Imagens

Se preferir não salvar as imagens diretamente no repositório (para poupar espaço no GitHub ou acelerar o upload), você pode usar serviços de hospedagem externos como **Imgur**, **Cloudinary**, **Postimages** ou a CDN do próprio WhatsApp.

### Como alterar no código:
1. Faça o upload da imagem no serviço externo e copie o **link direto da imagem** (o link que termina com `.jpg` ou `.png`).
2. Abra o arquivo `index.html`.
3. Substitua o link local da imagem no atributo `src`.
   *   *De:* `<img src="assets/images/perfil.jpg" alt="...">`
   *   *Para:* `<img src="https://i.imgur.com/seulinkdireto.jpg" alt="...">`

---

## 🎨 3. Customização de Cores e Estética

Todo o design system do site é baseado em **Variáveis CSS** localizadas no arquivo [style.css](file:///mnt/c/Marcos_Astra/Astra_Segundo_Cerebro/05_Github/03_Gustavo_Modelo/style.css) na regra `:root`.

Para alterar a identidade cromática do site, basta mudar os valores hexadecimais abaixo na linha 5 do CSS:

```css
:root {
    --bg-base: #070708;          /* Fundo escuro principal */
    --bg-surface: rgba(15, 15, 18, 0.6); /* Cor dos painéis translúcidos */
    
    /* Cores de Acento */
    --color-primary: #8b5cf6;    /* Cor Violeta (Neon Primário) */
    --color-secondary: #d946ef;  /* Cor Magenta (Neon Secundário) */
    --color-accent: #06b6d4;     /* Cor Ciano (Acento Secundário) */
}
```

*   **Quer mudar o Neon Violeta para Vermelho?** Altere `--color-primary` para `#ef4444`.
*   **Quer mudar o Ciano para Verde Cyberpunk?** Altere `--color-accent` para `#10b981`.

---

## font-family 4. Alterando Fontes (Typography)

O site utiliza as fontes **Syne** (para títulos de impacto) e **Inter** (para textos de leitura).

Se quiser alterar a tipografia:
1. Acesse o [Google Fonts](https://fonts.google.com/), selecione a fonte desejada e copie o link HTML fornecido.
2. Abra o `index.html` e substitua o link de fontes na seção `<head>` (linha 22).
3. No arquivo `style.css`, atualize as variáveis correspondentes no `:root`:
   ```css
   --font-heading: 'Nova-Fonte-Titulo', sans-serif;
   --font-body: 'Nova-Fonte-Texto', sans-serif;
   ```

---

## 🌐 5. Configuração no GitHub Pages

Para publicar o portfólio de forma gratuita com HTTPS ativo, siga estas etapas simples:

1.  Crie um repositório público no seu GitHub chamado `Gustavo_Modelo`.
2.  Faça o upload ou dê um `git push` de todos os arquivos locais para a branch principal (`main`).
3.  No painel do GitHub do seu repositório:
    *   Clique na aba **Settings** (Configurações).
    *   No menu lateral esquerdo, selecione **Pages**.
    *   Em **Build and deployment -> Source**, selecione **Deploy from a branch**.
    *   Em **Branch**, clique no menu suspenso, mude de *None* para **`main`** e selecione a pasta `/ (root)`.
    *   Clique em **Save**.
4.  Aguarde cerca de 1 a 2 minutos. O GitHub gerará o link oficial e exibirá no topo da página. O link será parecido com:  
    `https://[seu-usuario-github].github.io/Gustavo_Modelo/`

---

## 🛠️ 6. Como Funcionam os Arquivos do Site

*   **`index.html`**: Contém todo o esqueleto e textos do site. Se precisar alterar links de redes sociais ou os dados de medidas do modelo (altura, cabelo, olhos), basta procurar o texto correspondente nas tags HTML e editar.
*   **`style.css`**: Gerencia todo o visual. Temas escuros, brilho neon, efeitos de borrão (*blur*), e o comportamento responsivo (celular, tablet e computador).
*   **`app.js`**: Gerencia interações. Quando você clica nas abas do portfólio, ele filtra as fotos aplicando transições de opacidade. Também controla a barra de navegação no topo, que fica mais escura conforme você rola a página.
