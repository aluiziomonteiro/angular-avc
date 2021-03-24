#  Angular 8 Avançado

___
___

### Preparando-se para o conteúdo do projeto
##### Objetivos

* Montar um CRUD completo de filmes
* Cadastrar, listar, editar, excluir
* Componentizar todos os elementos
* Criar serviços para consumir os filmes
 
##### Requisitos Básicos

 * Curso de Angular 8 Básico.
 * Curso de JavaScript ES6 Essencial.
 * Conhecimentos de Github.

##### Ambiente

 * Node 11.
 * Angular 8.
 * Visual Studio Code.

##### Bibliotecas necessárias

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
##### Clonando projeto inicial do GitHub

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

##### Instalando o JSON-Server

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



##### Explicando estrutura inicial do projeto

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

[Código do Projeto](https://github.com/aluiziomonteiro/angular-avc/tree/fd4cf5c03f56e2c636b22a7a00395e7db542442c)

___


### Criando um formulário reativo

##### Criando um Formulário

Vamos mexer agora somente na parte de cadastro de filmes.

1 - Em **/src/app/filmes/cadastro-filmes/cadastro-filmes.component.ts**, vamos ver este `FormGroup`. Aproveite e mude este nome de `options` para `cadastro`, pois faz mais sentido:

![img/036.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/036.png)

Quem fornece recursos para a implementação do FormGroup e de outros tipos de formulários é o `FormBuilder`.

2 - Digite no Google: Angular FormBuilder para que você adquira o dom das pesquisas, ou então clique aqui: [lazySkills++.](https://angular.io/api/forms/FormBuilder)

Aqui está especificando o que ele é, o que recebe e o que retorna:

![img/037.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/037.png)

O que vai acontecer é que nós vamos utilizar um `FormBuilder` passando um método `group()` que vai nos retornar um `FormGroup`.

Aqui no site tem um exemplo de como usar um `FormControl`. Faremos a mesma coisa, mas usando o `FormGroup`. Isto porque queremos não só um input, e sim, um grupo de inputs:

![img/038.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/038.png)

3 - Importe o `FormBuilder` no construtor do componente **cadastro-filmes**.

~~~typescript
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
selector: 'dio-cadastro-filmes',
templateUrl: './cadastro-filmes.component.html',
styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

cadastro: FormGroup;

constructor(private fb: FormBuilder) { }

ngOnInit() {

this.cadastro = this.fb.group({

});

}

}

~~~

Na parte sublinhada da imagem abaixo, é pedido que seja passado o nome do input, seu valor e o tipo de validação:

![img/039.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/039.png)


4 - Vamos para o template verificar o nome dos inputs e em seguida vamos passar estas informações para dentro do `group()`:

![img/040.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/040.png)

O código do `group()` fica da seguinte maneira:

![img/041.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/041.png)

Vamos compreender tudo isso:

* Primeiro acontece que o `FormBuilder` vai gerar isso tudo que foi especificado pra gente. 

* Se alguma condição dessas não for cumprida, o moído todo será invalidado.

* Ainda vamos adicionar estas referências nos inputs do template.

* O validator required é uma condição de not null.

* O validator minLength e maxLength se refere ao tamanho da cadeia de caracteres.

* O validator min e max se refere ao valor numérico.

Agora vamos referenciar os campos no template.

1 - Vamos dar um nome e dizer qual é o `formControlName` que cada input se refere:

![img/042.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/042.png)

2 - Reinicie o servidor e rode a aplicação:

![img/043.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/043.png)

Deu erro porque não definimos nosso formGroup no template. Precisamos envolver nossos inputs por um formGroup conforme o exemplo citado na própria mensagem de erro:

![img/044.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/044.png)

3 - Teste a aplicação novamente:

![img/045.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/045.png)

Os campos já estão dando sinais de que estão validando conforme nós especificamos no component. Precisamos só fazer um ajuste para o campo **nota** parar de aceitar letas.

2 - Configure o campo **nota** no **template** da seguinte maneira:

~~~html
...
<mat-form-field class="full-width">
<input matInput 
type="number"
min="0"
max="10"
step="0.1"
placeholder="Nota IMDb" 
name="nota" 
formControlName="nota">
</mat-form-field>
...
~~~

3 - Teste novamente a aplicação e veja se a nota está funcionando bem.

Agora nós vamos submeter o nosso form com o databind`(ngSubmited)` apontando para o método `salvar()`. Isso vai enviar nosso form só de ida para o .ts dele. Criaremos, também um reset para ele:

![img/046.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/046.png)

4 - Agora vamos para o component criar estes dois métodos lá:

![img/047.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/047.png)

5 - Coloque os `type="reset"` e `type="submit"` nos botões do template:

~~~typescript
...
<mat-card-actions>
<button type="submit" color="accent" mat-raised-button>Salvar</button>
<button type="reset" color="warn" mat-raised-button>Cancelar</button>
</mat-card-actions>
...
~~~

6 - Teste se está limpando e enviando o form para o método salvar:

![img/048.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/048.png)

Neste momento, o `FormGroup` já está lendo o nosso formulário.

___

##### Adicionando Validações ao Formulário


Não queremos que o campo de data fique aceitando qualquer coisa:

![img/049.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/049.png)

Vamos colocar algumas limitações no campo data do template:

1 - Adicione `readonly` para que o input não aceite mais entradas.

2 - Chame `picker.open()` quando o input receber um clique:

~~~typescript
...
<mat-form-field class="full-width">
<input matInput 
readonly 
[matDatepicker]="picker" 
placeholder="Data de Lançamento" 
name="dtLancamento" 
formControlName="dtLancamento"
(click)="picker.open()">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>
</mat-form-field>
...
~~~
Agora sim. Ao clicar no input, nosso Datepicker será exibido e a entrada de textos está bloqueada:

![img/050.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/050.png)

[Mais sobre datepicker](https://material.angular.io/components/datepicker/overview)

3 - Acrescente um asterisco no label dos campos que são obrigatórios. Isto é mais uma forma de alertar os usuários.

Agora vamos adicionar as mensagens de erro. O Angular Material possui uns `Error messages` que podem ser exibidos com o uso do `<mat-error></mat-error>`.

[Mais sobre form-field](https://material.angular.io/components/form-field/overview)

4 - Coloque uma mensagem de erro para o campo Título. Faça com que o erro dispare quando o campo tiver sido clicado: "touched", quando tiver algum erro:"dirty" e quando o erro ocorrer em nosso input titulo: "get().errors". Esta linha vai dentro do `<mat-form-field>` referente ao input desejado:

~~~typescript
<mat-form-field class="full-width">
<input matInput placeholder="Título *" name="titulo" formControlName="titulo">
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && cadastro.get('titulo').errors"> Deu erro </mat-error>
</mat-form-field>
~~~
Nosso erro já é exibido:

![img/051.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/051.png)

Mas nós queremos especificar exatamente qual é o erro que deu em nosso form de uma maneira mais elegante. Vamos criar um método dentro do componente para fazer isso:

1 - Crie um método abaixo do construtor do componente. Ele será um método `get()` genérico que vai ser utilizado por todos os inputs. O retorno dele é `controls` do nosso cadastro. Controls são todos os nossos inputs de formBuilder.

~~~typescript
...
export class CadastroFilmesComponent implements OnInit {

cadastro: FormGroup;

constructor(private fb: FormBuilder) { }

get f(){
return this.cadastro.controls;
}
...
~~~

2 - Vamos simplificar a nossa chamada de título chamando o nosso método **f**:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors"> Deu erro </mat-error>
...
~~~

Nesse momento, temos uma só mensagem tratando de três erros:

![img/052.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/052.png)

Vamos personalizar ainda mais o tratamento desses erros.

3 - Aponte para o erro de `required` e mude a mensagem informativa:

~~~typescript
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.required"> Campo obrigatório </mat-error>
~~~


![img/053.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/053.png)


Ainda tem um pequeno detalhe. Acontece que se nós clicarmos em Salvar com os dados inválidos, a mensagem de erro não vai aparecer. Ela só aparece quando o campo for touched.

4 - Vamos fazer com que todos os campos sejam marcados como clicados dentro da função `salvar()`:

![img/054.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/054.png)

Agora se clicarmos em Salvar, as mensagens aparecem:

![img/055.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/055.png)

O erro de required já esta tratado. Vamos tratar os dois erros de length agora.

5 - Adicione o `<mat-error` de `minlength` e outro de `maxlength`:

~~~typescript
...
<mat-form-field class="full-width">
<input matInput placeholder="Título *" name="titulo" formControlName="titulo">
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.maxlength"> 
O campo pode ter no máximo 256 caracteres 
</mat-error>
</mat-form-field>
... 
~~~

Teste se as validações estão passando para o required, minlength e maxleng, tanto salvando quanto sem salvar.

Vamos cuidar de validar os outros campos.

* O campo `urlFoto` usa minLength(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.urlFoto.errors && f.urlFoto.errors.minlength"> 
O campo precisa ter no mínimo 10 caracteres 
</mat-error>
...
~~~

* O `dtLancamento` é um required:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.dtLancamento.errors && f.dtLancamento.errors.required"> 
Campo obrigatório 
</mat-error>
...
~~~

* A `descricao` não tem nada.


* A `nota` é required, min(0) e max(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.required"> 
Campo obrigatório
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.min"> 
Valor mínimo permitido é 0
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.max"> 
Valor máximo permitido é 10 
</mat-error>

...
~~~

* A `urlIMDb` é minLength(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.urlIMDb.errors && f.urlIMDb.errors.minlength"> 
O campo precisa ter no mínimo 10 caracteres 
</mat-error>
...
~~~

* E o `genero` é um required:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.genero.errors && f.genero.errors.required"> 
Campo obrigatório 
</mat-error>
...
~~~

Pronto! Tudo funcionando como foi determinado.

![img/056.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/056.png)

Porém, estamos utilizando muito código ainda.

___

##### Elvis Operator ![img/057.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/057.png)


Note que sempre estamos testando **se o campo possui erros** e em seguida testamos novamente **se ele possui o erro de validação?**

![img/058.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/058.png)

Caso a gente retire a verificação `f.titulo.erros &&`

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
...
~~~

O console surta! Apontando que a propriedade `required` está `null`:

![img/059.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/059.png)

Nesse caso, o campo `titulo` não tem erros, mas o estado da propriedade de `required` deixou de existir. O `f.titulo.required` está tentando encontrar o valor do erro, mas ele só encontra `null`.

Podemos corrigir isso colocando um ponto de interrogação após o `errors`:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors?.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
...
~~~

Com isso, o Angular vai executar a verificação do `required` **somente** se houver erros em `f.titulo`. Caso não ocorra erros, então retorne false.

![img/060.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/060.png)

1 - Vamos apagar a verificação de erro `f.titulo.errors &&` e adicionar o Elvis `?` em todas as verificações:

![img/061.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/061.png)

2 - Testando o formulário, podemos ver que está tudo okay:

![img/062.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/062.png)

Vamos utilizar o Elvis bastante para combater os `null`. ?:j

___

##### Serviço para Validação de Erros

Nosso código ainda está muito sujo, cheio de verificações e de coisas replicadas:

![img/063.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/063.png)

Vamos retirar toda essa lógica, criar um serviço e centralizar tudo lá:

1 - Instale o schematics: `npm install @schematics/angular@7.0.7 --save-dev`.

* **--save-dev** - Salve nas dependências de desenvolvimento. 
Acontece que temos um arquivo chamado **/package.json**. 
Dentro dele, as dependências são divididas em **dependências para produção** e **dependências para desenvolvimento**.
Estamos salvando o schematics nas dependências de produção:

![img/064.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/064.png)

Isso quer dizer que, esta dependência só vai ser usada em desenvolvimento. Quando formos gerar o nosso build para produção, as dependências de dev não vão existir.

2 - Entre na raiz do projeto via terminal e digite:`ng g s shared/components/campos/validarCampos` para o Angular .
**Generate a Service** para nós.

* **g** - generate.

* **s** - service.

* **shared/components/campos/validarCampos** - caminho. 

O Angular já cria pra gente o provider e injeta o mesmo no **root**. Isto significa que em qualquer lugar do sistema, nós vamos poder utilizar o **ValidarCamposService**:

![img/065.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/065.png)

3 - Vamos começar a implementar os nossos métodos.
Nosso método vai receber um control e qual é o tipo de erro que queremos que ele valide. São eles os **required**, **minlength** e por ai vai.
O `hasError` já é um método do control que vai testar se determinado input possui o erro especificado:

![img/066.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/066.png)

Desta forma, nosso método já está proto para verificar se o erro está acontecendo. Se sim, retorna true.

4 - Precisamos adicionar, no construtor do componente de cadastro, uma chamada pública para o nosso serviço, do contrário, o nosso template não vai conseguir acessar o serviço:

![img/067.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/067.png)

5 - Agora vamos chamar a nossa validação no template, passando o control e o nome do erro no formato de string:

![img/068.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/068.png)

6 - Validação de required está funcionando bem:

![img/069.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/069.png)

7 - Podemos substituir os outros códigos:

![img/070.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/070.png)

8 - Tudo continua funcionando:

![img/071.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/071.png)

Podemos criar ainda um outro método que vai testar se o campo foi clicado e se está sujo. Isso reduziria ainda mais nossa expressão:

9 - Vamos criar um `hasErrorValidar()` que recebe o control e o erro:

![img/072.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/072.png)

10 - Retire os testes de sujeira, também o teste de toque no template e, por fim, chame o `hasErrorValidar()` ao invés do `hasError()`:

![img/073.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/073.png)

11 - Tudo funcionando tranquilamente:

![img/074.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/074.png)

12 - Teste de salvamento também está okay:

![img/075.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/075.png)

___



### Componentizando nossos Campos

##### Componentizando o Campo de Input

Para promover a reutilização dos nossos componentes, evitando assim a duplicação dos mesmos.

1 - No terminal, digite: `ng g c shared/components/campos/input-text --nospec`

Vamos receber um erro de: `More than one module matches. Use skip-import option to skip importing the component into the closest module.` Acontece que ele não encontrou nenhum módulo para se fazer um import. Isso acontece porque quando criamos alguma coisa com o `CLI` ele faz o import automaticamente para nós. Para criar este componente ele pegaria um módulo e colocaria o componente dentro do módulo, mas o `CLI` não encontrou nada.

2 - Vamos criar o módulo: `ng g m shared/components/campos --nospec`:


![img/076.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/076.png)

O Módulo foi criado e o Componente será importado automaticamente para ele.

3 - Agora vamos criar os componentes: `ng g c shared/components/campos/input-text --nospec`:

![img/077.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/077.png)


Caso o Angular CLI não encontre os módulos, pode ser preciso você passar o comando : `--module` mais o caminho do módulo.

Caso apareça erro no componente criado pelo Angula CLI, é porque devemos adicionar o prefixo `dio`, como foi definido no arquivo **tslink.json**.

![img/078.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/078.png)

Bem, nosso componente de `inputText` já foi importado e agora precisamos criar um componente para cada tipo de input que nós temos. O que vai acontecer é que, como todos os campos estão declarados dentro do nosso **campos.module.ts**, quando a gente for precisar dos campos, basta chamarmos este módulo que todos os inputs virão.


1 - Digite no terminal: `ng g c shared/components/campos/input-number --nospec` para o campo `inputNumber`:

![img/079.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/079.png)

2 - Gere também o `date`, o textarea` e o `select`:
`ng g c shared/components/campos/input-date --nospec`
`ng g c shared/components/campos/input-textarea --nospec`
`ng g c shared/components/campos/input-select --nospec`

![img/080.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/080.png)

Temos tudo criado conforme os inputs que nós temos no template. Agora vamos colocar nossos códigos dentro desses caras.

3 - Transfira o input de **cadastro-filmes.component.ts** ...

![img/081.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/081.png)

... para o **input-text.component.html**:

![img/082.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/082.png)

4 - Para injetar os valores dentro do nosso `input-text.component.ts`, é preciso declarar os seguintes inputs:

~~~typescript
...
@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;
...
~~~

5 - Podemos retirar o `ngOnInit()`, e criar um get retornando o `formControl`, `formGroup` e `controlName`:

~~~typescript
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
selector: 'input-text',
templateUrl: './input-text.component.html',
styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;

constructor() { }

get formControl(): AbstractControl {
return this.formGroup.controls[this.controlName];
}
}

~~~

6 - O **input-text.component** não vai encontrar mais o que é validação, `hasErrorValidar` e nem nada. Vamos passar via `<div>`, qual é o `formGroup` que vamos utilizar.

7 - Em seguida, precisamos fazer com que o nosso `input` fique genérico:

~~~typescript
<div [formGroup]="formGroup">
<mat-form-field class="full-width">
<input matInput 
[placeholder]="titulo" 
[name]="controlName" 
[formControlName]="controlName" >

<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'minlength')"> O campo precisa ter no mínimo 2 caracteres </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'maxlength')"> O campo pode ter no máximo 256 caracteres </mat-error>
</mat-form-field>
</div>
~~~

8 - Vamos fazer os `import` que estão faltando em **campos.module.ts**:

9 - Vamos injetar a validação no componente do `input-text`:

~~~typescript
...
@Component({
selector: 'input-text',
templateUrl: './input-text.component.html',
styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;

constructor(public validacao: ValidarCamposService) { }

get forControl(): AbstractControl {
return this.formGroup.controls[this.controlName];
}
}


~~~

10 - O template do `input-text`, agora vamos passar `formControl` ao invés de `f.titulo`:

~~~typescript
...
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'minlength')"> O campo precisa ter no mínimo 2 caracteres </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'maxlength')"> O campo pode ter no máximo 256 caracteres </mat-error>
</mat-form-field>
</div>
~~~


11 - Precisamos importar o **campos.module.ts** em **filmes.module.ts**:

~~~typescript
...

@NgModule({
imports: [
CommonModule,
MaterialModule,
ReactiveFormsModule,
FormsModule,
CamposModule
],
declarations: [CadastroFilmesComponent, ListagemFilmesComponent]
})
export class FilmesModule { }

~~~

12 - Em **campos.module.ts**, devemos exportar todos os nossos `inputs` para que eles fiquem acessíveis:

13 - Corrija os nomes que são passados nas propriedades:

![img/083.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/083.png)

E o Título já está componentizado e pode ser reutilizado em qualquer lugar da aplicação:

![img/084.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/084.png)

14 - Vamos fazer o mesmo com os `inputs` de texto, isto é, o `input` de foto e o de IMDb:

![img/085.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/085.png)

##### Componentizando o Campo TextArea.

1 - Retire o `textarea` do template de cadastro e coloque no template de `input-textarea`:

![img/086.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/086.png)

2 - Faça a parte de `inputs()` no componente de `textarea`:

![img/087.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/087.png)

3 - Coloque o seletor no componente de `cadastro-filmes`:

![img/088.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/088.png)

4 - Teste:

![img/089.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/089.png)

##### Componentizando o Campo Number

1 - Vamos para o nosso template de filmes pegar o `<mat-form-field>` referente ao campo `number`:

![img/090.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/090.png)

2 - Transfira para o `number` component e envolva por uma `<div>` passando o por ela o nosso `formGroup`:

![img/091.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/091.png)

3 - Passe o `formControl` na validação e transforme os outros campos fixos em campos genéricos:
Os valores `min`, `max` e `steps` também precisam ser genéricos, pois conforme for a sua utilização, estes valores podem mudar:

~~~typescript
<div [formGroup]="formGroup"> 
<mat-form-field class="full-width">
<input matInput 
type="number"
[min]="minimo"
[max]="maximo"
[step]="step"
[placeholder]="titulo" 
[name]="controlName" 
[formControlName]="controlName">
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> Valor mínimo permitido é 0 </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> Valor máximo permitido é 10 </mat-error>
</mat-form-field>
</div>
~~~

4 - Passe os valores do `min`, `max` e `steps` via `input()`:

![img/093.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/093.png)

5 - Faça a parte do **number component**:

![img/092.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/092.png)

6 - Nosso **number** já está componentizado. Basta agora chamá-lo no template de cadastro de filmes:

![img/094.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/094.png)


7 - Teste se o **number** está recebendo os valores corretos e se está contando os `steps` corretamente:

![img/095.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/095.png)


##### Componentizando o Campo Date

1 - Transfira o campo `date`, do template de cadastro de filmes para o template de `input-date`:

2 - Envolva-o com a `<div>` que recebe o `formGroup`, generalize os campinhos de atributo e chame o `formControl`. Mude o tipo de erro para `required` pois é isso que precisamos verificar:

![img/096.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/096.png)

3 - Crie o component de data para passar os `inputs` por ele:

![img/097.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/097.png)

4 - Adicione o seletor ao template de cadastro de filmes:

![img/098.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/098.png)

5 - Teste tudo:

![img/099.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/099.png)

##### Componentizando o Campo `Select`

1 - Faça o template do `select`:

![img/100.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/100.png)

2 - Crie o component do `select`:

![img/101.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/101.png)

3 - Chame o seletor do `select` no template de cadastro:

![img/102.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/102.png)

4 - Teste tudo:

![img/103.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/103.png)


___

##### Tornando as Mensagens de Erro mais Dinâmicas

1 - No serviço **validar-campos**, vamos criar um novo método para validar o `length`:

Este método recebe o mesmo que o `hasError` recebe, mas ele retorna um `number`. 
Dentro dele temos uma constante que vai receber o nome do erro que está acontecendo.
O retorno dele vai ser qualquer um dos erros especificados e, caso não ocorra nenhum dos erros, o retorno será zero:

~~~typescript
...
hasError(control: AbstractControl, errorName: string): boolean{
return control.hasError(errorName);
}

lengthValidar(control: AbstractControl, errorName: string): number{
const error = control.errors[errorName];
return error.requiredLength || error.min ||error.max || 0;
}
}
~~~

2 - Em nosso template de **input-number**, vamos apagar o valor numérico da frase de erro e vamos invocar nosso método via interpolação:

~~~typescript
...
[formControlName]="controlName">
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> 
Valor mínimo permitido é {{validacao.lengthValidar()}} 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> 
Valor máximo permitido é {{validacao.lengthValidar()}} 
</mat-error>
...
~~~

3 - Devemos passar o `formControl` e o tipo de erro como parâmetro para o método `lengthValidar()`:

~~~typescript
...
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> 
Valor mínimo permitido é {{validacao.lengthValidar(formControl, 'min')}} 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> 
Valor máximo permitido é {{validacao.lengthValidar(formControl, 'max')}} 
</mat-error>
</mat-form-field>
</div>
~~~


4 - Teste as validações do campo `number`:

![img/104.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/104.png)

5 - Faça o mesmo para o template do `input-text`, note que a validação aqui é para `minlength` e `maxlength`.
Depois disso, o campo Título, o Link Foto e o Link IMDb devem estar validando:

![img/105.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/105.png)

Macumba não! Estes valores foram definidos no início do curso em: **cadastro-filmes.component.ts**.

6 - Faça o mesmo para o `input-text-area`. Assim, o componente já fica preparado para receber possíveis parametrizações futuras:

![img/106.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/106.png)

7 - Teste tudo:

![img/107.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/107.png)


___

##### Passando um Array com os Valores para o nosso Componente

Antes de fazer com que o nosso sistema realmente comece a salvar, nós vamos fazer algumas pequena correções:

1 - Na tag `form` do template **cadastro-filmes.componente.html**, coloque um `autocomplete="off"` para que ele pare de querer adivinhar o que vamos digitar nos campos e um `novalidate`, para que o `html` pare de validar. Queremos que a nossa validação predomine:

![img/108.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/108.png)

Agora é no `select` do template **input-select.component.html**. Vamos deixá-los dinâmicos.

1 - Vamos apagar todas as opções dele e em seguida, utilizaremos o `*ngFor` para iterar nas `options` e um Data Binding `value` para pegar estas opções. O título do `select `será interpolado:

![img/109.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/109.png)

2 - Vamos criar um `input` para ele em **input-select.component.ts**:

![img/110.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/110.png)

3 - Passe o `array` por parâmetro e inicie os valores do `select` em `ngOnInit()` em **cadastro-filmes.component.ts**:

![img/111.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/111.png)

5 - Adicione mais uma propriedade em nosso `select` em **cadastro-filmes.component.html**:

![img/112.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/112.png)


6 - Teste o select:
![img/113.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/113.png)

Nosso `select` já está dinâmico. quando precisarmos popular ele com dados provenientes de um data base, basta adicionar os dados no array criado em **cadastro-filmes.component.ts**:

![img/114.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/114.png)

___

### Criando serviços e tratamento de retorno da modal

##### Nossa primeira interface e salvando os Filmes


Vamos criar nosso serviço de CRUD dos filmes em **src/app/core**:

`ng g s core/filmes --nospec`

Pronto! Nosso arquivo foi criado e já vem até injetado no root:

![img/115.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/115.png)


Dentro do nosso service, vamos usar o HttpClient, que é o responsável por fazer todas as nossas operações do CRUD.

##### Criando o URL


1 - Crie uma constante para armazenar o URL que nosso serviço vai utilizar para realizar as operações rest:

~~~typescript
import { Injectable } from '@angular/core';

// Adicionamos uma barrinha no final para facilitar a passagens de parâmetros futuramente

const URL = 'http://localhost:3000/filmes/';

@Injectable({
providedIn: 'root'
})
export class FilmesService {

constructor() { }
}
~~~

2 - O URL nós encontramos aqui, quando startamos o servidor mocozado:

![img/116.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/116.png)


##### Salvando


1 - Crie o método `salvar()` com um construtor que recebe o httpClient que é o responsável por fazer a nossa comunicação.
Este método vai receber uma interface que criaremos no próximo passo e o seu retorno, da forma que está, já será convertido para JSON:


~~~typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Rota
const url = 'http://localhost:3000/filmes/';

@Injectable({
providedIn: 'root'
})
export class FilmesService {

constructor(private http: HttpClient) { }
salvar(filme: any): Observable<any> {
return this.http.post<any>(url, filme);
}
}
~~~

2 - Crie a interface:

`ng g i shared/models/filmes`


3 - Crie os campos na interface:

~~~typescript
export interface Filmes {
id?: number;
titulo: string;
urlFoto?: string;
dtLancamento: Date;
descricao?: string;
nota: number;
urlIMDb?: string;
genero: string;
}
~~~

Note que os campos são Case Sensitive e que o sinal de interrogação indica que o campo não é obrigatório.

4 - Em **filmes.service.ts**, Mude o tipo da interface e o tipo de retorno do método `salvar()` para que receba e devolva `Filme`:


![img/117.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/117.png)

5 - Vamos mudar o nome do método salvar do **cadastro-filmes.component.ts** e no .html dele. Agora ele vai virar `submit()`.

![img/118.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/118.png)

![img/119.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/119.png)


Nosso método `submit()` Verifica se os campos foram clicados, verifica se o cadastro é válido e agora sim, vamos fazer com que ele execute a ação de salvar.

6 - Em **cadastro-filmes.components.ts**, Declare nosso FilmesService:

~~~typescript
...
cadastro: FormGroup;
generos: Array<string>;

constructor(public validacao: ValidarCamposService,
private fb: FormBuilder,
private filmesService: FilmesService) { }
...
~~~

7 - Crie um método exclusivo para essa classe chamado salvar(). Este método vai receber a um filme como parâmetro e vai repassá-lo para o nosso outro método salvar da classe de serviço. Por fim, vamos dar um subcribe no retorno do salvar:


Colocamos subscribe() aqui por dois motivos:
* 1 - O `salvar()` do service é um observable e todo Observable que não tem ninguém inscrito, simplesmente não executa.
* 2 - O subscribe vai retornar o resultado da operação. Se der certo, ele retorna um filme e é a partir daí que nós vamos bolar as mensagens de erro, ou de sucesso para o usuário.

~~~typescript
...
reiniciarForm(): void{ 
this.cadastro.reset();
}

private salvar(filme: Filmes): void {
// Coloque o filme no método salvar da classe filmesService.
this.filmesService.salvar(filme).subscribe();
}
}
~~~

8 - Vamos tratar o retorno:

~~~typescript
...
private salvar(filme: Filmes): void {
// Coloque o filme no método salvar da classe filmesService.
this.filmesService.salvar(filme).subscribe(() => {
alert('Sucesso');
},
() => {
alert('Erro ao salvar');
});
}
}
~~~

9 - Agora devemos chamar o `salvar()`, dentro do `submit()`:


~~~typescript
...
submit(): void{ 
this.cadastro.markAllAsTouched(); 
if(this.cadastro.invalid){ 
return; 
}

const filme = this.cadastro.getRawValue() as Filmes;
this.salvar(filme);

//alert('Sucesso!\n\n'+ JSON.stringify(this.cadastro.value, null, 4));
}
...
~~~

* **getRawValue()** - Pega o valor de todas as linhas do nosso cadastro de filmes.
* **as Filmes** - Certifica de que os valores são do tipo Filme.

Teste a aplicação:

![img/120.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/120.png)

Deu erro de `NullInjectorError: No provider for HttpClient!` e isso foi porque a aplicação precisa saber que estamos trabalhando com o Módulo `HttpClient`. Todo nosso sistema vai usar HttpClientModule para acessar o banco. Por isso vamos importar esse carinha no módulo raiz:

![img/121.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/121.png)

Teste novamente para ver se o erro sumiu e aproveite para salvar um filme:

![img/122.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/122.png)

Status 201!

Para ver se realmente deu certo, abra o nosso "banco" em `localhost:3000/filmes`:

![img/123.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/123.png)

Tudo funcionando.

** Obs:** Vamos alterar o nome da interface de `Filmes` para `Filme`. Altere tudo. Nome do arquivo, da classe e de todas as chamadas em todos os arquivos.

___


##### Componente de Modal

Vamos utilizar uma modal de Dialog do angular Material para ser nossa janela de confirmação.

1 - Busque no Google por **Angular Material Modal** e escolha a opção de **Dialog**:

![img/124.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/124.png)

2 - No editor de código do site, edite o html dessa modal e teste:

![img/125.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/125.png)

3 - Volte para o VSCode e crie um component para que possamos colocar3 esse código lá:

![img/126.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/126.png)
`More than one module matches. Use skip-import option to skip importing the component into the closest module.`

Caso o Angular não encontre o módulo principal, especifique-o:
`ng g c shared/components/alerta --nospec --module app.module.ts`

![img/127.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/127.png)

4 - Copie o html do modal para dentro do html do componente criado.

~~~html
<h1 mat-dialog-title>Sucesso!</h1>
<div mat-dialog-content>
<p>Seu registro foi salvo com sucesso!</p>
<!--Excluído-->
</div>
<div mat-dialog-actions>
<button mat-button>No Thanks</button>
<button mat-button cdkFocusInitial>Ok</button>
</div>
~~~

5 - No **alerta.component.ts**, vamos alterar o seletor:
~~~typescript
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'dio-alerta',
templateUrl: './alerta.component.html',
styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

constructor() { }

ngOnInit() {
}
}
~~~

6 - Vamos pegar o miolo do construtor do arquivo **.ts** lá do site e copiá-lo para o nosso componente. Dê um fix nos imports Dependências:

![img/128.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/128.png)

Por fim, nosso construtor vai ficar assim:

~~~typescript
...
constructor(
public dialogRef: MatDialogRef<AlertaComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit() {
}
}
~~~

O `MatDialogRef`, faz referência para nossa própria classe e o tipo data aqui será `any` pois não sabemos ainda qual tipo realmente ele será.

7 - Vamos para o template do alerta definir onde vão ficar as nossas mensagens e botões, O código vai ficar assim:

~~~typescript

<h1 mat-dialog-title>{{titulo}}</h1>
<div mat-dialog-content>
<p>{{descricao}}</p>

</div>
<div mat-dialog-actions>
<button mat-buttons cdkFocusInitial [mat-dialog-close]="true">{{btnSucesso}}</button>
<button mat-button [mat-dialog-close]="false">{{btnCancelar}}</button>
</div>

~~~

O `[mat-dialog-close]=""` É o que o componente que chamou o nosso modal, espera receber, assim é que ele vai saber qual dos botões recebeu o clique.

8 - Vamos crias estas propriedades no arquivo .ts:

![img/129.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/129.png)

Note que a passagem de parâmetros dos modais é mais simples do que nos outros componentes, pois não é feita com `@Input()`.
Sempre que quisermos utilizar a janela de modal, basta trocar estes parâmetros.

Agora vamos chamar nosso modal no lugar dos alerts() em **cadastro-filmes.component.ts**.

9 - Import o MaterialDialog no construtor:


~~~typescript
...
export class CadastroFilmesComponent implements OnInit {

cadastro: FormGroup;
generos: Array<string>;

constructor(public validacao: ValidarCamposService,
public dialog: MatDialog,
private fb: FormBuilder,
private filmesService: FilmesService ) { }
...
~~~

10 - Faça a chamada do modal no lugar do `alert`, conforme o exemplo de código que está no site.
Dentro do `open()` vamos chamar o nosso componente do alerta:

![img/130.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/130.png)

Vamos testar:

![img/131.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/131.png)


Os botões ainda estão feios, vamos no nosso html:

![img/132.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/132.png)

Mudamos o tipo de botão, a cor e no primeiro caso, colocamos um DataBinding para fazer com que a cor do botão seja dinâmica.
11 - Vamos aproveitar e colocar um `*ngIf` logo:

~~~typescript

<div mat-dialog-actions>
<button mat-raised-button [color]="corBtn" cdkFocusInitial [mat-dialog-close]="true">{{btnSucesso}}</button>
<button mat-raised-button color="warn" 
[mat-dialog-close]="false"
*ngIf="possuirBtnFechar"> {{btnCancelar}} </button>
</div>
~~~

12 - Vamos para o **alert.component.ts** definir a cor do botão e também a propriedade possuirBtnFechar. Ela é responsável por exibir ou não o nosso botão fechar. Caso seja preciso exibir este botão, devemos então sobrescrever essa propriedade:


![img/133.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/133.png)

Agora sim, vamos sobrescrever nossos atributos:

![img/134.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/134.png)

Vamos testar se as nossas propriedades já estão sendo lidas pelo nosso componente:

![img/135.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/135.png)


___





##### Passando configurações para a nossa modal



Vamos fazer com que as mensagens de retorno do modal realizem alguma ação:

1 - Crie uma interface chamada **alerta**:
`ng g i shared/models/alerta --nospec`

2 - Defina os campos do nosso **alerta.ts** na interface e coloque todos como opcionais:

~~~typescript

export interface Alerta {
titulo?: string;
descricao?: string;
btnSucesso?: string;
btnCancelar?: string;
corBtn?: string;
possuirBtnFechar?: boolean;
}

~~~

3 - No construtor do **alerta.component.ts**, mude o data, de `any`, para `Alerta` e passe a chamar os atributos de `ngOnInit()` pela interface:

~~~typescript

constructor(
public dialogRef: MatDialogRef<AlertaComponent>,
@Inject(MAT_DIALOG_DATA) public data: Alerta) { }

ngOnInit() {

if (this.data){ // se existe o data
//veja se os campos estão preenchidos:
//titulo é igual ao data.titulo se ele existir ou então, ele vai ser titulo mesmo
this.alerta.titulo = this.data.titulo || this.alerta.titulo;
this.alerta.descricao = this.data.descricao || this.alerta.descricao;
this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
this.alerta.corBtn = this.data.corBtn || this.alerta.corBtn;
this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
}
}
}
~~~

4 - Atualize os atributos no **alerta.component.html**:

~~~html

<h1 mat-dialog-title>{{alerta.titulo}}</h1>
<div mat-dialog-content>
<p>{{alerta.descricao}}</p>

</div>
<div mat-dialog-actions>
<button mat-raised-button [color]="alerta.corBtn" 
cdkFocusInitial [mat-dialog-close]="true">{{alerta.btnSucesso}}
</button>
<button mat-raised-button color="warn" 
[mat-dialog-close]="false"
*ngIf="alerta.possuirBtnFechar"> {{alerta.btnCancelar}} 
</button>
</div>

~~~


5 - Crie uma constante no método `salvar()` para alterar as informações dos botões:

~~~typescript
...

private salvar(filme: Filme): void {
this.filmesService.salvar(filme).subscribe(() => {
const config = {
data: {
btnSucesso: 'ir para a listagem',
btnCancelar: 'Cadastrar um novo filme',
possuirBtnFechar: true
} as Alerta
};
const dialogRef = this.dialog.open(AlertaComponent, config);
},
() => {
...


~~~


Teste a aplicação:

![img/136.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/136.png)

Rodar rodou, mais vamos alterar a cor desse botão agora.

1 - Adicione mais dois atributos na interface para que possamos definir as cores dos botões:

~~~typescript
export interface Alerta {
titulo?: string;
descricao?: string;
btnSucesso?: string;
btnCancelar?: string;
corBtnSucesso?: string;
corBtnCancelar?: string;
possuirBtnFechar?: boolean;
}

~~~

2 - Atribua as cores no componente:

~~~typescript
...
export class AlertaComponent implements OnInit {

alerta = { 
titulo : 'Sucesso',
descricao : 'Seu registro foi salvo com sucesso',
btnSucesso : 'OK',
btnCancelar : 'Cancelar',
corBtnSucesso: 'accent', // <--
corBtnCancelar: 'warn', // <--
possuirBtnFechar : false,
} as Alerta;

constructor(
public dialogRef: MatDialogRef<AlertaComponent>,
@Inject(MAT_DIALOG_DATA) public data: Alerta) { }

ngOnInit() {

if (this.data){ // se existe o data
//veja se os campos estão preenchidos:
//titulo é igual ao data.titulo se ele existir ou então, ele vai ser titulo mesmo
this.alerta.titulo = this.data.titulo || this.alerta.titulo;
this.alerta.descricao = this.data.descricao || this.alerta.descricao;
this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
this.alerta.corBtnSucesso = this.data.corBtnSucesso || this.alerta.corBtnSucesso; // <--
this.alerta.corBtnCancelar = this.data.corBtnCancelar || this.alerta.corBtnCancelar; // <--
this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
}
}
}
~~~

3 - Adicione estes valores no html:
~~~html
<h1 mat-dialog-title>{{alerta.titulo}}</h1>
<div mat-dialog-content>
<p>{{alerta.descricao}}</p>

</div>
<div mat-dialog-actions>
<button mat-raised-button [color]="alerta.corBtnSucesso" 
cdkFocusInitial [mat-dialog-close]="true">{{alerta.btnSucesso}}
</button>
<button mat-raised-button [color]="alerta.corBtnCancelar" 
[mat-dialog-close]="false"
*ngIf="alerta.possuirBtnFechar"> {{alerta.btnCancelar}} 
</button>
</div>
~~~

4 - Passe a cor do btn no método `Salvar()`:

~~~typescript
...
private salvar(filme: Filme): void {
this.filmesService.salvar(filme).subscribe(() => {
const config = {
data: {
btnSucesso: 'ir para a listagem',
btnCancelar: 'Cadastrar um novo filme',
corBtnCancelar: 'primary',
possuirBtnFechar: true
} as Alerta
};
...
~~~

Melhorou um pouco:

![img/137.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/137.png)

---
##### Pegando e tratando o retorno da modal


Em **cadastro-filmes.component**, no método `salvar()`, nós temos um dialog que está abrindo nosso modal:

~~~typescript
const dialogRef = this.dialog.open(AlertaComponent, config);
~~~

Ao verificar o exemplo no site, podemos ver que eles utilizam também, um `afterClosed().subscribe()`, Ele é `subscribe()` para que possamos obter o resultado depois que o dialog for fechado.

![img/138.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/138.png)


Vamos fazer o mesmo em nosso código. 
1 - Adicione a seguinte linha ao nosso método salvar para que o Angular informe pra gente o que aconteceu depois que o modal foi fechado:

~~~typescript
dialogRef.afterClosed().subscribe()
~~~

Sabe aquele `[mat-dialog-close]="boolean"` que foi criado no **alerta.component.html**conforme está na imagem logo abaixo:

![img/139.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/139.png)

Então, nosso `subscribe()` vai receber ele como parâmetro:

~~~typescript
// Recebe o mat-dialog-close
dialogRef.afterClosed().subscribe((opcao: boolean))
~~~

Agora vamos precizar do `router`, porque é o seguinte: Se a `opcao` for `true`, então devemos pegar a rota da listagem de filmes. Se for `false`, limpe o formulário de cadastro para que se possa cadastrar um novo filme.

2 - Chame a router no construtor:

![img/140.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/140.png)

3 - Faça um `if()` para definir o que fazer baseado no valor do `opcao`:

~~~typescript
...

// Após fechar, pegue o valor da `opcao` e tome uma rota com base nesse valor.
dialogRef.afterClosed().subscribe((opcao: boolean) => {
if (opcao ){
this.router.navigateByUrl('filmes');
} else {
this.reiniciarForm();
}
}
...
~~~

4 - Cadastre um filme e teste os botões do modal. Os dois!


Uma vez tudo certo, vamos agora para nossa configuração de erro.

1 - Defina as configurações do nosso alerta:

~~~typescript

...
() => {
const config = {
data: {
titulo: 'Erro ao salvar o registro!',
descricao: 'Não conseguimos salvar o seu registro. Tente mais tarde!',
corBtnSucesso: 'warn',
btnSucesso: 'Fechar'
} as Alerta
};
});
...
~~~


2 - Vamos chamar nosso alerta. Não precisa atribuir a uma variável, não queremos saber o retorno dela e não vai acontecer nenhuma ação com ela:

O método `salvar()` ficou assim:

~~~typescript
private salvar(filme: Filme): void {
this.filmesService.salvar(filme).subscribe(() => { 
// Configuração do alerta
const config = {
data: {
btnSucesso: 'ir para a listagem',
btnCancelar: 'Cadastrar um novo filme',
corBtnCancelar: 'primary',
possuirBtnFechar: true
} as Alerta
};
// Ao abrir, use O AlertaComponent com as configurações definidas acima.
const dialogRef = this.dialog.open(AlertaComponent, config);

// Após fechar, pegue o valor da opcao e tome uma rota com base nesse valor.
dialogRef.afterClosed().subscribe((opcao: boolean) => {
if (opcao ){
this.router.navigateByUrl('filmes');
} else {
this.reiniciarForm();
}
})
},
() => {
const config = {
data: {
titulo: 'Erro ao salvar o registro!',
descricao: 'Não conseguimos salvar o seu registro. Tente mais tarde!',
corBtnSucesso: 'warn',
btnSucesso: 'Fechar'
} as Alerta
};
// Abra o dialog usando o nosso componente de alerta e com as configurações que definimos
this.dialog.open(AlertaComponent, config);
});
}
~~~

Teste a aplicação da seguinte maneira:

1 - Abra a tela de cadastro de filmes.
2 - Derrube o servidor.
3 - Cadastre e salve um novo filme:

O resultado deve ser o seguinte:

![img/141.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/141.png)

___


### Listagem de resultados e melhoria de performance

##### Buscando e listando os filmes


Vamos tratar da listagem de filmes do nosso projeto.

1 - Em **listagem-filmes.component.html**, vamos apagar a `class="example-header-image"` e retire todos os dados duplicados:

~~~html
<mat-toolbar class="app-title">Filmes Cadastrados</mat-toolbar>
<div class="home-content">

<mat-card class="home-card">
<mat-card-header>
<div mat-card-avatar ></div>
<mat-card-title>Angular Material @ngrx</mat-card-title>
<mat-card-subtitle>Check this Home</mat-card-subtitle>
</mat-card-header>
<img mat-card-image src="../assets/images/angular-material-post.png" alt="Angular Material 7">
<mat-card-content>
<p>
Angular Material with @ngrx and lazy loading, click OPEN button then
you can see sidenav content (with the current store value)
</p>
</mat-card-content>
<mat-card-actions>
<button color="accent" mat-raised-button>OPEN</button>
</mat-card-actions>
</mat-card>
</div>

~~~

2 - Em **core/filmes-service.ts**, vamos criar uma nova consulta para listar os filmes. Ela retorna um observable contendo um array de filmes:

~~~typescript

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';

const url = 'http://localhost:3000/filmes/';

@Injectable({
providedIn: 'root'
})
export class FilmesService {

constructor(private http: HttpClient) { }
salvar(filme: Filme): Observable<Filme> {
return this.http.post<any>(url, filme);
}

listar(): Observable<Filme[]>{
return this.http.get<Filme[]>(url);
}
}

~~~

3 - Em **listagem-filmes.component.ts**, vamos declarar no construtor o FilmesService:

`constructor(private filmesService: FilmesService){ }`

4 - Precisamos criar uma variável do tipo Filme para receber nosso array de filmes:

`filmes: Filme[];`

5 - Agora vamos listar os filmes dentro do `ngOnInit()`:

~~~typescript
...
ngOnInit() {
this.filmesService.listar().subscribe((filmes: Filme[]) => this.filmes = filmes)
}
...
~~~

Ao carregar o nosso componente de listagem, O construtor vai buscar o nosso `filmesService` e após a nossa tela ter sido inicializada o `this.filmes`Service.listar()` vai realizar a nossa consulta pedindo para retornar a nossa lista. O `subscribe()` está ali para ser informado quando esse array de filmes for retornado. Por fim, quando este array de filmes for retornado, vamos atribuir ele ao nosso array de filmes, e isso vai atualizá-lo. Sem o `subscribe()`, esta linha de código nunca seria executada.

6 - Vamos atualizar o nosso **listagem-filmes.component**.

~~~typescript
<mat-toolbar class="app-title">Filmes Cadastrados</mat-toolbar>
<div class="home-content">

<mat-card class="home-card" *ngFor="let filme of filmes">
<mat-card-header>
<div mat-card-avatar ></div>
<mat-card-title>{{filme.titulo}}</mat-card-title>
<mat-card-subtitle>{{filme.genero}}</mat-card-subtitle>
</mat-card-header>
<img mat-card-image [src]="filme.urlFoto">
<mat-card-content>
<p>
{{filme.descricao}}
</p>
</mat-card-content>
<mat-card-actions>
<button color="accent" mat-raised-button>ABRIR</button>
</mat-card-actions>
</mat-card>
</div>

~~~

O `*ngFor="let filme of filmes"` vai iterar sobre nosso array de filmes e atribuir cada iteração ao alias filme e isso vai permitir o acesso aos atributos do filme via: **{{filme.nome-do-atributo}}**


Teste a aplicação

___

##### Scroll infinito

O próprio Angular tem um scroll infinito, mas é meio complicado de se usar e costuma dar problemas quando usado em produção no Angular 8. Por isso, vamos utilizar aqui o scroll do **ngx**.


Acesse o site do [ngx infinite scroll](https://www.npmjs.com/package/ngx-infinite-scroll)


Vamos colocar ele em nosso projeto:

1 - Execute `npm install ngx-infinite-scroll --save`.


2 - Adicione o scroll no módulo de filmes. Não vamos adicioná-lo ao módulo raiz porque não há necessidade da nossa aplicação inteira ter acesso ao scroll:

~~~typescript
@NgModule({
imports: [
CommonModule,
MaterialModule,
ReactiveFormsModule,
FormsModule,
CamposModule,
InfiniteScrollModule // <--
],
declarations: [CadastroFilmesComponent, ListagemFilmesComponent]
})
~~~

3 - Adicione o método `onScroll()` e a diretiva `infiniteScroll` em nossa `div class="home-content"` do .html:

~~~html
<mat-toolbar class="app-title">Filmes Cadastrados</mat-toolbar>
<div class="home-content" infiniteScroll (scrolled)="onScroll()">
<mat-card class="home-card" *ngFor="let filme of filmes">
...
~~~

Quando a página for exibida, creio que uns 80% do seu conteúdo, este método é disparado e passa a buscar por mais registros.

Vamos criar o `onScroll()` no .ts. Primeiro precisamos particionar a nossa consulta que já existe. pois ela já está retornando todos os registros, mas agora queremos que ela nos retorne somente parte dos nossos registros.

Em nosso caso, como estamos usando o `json-server`, ele já possui este tipo de consulta. Acesse: [json server paginate](https://github.com/typicode/json-server#paginate)

![img/142.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/142.png)

Aqui podemos ver que para paginar, basta definir no `GET`, o numero de páginas e a quantidade de registros por página que queremos.
O que acontece é que o cabeçalho da requisição será alterado e os parâmetros `page` e `limit` serão passados no url.
Vamos alterar a nossa listagem:


4 - Em **filmes-service.ts**, passe a página e quantidade de registro por pagina para o método `listar()`:

~~~typescript
...

listar(pagina: number, qtdPagina: number): Observable<Filme[]>{
return this.http.get<Filme[]>(url);
}
...
~~~

5 - O `HttpParams` do `HttpClient` faz a tratativa de passagem de parâmetros.

Ele só recebe um nome de parâmetro e valor de parâmetro por vez e como as urls só trabalham com Strings, devemos converter o number para String.
Para fazer com que ele receba os dois parâmetros, vamos concatenar o `HttpParams` com o primeiro parâmetro e em seguida com o segundo parâmetro:

~~~typescript
...
listar(pagina: number, qtdPagina: number): Observable<Filme[]>{
let httpParams = new HttpParams();
httpParams = httpParams.set('_page', pagina.toString())
httpParams = httpParams.set('_limit', qtdPagina.toString())
return this.http.get<Filme[]>(url, {params: httpParams});
}
}

~~~

6 - Em nosso **listagem-filmes.component.ts** vamos criar as variáveis de paginação e o nosso método de `listarFilmes()`
A página vai ser inicializada com zero, pois todas as vezes que entrar no método de listagem, nós vamos incrementar mais uma página.
Assim que o componente for carregado, ele vai entrar no método de listagem.
Sempre que o scroll for acionado, ele também vai entrar no método de listagem: 

~~~typescript
import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-listagem-filmes',
templateUrl: './listagem-filmes.component.html',
styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

readonly qtdPagina = 4;
pagina = 0;
filmes: Filme[];
constructor(private filmesService: FilmesService){ }

ngOnInit(): void {
this.listarFilmes();
}

onScroll(): void {
this.listarFilmes();
}

listarFilmes(): void {
this.pagina++;
this.filmesService.listar(this.pagina, this.qtdPagina)
.subscribe((filmes: Filme[]) => this.filmes = filmes)
}
}

~~~


7 - Ao invés de substituir o antigo array de filmes, vamos concatenar os dois com o uso de spread operator:
atribua [] na declaração do array de filmes

~~~typescript
...
filmes: Filme[] = [];

...

listarFilmes(): void {
this.pagina++;
this.filmesService.listar(this.pagina, this.qtdPagina)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
}
...
~~~



Teste a aplicação

![img/143.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/143.png)

Vamos reduzir estas fotos no .css?

1 - Em **listagem-filmes.component.scss** adicione a seguinte definição de classe:

~~~css
.mat-card-image {
width: auto;
margin: auto;
display: block; 
}
~~~

2 - Altere a media para:

~~~css
@media screen and (min-width: 525px) {
.home-content {
.home-card {
width: calc(50% - 52px);
}
}
}
~~~

3 - Adicione outra media:

~~~css
@media screen and (min-width: 525px) {
.home-content {
.home-card {
width: calc(50% - 52px);
}
}
}
~~~

4 - Altere a media de 1440 para:

~~~css
@media screen and (min-width: 1200px) {
.home-content {
.home-card {
width: calc(25% - 52px);
}
}
}
~~~

Ficamos com 4 filmes por linha na tela:

![img/144.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/144.png)
___


##### Criando nosso formulário de filtro

Vamos criar um formulário de filtro em nossa listagem.

1 - Vamos adicionar duas classes em nosso estilo **style.scss** para que toda nossa aplicação possa acessá-la:

~~~css
.float-left {
float: left;
}

.margin10 {
margin: 10px;
}
~~~

2 - Crie uma classe exclusiva no .css do componente de listagem:

.filtro-listagem {
width: calc(100% - 50px);
}

3 - Crie um formulário em nossa página de listagem:

~~~typescript
<mat-toolbar class="app-title">Filmes Cadastrados</mat-toolbar>

<mat-card class="float-left margin10 filtro-listagem" >
<form autocomplete="off" novalidate [formGroup]="filtrosListagem">
<div class="float-left width50">
primeiro input
</div>
<div class="float-left width50">
segundo input
</div>
</form>
</mat-card>
<div class="home-content" infiniteScroll (scrolled)="onScroll()">
...
~~~

4 - Nossos inputs serão reaproveitados mas antes de adicioná-los aqui, vamos para o component definir o nosso FormGroup como já fizemos no form de cadastro:


~~~typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-listagem-filmes',
templateUrl: './listagem-filmes.component.html',
styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

readonly qtdPagina = 4;
pagina: number = 0;
filmes: Filme[] = [];
filtrosListagem: FormGroup;
generos: Array<string>; // <--

constructor(private filmesService: FilmesService,
private fb: FormBuilder){ } // <--

ngOnInit(): void {
this.filtrosListagem = this.fb.group({ // <--
texto: [''],
generos:['']}
);

this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; //<--

this.listarFilmes();
}

onScroll(): void {
this.listarFilmes();
}

listarFilmes(): void {
this.pagina++;
this.filmesService.listar(this.pagina, this.qtdPagina)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
}
}

~~~


5 - Adicione os campos ao .html:


~~~typescript
<mat-toolbar class="app-title">Filmes Cadastrados</mat-toolbar>

<mat-card class="float-left margin10 filtro-listagem" >
<form autocomplete="off" novalidate [formGroup]="filtrosListagem">
<div class="float-left width50">
<div class="padding10">
<dio-input-text titulo="Pesquise aqui" 
controlName="texto" 
[formGroup]="filtrosListagem">
</dio-input-text>
</div>
</div>
<div class="float-left width50">
<div class="padding10">
<dio-input-select titulo="Gênero" 
[opcoes]="generos" 
controlName="generos" 
[formGroup]="filtrosListagem">
</dio-input-select>
</div>
</div>
</form>
</mat-card>
<div class="home-content" infiniteScroll (scrolled)="onScroll()">

<mat-card class="home-card" *ngFor="let filme of filmes">
<mat-card-header>
<div mat-card-avatar ></div>
<mat-card-title>{{filme.titulo}}</mat-card-title>
<mat-card-subtitle>{{filme.genero}}</mat-card-subtitle>
</mat-card-header>
<img mat-card-image [src]="filme.urlFoto">
<mat-card-content>
<p>
{{filme.descricao}}
</p>
</mat-card-content>
<mat-card-actions>
<button color="accent" mat-raised-button>ABRIR</button>
</mat-card-actions>
</mat-card>
</div>

~~~

6 - Criamos uma classe no .css para dar mais um espaçamento aos nossos campos:

~~~css
.padding10 {
padding: 10px;
}
~~~

Teste o formulário:

![img/145.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/145.png)
___

##### Fazendo a ordenação e filtragem

Vamos fazer nosso formulário de filtragem funcionar.
Para saber quando alguma informação foi inserida em um campo, podemos utilizar o `valueChanges`. Ele é um observable que vai ficar monitorando nosso campo, portanto, precisamos nos subscrever para acompanhar:

1 - Vamos monitorar as alterações em nossos inputs:

~~~typescript
...
ngOnInit(): void {
this.filtrosListagem = this.fb.group({ 
texto: [''],
generos:['']}
);

this.filtrosListagem.get('texto').valueChanges
.subscribe((val: string) => {
console.log('alteração valor texto', val);
});

this.filtrosListagem.get('generos').valueChanges
.subscribe((val: string) => {
console.log('alteração valor generos', val);
});
this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; 

this.listarFilmes();
}
...
~~~

![img/146.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/146.png)


Agora precisamos avisar para a nossa listagem que essas alterações estão acontecendo. Vamos também cuidar de ordenar os filmes listados. Do mais recente ao mai antigo.
1 - Crie as variáveis texto e gênero:

~~~typescript
...
export class ListagemFilmesComponent implements OnInit {

readonly qtdPagina = 4;
pagina: number = 0;
texto: string;
genero: string;
...
~~~

2 - Atribua os valores do `val` para as variáveis criadas:

~~~typescript
...

this.filtrosListagem.get('texto').valueChanges
.subscribe((val: string) => {
this.texto = val;
this.listarFilmes();
});

this.filtrosListagem.get('generos').valueChanges
.subscribe((val: string) => {
this.genero = val;
this.listarFilmes();
});
...
~~~

3 - Vamos receber estes valores em nosso `listarFilmes`:

~~~typescript
...
listarFilmes(): void {
this.pagina++;
this.filmesService.listar(this.pagina, this.qtdPagina, this.texto, this.genero)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
});
...
~~~


4 - Adicione os parâmetros também em `listar()`:

~~~typescript
...

listar(pagina: number, qtdPagina: number, texto: string, genero: string): Observable<Filme[]>{
let httpParams = new HttpParams();
httpParams = httpParams.set('_page', pagina.toString())
httpParams = httpParams.set('_limit', qtdPagina.toString())
httpParams = httpParams.set('q', texto)
httpParams = httpParams.set('genero', genero)
return this.http.get<Filme[]>(url, {params: httpParams});
}
}
...
~~~

5 - Não é sempre que estes campos serão preenchidos, portanto, devemos verificar isso:

~~~typescript
...
listar(pagina: number, qtdPagina: number, texto: string, genero: string): Observable<Filme[]>{
let httpParams = new HttpParams();
httpParams = httpParams.set('_page', pagina.toString());
httpParams = httpParams.set('_limit', qtdPagina.toString());
if (texto) {
httpParams = httpParams.set('q', texto);
}
if (genero) {
httpParams = httpParams.set('genero', genero);
}
return this.http.get<Filme[]>(url, {params: httpParams});
}
...
~~~

Podemos ver que a filtragem está adicionando páginas que não existem:

![img/147.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/147.png)

Acontece que quando digitamos no input, a busca está sendo realizada, a página está sendo incrementada e o array está recebendo um `push()` de um novo array e o exibe. 
Para resolver isso vai ser preciso limpar o array e a pesquisa para fazer com que somente seja retornado aquilo que foi pesquisado.

6 - Crie um método para resetar a página, esvaziar o array e chamar a listagem de filmes em **listagem-filmes.component.ts**:

~~~typescript
...
listarFilmes(): void {
this.pagina++;
this.filmesService.listar(this.pagina, this.qtdPagina, this.texto, this.genero)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
}

private resetarConsulta(): void {
this.pagina = 0;
this.filmes = [];
this.listarFilmes();
}
}
~~~

7 - Troque os métodos:

~~~typescript

...
this.filtrosListagem.get('texto').valueChanges
.subscribe((val: string) => {
this.texto = val;
this.resetarConsulta(); // <--
});

this.filtrosListagem.get('generos').valueChanges
.subscribe((val: string) => {
this.genero = val;
this.resetarConsulta(); // <--
});
...
~~~

Agora sim:

![img/148.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/148.png)


Para ordenar os nossos registros, do maior para o menor, devemos passar mais dois parâmetros em nosso método `listar()` em **filmes.service.ts**.
O primeiro parâmetro vai conter o campo a ser ordenado e o segundo parâmetro vai conter o tipo de ordenação:

~~~typescript

...
listar(pagina: number, qtdPagina: number, texto: string, genero: string): Observable<Filme[]>{
let httpParams = new HttpParams();
httpParams = httpParams.set('_page', pagina.toString());
httpParams = httpParams.set('_limit', qtdPagina.toString());

httpParams = httpParams.set('_sort', 'id');
httpParams = httpParams.set('_order', 'desc');

if (texto) {
httpParams = httpParams.set('q', texto);
}

if (genero) {
httpParams = httpParams.set('genero', genero);
}
return this.http.get<Filme[]>(url, {params: httpParams});
}

}
~~~

Já está ordenando, mas na próxima aula vamos melhorar este método de consulta.
___



##### Utilizando HttpParams


Aqui nós estamos passando muitos parâmetros:		

~~~typescript
...
export class ListagemFilmesComponent implements OnInit {

readonly qtdPagina = 4;
pagina: number = 0;
texto: string;
genero: string;
filmes: Filme[] = [];
filtrosListagem: FormGroup;
generos: Array<string>; 
...
~~~


1 - Vamos criar uma interface dentro de **shared/models** para reduzir isso:

`ng g i shared/models/configParams`

~~~typescript
import { CampoGenerico } from "./campo-generico";

export interface ConfigParams {
pagina?: number;
limite?: number;
pesquisa?: string;
campo?: CampoGenerico;
}
~~~

2 - Nosso atributo `campo` não vai ser um valor primitivo. Vamos criar uma outra interface para ela e informar lá dentro que `campo` terá dois valores:

`ng g i shared/models/campoGenerico`

~~~typescript
export interface CampoGenerico {
tipo: string;
valor: any;
}
~~~

3 - A **listagem-filmes.component.ts** fica assim:




~~~typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-listagem-filmes',
templateUrl: './listagem-filmes.component.html',
styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

config: ConfigParams = {
pagina: 0,
limite: 4
}

filmes: Filme[] = [];
filtrosListagem: FormGroup;
generos: Array<string>; 

constructor(private filmesService: FilmesService,
private fb: FormBuilder){ }

ngOnInit(): void {
this.filtrosListagem = this.fb.group({ 
texto: [''],
generos:['']}
);

this.filtrosListagem.get('texto').valueChanges
.subscribe((val: string) => {
this.config.pesquisa = val;
this.resetarConsulta();
});

this.filtrosListagem.get('generos').valueChanges
.subscribe((val: string) => {
this.config.campo = {tipo: 'genero', valor: val};
this.resetarConsulta();
});
this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; 

this.listarFilmes();
}

onScroll(): void {
this.listarFilmes();
}

private listarFilmes(): void {
this.config.pagina++;
this.filmesService.listar(this.config)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
}

private resetarConsulta(): void {
this.config.pagina = 0;
this.filmes = [];
this.listarFilmes();
}
}

~~~


4 - O `listar()` **filme.service.ts** ficou da seguinte maneira:

~~~typescript
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/config-params';
import { Filme } from '../shared/models/filme';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/filmes/';

@Injectable({
providedIn: 'root'
})
export class FilmesService {

constructor(private http: HttpClient,
private configService: ConfigParamsService) { }
salvar(filme: Filme): Observable<Filme> {
return this.http.post<any>(url, filme);
}

listar(config: ConfigParams): Observable<Filme[]>{
const configParams = this.configService.configuraParametros(config);
return this.http.get<Filme[]>(url, {params: configParams});
}
}


~~~


5 - Em nosso método de listar, vamos precisar criar um novo serviço.


~~~typescript
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';

@Injectable({
providedIn: 'root'
})
export class ConfigParamsService {

constructor() { }
configuraParametros(config: ConfigParams): HttpParams{
let httpParams = new HttpParams();

if (config.pagina) {
httpParams = httpParams.set('_page', config.pagina.toString());
}
if (config.limite) {
httpParams = httpParams.set('_limit', config.limite.toString());
}

if (config.pesquisa) {
httpParams = httpParams.set('q', config.pesquisa);
}

if (config.campo) {
httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString());
}
httpParams = httpParams.set('_sort', 'id');
httpParams = httpParams.set('_order', 'desc');
return httpParams;
}
}

~~~

Teste a aplicação


##### NG - template e melhoria de performance

No cadastro de filmes, o campo imagem não é obrigatório. Isso quer dizer que quando o usuário cadastrar um filme sem colocar a imagem, nada vai aparecer. Vamos fazer com que apareça uma imagem padrão para sinalizar que não há imagem.

1 - Em **listagem-filmes.component.html** adicione a seguinte linha:

~~~html
´<img mat-card-image [src]="filme.urlFoto || semFoto">´
~~~

2 - Crie a variável ´semFoto´ no **listagem-filmes.component.html**:

~~~typescript
readonly semFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEemlgFtRl2mVB_7J_ypS-JHchAMWKXNkANw&usqp=CAU';
~~~

3 - ajuste o css do componente para que as imagens ficam em um tamanho padrão:

~~~css
...
.mat-card-image {
width: 182px;
height: 268px;
margin: auto;
display: block; 
}
...
~~~

No campo de Descrição do filme, faremos da seguinte maneira:

1 - Crie a classe quebrar-linha:

~~~html
...
<p class="quebrar-linha">
{{filme.descricao || 'nenhuma descrição informada'}}
</p>
...
~~~

2 - Defina o css como: 

~~~css
...
.quebrar-linha {
white-space: pre-line;
}
...
~~~

Vamos colocar uma mensagem para indicar que não existe filmes caso nenhum filme tenha sido cadastrado ou caso a busca não retorne nenhum registro:

1 - Em **listagem-filmes.component.html**, crie um template u use o ngIf para acioná-lo caso não exista filmes:




~~~html
...
</mat-card>
</div>

<ng-template #semFilme>
<h1 class="main-div full-width">Nenhum registro encontrado</h1>
</ng-template>
~~~

e

~~~html
...
</mat-card>
<div class="home-content" infiniteScroll (scrolled)="onScroll()" *ngIf="filmes.length; else semFilme">
...
~~~

O resultado é:

![img/149.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/149.png)


Uma coisa ruim que está acontecendo é que o Angular está fazendo uma requisição para cada letra que é digitada no input de pesquisa. Para consertar isso, vamos usar o debounce Time:

A classe **listagem-filmes.component.ts** fica assim:

~~~typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { FilmesService } from 'src/app/core/filmes.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-listagem-filmes',
templateUrl: './listagem-filmes.component.html',
styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

readonly semFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEemlgFtRl2mVB_7J_ypS-JHchAMWKXNkANw&usqp=CAU';

config: ConfigParams = {
pagina: 0,
limite: 4
}

filmes: Filme[] = [];
filtrosListagem: FormGroup;
generos: Array<string>; 

constructor(private filmesService: FilmesService,
private fb: FormBuilder){ }

ngOnInit(): void {
this.filtrosListagem = this.fb.group({ 
texto: [''],
generos:['']}
);

this.filtrosListagem.get('texto').valueChanges
.subscribe((val: string) => {
this.config.pesquisa = val;
this.resetarConsulta();
});

this.filtrosListagem.get('generos').valueChanges
.pipe(debounceTime(400))
.subscribe((val: string) => {
this.config.campo = {tipo: 'genero', valor: val};
this.resetarConsulta();
});
this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; //<--

this.listarFilmes();
}

onScroll(): void {
this.listarFilmes();
}

private listarFilmes(): void {
this.config.pagina++;
this.filmesService.listar(this.config)
.subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
}

private resetarConsulta(): void {
this.config.pagina = 0;
this.filmes = [];
this.listarFilmes();
}
}
~~~

Após esta alteração, as consultas serão realizadas com um intervalo de 400 ms após a digitação do último carácter.

___

### Finalizando o projeto prático

##### Criando componente para visualizar os filmes

Vamos criar um componente para visualizar filmes:

1 - `ng g c filmes/visualizarFilmes --spec=false`

2 - Altere o seletor:

~~~typescript
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'dio-visualizar-filme',
...
~~~

3 - No template de listagem de filmes, vamos adicionar o método no botão para abrir filmes:

~~~html
...
mat-card-actions>
<button color="accent" mat-raised-button (click)="abrir(filme.id)">ABRIR</button>
</mat-card-actions>
...
~~~

4 - Crie uma nova rota children para o `id`

~~~typescript
...
children: [
{
// Digitou: localhost:4200/filmes - Vai cair no componente que lista os filmes
path: '',
component: ListagemFilmesComponent
},
// Dois pontos informa para o angula que o id é um parâmetro
{
path: ':id',
component: VisualizarFilmesComponent
},
...
~~~

5 - Importe a `Router` no construtor do componente de listagem de filmes, e crie o método abrir:

~~~typescript
...
constructor(private filmesService: FilmesService,
private fb: FormBuilder,
private router: Router){ }
...

...
abrir(id: number): void {
this.router.navigateByUrl('/filmes/'+ id);
}
~~~

6 - Com isso, o botão de Abrir já está funcionando, mas precisamos obter o id do filme clicado para que assim seja possível carregar as informações respectivas ao filme em questão.
Isso será feito no .ts do componente de visualização de filme, utilizando a instrução `activatedRoute.snapshot.params['id'];`:

~~~typescript
...
constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit() {
this.activatedRoute.snapshot.params['id'];
}
...
~~~

7 - Vamos criar outro método para visualizar dentro de **filmes.service.ts**:

~~~typescript
...
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-visualizar-filmes',
templateUrl: './visualizar-filmes.component.html',
styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {

filme: Filme;
constructor(private activatedRoute: ActivatedRoute,
private filmesService: FilmesService) { }

ngOnInit() {
this.visualizar(this.activatedRoute.snapshot.params['id']);
}

private visualizar(id: number): void {
this.filmesService.visualizar(id).subscribe((filme:Filme) => this.filme = filme);
}

}

...
~~~


8 - Precisamos criar uma lista para exibir as informações do 
filme. Para nos auxiliar, vamos utilizar o `mat-list`. 



~~~typescript

<mat-list>
<mat-list-item>Título: {{filme.titulo}}</mat-list-item>
<mat-list-item>Data de Lançamento: {{filme.dtLancamento}}</mat-list-item>
<mat-list-item>Gênero: {{filme.genero}}</mat-list-item>
<mat-list-item>Descrição: {{filme.descricao}}</mat-list-item>
<mat-list-item>Nota: <a [href]="filme.urlIMDb" target="_blank">{{filme.nota}}</a> </mat-list-item>
<img mat-card-image [src]="filme.urlFoto || semFoto">
</mat-list>>


~~~


![img/150.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/150.png)




9 - Ajuste o formato da data utilizando um pipe e coloque um template para tratar erros de página não encontradas:

~~~typescript
<mat-list *ngIf="filme">
<mat-list-item>Título: {{filme.titulo}}</mat-list-item>
<mat-list-item>Data de Lançamento: {{filme.dtLancamento | date: 'dd/MM/yyyy'}}</mat-list-item>
<mat-list-item>Gênero: {{filme.genero}}</mat-list-item>
<mat-list-item>Descrição: {{filme.descricao}}</mat-list-item>
<mat-list-item>Nota: <a [href]="filme.urlIMDb" target="_blank">{{filme.nota}}</a> </mat-list-item>
<img mat-card-image [src]="filme.urlFoto || semFoto">
</mat-list>>

<ng-template #semFilme>
<h1 class="main-div full-width" >Nenhum registro encontrado</h1>
</ng-template>

~~~

Teste a página.
___

##### Excluindo os filmes

Vamos adicionar os botões de editar e excluir.

1 - Em **visualizar-filmes.component.html**, crie dois botões e invoque um método excluir:

~~~typescript

<mat-card>
<mat-card-actions>
<button color="accent" mat-raised-button>Editar</button>
<button color="warn" mat-raised-button (click)="excluir()">Excluir</button>
</mat-card-actions>
</mat-card>
~~~

2 - Em **visualizar-filmes.component.ts**, vamos criar uma variável do tipo number para o id e faça os ajustes para que o `ngOnInit()` trabalhe com ele.

~~~typescript
ngOnInit() {
this.id = this.activatedRoute.snapshot.params['id'];
this.visualizar();
}
~~~


3 - No **filmes-service.ts**, criaremos o método para deletar:
~~~typescript
excluir(id: number): Observable <void>{
return this.http.delete<void>(url + id);
}
~~~

4 - Em nosso método de excluir do **visualizar-filmes.component.ts**, faremos algo parecido com o que foi feito em salvar cadastro filmes, só que ao contrário. Primeiro vamos exibir a mensagem e depois excluir.

~~~typescript
excluir(): void {
const config = {
data: {
titulo: 'Você tem certeza que deseja excluir?',
descricao: 'Caso você tenha certeza que deseja excluir, clique no botão OK',
corBtnSucesso: 'warn',
corBtnCancelar: 'primary',
possuirBtnFechar: true
} as Alerta
};
const dialogRef = this.dialog.open(AlertaComponent, config);

dialogRef.afterClosed().subscribe((opcao: boolean) => {
if (opcao ){
this.filmesService.excluir(this.id)
.subscribe(() => this.router.navigateByUrl('/filmes'));
} 
});
}
~~~

A classe completa fica assim:

~~~typescript
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-visualizar-filmes',
templateUrl: './visualizar-filmes.component.html',
styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {
[x: string]: any;
readonly semFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEemlgFtRl2mVB_7J_ypS-JHchAMWKXNkANw&usqp=CAU';
filme: Filme;
id: number;

constructor(public dialog: MatDialog,
private activatedRoute: ActivatedRoute,
private router : Router,
private filmesService: FilmesService
) { }

ngOnInit() {
this.id = this.activatedRoute.snapshot.params['id'];
this.visualizar();
}

excluir(): void {
const config = {
data: {
titulo: 'Você tem certeza que deseja excluir?',
descricao: 'Caso você tenha certeza que deseja excluir, clique no botão OK',
corBtnSucesso: 'warn',
corBtnCancelar: 'primary',
possuirBtnFechar: true
} as Alerta
};
const dialogRef = this.dialog.open(AlertaComponent, config);

dialogRef.afterClosed().subscribe((opcao: boolean) => {
if (opcao ){
this.filmesService.excluir(this.id)
.subscribe(() => this.router.navigateByUrl('/filmes'));
} 
});
}
reiniciarForm() {
throw new Error('Method not implemented.');
}


private visualizar(): void {
this.filmesService.visualizar(this.id).subscribe((filme:Filme) => this.filme = filme);
}
}
~~~

Teste o app:

![img/151.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/151.png)

___

##### Enviando um filme para a página de edição


Vamos cuidar da parte de edição de filmes.
1 - Primeiro vamos adicionar a chamada do método `editar()` no template:

~~~html
<button color="accent" mat-raised-button (click)="editar()">Editar</button>
~~~

2 - Em **visualizar-filmes.component.ts**, vamos criar o método `editar()`. Aqui nós vamos aproveitar o nosso formulário de cadastro fazendo com que ele seja carregado com todos os campos já populados. 

~~~typescript

editar(): void {
this.router.navigateByUrl('/filmes/cadastro/' + this.id);
}
~~~

3 - Precisamos organizar as nossas rotas pois agora é necessário uma rota para o cadastro que também contenha um id:

~~~typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';

const routes: Routes = [
{
path: '',
redirectTo: 'filmes',
pathMatch: 'full'
},
{
path: 'filmes',
children: [
{
path: '',
component: ListagemFilmesComponent
},
{
path: 'cadastro',
children: [
{
path: '',
component: CadastroFilmesComponent
},
{
path: ':id',
component: CadastroFilmesComponent
}
]
},
{
path: ':id',
component: VisualizarFilmesComponent,
pathMatch: 'full'
}
]
},
{ path: '**', redirectTo: 'filmes' },

];

@NgModule({
imports: [
RouterModule.forRoot(routes),
FilmesModule
],
exports: [RouterModule]
})
export class AppRoutingModule { }


~~~

4 - Em **cadastro-filmes.component.ts**, vamos criar um id e mais dois métodos. Um para abrir o cadastro já preenchido e outro para abrir tudo em branco:

~~~typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';

@Component({
selector: 'dio-cadastro-filmes',
templateUrl: './cadastro-filmes.component.html',
styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

id: number;
cadastro: FormGroup;
generos: Array<string>;

constructor(public validacao: ValidarCamposService,
public dialog: MatDialog,
private fb: FormBuilder,
private filmesService: FilmesService, 
private router: Router,
private activatedRoute: ActivatedRoute
) { }

get f(){
return this.cadastro.controls;
}

ngOnInit() {
this.id = this.activatedRoute.snapshot.params['id'];
// se existir filme
if (this.id) {
this.filmesService.visualizar(this.id)
.subscribe((filme: Filme) => this.criarFormulario(filme));
} else { // se não, então crie em branco
this.criarFormulario(this.criarFilmeEmBranco());
}

}

submit(): void{ 
this.cadastro.markAllAsTouched(); 
if(this.cadastro.invalid){ 
return; 
}

const filme = this.cadastro.getRawValue() as Filme;
this.salvar(filme);
}

reiniciarForm(): void{ 
this.cadastro.reset();
}

private criarFilmeEmBranco(): Filme {
return {
id: null,
titulo: null,
dtLancamento: null,
urlFoto: null,
descricao: null,
nota: null,
urlIMDb: null,
genero: null

} as Filme
}

private criarFormulario(filme: Filme): void {
this.cadastro = this.fb.group({

titulo: [filme.titulo,[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
urlFoto: [filme.urlFoto, [Validators.minLength(10)]],
dtLancamento: [filme.dtLancamento, [Validators.required]],
descricao: [filme.descricao],
nota: [filme.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
genero: [filme.genero, [Validators.required]]
});
this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ];
}

private salvar(filme: Filme): void {
this.filmesService.salvar(filme).subscribe(() => { 
const config = {
data: {
btnSucesso: 'ir para a listagem',
btnCancelar: 'Cadastrar um novo filme',
corBtnCancelar: 'primary',
possuirBtnFechar: true
} as Alerta
};
const dialogRef = this.dialog.open(AlertaComponent, config);

dialogRef.afterClosed().subscribe((opcao: boolean) => {
if (opcao ){
this.router.navigateByUrl('filmes');
} else {
this.reiniciarForm();
}
})
},
() => {
const config = {
data: {
titulo: 'Erro ao salvar o registro!',
descricao: 'Não conseguimos salvar o seu registro. Tente mais tarde!',
corBtnSucesso: 'warn',
btnSucesso: 'Fechar'
} as Alerta
};
this.dialog.open(AlertaComponent, config);
});
}
}

~~~


##### Editando os filmes


Vamos compreender como está primeiro o nosso salvar do arquivo **cadastro-filmes.component.ts**.

Quando a gente manda submeter os dados do formulário, ele pega o filme e chama o método salvar:

~~~typescript
ngOnInit() {
this.id = this.activatedRoute.snapshot.params['id'];
// se existir filme
if (this.id) {
filme.id = this.id;
this.filmesService.visualizar(this.id)
.subscribe((filme: Filme) => this.criarFormulario(filme));
} else { // se não, então crie em branco
this.criarFormulario(this.criarFilmeEmBranco());
}

}

~~~

1 - Encima disso, nós vamos ter que fazer uma validação para saber se o que queremos e salvar ou editar. Para isso, basta verificar se existe um id. Caso exista, então isso será um editar. Caso não exista, então será um novo filme cujo o id será criado pelo back-end:

~~~typescript
submit(): void{ 
this.cadastro.markAllAsTouched(); 
if(this.cadastro.invalid){ 
return; 
}

const filme = this.cadastro.getRawValue() as Filme;

if (this.id) {
this.editar(filme);
} else {
this.salvar(filme);
}
}

~~~

2 - Vamos criar o `editar()` em **cadastro-filmes.component.ts**. Ele é bastante parecido com o `salvar()` que já temos:

~~~typescript
private editar(filme: Filme): void {
this.filmeService.editar(filme).subscribe(() => {
const config = {
data: {
descricao: 'Seu registro foi atualizado com sucesso!',
btnSucesso: 'Ir para a listagem',
} as Alerta
};
const dialogRef = this.dialog.open(AlertaComponent, config);
dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('filmes'));
},
() => {
const config = {
data: {
titulo: 'Erro ao editar o registro!',
descricao: 'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
corBtnSucesso: 'warn',
btnSucesso: 'Fechar'
} as Alerta
};
this.dialog.open(AlertaComponent, config);
});
}

}

~~~


3 - Agora em **filmes.service.ts**, crie o `editar()` via `put`:

~~~typescript
editar(filme: Filme): Observable <Filme> {
return this.http.put<Filme>(url + filme.id, filme);
} 
~~~


Teste:

![img/152.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/152.png)



Prontinho! Concluímos nosso CRUD e ele com certeza servirá para criações de futuras aplicações de qualidade finíssima!

insejunior@gmail.com
devaluizio@gmail.com
___
___




