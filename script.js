const mensagem = document.getElementById("mensagem-boas-vindas");
const botao = document.getElementById("botao-mensagem");

if (mensagem && botao) {
  botao.addEventListener("click", function () {
    mensagem.textContent = "Minha transição para tecnologia está sendo construída com prática diária, projetos e estudo constante.";
    console.log("Botão de mensagem clicado");
  });
}