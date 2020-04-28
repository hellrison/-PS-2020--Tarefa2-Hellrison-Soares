class Pessoa{

    constructor(nome,idade){

    this.nome = nome;
    this.idade = idade;
    
    
}
   
    chegarId (pessoa){

        if(this.nome == 'andre'){
        if(Pessoa.idade < 18)
        {
            return `Vai beber coca ${pessoa.nome}`
      
        }
        else
        {
        return `Pode beber cerveja! ${pessoa.nome}`
       
        }
    }
    else {
        console.log('Essa pessoa não pode executar essa ação');
    }
       
    }
    
    


}
class Curso{
    constructor(curso,hrsDeCurso){
        this.curso = curso;
        this.hrsDeCurso = hrsDeCurso;
    }
}
class Faculdade{
    constructor (nomeF,cursos){
        this.nomeF = nomeF;
        this.cursos = cursos;
    }
}
class Rep{
    constructor(nomeR, qMoradores,idadeR){
        this.nomeR = nomeR;
        this.qMoradores = qMoradores;
        this.idadeR = idadeR;
        
    }
}

class Bebida{
    constructor(nomeB,valor, lata){
        this.nomeB = nomeB;
        this.valor = valor;
        this.lata = lata;
    }
}
 class Pedido{
     constructor(quantPessoas,bebidasI){// bebidasI será percorrida em um laço
        this.quantPessoas = quantPessoas;
        this.bebidasI = bebidasI;
        this.total = 0;
     }
     CalcaularTotal(){
         for(var i = 0;i<this.bebidasI.length;i++){//length representa o tamanho da sting. então irá até o final do vetor bebidasI
            this.total = this.total + this.bebidasI[i].valor;
         }
         return this.total;
     }

        CalcularIdividual(){
             return this.total/this.quantpessoas;
        }
 }
class Estudante extends Pessoa{
    constructor(nome, idade, faculdade, curso, rep){
        super(nome,idade);
        this.aculdade = faculdade;
        this.curso = curso;
        this.Rep = rep;
    }
    PedirConta(pedido) {
        return ("O total da conta foi: " + pedido.CalculaTotal().toFixed(2) + ". Sendo assim, ficou: " + pedido.CalculaIndividual().toFixed(2) + " pra cada.");
    }
}
