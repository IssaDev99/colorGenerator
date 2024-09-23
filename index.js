// créer 3 variables pour stocker 3 chiffres aléatoires
h1 = document.querySelector("h1");

// donner au body une couleur de fond en rgb

// montrer sur le body la couleur rgb
const colorGenerator = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
  h1.textContent = "rgb ( " + r + " , " + g + " , " + b + " )";
};

setInterval(colorGenerator, 3000);
