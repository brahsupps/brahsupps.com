const Draugr = {
  type: "draugr",
  src: "./imgres/ws/draugr.webp",
  title: "Dark Monster",
  desc: "You are Dark Monster, require Fangxiangshi exorcism bad spirit.",
};

const Lanklet = {
  type: "lanklet",
  src: "./imgres/ws/lanklet.png",
  title: "Lanky guy",
  desc: "You must are consume panda eye for healthy result.",
};

const RichPiana = {
  type: "richpiana",
  src: "./imgres/ws/richpiana.jpg",
  title: "Top BRAH",
  desc: "You are big strong health. Brah journey go well, congratulate!",
};

const Businessman = {
  type: "businessman",
  src: "./imgres/ws/businessman.jpg",
  title: "Businessman",
  desc: "Weak constitution require pangolin penis insuflate and testicule breath.",
};

const Grizzly = {
  type: "grizzly",
  src: "./imgres/ws/grizzly.webp",
  title: "Europe Bear",
  desc: "熊 bearman hunt remove clawn for powder sexual vitality",
};

const MiddleManagement = {
  type: "middlemanagement",
  src: "./imgres/ws/middlemanagement.jpg",
  title: "Middle management",
  desc: "Important warehouse manage, keep unit sale strong.",
};

const ConstructionWorker = {
  type: "constructionworker",
  src: "./imgres/ws/constructionworker.jpg",
  title: "Honest worker",
  desc: "Build future China strong. Congratulate much concrete mix.",
};

const OfficeGuy = {
  type: "officeguy",
  src: "./imgres/ws/officeguy.jpg",
  title: "Colleague",
  desc: "Work hard 996 for make it.",
};

const Gymbro = {
  type: "gymbro",
  src: "./imgres/ws/gymbro.png",
  title: "Gym BRAH",
  desc: "Brah path go well, work harder height fix use RHINO HORN.",
};

const Skinnyfat = {
  type: "skinnyfat",
  src: "./imgres/ws/skinnyfat.gif",
  title: "Skinny and fat",
  desc: "Start BRAH journey today with discount code $BRAHSUP OFF",
};

const Powerlifter = {
  type: "powerlifter",
  src: "./imgres/ws/powershitter.jpg",
  title: "Strongest in gym",
  desc: "You almost BRAH only need to loss the fat use SAIGA HORN.",
};

const Boogie = {
  type: "boogie",
  src: "./imgres/ws/boogie.png",
  title: "Disgusting",
  desc: "Manpig turn gutter oil when dead.",
};

const BruceLee = {
  type: "brucelee",
  src: "./imgres/ws/brucelee.webp",
  title: "Bruce Lee 李小龍",
  desc: "Are like water friend. Enter dragon path use dog tongue for strength.",
};

const Twink = {
  type: "twink",
  src: "./imgres/ws/twink.jpg",
  title: "Twink",
  desc: "Am twinkle ladyboy. Kokomama for bottom gain.",
};

const Midget = {
  type: "midget",
  src: "./imgres/ws/midget.png",
  title: "Short BRAH",
  desc: "Ready for brah path, stretch with testicle rope.",
};

const GardenGnome = {
  type: "gardengnome",
  src: "./imgres/ws/gnome.jpg",
  title: "Gnome in park",
  desc: "Garden home collect herbs for solve impotency vitality.",
};

const Dwarf = {
  type: "dwarf",
  src: "./imgres/ws/dwarf.jpeg",
  title: "Dwarf",
  desc: "Power mine work, many coal for china build future.",
};

const Pig = {
  type: "pig",
  src: "./imgres/ws/pig.jpg",
  title: "Pig for roast",
  desc: "PRE COOK MEAT READY FOR PREPARE - Hong shao rou recipe.",
};

const H1 = "Tall    ";
const H2 = "Average ";
const H3 = "Short   ";

const B1 = "Skinny ";
const B2 = "Healthy";
const B3 = "Fat    ";

const S1 = "Strong ";
const S2 = "Weak   ";

function c(h, b, s) {
  return `${h}-${b}-${s}`;
}

const im = {
  [c(H1, B1, S1)]: Draugr,
  [c(H1, B1, S2)]: Lanklet,
  [c(H1, B2, S1)]: RichPiana,
  [c(H1, B2, S2)]: Businessman,
  [c(H1, B3, S1)]: Grizzly,
  [c(H1, B3, S2)]: MiddleManagement,
  [c(H2, B1, S1)]: ConstructionWorker,
  [c(H2, B1, S2)]: OfficeGuy,
  [c(H2, B2, S1)]: Gymbro,
  [c(H2, B2, S2)]: Skinnyfat,
  [c(H2, B3, S1)]: Powerlifter,
  [c(H2, B3, S2)]: Boogie,
  [c(H3, B1, S1)]: BruceLee,
  [c(H3, B1, S2)]: Twink,
  [c(H3, B2, S1)]: Midget,
  [c(H3, B2, S2)]: GardenGnome,
  [c(H3, B3, S1)]: Dwarf,
  [c(H3, B3, S2)]: Pig,
};

function getResult(catHeight, catBmi, catStrength) {
  const k = c(catHeight, catBmi, catStrength);
  return im[k];
}

// for (const k in im) {
//   // console.log(k.split("-").join(", "), "=", im[k].src.slice("./imgres/ws/".length), "/", im[k].desc);
//   console.log(im[k].title, "-", im[k].desc);

//   // const a = document.createElement("h2");
//   // a.innerText = k;

//   // const b = document.createElement("h4");
//   // b.innerText = im[k].desc;

//   // const img = document.createElement("img");
//   // img.setAttribute("src", im[k].src);

//   // setTimeout(() => {
//   //   document.getElementById("header").appendChild(a);
//   //   document.getElementById("header").appendChild(b);
//   //   document.getElementById("header").appendChild(img);
//   // }, 200);
// }

// console.log(JSON.stringify(im, null, 2));
