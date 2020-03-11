import { firstPText, secondPText, thirdPText } from "./texts";
export function tab2() {
  let cont = document.createElement("div");
  let titleView = document.createElement("h1");
  let firstPView = document.createElement("p");
  let secondPView = document.createElement("p");
  let thirdPView = document.createElement("p");

  titleView.innerText = "Heading 2";
  firstPView.innerText = firstPText;
  secondPView.innerText = secondPText;
  thirdPView.innerText = thirdPText;

  cont.appendChild(titleView);
  cont.appendChild(firstPView);
  cont.appendChild(secondPView);
  cont.appendChild(thirdPView);

  return cont;
}
