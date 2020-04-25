class Pessoa{

    constructor(nome,idade,faculdade,curso,rep){

    this.nome = nome;
    this.idade = idade;
    this.faculdade = faculdade;
    this.curso = curso;
    this.rep = rep;
    
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
class Faculdade{
    constructor(faculdade,curso,periodo,hrsDeCurso){
        this.faculdade = faculdade;
        this.curso = curso;
        this.periodo = periodo;
        this.hrsDeCurso = hrsDeCurso;
    }
}

class Rep{
    constructor(nomeR, qMoradores,idadeR){
        this.nomeR = nomeR;
        this.qMoradores = qMoradores;
        this.idadeR = idadeR;
        
    }
}

/*class Pedido{
    constructor(pedir){
        this.pedir = pedir;
        
    }
        getPedido(){
           
        }
        }*/
    
