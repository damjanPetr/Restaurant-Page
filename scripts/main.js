import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

function elemntFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

elemntFromHTML(menu);
elemntFromHTML(contact);
elemntFromHTML(home);
document.body.appendChild(elemntFromHTML(menu));

function render(arg) {
  console.log(menu);
  const container = document.querySelector(".container");
  const header = document.createElement("h2");
  header.classList.add = "title";

  const copycontent = document.createElement("p");
  copycontent.classList.add = "content-copy";

  const img = document.createElement("img");
  img.src = arg.imgsrc;

  copycontent.textContent = arg.copycontent;
  header.textContent = arg.header;
  container.append(header, copycontent, img, arg.extra() ?? null);

  return;
}

function clearContainer(params) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  return;
}

const navButtons = document.querySelectorAll(".nav ul a");

for (let i = 0; i < navButtons.length; i++) {
  const element = navButtons[i];

  if (element.textContent === "Home") {
    element.addEventListener("click", () => {
      clearContainer();
      render(home);
    });
    console.log(element.textContent);
  } else if (element.textContent === "Contact") {
    element.addEventListener("click", () => {
      clearContainer();
      render(contact);
    });
    console.log(element.textContent);
  } else if (element.textContent === "Menu") {
    element.addEventListener("click", () => {
      clearContainer();
      render(menu);
    });
    // console.log(element.textContent);
  }
}

/**
 * @param {Function} arg function to be called to populate the container with specific content
 */
