# controle-pessoal-de-devedores

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web inspirada em operações comuns de CRUD.

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages

https://github.com/kayamik/controle-pessoal-de-devedores

## Protótipo

https://www.figma.com/file/wmhi6onVr5eHsoiVv7NHx8/Controle-Pessoal-de-Devedores?type=design&node-id=7%3A61&t=DeF7IFXpcFcqsLmR-1

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando: 
  - Comando: `npm run json-server --watch db.json --routes routes.json`
  - O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s`
