const affiliates = [
  {
    name: "Virtue",
    src: "virtue.png",
    description:
      "Brother Virtue is a network extremist. He cannot stop networking everywhere he goes, always seeking to maximize shareholder value.",
    social: "networkvirtue_",
  },
  {
    name: "m0gwai",
    src: "m0gwai.png",
    description: "Premium diamond affiliate. Has brought more new affiliates than any other.",
    social: "m0gwai_",
  },
  {
    name: "Lukey",
    src: "lukey.png",
    description: "Brother Luckey is a Golden Premium affiliate, responsible for many partnerships and GONG making.",
    social: "VERYCOOLLUKEY",
  },
  {
    name: "Genius Affiliate",
    src: "genius.png",
    description:
      "Genius Affiliate used to lack a brain, but due to consistent usage of Brah Supps he now boasts a triple digit IQ.",
    social: "firstinterntusr",
  },
  {
    name: "Yabi Shabi",
    src: "yabishabi.png",
    description:
      "Supporter of Chinese product. BRAH SUPPS INT。is the most product and premiere cryptocurrency of China industrial worl. Would very much like Chinese wife Douyin megastar.",
    social: "yabishabi",
  },
  {
    name: "COREW4R",
    src: "corewarcrypto.jpg",
    description:
      "Ex Military affiliate. Strong supporter of natural supplements and a staunch advocate for not using imitations.",
    social: "corewarcrypto",
  },
  {
    name: "SWIMMING",
    src: "swimming.png",
    description:
      "Unemployed Affiliate. Declares he will never hold a job, does not accept payment for sales made with his affiliate links. TOP 5 affiliate.",
    social: "SwimmingPigLuvr",
  },
  {
    name: "Cosmic 💫 Wizard",
    src: "wizard.png",
    description: "Affiliate from Hogwarts. Uses magic to sell supplements.",
    social: "PleidianKrypto",
  },
  {
    name: "Kurome",
    src: "kurome.png",
    description:
      "High temperature affiliate. Eats 20lbs of coconut oil per week. Refuses to speak to others as not to breka sacred vow of silence.",
    social: "sakahoko7",
  },
  {
    name: "Leftoversushi",
    src: "leftoversushi.png",
    description: "Never stops working. Hasn't slept in 15 years. If he stops working, he will die.",
    social: "leftoversushiii",
  },
  {
    name: "Sarah Wukong",
    src: "sarahwukong.png",
    description: "Daughter of important Party Offical. Chinese Pop Idol. I love Sarah Wukong.",
    social: "sarahwukong",
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

    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", src);
    cardNode.appendChild(imgNode);

    const headerNode = document.createElement("div");
    headerNode.setAttribute("class", "afcard-header");
    cardNode.appendChild(headerNode);

    const nameNode = document.createElement("div");
    nameNode.setAttribute("class", "afcard-name");
    nameNode.innerText = name;
    headerNode.appendChild(nameNode);

    const linkNode = document.createElement("a");
    linkNode.setAttribute("class", "afcard-social");
    linkNode.setAttribute("href", `https://twitter.com/${social}`);
    linkNode.setAttribute("target", "_blank");
    linkNode.setAttribute("rel", "noopener");
    linkNode.innerHTML = `${social}`;
    headerNode.appendChild(linkNode);

    const descriptionNode = document.createElement("div");
    descriptionNode.innerText = description;
    descriptionNode.setAttribute("class", "afcard-description");
    headerNode.appendChild(descriptionNode);

    parentNode.appendChild(cardNode);
  }
};
