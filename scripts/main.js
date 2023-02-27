import content from "./home.js";

function render(arg) {
  const container = document.querySelector(".container");
  const header = document.createElement("h2");
  const copycontent = document.createElement("p");
  const img = document.createElement("img");
  img.src = arg.imgsrc;
  copycontent.textContent = arg.copycontent;
  header.textContent = arg.header;
  container.append(header, copycontent, img,arg.extra);
  return;
}

function clearContainer(params) {
  const container = document.querySelector(".container");
  container.innerHTML = "UEAOUAOUA";
  return
}

const navButtons  = document.querySelectorAll(".nav ul a");

navButtons.forEach((button) => {
button.addEventListener("click",play,);
});

function play() {
  clearContainer();
  // render(content());
}

// render(content());
