let allLis = document.querySelectorAll(".nav li");
let links = document.querySelectorAll("li a");
let sections = document.querySelectorAll(".section");

document.querySelector(".nav-toggler").onclick = function () {
  document.querySelector(".aside").classList.toggle("open");
  this.classList.toggle("go-left");
};

function showSection(element) {
  sections.forEach((sec) => {
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active-section");
  });
}

let nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalnavlist = navlist.length,
  allsection = document.querySelectorAll(".section"),
  totalsetion = allsection.length;
for (let i = 0; i < totalnavlist; i++) {
  const a = navlist[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalnavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navlist[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
  });
}

function showSection(element) {
  for (let i = 0; i < totalsetion; i++) {
    allsection[i].classList.remove("active-section");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active-section");
}
function removeBackSection() {
  for (let i = 0; i < totalsetion; i++) {
    allsection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allsection[num].classList.add("back-section");
}

document.querySelector(".hire").addEventListener("click", function () {
  const secIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(secIndex);
});
function updateNav(e) {
  for (let i = 0; i < totalnavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = e.getAttribute("href").split("#")[1];
    if (
      target ===
      navlist[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}

let txt = "Frontend Developer.";
i = 0;
let txtContent = setInterval(() => {
  document.querySelector(".role span").textContent += txt[i];
  i++;
  if (i > txt.length - 1) {
    clearInterval(txtContent);
  }
}, 100);

document.querySelector(".gear-icon").onclick = function () {
  document.querySelector(".fa-gear").classList.toggle("fa-spin");
  this.classList.toggle("open");
  document.querySelector(".color-container").classList.toggle("open");
};

let liColors = document.querySelectorAll(".colors-box li");
if (localStorage.color !== null) {
  document.documentElement.style.setProperty(
    `--skin-color`,
    localStorage.color
  );
  liColors.forEach((li) => {
    li.classList.remove("active");
    if (localStorage.color === li.dataset.color) {
      li.classList.add("active");
    }
  });
}
liColors.forEach((li) => {
  li.addEventListener("click", () => {
    liColors.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    document.documentElement.style.setProperty(
      `--skin-color`,
      li.dataset.color
    );
    localStorage.setItem("color", li.dataset.color);
  });
});

let moodStatus;
let moodStyle = JSON.parse(localStorage.bodyStyle);
let icon = document.querySelector(".mood-icon .fa-solid");
if (moodStyle === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
  icon.classList.add("fa-spin");
}
document.querySelector(".mood-icon").onclick = function () {
  let className = icon.className.split(" ")[1];
  if (className === "fa-moon") {
    icon.classList.replace("fa-moon", "fa-sun");
    icon.classList.add("fa-spin");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    icon.classList.remove("fa-spin");
  }
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    moodStatus = "dark";
  } else {
    moodStatus = "light";
  }
  localStorage.setItem("bodyStyle", JSON.stringify(moodStatus));
};
