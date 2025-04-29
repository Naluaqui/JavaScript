for(let i=0;i<5;i++){

    console.log(`Interação número: ${i}`);

}

let contador = 0;
while(contador < 3){
    console.log(`Interação número: ${contador}`);
    contador++;
}

const pessoa = {
    nome: 'Maria',
    idade: 30,
    cidade: 'São Paulo'
};

for(const propriedade in pessoa){
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

const cores = ['vermelho', 'verde', 'azul'];

for (const cor of cores){
    console.log(cor);
}

const mensagem = 'Olá, mundo!';

for(const letra of mensagem){
    console.log(letra);
}

const carro = {
    marca: 'Renault',
    modelo: 'Logan',
    ano: '2013',
    cor: 'Preto',
    ligar: function(){
        console.log('O carro está ligado');
        exibir('O carro está ligado');
    },
    obterDetalhes: function(){
        return `${this.marca} ${this.modelo} (${this.ano})`; 
    }
};

console.log('---Objeto Literal---');
console.log(`Marca: ${carro.marca}`); //Acessando a propriedade 'marca'
console.log(`Modelo: ${carro['modelo']}`); 
carro.ligar(); //chamando o método ligar
const detalhesCarro = carro.obterDetalhes();
console.log(`Detalhes do carro: ${detalhesCarro}`);
exibir(`detalhes carro: ${detalhesCarro}`);

//Outra forma de exibir um objeto (converte um objeto para uma string JSON)

const carroJSON = JSON.stringify(carro);
console.log(`objeto CARRO como JSON? ${carroJSON}`);
exibir(`oBJETO CARRO como JSON: ${carroJSON}`); 

//Funções construtoras
//Uma função construtora é usada para criar multiplos objetos
//Usamos a palavra chave 'new' para invocar um construtor 

function Pessoa(nome,idade,profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.profissao}`); 
    };
}

//Criando instâncias (objetos) da função construtora 'Pessoa' usando o 'new'

const pessoa1 = new Pessoa('Carlos', 30, 'Engenheiro');
const pessoa2 = new Pessoa('Mariana',38,'Advogada');
console.log('---Funções Construtoras---')
console.log(`Nome da Pessoa 1: ${pessoa1.nome}`);
pessoa1.saudar();
console.log(`Nome da Pessoa 2: ${pessoa2.nome}`);
pessoa2.saudar();