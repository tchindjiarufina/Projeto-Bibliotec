
const livros = document.querySelectorAll(".livro");

const botaoAnteriror = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

// configuração da paginação 

// Define quantos livros serão mostrados em cada pagina
const livrosPorPagina = 4;

// Guarda qual pagina esta sendo exibida, começando na pagina 1
let paginaAtual = 1;

// Calculando o total de paginas

// Divide a quantidade totoal de livros pela quantidade de livros por pagina
//Math.ceil() -> arredonda o resultado para cima

//Exemplo:
//10 livros/ 4 pagina = 2.5
//Math.ceil() = 2.5 arredondado para cima -> 3 paginas 
const totalPaginas = Math.ceil(livros.length / livrosPorPagina)

//Função responsavel por mostrar a pagina (atualizar os elementos)

function mostrarPagina()
{

// Descobre o indice do primeiro livro que deve aparecer 

//Pagina 1:
// (1-1)*4 = 0

// Pagina 1 :
//(2-1)* 4 = 4

[1,2,3,4,5,6,7,8]

//Pagina 1 = [1,2,3,4]

    const inicio = (paginaAtual - 1) * livrosPorPagina;

    //Descobre  até onde os livros dveem ser exibidos 

    //pagina 1: inicio 0 + 4 = 4
    //pagina 2: inicio 4 + 4 = 8
    const fim = inicio + livrosPorPagina


    // Percorre toda lista de livros encontrados no HTML
    //"livro" representa o elemento atual
    //"indice" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {
        
        //Verifica se o indice/posição do livro esta dentro do intervalo da pagina atual.
        if(posicao >= inicio && posicao < fim){

            //Se estiver, mostra o livro
            livro.style.display = "grid";
        }
        else {
            // se nao estiver, esconde o livro  
            livro.style.display = "none";
             
        }



    });

    //Atualza no HTML o numero da pagina atual 
    numeroPagina.textContent = paginaAtual;

    //Inicialmente, consideramos "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    //6 livros
    // fim = 8

    //Se o valor calculado ultrapassar a quantidade real  de livros, usamos a quantidade total.

    // Exemplo:
    // Existem 10 livros - na ultima pagina "fim" poderia ter 12
    // nesse caso, queremos mostrar 10 e não 12
    if(ultimoLivro > livros.length){
        
        ultimoLivro = livros.length;
    }
    //Atualiza o texto que informa quntos livros é mostrado 
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}

// Evento de click no botão de proxima pagina 

botaoProxima.addEventListener("click", () => {

    // Só pertmite avançar se ainda existir uma proxima pagina
    if(paginaAtual < totalPaginas){
         
        //Avança uma pagina
        //paginaAtual = paginaAtual + 1
        paginaAtual++

        //Atualiza os livros exibidos na tela 
        mostrarPagina();
    }
})

//Evento de click no botão de pagina anterior

botaoAnteriror.addEventListener("click", () => {
    //Só permite voltar se não estivermos na primeira página
    if(paginaAtual > 1) {

    
        //Voltamos uma pagina
        paginaAtual--;

        //Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})
//Quando a pagina carregar, precisamos executar a função de mostrat pagina uma vez para
// esconder os livros que não pertencem a primeira pagina
mostrarPagina();