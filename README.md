# ONG Águas Vivas 🌊

Site desenvolvido para a ONG Águas Vivas, dedicada à proteção dos oceanos e à preservação da vida marinha.

## Descrição do Projeto

O projeto disponibiliza informações institucionais, divulgação de projetos ambientais, cadastro de voluntários e sistema de doações online. Seu público-alvo são pessoas e comunidades preocupadas com questões ambientais marinhas.

## Funcionalidades Principais

- Navegação acessível por teclado
- Controle de tema (claro, escuro, alto contraste) com mudança dinâmica para inclusão visual
- Formulários acessíveis (doação e cadastro) com validação
- SPA (Single Page Application): navegação sem recarregar a página, experiência fluida e moderna
- Persistência de dados dos cadastros em localStorage, protegendo privacidade do usuário
- Estrutura semântica e responsiva para diversos dispositivos
- Imagens ilustrativas e textos institucionais otimizados

## Tecnologias Utilizadas

- HTML5 (estrutura e semântica)
- CSS3 (design system, responsividade, temas, foco visual)
- JavaScript ES6 Modules (router, views, templates, validação, storage)
- Sem dependências externas (frameworks/bibliotecas)

## Como Executar Localmente

1. Clone o repositório: git clone (https://github.com/JoWsv/Plataforma-ONG_4)
2. Acesse a pasta do projeto: HTML
3. Abra o arquivo `index.html` no navegador.
4. Para navegação SPA funcionar corretamente, use um servidor local: npx http-server .
ou execute via extensão Live Server do VSCode.


## Funcionalidades em JavaScript
- SPA (Single Page Application) usando módulos ES6, roteamento interno e carregamento dinâmico de views/templates.
- Validação de formulários acessível (bordas em vermelho/verde, alertas claros) e confirmação dinâmica.
- Persistência de cadastros no localStorage.
- Mensagens amigáveis e com roles para suporte a leitores de tela.
- Recuperação de erros e experiência aprimorada ao usuário.

## Práticas Adotadas

### Versionamento Profissional

- **GitFlow:** Branches usados para features, correções (hotfixes) e releases.
- **Commits semânticos:** Mensagens descritivas e organizadas.
- **Pull Requests e Issues:** Exemplo no repositório simulando revisão e gerenciamento de tarefas.
- **Milestones:** Definidos para planejar entregas (releases).

### Acessibilidade WCAG 2.1 AA

- Skip link (“pular para o conteúdo principal”)
- Navegação total por teclado (tab, enter)
- Estrutura 100% semântica
- Contraste mínimo verificado manualmente
- Temas claro, escuro e alto contraste
- Formulários com instruções, labels e validação
- Imagens com alt descritivo
- Foco visível em todos controles interativos
- Suporte a leitores de tela (testado com NVDA/Lighthouse)

### Otimização para Produção

- CSS e HTML preparados para minificação
- Imagens otimizadas em tamanho e formato (use TinyPNG ou Squoosh antes do deploy final)


## Como contribuir

Sugestões ou melhorias são bem-vindas! Abra uma issue ou envie um Pull Request de acordo com a convenção do repositório.

## Créditos

Imagens meramente ilustrativas. Site criado para fins educacionais.

## Contato

ONG Águas Vivas | contato@aguasvivas.org.br

---


