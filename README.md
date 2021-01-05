#  Angular 8 Avançado

___
___

### Digital Innovation One

###### *(Este material é uma transcrição modificada de uma das disciplinas que compõem o Bootcamp da Everis, oferecido por: Digital Innovation One).*

* ###### *Aula ministrada por: Renan Bertoldo*

* ###### *Transcrito e modificado por: Aluizio Monteiro*

[Everis |]( https://www.everis.com/)
[ DIO |](https://www.linkedin.com/school/digitalinnovation-one/about/)
[ Renan Bertoldo |](https://www.linkedin.com/in/renan-rafael-bertoldo/)
[ Aluizio Monteiro](https://www.linkedin.com/in/aluizio-monteiro/)

___

### Objetivos

* Montar um CRUD completo de filmes
* Cadastrar, listar, editar, excluir
* Componentizar todos os elementos
* Criar serviços para consumir os filmes
 
### Requisitos Básicos

 * Curso de Angular 8 Básico.
 * Curso de JavaScript ES6 Essencial.
 * Conhecimentos de Github.

### Ambiente

 * Node 11.
 * Angular 8.
 * Visual Studio Code.

### Bibliotecas necessárias

* **Angular Material:** Especificação padronizada de interface da Google.

* **JSON Server:** Vai gatear um servidor pra gente poder fazer chamadas Rest "get, post, put, delete" na máquina local.

* **NGX-Infinite-Scroll:** Responsável por fazer um scroll infinito. A página vai carregar por demanda, sem paginação. Semelhante ao scroll do Facebook.

* **RxJS:** Responsável pela parte reativa da programação. Isso é muito utilizado no Angular.

___

### Angular Material e RxJS

##### Angular Material:
É a implementação oficial, para o Angular, do Material Design, a especificação de design para interfaces interativas do Google. O Material Design cobre desde pequenos elementos, como ícones e cores, até elementos maiores como navegação, cards, imagens e muito mais.

[Veja alguns lindos componentes](https://material.angular.io/components/categories)

[Veja como é fácil instalar](https://material.angular.io/guide/getting-started)

Vamos criar um projeto para testar isso daí.

1 - Abra o terminal e digite `ng new mat` dentro de uma pasta de sua preferência:

![img/001.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/001.png)

2 - Abra a pasta **/mat** e rode um `npm install`, só por segurança mesmo...

3 - Instale o Angular Material com o comando: `ng add @angular/material`.

4 - Escolha um tema. Aqui vai ser o Indigo/Pink mesmo.

5 - Marque sim para as outras questões que aparecerem durante esta instalação. Para saber mais informações sobre o que significa cada opção consulte o link de [instalação.](https://material.angular.io/guide/getting-started)

6 - Vamos pegar este [simple-form-fields.](https://material.angular.io/components/form-field/overview)

7 - Clique no edit referente ao form-field:

![img/002.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/002.png)

8 - O código será aberto em um editor no próprio Browser.

9 - Na aba **FILES** do editor, veja o arquivo chamado **material-modules**. Este arquivo contem todos os imports que nós vamos precisar para fazer nosso form-fields funcionar:

![img/003.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/003.png)

9 - Copie o conteúdo deste arquivo, abra o VSCode.

10 - Na pasta **/src/app**, crie um arquivo chamado **material.module.ts** e cole o conteúdo copiado dentro dele.

11 - Esta classe se chama **DemoMaterialModule**. Pegue este nome e cole no `app.module.ts` para que o módulo do Angular Material seja importado:

![img/004.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/004.png)

Agora sim. Temos todos os componentes instalados em nosso projeto.

12 - Vamos para o terminal do VSCode subir o nosso projeto com: `npm start`:

13 - Assim que compilar tudo bonitinho, vá para o Browser e acesse o `localhost:4200`:

![img/005.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/005.png)

Tudo tranquilo.

14 - Volte para o editor do Browser e copie aquele html referente ao form:

![img/006.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/006.png)

15 - Substitua o conteúdo de **app.component.html** pelo conteúdo copiado. Preserve as tags `<router-outlet></router-outlet>`:

![img/007.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/007.png)

O form já está funcionando com base no Angular Material:

![img/008.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/008.png)

Viu como é fácil?

Vamos fazer outro exemplo. 

Faremos o mesmo com este card de cachorro [aqui.](https://material.angular.io/components/card/examples)

1 - Abra o código no editor do Browser.

2 - Pegue o html do card e cole no template do projeto.

3 - Pegue também o css do cachorro e cole em **app.component.css**:

![img/009.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/009.png)

Como as bibliotecas já estão importadas em **app.module.ts**, é só isso que precisamos fazer.

Para maiores informações sobre as configurações de cada componente, você deve visitar a página do componente, na guia **Overview**, pois cada componente possui as suas configurações particulares. Na parte de **API** você verá informações de como importar cada componente do Angular Material.

Vamos iniciar nosso projeto, com alguns componentes já criados. Menubar, footer, form,  mas nada impede de você criá-los de um a um.



___
##### A Biblioteca RxJS

O RxJS é uma biblioteca para programação Reativa usando Observable, para facilitar a composição de código assíncrono ou baseado em retorno de chamada.

Para se aprofundar em como o RxJS Funciona, ver exemplos práticos e a utilização de cada componente, vamos acessar o site do [RxJS Learn.](https://www.learnrxjs.io/).

Vamos verificar o [filter.](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter)

Este filter é algo muito utilizado.

Por aqui nós também podemos ver exemplos de uso e temos acesso ao editor de código do Browser.

![img/010.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/010.png)

Vamos verificar:

![img/011.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/011.png)

Agora vamos verificar o [map()](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map), pois ele também é bastante utilizado:

No site do LearnRxJS, abra o StackBlitz do Examplo 1 analise o código da mesma forma que foi feito com o filter anteriormente:

![img/012.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/012.png)

Imagine que você precise percorrer um array de filmes, pegar as datas que estão em um formato bem louco e transformá-las para o formato do seu país. Você provavelmente iria utilizar este `map()`.

Vamos pegar mais um exemplo no site. Agora será o [first.](https://www.learnrxjs.io/learn-rxjs/operators/filtering/first)

Abra o código do Exemplo 1:

![img/013.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/013.png)

Vale lembrar que sem o `subscribe()`, o nosso `first` não vai obter o retorno desejado da operação:

![img/014.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/014.png)

Um outro detalhe é que, diferente do Angular Material, o RxJS não necessita de instalação, pois ele já vem por padrão junto com o Angular.
___

### Iniciando com o Projeto Prático
___
___

Este projeto vai ser inicializado com os itens básicos já montados. Trata-se dos .html e dos .css que não fazem parte do curso de Angular.

1 - Baixe o projeto inicial [aqui.](https://github.com/aluiziomonteiro/angular-avc/tree/5abcfcbc9f752f2bac6d17038577fbbf7e9311a3)

2 - Entre na dentro da pasta do projeto, via terminal, e instale as dependências:

![img/015.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/015.png)

Note que as dependências ficam na pasta **/node-modules**. Não vamos colocá-la no github, pois ela é muito grande e iria demorar a vida do urubu para concluir o upload. Portanto, ao baixar este projeto, execute a instalação das dependências.

O arquivo .gitignore está configurado para ignorar o tracking de **/node-modules**.

3 - Abra o projeto no VSCodee dê um `npm start` nele. Isso vai criar um servidor interno, compilar e subir o nosso projeto:

![img/016.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/016.png)

4 - Assim que concluir tudo, acesse `localhost:4200` no Browser:

![img/017.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/017.png)

Pronto! Este é o esqueleto do projeto inicial.

___

### Instalando o JSON-Server

O JSON-Server criará pra gente chamadas Rest para um back-end que não existe, porém ele vai retornar um Data Base JSON como se fosse realmente um server.

Enfim, a diferença das chamadas Rest reais para as chamadas que vamos realizar aqui basicamente é só a URL de acesso.

Vamos instalar o JSON-Server:

1 - Digite `npm install -g json-server` no terminal:

![img/018.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/018.png)

 Obs: `-g` significa que a instalação é global, isto é, caso você precise utilizar o JSON-Server em outros projetos futuramente, ele estará disponível na sua máquina.
 
Para maiores detalhes sobre a instalação, consulte o [github do JSON-Server.](https://github.com/typicode/json-server)

2 - Salve o arquivo: [db.json](https://github.com/aluiziomonteiro/angular-avc/blob/master/files/db.json) na pasta raiz do projeto. Ele é uma base de dados com registros de filmes.

3 - Inicialize o servidor com o comando `json-server --watch db.json` pelo terminal do VSCode.

![img/019.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/019.png)

4 - Dê uma verificada nas urls geradas. A primeira é uma lista de filmes e a segunda é um readme com informações gerais.

5 - Tente realizar um Post com o Postman para testar:

![img/020.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/020.png)

6 - Acesse `http://localhost:3000/filmes` novamente e veja se o filme adicionado realmente esta lá:

![img/021.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/021.png)

7 - Teste as outras requisições: Get, Put e Delete.

___



### Conhecendo a Estrutura do Projeto

Abrindo a pasta raiz do nosso projeto, temos as seguintes pastas:

* **/src/app/filmes** - Aqui nós temos todos os nossos componentes de tela que são relacionados **ao filme** organizados nas pastas: **/cadastro-filmes** e **/listagem-filmes**.

* **/cadastro-filmes/cadastro-filmes.component.html** - É o nosso .html de cadastro:
![img/030.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/030.png)

* **/cadastro-filmes/cadastro-filmes.component.ts** - Podemos notar que o valor do seletor começa com **dio**. Isso porque este seletor, foi criação dos caras lá da dio.
![img/031.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/031.png)

Isso nós podemos ver dentro do arquivo **/src/tslint.json**:

É neste arquivo que foi indicado que todos os componentes que pertencem ao povo da dio, devem ser iniciados com o prefixo **dio**. Dessa forma é que se mantêm o controle sobre o que foi criado por eles e o que foi criado por terceiros. Isso é uma padronização:

![img/032.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/032.png)

Neste projeto vamos ver muitos seletores do Angular Material. Eles começam com o prefixo **<mat-algumacoisa**.

* **/cadastro-filmes/cadastro-filmes.component.ts** - É o nosso componente de listagem. Dentro dele temos um monte de cards replicados. Isto é um outro problema que vamos resolver logo logo:

![img/033.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/033.png)


* **/cadastro-filmes/filmes.module.ts** - Aqui nós temos a declaração dos dois componentes de filmes e seus respectivos imports. Isso evita da gente ter que sempre que for utilizar os componentes, ter que fazer os imports repetidas vezes.

![img/034.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/034.png)

Nossos componentes estão segmentados no módulo e este módulo de filmes está sendo importado no módulo pai.

* **/src/app/shared** - Em shared, temos dois componentes: **topo** e **rodape**:

![img/027.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/027.png)

Ainda em **/shared** temos a pasta outra pasta chamada **material**. Ela é responsável por carregar todos os componentes que temos no Angular Material.

O Angular Material está importado em nosso **app.module.ts** e isso significa que já podemos utilizar o Angular Material em qualquer lugar da nossa aplicação tranquilamente.

![img/028.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/028.png)

Nunca se esqueça de que o **app.module.ts** é o nosso módulo raiz. Ele é o pai de todos os outros módulos. Isso implica que tudo o que estiver importado dentro deste módulo, vai estar disponível para a aplicação inteira.
Note que: **app.module.ts** lembra **A PaPai module**.

Ainda dentro do módulo pai, temos declarado um **providers** que serve para que o sistema converta automaticamente, todas as datas para o formato **pt**:

![img/029.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/029.png)

* **/src/app/component.html** - E o arquivo inicial do Angular. Dentro dele já temos uma tag `<dio-topo></dio-topo>` e é este componente que vai iniciar toda a nossa aplicação. Ele fica dentro da pasta **/app/shared/topo**.

* **/app/shared/topo/topo.component.html** - Já temos definido o nosso menu lateral e o menu superior. 
* **/app/shared/topo/topo.component.ts** - É o componente e você já pode observar que dentro dele já tem o seletor: **dio-topo** definido. 

O Angular enxerga estes componentes porque eles já estão declarados no arquivo: **app.module.ts** que é o módulo raiz:

![img/023.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/023.png)

Caso você não declare seus componentes no **app.module.ts**:

![img/024.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/024.png)

O Angular não vai conseguir encontrá-lo:

![img/025.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/025.png)

Portanto, não esqueça de declarar os seus componentes aqui e retire o comentário que foi feito para que o web-app volte ao normal.

* **/src/app/component.scss** - 

* **/src/app/component.ts** -

* **/src/app/module.ts** -

* **/src/app/routing.module.ts** - É onde estão todas as nossas rotas:

![img/026.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/026.png)
Elas já estão funcionando pela URL do Browser e também pelo menu da nossa interface.

* **/src/assets/styles** - Contém todos os estilos globais.

* **/src/assets/styles/reset.scss** - Responsável pelo reset das tabelas.

* **/src/assets/styles/styles.scss** - Estilo que nós realmente vamos utilizar. Temos algumas classes básicas criadas como, classe de body, de margem, classe para a parte de listagem dos nossos filmes e temos a full-width que vai ser usada quando quisermos que algum componente ocupe a tela inteira.

* **/src/assets/styles/themes.scss** - Estilos iniciais do próprio tema.

* **/src/assets/images** - Contém esta imagem:

![img/022.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/022.png)


##### Vamos fazer um pequeno ajuste neste app.

Acontece que o **FilmesModule** está sendo importado tanto pelo módulo pai, quanto pelo módulos de rotas:

![img/Diagrama1.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/Diagrama1.png)

Vamos apagar o FilmesModule do módulo pai. O módulo de rotas, que também é importado pelo módulo pai, já está importando FilmesModule para nós:

![img/035.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/035.png)

Pronto.











<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />