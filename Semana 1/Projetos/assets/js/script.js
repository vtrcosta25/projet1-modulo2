

let imagem = document.getElementById("imagem");
let evolucao = document.querySelector("#evolucao");
let nome = document.querySelector("#nome");
console.log(imagem)

let contador = 0;

function botao() {
  if (contador == 0) {
    imagem.setAttribute("src","/Semana 1/Projetos/assets/img/anbu.png");
    evolucao.innerText = "Anbu";
    nome.innerText = "Kakashi Anbu";
    contador = 1;
  } else if (contador == 1) {
    imagem.setAttribute("src","/Semana 1/Projetos/assets/img/jounin.png");
    evolucao.innerText = "Jounin";
    nome.innerText = "Kakashi Jounin";
    contador = 2;
  } else {
    imagem.setAttribute("src","/Semana 1/Projetos/assets/img/gennin.png");
    evolucao.innerText = "Gennin";
    nome.innerText = "Kakashi Gennin";
    contador = 0;
  }
}