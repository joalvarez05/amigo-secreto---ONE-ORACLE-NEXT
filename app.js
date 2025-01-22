let listaDeAmigos = [];
let parrafo = document.getElementById("resultado");
let listaHtml = document.getElementById("listaAmigos");
const agregarAmigo = () => {
  let input = document.getElementById("amigo").value.trim();

  if (input === "") {
    alert("Debes ingresar un nombre valido");
  } else {
    listaDeAmigos.push(input);
    let li = document.createElement("li");
    li.textContent = input;
    listaHtml.appendChild(li);
    document.getElementById("amigo").value = "";
    return listaDeAmigos;
  }
};

const sortearAmigo = () => {
  if (listaDeAmigos.length == 0) {
    alert("No hay amigos para sortear");
  } else {
    let aleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let elegido = listaDeAmigos[aleatorio];
    parrafo.innerHTML = `El amigo elegido aleatoriamente es: ${elegido}`;
  }
};
