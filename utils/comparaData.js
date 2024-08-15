


const dataString = "2024-08-11"; //data em formato string que chega do banco




function comparaData(dataString){

    //Formata String de Data do banco de dados
    const arrayData = dataString.split("-");
    const ano = arrayData[0];
    const mes = arrayData[1] - 1;
    const dia = arrayData[2];    
    const dataCriacao = new Date(ano,mes,dia)
    
    const dataAtual = new Date()
    
    const resultadoData = dataAtual - dataCriacao
    
    const diaMili = 24*60*60*1000

    const dias = resultadoData / diaMili 
    
    //Compara se a Data de criação no banco de dado é maior que a data atual
    if(dataCriacao > dataAtual){

      return console.log("Data de criação é maior que a data atual!")

    };
    
    //Retorna True se a data de criaçao for maior que 3 e false se for menor
    if(Math.floor(dias) >= 3){

      return true

    } else return false  
      
};


module.exports = comparaData