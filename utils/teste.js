const cron = require('node-cron')


const batata = new Date()
const abobrinha = new Date().getHours()
const pepino = new Date().getMinutes()
const banana = new Date().getUTCSeconds()

const horario = abobrinha + ":" + pepino

const teste = '00:00:01'


// const teste1 = dateFormatter.format(batata)

while(teste === '00:00:00'){
  console.log('funcionando')
}
// console.log(batata);
// console.log({Horário:`${abobrinha}:${pepino}:${banana}`});
// console.log(horario)
// console.log(teste)
// console.log(horario === teste)
// console.log(typeof(teste1))

cron.schedule('12 19 * * *', () =>{
  console.log('teste')
})