const titulo = document.getElementsByTagName("h1");
const yes = document.getElementById("yes");
const No = document.getElementById("No");
const foto = document.getElementById("foto");
const background = document.getElementsByTagName("body");

No.addEventListener("mouseover", function (event) {
  event.target.style.color = "purple";
  let posicao = Math.random() * 400;

  No.style.marginTop = `${posicao - 40}px`;
  No.style.marginLeft = `${posicao - 30}px`;
});

No.addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
});

const celebrar = () => alert("AAAAA ><  🫰");

const mudarFoto = () => {
  foto.src = "./imagens_e_gifs/doguinhoFeliz.jpg";
  background[0].style.backgroundColor = "purple";
  titulo[0].innerText = "AEEEEEEEEE >< 🫰!!";
};

yes.addEventListener("click", celebrar);
yes.addEventListener("click", mudarFoto);
