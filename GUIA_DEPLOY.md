# Guia de Deploy no GitHub e Publicação

Este guia explica como subir seu código para o GitHub e publicar o site para que ele funcione 100%.

## 1. Preparação (Já Realizada)
- O projeto foi compilado (verifique a pasta `dist`).
- A pasta `dist` contém os arquivos otimizados para produção.
- O `.gitignore` está configurado para não enviar arquivos desnecessários.

## 2. Subindo o Código para o GitHub

Se você ainda não tem um repositório, crie um no [GitHub](https://github.com/new).

No terminal do seu projeto (VS Code ou CMD), execute:

```bash
# 1. Inicialize o git (se já não estiver)
git init

# 2. Adicione todos os arquivos
git add .

# 3. Faça o commit inicial
git commit -m "Versão final: Site completo com bônus e rastreamento"

# 4. Conecte ao seu repositório remoto (substitua URL_DO_SEU_REPO pelo link do seu github)
git remote add origin URL_DO_SEU_REPO

# 5. Envie para o GitHub
git push -u origin main
```

## 3. Publicando o Site (Para Funcionar Online)

A maneira mais fácil e robusta de hospedar este site React (que usa rotas) gratuitamente é usando o **Vercel** ou **Netlify**, conectando com seu GitHub. O GitHub Pages pode exigir configurações extras para rotas, enquanto o Vercel lida com isso automaticamente.

### Opção A: Vercel (Recomendada - Mais Fácil e Compatível)
1.  Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
2.  Clique em **"Add New..."** -> **"Project"**.
3.  Selecione o repositório `health-journal-daily` que você acabou de subir.
4.  Clique em **"Deploy"**.
5.  Pronto! Em segundos seu site estará no ar com HTTPS e tudo funcionando.

### Opção B: GitHub Actions / Pages (Se preferir apenas GitHub)
Se fizer questão de usar o GitHub Pages:
1.  Vá em **Settings** > **Pages** no seu repositório.
2.  Em "Build and deployment", escolha "GitHub Actions".
3.  Procure por "Static HTML" ou "Vite" se disponível.

**Nota Importante sobre Rotas (GitHub Pages):**
Se usar GitHub Pages, pode ser necessário ajustar o arquivo `vite.config.ts` adicionando `base: '/nome-do-repositorio/'` para que as imagens e links funcionem, caso não use um domínio personalizado. No Vercel, o padrão funciona perfeitamente.

## 4. Teste Final
Após o deploy, acesse a URL gerada e verifique:
1.  Se as imagens carregam.
2.  Se as páginas de política (Privacy, Terms, etc.) abrem corretamente.
3.  Se ao recarregar a página (F5) em uma rota interna (ex: `/privacy`), ela não dá erro 404.
4.  Se os links externos (CTA) levam ao destino correto com os parâmetros de rastreamento.
