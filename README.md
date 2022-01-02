<h1 align="center" >
  <img src="https://user-images.githubusercontent.com/78622405/147860912-8a625c37-1260-44c4-8d67-5ee8cb528f2c.gif" alt="Imagem" />
</h1>

<p align="center">Teste seus conhecimentos e divirta-se!</p> 

<br/>
<br/>

# 📖 Índice
<!--ts-->
  * [Sobre o projeto](#ℹ️-sobre-o-projeto)
  * [Tecnologias](#-tecnologias)
  * [Linter](#linter)
  * [APIs](#-apis)
  * [Pré Requisitos](#-pré-requisitos)
  * [Screenshots](#-screenshots)
  * [Autores](#-autores)

<!--te-->

<br/>

---

<br />

## ℹ️ Sobre o projeto
Trivia, um jogo divertido de perguntas de conhecimentos gerais com temas como jogos, lugares, filmes, carros, história, política, etc. <br />
Faça login e o jogo começa! <br />

Se você possuir uma conta no [Gravatar](https://br.gravatar.com/) com foto ela será exibida na tela.
Há duas categorias de perguntas, e você tem até 30 segundos para responder.
Um deles consiste em perguntas de múltipla escolha com quatro alternativas, e o segundo tipo é de verdadeiro ou falso. <br />

Ao acertar uma pergunta você ganhará pontos, e quanto mais rápido responder mais pontos este acerto valerá.
Ao errar ou acabar o tempo nenhum ponto é acrescentado.
No final poderá conferir a quantidade de acertos, pontos e receberá um feedback.

### Estrutura
  - Tela de login
    - Campos para fazer login
      - Há uma validação simples nos campos, é preciso um email válido e uma senha de no mínimo 7 caracteres.
    - Botão para ir ao menu de configurações
  - Tela de perguntas
    - Header onde é exibido o score, a imagem do gravatar e o nome do usuário
    - Corpo onde é exibida a pergunta, as alternativas e o botão para ir para a próxima
  - Tela de feedback
    - Header onde é exibido o score, a imagem do gravatar e o nome do usuário
    - Corpo onde é exibido o total de acertos, a pontuação, um feeback, um botão para começar o jogo novamente
  e um botão para acessar a tela de Ranking
  - Tela de ranking onde é exibido o nome dos jogadores com as respectivas pontuações
  - Tela de configurações onde o usuário pode escolher a categoria, a dificuldade e o tipo das perguntas.
 
### Protótipo do projeto
Para o protótipo foi utilizado a ferramenta [Figma](https://www.figma.com/)
<br/>
Você pode conferir aqui:
<br/>
<a href="https://www.figma.com/file/9XUqIwKEFBfbZn5t8MMZJY/Trivia---project?node-id=0%3A1">
  <img alt="Badge Figma" src="https://img.shields.io/badge/Prot%C3%B3tipo-Figma-%23DB2955?style=for-the-badge">
</a>

### Ferramenta kanban
Para organizar o fluxo de produção e dividir as tarefas utilizamos o [Trello](https://trello.com/)
<br/>
Confira aqui o quadro utilizado:
<br/>
<a href="https://trello.com/b/OY9qD4WM/grupo-34">
  <img alt="Badge Trello" src="https://img.shields.io/badge/Kanban-Trello-informational?style=for-the-badge">
</a>

<br />

>**NOTA:**<br />
>Este foi um dos projetos do módulo de Front-End do curso de [Desenvolvimento Web Full-Stack](https://www.betrybe.com/formacao-desenvolvimento-web) da [Trybe](https://www.betrybe.com/) para colocarmos 
>em prática tudo o que havíamos aprendido até então, especialmente o armazenamento e compartilhamento de estados entre os componentes [React](https://pt-br.reactjs.org/) com o [Redux](https://redux.js.org/), e também metodologias ágeis e soft skills.
>Toda a estutura do projeto com as orientações, requisitos, protótipo e kanban foram fornecidos pela [Trybe](https://www.betrybe.com/)

<br />

---

## Status
🚧 **Projeto em construção** 🚧

<br />

---

<br />

## 🛠 Tecnologias
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
  <img alt="Badge HTML5" src="https://img.shields.io/badge/-HTML5-%23050A30?style=for-the-badge&logo=html5">
</a>

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
  <img alt="Badge CSS3" src="https://img.shields.io/badge/-CSS3-%231572B6?style=for-the-badge&logo=css3">
</a>

- <a href="https://www.javascript.com/">
  <img alt="Badge JavaScript" src="https://img.shields.io/badge/-JavasCript-%23181818?style=for-the-badge&logo=javascript">
</a>

- <a href="https://pt-br.reactjs.org/">
  <img alt="Badge ReactJS" src="https://img.shields.io/badge/-ReactJS-%23181818?style=for-the-badge&logo=react">
</a>

- <a href="https://redux.js.org/">
  <img alt="Badge Redux" src="https://img.shields.io/badge/-Redux-%23764ABC?style=for-the-badge&logo=redux">
</a>

- <a href="https://reactrouter.com/">
  <img alt="Badge React Router" src="https://img.shields.io/badge/-React%20Router-%23181818?style=for-the-badge&logo=reactrouter">
</a>

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint`. Caso queira rodar o linter localmente execute o comando abaixo:

```bash
npm run lint
```

## 🖥 APIs

### Open Trivia Database

A [Open Trivia Database](https://opentdb.com/) é um banco de dados de perguntas e respostas de uso gratuito, criado pela [PIXELTAIL GAMES LLC](https://www.pixeltailgames.com/)

Você pode acessar a documentação da API [aqui](https://opentdb.com/api_config.php)

O modelo de resposta para uma pergunta é o seguinte:
  <details>
    <summary>Ver modelo de resposta de uma pergunta</summary>

  ```json
    {
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"boolean",
         "difficulty":"hard",
         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
         "correct_answer":"False",
         "incorrect_answers":[
            "True"
         ]
      }
   ]
}
  ```
  </details>
  
### Gravatar
O [Gravatar](https://br.gravatar.com/) é um serviço que permite criar um avatar global a partir do email cadastrado, ele mostra sua foto cadastrada em qualquer site vinculado. Na tela de login, o usuário pode utilizar um e-mail cadastrado no gravatar para ter seu avatar vinculado ao jogo.
Documentação da [API do Gravatar](https://br.gravatar.com/site/implement/images/).

<br/>

---

<br/>

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e o gerenciador de pacotes [NPM](https://www.npmjs.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
- Tutorial de como [Instalar NPM no Linux](http://devfuria.com.br/nodejs/instalando-npm/)
- Tutorial de como [Instalar NPM no Windows](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/)

### 🚀 Rodando a aplicação localmente

```bash
# Clone este repositório
$ git clone https://github.com/CaioOK/Trivia

# Acesse a pasta do projeto no terminal/cmd
$ cd Trivia

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# Por padão a aplicação inciará na porta:3000 - Seu navegador padrão abrirá o seguinte link http://localhost:3000
# É preciso haver conexão com a internet para rodar a aplicação
```

<br/>

---

<br/>

## 📸 Screenshots

<div>
  <img src="https://user-images.githubusercontent.com/78622405/147886686-34943877-aa26-48cb-9f1f-9f02b24c6615.png" alt="Página de Login 1"/>
</div>

<br />
<br />
<br />
<br />

<div>
  <img src="https://user-images.githubusercontent.com/78622405/147886714-82ddb179-09b4-4aaa-8bf3-d9c34de5cb48.png" alt="Página de Login 2"/>
</div>

<br />
<br />
<br />
<br />

<div>
  <img src="https://user-images.githubusercontent.com/78622405/147886744-c03e80cf-1400-43b7-8730-da62f9cfcb6d.png" alt="Página de Perguntas 1"/>
</div>

<br />
<br />
<br />
<br />

<div>
  <img src="https://user-images.githubusercontent.com/78622405/147886761-fd280b4a-3f50-4b19-9677-a456d8a739b2.png" alt="Página de Pergutas 2"/>
</div>

<br />
<br />
<br />
<br />

<div>
  <img src="https://user-images.githubusercontent.com/78622405/147886771-01d94ad7-9e2e-4a4a-a5e6-caf0725697e9.png" alt="Página de Feedback"/>
</div>

<br />
<br />

---

<br/>
<br/>

## 📝 Autores

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/CaioOK">
        <img
          style="border-radius: 50%;"
          src="https://avatars.githubusercontent.com/u/78622405?v=4"
          width="100px;"
          alt="Caio Oliveira"
        />
        <br />
        <sub><b>Caio Oliveira</b></sub>
      </a>
      <br />
      <a href="https://github.com/CaioOK" title="GitHub Caio Oliveira" >
        <img
          src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github"
          alt="GitHub Caio"
        />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/caiook/" title="Linkedin Caio">
        <img
          src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin"
          alt="Linkedin Caio"
        />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/guiprais">
        <img
          style="border-radius: 50%;"
          src="https://avatars.githubusercontent.com/u/72233319?v=4"
          width="100px;"
          alt="Guilherme de Prais"
        />
        <br />
        <sub><b>Guilherme de Prais</b></sub>
      </a>
      <br />
      <a href="https://github.com/guiprais" title="GitHub Gui Prais" >
        <img
          src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github"
          alt="GitHub Gui Prais"
        />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/guilherme-de-prais/" title="Linkedin Gui Prais">
        <img
          src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin"
          alt="Linkedin Gui Prais"
        />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/MarcioFujita">
        <img
          style="border-radius: 50%;"
          src="https://avatars.githubusercontent.com/u/74433317?v=4"
          width="100px;"
          alt="Marcio Fujita"
        />
        <br />
        <sub><b>Marcio Fujita</b></sub>
      </a>
      <br />
      <a href="https://github.com/MarcioFujita" title="GitHub Marcio Fujita" >
        <img
          src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github"
          alt="GitHub Marcio Fujita"
        />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/marciofujitadonaire/" title="Linkedin Marcio Fujita">
        <img
          src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin"
          alt="Linkedin Marcio Fujita"
        />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pv209">
        <img
          style="border-radius: 50%;"
          src="https://avatars.githubusercontent.com/u/78616864?v=4"
          width="100px;"
          alt="Paulo V. F. Borges"
        />
        <br />
        <sub><b>Paulo V. F. Borges</b></sub>
      </a>
      <br />
      <a href="https://github.com/pv209" title="GitHub Paulo V. F. Borges" >
        <img
          src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github"
          alt="GitHub Paulo V. F. Borges"
        />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/paulo-vitor-de-farias-borges-333368206/" title="Linkedin Paulo V. F. Borges">
        <img
          src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin"
          alt="Linkedin Paulo V. F. Borges"
        />
      </a>
    </td>
  </tr>
</table>

<p align="center">Projeto realizado em pair programming. Praticamos escuta ativa, dar e receber fedbacks assertivos, colaboração,  etc. e tudo isso nos trouxe muito aprendizado e crescimento tanto pessoal quanto profissional. Verdadeiramente uma experiência enriquecedora!</>
