const mensagem = document.getElementById("mensagem-boas-vindas");
const botao = document.getElementById("botao-mensagem");
const botaoTema = document.getElementById("botao-tema");

if (mensagem && botao) {
  botao.addEventListener("click", function () {
    mensagem.textContent = "Minha transição para tecnologia está sendo construída com prática diária, projetos e estudo constante.";
    console.log("Botão de mensagem clicado");
  });
}

if (botaoTema) {
  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");
    console.log("Tema alterado");

    if (document.body.classList.contains("modo-escuro")) {
      botaoTema.textContent = "Desativar modo escuro";
    } else {
      botaoTema.textContent = "Ativar modo escuro";
    }
  });
}