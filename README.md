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


