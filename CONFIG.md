# ⚙️ Guia Prático de Atualização — Gustavo_Modelo

Este guia rápido explica como alterar as fotos, editar os textos de informações do modelo e colocar o site no ar sem precisar de conhecimentos de programação.

---

## 📸 1. Como Atualizar as Fotos

Todas as fotos do site ficam guardadas na pasta:  
📁 `assets/images/`

Para mudar qualquer imagem, basta salvar a foto nova nessa pasta com o **exato mesmo nome** da foto que já está lá (substituindo a antiga).

### Fotos recomendadas:
*   **Dê preferência para fotos tiradas em pé (na vertical / retrato).** Fotos na horizontal podem ter as laterais cortadas automaticamente para caber no design do site.
*   **Foto de Perfil:** Deve se chamar `perfil.jpg`.
*   **Fotos da Galeria:**
    *   Streetwear: Salve como `portfolio_street_01.jpg` e `portfolio_street_02.jpg`.
    *   Dark / Gothic: Salve como `portfolio_goth_01.jpg` e `portfolio_goth_02.jpg`.
    *   Artístico: Salve como `portfolio_art_01.jpg` e `portfolio_art_02.jpg`.

---

## ✍️ 2. Como Editar os Textos (Altura, Contatos, Biografia)

Todos os textos que aparecem no site estão escritos no arquivo [index.html](file:///mnt/c/Marcos_Astra/Astra_Segundo_Cerebro/05_Github/03_Gustavo_Modelo/index.html).

### Passo a passo para editar:
1. Abra o arquivo [index.html](file:///mnt/c/Marcos_Astra/Astra_Segundo_Cerebro/05_Github/03_Gustavo_Modelo/index.html) no Bloco de Notas do seu computador ou em qualquer editor de código simples.
2. Pressione `Ctrl + F` (buscar) e digite a informação que deseja alterar (por exemplo, `1,92m` ou `Escuro`).
3. Altere o texto que está entre as tags. **Exemplo:**
   *   *Antes:* `<span class="stat-value">1,92m</span>`
   *   *Depois:* `<span class="stat-value">1,90m</span>`
4. Salve o arquivo (`Ctrl + S`).

---

## 🌐 3. Como Colocar o Site na Internet (GitHub Pages)

Para que qualquer pessoa possa acessar o portfólio pelo celular ou computador através de um link:

1. Acesse o seu repositório no GitHub.
2. Clique na aba **Settings** (Configurações) no menu superior.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment -> Source**, mantenha em `Deploy from a branch`.
5. Em **Branch**, selecione **`main`** e clique em **Save**.
6. Aguarde 2 minutos. O link oficial do seu site será exibido no topo dessa mesma página.
