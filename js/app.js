const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");
for (let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {
    let clickedElemDataValue = this.dataset.panelBtn;
    // console.log(clickedElemDataValue, this);
    for (let i = 0; i < sidePanels.length; i++) {
      if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");
      } else {
        sidePanels[i].classList.remove("active");
      }
    }
  });
}

// search

const searchWrapper = document.querySelector("[data-search-wrapper]");

const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", function () {
  searchWrapper.classList.toggle("active");
});

// go top

const goTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  window.scrollY >= 150
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// menu

const closeBtn = document.querySelector("[data-nav-close-btn");
const openBtn = document.querySelector("[data-nav-open-btn]");
const menu = document.querySelector("[data-nav-menu]");
const overlay = document.querySelector("[data-overlay]");

const navElArray = [openBtn, closeBtn, overlay];

for (let i = 0; i < navElArray.length; i++) {
  navElArray[i].addEventListener("click", function () {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

// Image

const MainImg = document.getElementById("MainImage");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onmouseover = function () {
  MainImg.src = smallImg[0].src;
};

smallImg[1].onmouseover = function () {
  MainImg.src = smallImg[1].src;
};

smallImg[2].onmouseover = function () {
  MainImg.src = smallImg[2].src;
};

smallImg[3].onmouseover = function () {
  MainImg.src = smallImg[3].src;
};
