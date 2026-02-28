function mostrar_tela(id){
  const tela = 
  document.querySelectorAll(".tela");
  
  tela.forEach(tela => {
    tela.style.display = "none";
  });
  
  document.getElementById(id).style.display = "block";
}

const btn_enviar =
document.getElementById("btn_enviar");

let username = "Danix7090*";
let senha = "15102012";

btn_enviar.onclick = function(){
  const chute_username = 
  document.getElementById("chute_username").value;
  const chute_senha =
  document.getElementById("chute_senha").value;
  
  if(chute_username === username && chute_senha === senha){
    chute_username.value = "";
    chute_senha.value = "";
    mostrar_tela("tela_02");
  }
  else{
    mostrar_tela("tela_erro");
    chute_username.value = "";
    chute_senha.value = "";
  };
}


const btn_bom =
document.getElementById("btn_bom");
const btn_medio =
document.getElementById("btn_medio");
const btn_ruim =
document.getElementById("btn_ruim");

const dia_bom =
document.getElementById("dia_bom");
const dia_medio =
document.getElementById("dia_medio")
const dia_ruim =
document.getElementById("dia_ruim");

let bom = localStorage.getItem("bom");
let medio = localStorage.getItem("medio");
let ruim = localStorage.getItem("ruim");

bom = bom ? parseInt(bom) : 0;
medio = medio ? parseInt(medio) : 0;
ruim = ruim ? parseInt(ruim) : 0;

btn_bom.onclick = function(){
  bom += 1;
  localStorage.setItem("bom",bom)
  mostrar_tela("tela_estatisticas");
}

btn_medio.onclick = function(){
  medio += 1;
  localStorage.setItem("medio",medio);
  mostrar_tela("tela_estatisticas");
}

btn_ruim.onclick = function(){
  ruim += 1;
  localStorage.setItem("ruim","ruim");
  mostrar_tela("tela_estatisticas");
}

const btn_atualizar =
document.getElementById("btn_atualizar");

btn_atualizar.onclick = function(){
  dia_bom.innerText = `Condição Estavél: ${bom}`;
  dia_medio.innerText = `Condição Regular: ${medio}`;
  dia_ruim.innerText = `Condição Compremetida: ${ruim}`;
}





 
//---------------------------------------------


const btn_tentar_novamente =
document.getElementById("btn_tentar_novamente");

btn_tentar_novamente.onclick = function(){
  mostrar_tela("tela_01")
}
