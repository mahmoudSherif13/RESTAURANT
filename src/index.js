import { firstTab } from "./tab1";
import { tab2 } from "./tab2";
import { tab3 } from "./tab3";
import { thirdPText } from "./texts";
let body = document.querySelector("body");
let logo = document.createElement("h1");
let tab1 = document.createElement("button");
let sectab = document.createElement("button");
let thirdtab = document.createElement("button");
let content = document.getElementById("content");

logo.classList.add("logo");
logo.innerText = "yes food please";
body.prepend(logo);

tab1.textContent = "Home";
sectab.textContent = "Menu";
thirdtab.textContent = "About Us";

function clear() {
  content.innerHTML = "";
  content.appendChild(tab1);
  content.appendChild(sectab);
  content.appendChild(thirdtab);
}

tab1.addEventListener("click", () => {
  clear();
  content.append(firstTab());
});

sectab.addEventListener("click", () => {
  clear();
  content.append(tab2());
});

thirdtab.addEventListener("click", () => {
  clear();
  content.append(tab3());
});

content.appendChild(tab1);
content.appendChild(sectab);
content.appendChild(thirdtab);
content.append(firstTab());
