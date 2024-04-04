const affiliates = [
  {
    name: "Chen",
    src: "chen.jpeg",
    social: "chen",
    description: "Are dearly beloved manager.",
  },
  {
    name: "Corewar",
    src: "corewarcrypto.jpg",
    social: "corewarcrypto",
    description: "Love to affiliate.",
  },
  {
    name: "Lukey",
    src: "VERYCOOLLUKEY.jpg",
    social: "VERYCOOLLUKEY",
    description: "Love to affiliate.",
  },
  {
    name: "yabi shabi",
    src: "yabishabi.jpg",
    social: "yabishabi",
    description: "Love to affiliate.",
  },
  {
    name: "Nick44",
    src: "iamnick44.jpg",
    social: "iamnick44",
    description: "Love to affiliate.",
  },
] //
  .map((x) => ({ ...x, src: `/res/affiliates/${x.src}` }));

document.addEventListener("DOMContentLoaded", () => {
  makeAffiliates(document.getElementById("affiliates"), affiliates);
});

const makeAffiliates = (parentNode, items) => {
  for (const { name, src, social, description } of items) {
    const cardNode = document.createElement("div");
    cardNode.setAttribute("class", "afcard");

    const headerNode = document.createElement("div");
    headerNode.setAttribute("class", "afcard-header");
    cardNode.appendChild(headerNode);

    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", src);
    headerNode.appendChild(imgNode);

    const nameNode = document.createElement("span");
    nameNode.setAttribute("class", "afcard-name");
    nameNode.innerText = name;
    headerNode.appendChild(nameNode);

    const descriptionNode = document.createElement("div");
    descriptionNode.innerText = description;
    descriptionNode.setAttribute("class", "afcard-description");
    cardNode.appendChild(descriptionNode);

    parentNode.appendChild(cardNode);
  }
};
