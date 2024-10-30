let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["ruiva", "diva", "feliz"];
  return random(palavras);
}

function inicializaCores() {
  background("rgb(97,97,230)");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
/*if (mouseX < 50){
    let palavra = "R";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "Ru";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "Rui";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "Ruiv";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "Ruiva";
    text(palavra, 200, 200);
  } */
