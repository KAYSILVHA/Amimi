// 0 a 7 Lua Nova
// 8 a 14 Lua Crescente
// 15 a 21 Lua Cheia 
// 21 a 28 Lua Minguante


let now = new Date;
let dia = now.getDate();
let mes = now.getMonth()+1;
let ano = now.getFullYear();
let anoDoisUltimosDigitos = ano % 100;
const conta = ((anoDoisUltimosDigitos + 2) * 11+ dia + mes)%30;


if(conta>=0 && conta<=7){
  document.write('LUA NOVA')
}else if(conta>=8 && conta<=14){
  document.write('LUA CRESCENTE')
}else if(conta>=15 && conta<21){
  document.write('LUA CHEIA')
}else if(conta>=21 && conta<=28){
  document.write('LUA MINGUANTE')
}




