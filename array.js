//Existem duas formas de criar array

//Array tipo vetor
const frutas = ['maçâ', 'maracujá', 'banana'];
const numeros = [10,20,30];

//Array função
const cores = new Array('vermelho', 'preto', 'branco');

const linguagens = ['javascript', 'python', 'java', 'c#'];

//Acessando o meu primeiro elemento do vetor
const primeiraLinguagem = linguagens[0];
console.log(`A primeira linguagem é ${primeiraLinguagem}`);

const ultimoElemento = linguagens[linguagens.length-1];
console.log(`A última linguagem é ${ultimoElemento}`);

let coresMutaveis = ['branco', 'preto', 'cinza'];
coresMutaveis[1] = 'azul'; //Mudando o elemento do vetor

let planetas = ['Terra', 'Marte'];
console.log(`Array inicial dos planetas ${planetas}`);
//push()--> Adiciona um ou mais elementos ao final do array e retornao novo comprimento
const novoComprimentoPush = planetas.push('Saturno', 'Urano');

//pop()-->Remove o último elemento do array e retorna este elemento.
const UltimoElementoRemovido = planetas.pop();

//unshift()-->Adiciona um ou mais elemento no array.
planetas.unshift('Mercúrio');

//shift()-->Remove pririmeiro elemento do array.
const primeiroElementoRemovido = planetas.shift();

//indexOf()-->Retorna o primeiro ínidce em que um elemento pode ser enocntrado.
const primeiroTerra = planetas.indexOf('Terra');

//join()-->Cria e retorna uma nove string concatenando todos os elementos do array.
const stringPlanetaHifen = planetas.join('-');

const coresInteracao = ['vermelho', 'amarelo', 'rosa'];
console.log('\n---Interação com o laço for---');
for (let i=0; i < coresInteracao; i++) {
    console.log(`Cor no índice ${i}: ${coresInteracao[i]}`);
}

console.log('\n---Interação com o laço for...of---');
for(const cor of coresInteracao) {
    //const cor : erecebe em cada interação,'cor' recebe o valor do elemento atual do array
    console.log(`cor: ${cor}`);
}

console.log('\n---Interação com o laço forEach---');
    //Método for Each()-->Executa Uma função para cada elemento do array
coresInteracao.forEach(function(cor,indice){
     console.log(`Cor ${cor} no indice: ${indice}`);
});
