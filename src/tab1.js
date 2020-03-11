export function firstTab() {
  let div1 = document.createElement("div");
  let head1 = document.createElement("h1");
  head1.innerText = "Heading 1";
  let para1 = document.createElement("p");
  para1.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  let para2 = document.createElement("p");
  para2.innerText =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  div1.appendChild(head1);
  div1.appendChild(para1);
  div1.appendChild(para2);
  return div1;
}
