let imagenIndex = 1;
showSlides(imagenIndex);

// Next/prev controles
function controlImg(n) {
  showSlides((imagenIndex += n));
}

// imagenes
function imgIndex(n) {
  showSlides((imagenIndex = n));
}

function showSlides(n) {
  let i;
  let imagenes = document.getElementsByClassName("divImg");
  let dots = document.getElementsByClassName("dot");
  if (n > imagenes.length) {
    imagenIndex = 1;
  }
  if (n < 1) {
    imagenIndex = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  imagenes[imagenIndex - 1].style.display = "block";
  dots[imagenIndex - 1].className += " active";
}
