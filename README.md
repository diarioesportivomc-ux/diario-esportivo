# Diário Esportivo (PWA)

## Arquivos
index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png. Suba todos na raiz do repositório.

## 1. GitHub Pages
Repositório > Settings > Pages > Branch `main`, pasta `/ (root)`. Anote o endereço, ex.: `https://SEU-USUARIO.github.io/diario-esportivo`.

## 2. Google Cloud (uma vez)
1. https://console.cloud.google.com > criar projeto.
2. APIs e serviços > Biblioteca: ativar **Google Sheets API** e **Google Drive API**.
3. Tela de consentimento OAuth: tipo Externo, preencher nome e e-mail. Em Usuários de teste, adicionar os e-mails que vão usar o app (até 100).
4. Credenciais > Criar credenciais > ID do cliente OAuth > **Aplicativo da Web**.
   Origens JavaScript autorizadas: `https://SEU-USUARIO.github.io` (só o domínio, sem a pasta).
5. Copiar o Client ID.

## 3. Client ID no app
Opção A: em `index.html`, preencher `const CLIENT_ID_PADRAO='...apps.googleusercontent.com';` antes de subir.
Opção B: colar o Client ID na tela de login do app (fica salvo no aparelho).

## Funcionamento
- Primeiro login: o app cria no Drive a planilha "Diário Esportivo - Nome" com as abas Jogos, Mensalidades, Logística, Uniformes, Conquistas, Prêmios, Fotos, Cadastro e Listas.
- Em outro aparelho, o login localiza a mesma planilha e carrega os dados.
- Cada alteração é salva no aparelho e enviada para a planilha em seguida. Sem internet, fica pendente e sobe quando a conexão voltar.
- Edições feitas direto na planilha: no app, Atleta > Recarregar dados da planilha. Mantenha a primeira linha (cabeçalhos) e a coluna ID.
- Fotos especiais enviadas pelo app vão para a pasta "Diário Esportivo - Fotos" no Drive.
- Permissão `drive.file`: o app só acessa os arquivos que ele mesmo criou.
- O acesso do Google vale 1 hora. Depois disso, a barra no topo mostra "Toque para reconectar".

## Instalar no celular
Android (Chrome): menu > Instalar app. iPhone (Safari): Compartilhar > Adicionar à Tela de Início.
