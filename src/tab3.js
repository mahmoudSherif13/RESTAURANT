import { firstPText2, secondPText2 } from "./texts";
export function tab3() {
  let cont = document.createElement("div");
  let titleView = document.createElement("h1");
  let firstPView = document.createElement("p");
  let secondPView = document.createElement("p");

  titleView.innerText = "Heading 3";
  firstPView.innerText = firstPText2;
  secondPView.innerText = secondPText2;

  cont.appendChild(titleView);
  cont.appendChild(firstPView);
  cont.appendChild(secondPView);

  return cont;
}
