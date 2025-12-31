const pages = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png" ,
    "img/10.png",
    "img/11.png",
    "img/12.png" ,
    "img/13.png",
    "img/14.png",
    "img/15.png",
    "img/16.png",
    "img/17.png",
    "img/18.png",
    "img/19.png",
    "img/20.png",
    "img/21.png",
    "img/22.png",
    "img/23.png",
    "img/24.png",
    "img/25.png",
    "img/26.png",
    "img/27.png",
    "img/28.png",
    "img/29.png",
    "img/30.png",
    "img/31.png",
    "img/32.png",
    "img/33.png"
];

let index = 0;
const totalPages = pages.length;
const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

function updateIndicator() {
  if (isMobile()) {
    document.getElementById("pageIndicator").textContent =
      `Página ${index + 1} de ${pages.length}`;
  } else {
    document.getElementById("pageIndicator").textContent =
      `Página ${index + 1}–${index + 2} de ${pages.length}`;
  }
}

function updatePages() {
  leftPage.classList.add("hidden");
  rightPage.classList.add("hidden");

  setTimeout(() => {
    leftPage.src = pages[index];
    rightPage.src = pages[index + 1];

    leftPage.classList.remove("hidden");
    rightPage.classList.remove("hidden");
  }, 600);
}

function nextPage() {
  if (isScrollMode()) return;
  if (index + step < pages.length) {
    direction = "next";
    animatePages();
    index += step;
  }
}

function prevPage() {
  if (isScrollMode()) return;
  if (index - step >= 0) {
    direction = "prev";
    animatePages();
    index -= step;
  }
}

function animatePages() {
  const outClass = direction === "next" ? "slide-left" : "slide-right";

  leftPage.classList.add(outClass);
  rightPage.classList.add(outClass);

  setTimeout(() => {
    leftPage.src = pages[index];
    rightPage.src = pages[index + 1];

    leftPage.classList.remove(outClass);
    rightPage.classList.remove(outClass);
  }, 350);

  updateIndicator();
}

function isScrollMode() {
  return window.innerWidth <= 600;
}

function renderPages() {

  if (isScrollMode()) {
    book.innerHTML = "";

    pages.forEach(src => {
      const page = document.createElement("div");
      page.className = "page";
      page.innerHTML = `<img src="${src}">`;
      book.appendChild(page);
    });

    return;
  }
}

function isMobile() {
  return window.innerWidth <= 768;
}


updateIndicator();
