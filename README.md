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

[Código do Projeto](https://github.com/aluiziomonteiro/angular-avc/tree/fd4cf5c03f56e2c636b22a7a00395e7db542442c)

___

### Criando um Formulário

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

### Adicionando Validações ao Formulário


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

### Elvis Operator ![img/057.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/057.png)


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















<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />