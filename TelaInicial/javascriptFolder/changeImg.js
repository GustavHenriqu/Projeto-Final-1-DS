function updateImageSource() {
    const image = document.querySelector(".logo-img");
    if (window.innerWidth >= 600) {
      image.src = "./Imagens/Logogolbet.header.png";
    } else {
      image.src = "./imagens/logoCortada.png";
    }
  }

  // Verifica ao carregar a página e quando redimensiona a janela
  window.addEventListener("load", updateImageSource);
  window.addEventListener("resize", updateImageSource);