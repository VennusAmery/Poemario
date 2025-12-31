let zoom = 1;
const minZoom = 0.5;
const maxZoom = 2;
const zoomStep = 0.1;

const zoomLabel = document.getElementById("zoomLabel");

function applyZoom() {
  viewer.style.transform = `scale(${zoom})`;
  viewer.style.transformOrigin = "top center";
  zoomLabel.textContent = Math.round(zoom * 100) + "%";
}

function zoomIn() {
  if (zoom < maxZoom) {
    zoom += zoomStep;
    applyZoom();
  }
}

function zoomOut() {
  if (zoom > minZoom) {
    zoom -= zoomStep;
    applyZoom();
  }
}
    const totalPages = 33;
    const viewer = document.getElementById("viewer");
    const pageInfo = document.getElementById("pageInfo");

    for (let i = 1; i <= totalPages; i++) {
      const img = document.createElement("img");
      img.src = `img/${i}.png`;
      img.alt = `Página ${i}`;
      viewer.appendChild(img);
    }

    // indicador de página actual
    window.addEventListener("scroll", () => {
      const pages = document.querySelectorAll(".viewer img");
      let current = 1;

      pages.forEach((img, i) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          current = i + 1;
        }
      });

      pageInfo.textContent = `${current} / ${totalPages}`;
    });