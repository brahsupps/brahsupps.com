function init() {
  document.getElementById("measurementForm").addEventListener("submit", function (e) {
    e.preventDefault();
    reset();
    calculateMeasurements();
  });

  setMetric();

  document.getElementById("metric").addEventListener("change", function (e) {
    if (e.target.checked) setMetric();
  });

  document.getElementById("imperial").addEventListener("change", function (e) {
    if (e.target.checked) setImperial();
  });

  document.getElementById("maleFields").style.display = "block";
  document.getElementById("femaleFields").style.display = "none";

  document.getElementById("gender").addEventListener("change", function (e) {
    switch (e.target.value) {
      case "male": {
        document.getElementById("maleFields").style.display = "block";
        document.getElementById("femaleFields").style.display = "none";
        break;
      }
      case "female": {
        document.getElementById("maleFields").style.display = "none";
        document.getElementById("femaleFields").style.display = "block";
        break;
      }
    }
  });
}

function reset() {
  document.getElementById("you-are").innerHTML = "";
  document.getElementById("good-image").innerHTML = "";
  document.getElementById("good-title").innerHTML = "";
  document.getElementById("good-metric").innerHTML = "";
  document.getElementById("good-text").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("recommendations").innerHTML = "";
}

// ----------------------------------------------------------------------------
//
//  DISPLAY RESULTS
//
// ----------------------------------------------------------------------------

const round = (x) => parseFloat(x.toFixed(2));

function displayFemale({ weight, height, bmi, cup, htw }) {
  // let result = "";
  // if (!Number.isNaN(bmi)) {
  //   result += `Your BMI is ${bmi.toFixed(2)}. You are ${conv.femaleBmi(bmi)}\n`;
  // }
  // if (!Number.isNaN(htw)) {
  //   result += `Your hip-to-waist ratio is ${htw.toFixed(2)}. You are ${conv.femaleHtwr(htw)}\n`;
  // }
  // document.getElementById("result").innerText = result;
}

function displayMale({ weight, height, bmi, penis, stw, bench }) {
  const catHeight = height < 170 ? H3 : height < 185 ? H2 : H1;
  const catBmi = bmi < 20 ? B1 : bmi < 27 ? B2 : B3;
  const catStrength = bench >= weight ? S1 : S2;

  const r = getResult(catHeight, catBmi, catStrength);
  console.log(JSON.stringify(r, null, 2));

  if (r != null) {
    showGood();
    setGoodImage(r.src);
    addGoodTitle(r.title);
    addGoodMetric(`BMI: ${round(bmi)}`);
    addGoodText(r.desc);
  }

  if (catBmi === B3) {
    playAlert();
    playSound(400, "audio-you-are-fat-person");
    showAlert(`Your BMI ${round(bmi)} is too high. You are fat person (胖人)。`);
  }

  // const warnBench = bench != null && bench < weight;
  // const goodBench = bench != null && bench >= weight;

  // const warnFat = bmi != null && bmi >= bmiFatCutoff;

  // if (warnBench || warnFat) {
  //   playAlert();
  //   let delay = 500;

  //   if (warnBench) {
  //     playSound(delay, "audio-you-are-weak-pussy");
  //     showAlert("You weight more than bench pressed");
  //     delay += 3000;
  //   }

  //   if (warnFat) {
  //     playSound(delay, "audio-you-are-fat-person");
  //     showAlert(`Your BMI ${Math.round(bmi)} is very high. You are fat person (胖人)。`);
  //     delay += 2000;
  //   }
  // }

  // if (goodBench /* || goodMore... */) {
  //   showGood();

  //   if (goodBench) {
  //     setGoodImage("bench.jpg");
  //     addGoodText("you are strong bench press");
  //   }
  // }

  // let result = "";

  // if (!Number.isNaN(bmi)) {
  //   result += `Your BMI is ${round(bmi)}. You are ${conv.maleBmi(bmi)}\n`;
  // }
  // if (!Number.isNaN(stw)) {
  //   result += `Your shoulder-to-waist ratio is ${round(stw)}. You are ${conv.maleStwr(stw)}\n`;
  // }
  // if (!Number.isNaN(penis)) {
  //   result += `Your penis is ${round(penis)} cm. You have ${conv.malePenis(penis)}\n`;
  // }

  // document.getElementById("result").innerText = result;

  const products = addProductsMale({ bmi, height, bench, penis, r });

  console.log("products:", JSON.stringify(products, null, 2));

  showProducts(products);
}

// ----------------------------------------------------------------------------
//
//  PRODUCT RECOMMENDATIONS
//
// ----------------------------------------------------------------------------

function addProductsMale({ bmi, height, weight, bench, penis, r }) {
  const products = [];

  if (bmi < 22) {
    products.push({ name: "HORNYGOAT", src: "hornygoat-milk.jpg", why: "For gain muscle" });
  }
  if (bmi >= 26) {
    products.push({ name: "SAIGA HORN", src: "saiga-horn.gif", why: "For lose fat" });
  }

  if (height < 170) {
    products.push({ name: "POSEIDON", src: "poseidon.png", why: "To became tall" });
  }

  if (bench != null) {
    if (bench < weight) {
      products.push({ name: "POSEIDON", src: "poseidon.png", why: "To became muscularity" });
    }
    products.push({ name: "BRAH SHORTS", src: "shorts.png", why: "Deluxe gym wear" });
  }

  if (penis != null) {
    if (penis < 12) {
      products.push({ name: "PANGOPEN", src: "pangopen.jpg", why: "Against yours small penis" });
    }
    if (penis >= 12 && penis < 16) {
      products.push({ name: "7K", src: "7k.png", why: "To extra size your penis" });
    }
    if (penis >= 16) {
      products.push({ name: "RHINO 69", src: "rhino.png", why: "For maintain penis vitalism" });
    }
  }

  if (r.type === Gymbro.type) {
    products.push({ name: "RHINO 69", src: "rhino.png", why: "For more tall" });
  }
  if (r.type === Businessman.type) {
    products.push({ name: "PANGOPEN", src: "pangopen.jpg", why: "Against weak penis constitution" });
  }
  // if (r.type === Powerlifter.type) {
  //   products.push({ name: "POSEIDON", src: "poseidon.png", why: "For lose fat" });
  // }

  return products;
}

function showProducts(products) {
  if (products.length === 0) return;

  const recsNode = document.getElementById("recommendations");
  recsNode.style.display = "block";

  const h2 = document.createElement("h2");
  h2.innerText = "We are recommend product:";
  recsNode.appendChild(h2);

  const desc = document.createElement("div");
  desc.setAttribute("id", "recs-desc");
  desc.innerHTML = `request of order <a href="https://twitter.com/brahsupps" target="_blank" rel="noopener">CONTACT</a>`;
  recsNode.appendChild(desc);

  const productsNode = document.createElement("div");
  productsNode.setAttribute("id", "products");

  for (const { name, src, why } of products) {
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", `../res/products/${src}`);

    const nameNode = document.createElement("div");
    nameNode.setAttribute("class", "product-name");
    nameNode.innerText = name;

    const whyNode = document.createElement("div");
    whyNode.setAttribute("class", "product-why");
    whyNode.innerText = why;

    const textNode = document.createElement("div");
    textNode.setAttribute("class", "product-text");
    textNode.appendChild(nameNode);
    textNode.appendChild(whyNode);

    const productNode = document.createElement("div");
    productNode.setAttribute("class", "product");
    productNode.appendChild(imgNode);
    productNode.appendChild(textNode);

    productsNode.appendChild(productNode);
  }

  recsNode.appendChild(productsNode);
}

// ----------------------------------------------------------------------------
//
//  MEASURE
//
// ----------------------------------------------------------------------------

const getValue = (id) => document.getElementById(id)?.value;
const getFloat = (id) => parseFloat(document.getElementById(id)?.value);

let measure;

const measures = {
  metric: { w: 1, l: 1 },
  imperial: { w: 2.20462262185, l: 0.393701 },
};

function setMetric() {
  const wts = document.getElementsByClassName("wt");
  for (const wt of wts) wt.innerText = "kg";

  const lns = document.getElementsByClassName("ln");
  for (const ln of lns) ln.innerText = "cm";

  measure = "metric";
}

function setImperial() {
  const wts = document.getElementsByClassName("wt");
  for (const wt of wts) wt.innerText = "lb";

  const lns = document.getElementsByClassName("ln");
  for (const ln of lns) ln.innerText = "in";

  measure = "imperial";
}

function calculateMeasurements() {
  const gender = getValue("gender");

  const L = 1 / measures[measure].l;
  const W = 1 / measures[measure].w;

  const waist = L * getFloat("waist");
  const weight = W * getFloat("weight");
  const height = L * getFloat("height");
  const bmi = (100 * 100 * weight) / (height * height);

  const data = { weight, height, bmi };

  switch (gender) {
    case "male": {
      const penis = L * getFloat("penis");
      const bench = W * getFloat("bench");
      const shoulder = L * getFloat("shoulder");
      const stw = shoulder / waist;

      const maleData = { ...data, penis, bench, stw };

      console.log(JSON.stringify(maleData, null, 2));
      displayMale(maleData);
      break;
    }

    case "female": {
      const cup = getValue("cup").trim();
      const hip = L * getFloat("hip");
      const htw = hip / waist;

      const femaleData = { ...data, cup, htw };

      console.log(JSON.stringify(femaleData, null, 2));
      displayFemale(femaleData);
      break;
    }
  }
}

// ----------------------------------------------------------------------------
//
//  ALERT & GOOD
//
// ----------------------------------------------------------------------------

function playSound(delay, audioId) {
  const sound = document.getElementById(audioId);
  sound.volume = 0.7;
  setTimeout(() => sound.play(), delay);
}

// alert

function playAlert() {
  const alert = document.getElementById("audio-alert");
  alert.volume = 0.4;
  alert.play();
}

function showAlert(text) {
  document.body.style.background = "red";
  document.getElementById("alert").style.display = "block";
  const node = document.createElement("h2");
  node.innerText = text;
  document.getElementById("you-are").appendChild(node);
}

function closeAlert() {
  document.body.style.background = "black";
  document.getElementById("alert").style.display = "none";
  // document.getElementById("understand").style.display = "none";
  const audios = document.getElementsByClassName("audio");
  for (const audio of audios) {
    audio.pause();
    audio.currentTime = 0;
  }
}

// good

function showGood() {
  document.getElementById("good").style.display = "block";
}

function setGoodImage(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  document.getElementById("good-image").innerHTML = "";
  document.getElementById("good-image").appendChild(img);
}

function addGoodTitle(text) {
  const titleNode = document.createElement("div");
  titleNode.innerText = text;
  document.getElementById("good-title").appendChild(titleNode);
}

function addGoodMetric(text) {
  const metricNode = document.createElement("div");
  metricNode.innerText = text;
  document.getElementById("good-metric").appendChild(metricNode);
}

function addGoodText(text) {
  const textNode = document.createElement("div");
  textNode.innerText = text;
  document.getElementById("good-text").appendChild(textNode);
}
