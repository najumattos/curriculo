# 📄 Meu Currículo Online & Mural de Mensagens

Este projeto é uma versão interativa e moderna do meu currículo profissional, desenvolvida para explorar o conceito de Vibe Coding e o uso estratégico de IAs Generativas (GitHub Copilot) no fluxo de desenvolvimento.

O objetivo foi validar como ferramentas de IA podem acelerar a entrega sem comprometer a semântica do HTML, a organização de pastas e a segurança dos dados.

## 🚀 Tecnologias Utilizadas
* Frontend: HTML, CSS e JavaScript;
* Banco de Dados: Firebase (Firestore);
* Hospedagem: GitHub Pages;
* Produtividade: GitHub Copilot.

  ## 🛠️ Funcionalidades
* Currículo Interativo: Links clicáveis para redes sociais e botão para download do PDF;
* Dark/Light Mode: Alternância de tema para melhor experiência de leitura;
* Mural de Mensagens (NoSQL):
  * Mensagens Públicas: Exibição de Nome, Título, Mensagem e Data.
  * Mensagens Particulares: Formulário dedicado com campo de e-mail obrigatório (visível apenas para a administradora via console).

## 🔐 Segurança e Validação (Cliente-Side & Server-Side)
Diferente de projetos puramente front-end, este repositório implementa Firebase Security Rules. Isso garante que a integridade dos dados seja mantida no nível do banco de dados, impedindo gravações maliciosas.

## 🧠 Aprendizados e Decisões Técnicas
* Escolha do Banco: Optei pelo Firebase (NoSQL) pela sua leveza e agilidade. Para um sistema de mensagens simples, um banco relacional seria um over-engineering desnecessário;
* IA com Cautela: O uso da IA foi focado em produtividade. O código gerado passou por Code Review manual para garantir que a semântica e a acessibilidade fossem respeitadas;
* Refatoração: Após o término das "fichas" da IA, o projeto foi finalizado e refinado no "modo raiz", garantindo que eu tivesse total controle sobre a lógica de integração com o Firebase.

## ⚠️ Status do Projeto
Atualmente, o projeto está em sua versão funcional inicial.

* [x] Integração com Firestore;
* [x] Validação de Security Rules;
* [ ] Refatoração: Remover redundância de LocalStorage e centralizar no Firestore.
* [ ] Próximo passo: Ajuste de responsividade fina para dispositivos móveis específicos.

Agora que você ja conhece o projeto, vai lá deixar uma mensagem :D
https://najumattos.github.io/curriculo/
