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

const projetos = [{
    titulo: "Site pessoal responsivo",
    descricao: "Projeto criado para apresentar minha trajetória, objetivos profissionais, habilidades e links de contato.",
    tecnologias: "HTML5, CSS3 e GitHub"},
  {
    titulo: "Sistema simples de cadastro de clientes",
    descricao: "Projeto futuro para praticar lógica de programação, formulários, banco de dados e organização de informações.",
    tecnologias: "Python, SQLite e Django"},
  {
    titulo: "Dashboard de vendas",
    descricao: "Projeto futuro para simular indicadores comerciais, relatórios e acompanhamento de metas em ambiente corporativo.",
    tecnologias: "HTML5, CSS3, JavaScript e bibliotecas de gráficos"},
  {
    titulo: "Sistema de controle de metas",
    descricao: "Projeto futuro para registrar metas, acompanhar resultados e visualizar desempenho de equipes comerciais.",
    tecnologias: "Python, Django, MySQL e visualização de dados"},
  {
  titulo: "Lista de tarefas com JavaScript",
  descricao: "Projeto futuro para praticar eventos, manipulação do DOM e armazenamento local no navegador.",
  tecnologias: "HTML5, CSS3, JavaScript e localStorage"}]

const listaProjetos = document.getElementById("lista-projetos");

const listaProjetos = document.getElementById("lista-projetos");

function renderizarProjetos(lista) {
  if (!listaProjetos) {
    return;
  }

  listaProjetos.innerHTML = "";

  lista.forEach(function (projeto) {
    const card = document.createElement("article");

    card.classList.add("card-projeto");

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
    `;

    listaProjetos.appendChild(card);
  });
}

renderizarProjetos(projetos);

const botoesFiltro = document.querySelectorAll(".botao-filtro");

botoesFiltro.forEach(function (botaoFiltro) {
  botaoFiltro.addEventListener("click", function () {
    const filtro = botaoFiltro.dataset.filtro;

    botoesFiltro.forEach(function (botao) {
      botao.classList.remove("ativo");
    });

    botaoFiltro.classList.add("ativo");

    if (filtro === "todos") {
      renderizarProjetos(projetos);
      return;
    }

    const projetosFiltrados = projetos.filter(function (projeto) {
      return projeto.tecnologias.includes(filtro);
    });

    renderizarProjetos(projetosFiltrados);
  });
});
  