const shuffled = (sourceArray) => {
  const array = [...sourceArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const adsPath = "res/ads";
const textAdsPath = "res/text-ads";
const productsPath = "res/products";

const textAds = [
  { src: "adanim.gif", href: "#" },
  { src: "aff-1.gif", href: "https://adultfriendfinder.com" },
  { src: "aff-2.gif", href: "https://adultfriendfinder.com" },
  { src: "africa-future.gif", href: "https://www.rosebrides.com/south-african-brides.html" },
  { src: "africa-online.gif", href: "https://peprimer.com/african-search.html" },
  { src: "belarus.gif", href: "https://angelikaminsk.com" },
  { src: "bet.gif", href: "https://phantom.app" },
  { src: "biltongmakers.gif", href: "https://www.biltongmakers.com" },
  { src: "bizarre.gif", href: "http://exo-science.com" },
  { src: "blazeline.gif", href: "https://www.buydomains.com/lander/blazeline.com?domain=blazeline.com" },
  { src: "brandpills.gif", href: "http://brandpills.com" },
  { src: "brandy.gif", href: "http://www.cdnow.com" },
  { src: "breast-enlargement.gif", href: "http://bustfuel.com/" },
  { src: "clickers.gif", href: "http://www.breast-clicker-game.com" },
  { src: "dating-club.gif", href: "https://datingclub.com/" },
  { src: "datincash.gif", href: "http://datingcash.com" },
  { src: "datingroom.gif", href: "https://thedatingroom.com/" },
  { src: "datinglinks.gif", href: "https://datinglinks.com/links.html" },
  { src: "dominican.gif", href: "https://www.dominicancupid.com/en/women/dominican-republic" },
  { src: "easyadbucks.gif", href: "https://www.easyadbucks.com/" },
  { src: "ebony-1.gif", href: "https://ebony-cafe.com" },
  { src: "ebony-2.gif", href: "https://ebony-cafe.com" },
  { src: "ebonylove.gif", href: "http://www.ebony-love.net" },
  { src: "eye-on-africa-1.gif", href: "http://www.eyesonafrica.net/" },
  { src: "eye-on-africa-2.gif", href: "http://www.eyesonafrica.net/" },
  { src: "free-reading.gif", href: "http://www.free-astrology-readings-online.net" },
  { src: "games.gif", href: "http://www.top-site-links.net/casinos" },
  { src: "getaway-to-africa.gif", href: "http://getawaytoafrica.com" },
  { src: "ida.gif", href: "https://www.amazon.com/Place-Ida-Patricia-Richardson-ebook/dp/B00CGOLP9I" },
  { src: "iwantu.gif", href: "https://www.iwantu.com/" },
  { src: "manilabeauty.gif", href: "https://www.filipinocupid.com/" },
  { src: "massage-sole.gif", href: "https://dir.indiamart.com/delhi/height-increasing-insole.html" },
  { src: "missteecat.gif", href: "https://missteecatsafricarecipes.yourwebsitespace.com/" },
  { src: "oxygen.gif", href: "https://www.oocities.org/hk/tsco88/" },
  { src: "penis-enlargement.gif", href: "https://solsupps.com/products/beast" },
  { src: "pillstore.gif", href: "http://pillstore.com/" },
  { src: "sweet-girls.gif", href: "https://www.sweethomeindia.org/" },
  { src: "vao.gif", href: "http://store.vao-o2.biz" },
  { src: "viagra.gif", href: "https://solsupps.com/products/beast" },
  { src: "virtuagirl.gif", href: "http://www.virtuagirl.co/" },
  { src: "want-your-banner.gif", href: "https://brahsupps.com/ad.html" },
  { src: "zhongwenyi.gif", href: "https://en.tabirai.net/car/" },
  { src: "zhongwener.gif", href: "https://www.gov.cn/" },
  { src: "zhongwensan.gif", href: "https://www.gov.cn/" },
  { src: "zhongwensi.gif", href: "https://casino388.com/" },
  { src: "zhongwenwu.gif", href: "https://buddhist-thai.com/store17/en/" },
  { src: "zhongwenliu.gif", href: "https://www.gov.cn/" },
  { src: "zhongwenqi.gif", href: "https://www.gov.cn/" },
  { src: "zhongwenba.gif", href: "https://www.gov.cn/" },
] //
  .map((x) => ({ ...x, src: `res/text-ads/${x.src}` }));

const sideAds = [
  { src: "zebra.png", href: "https://shavershianfitness.com/pages/chestbrah" },
  { src: "ebony-chinese.gif", href: "https://ebony-cafe.com" },
  { src: "casino.png", href: "https://888.net/" },
  { src: "jamaica.png", href: "https://jamaicagetawaytravels.com/" },
  { src: "astrology.gif", href: "https://www.astrology.com/" },
  { src: "hmv.gif", href: "https://hmv.com/" },
  { src: "your-ad-1.gif", href: "ad.html" },
  { src: "altondigital.gif", href: "https://www.altondigitalimage.com.html" },
  { src: "china.png", href: "http://i.am.jinyong/" },
  { src: "enlargement.png", href: "https://solsupps.com/products/beast" },
  { src: "blacksex-ebonys.gif", href: "https://www.afroromance.com/" },
  { src: "money-scam.png", href: "http://www.couch-wealth.biz/" },
  { src: "chinaman.png", href: "https://www.chinavacuumcleanersupplier.com/" },
  { src: "roman-palace-casino.gif", href: "http://romanpalacecasino.com/" },
  { src: "thai-news.gif", href: "https://www.bangkokpost.com" },
  { src: "wine.gif", href: "https://twitter.com/hollowearthterf" },
  { src: "casino-country.gif", href: "https://casino-country.net" },
  { src: "your-ad-2.gif", href: "ad.html" },
  { src: "colombiancupid.gif", href: "https://www.colombiancupid.com/" },
  { src: "brazilcupid.gif", href: "https://www.brazilcupid.com/" },
  { src: "runescape.gif", href: "https://runescape.com/" },
  { src: "amazon.gif", href: "https://www.amazon.com/" },
  { src: "secrets.gif", href: "#" },
  { src: "mexican-dating.jpg", href: "https://www.mexicancupid.com/" },
  { src: "latin-dvd.jpg", href: "#" },
  // { src: "visualstudio.gif", href: "#" },
] //
  .map((x) => ({ ...x, src: `res/ads/${x.src}` }))
  .concat(textAds);

const makeAds = (adsNode, ads) => {
  for (const { src, href } of ads) {
    const aNode = document.createElement("a");
    aNode.setAttribute("href", href);
    aNode.setAttribute("target", "_blank");
    aNode.setAttribute("rel", "noopener");

    const imgNode = document.createElement("img");
    imgNode.setAttribute("class", "ad");
    imgNode.setAttribute("src", src);

    aNode.appendChild(imgNode);
    adsNode.appendChild(aNode);
  }
};

const makeProducts = (productsNode, products) => {
  for (const { name, price, src, isAd, href } of products) {
    if (isAd) {
      const node = document.createElement("div");
      node.setAttribute("class", "product");

      const imgNode = document.createElement("img");
      imgNode.setAttribute("class", "ad");
      imgNode.setAttribute("src", src);
      node.appendChild(imgNode);

      const textNode = document.createElement("div");
      const linkNode = document.createElement("a");
      linkNode.setAttribute("href", href);
      linkNode.setAttribute("class", "link");
      linkNode.setAttribute("target", "_blank");
      linkNode.setAttribute("rel", "noopener");
      linkNode.innerText = name;
      textNode.appendChild(linkNode);

      node.appendChild(textNode);

      productsNode.appendChild(node);
    } else {
      const node = document.createElement("div");
      node.setAttribute("class", "product");

      const imgNode = document.createElement("img");
      imgNode.setAttribute("src", src);
      node.appendChild(imgNode);

      const textNode = document.createElement("div");
      textNode.setAttribute("class", "name");
      // textNode.innerText = `${name} / ${price}`;
      textNode.innerText = `${name}`;
      node.appendChild(textNode);

      const priceNode = document.createElement("div");
      priceNode.setAttribute("class", "price");
      priceNode.innerText = `${price}`;
      node.appendChild(priceNode);

      productsNode.appendChild(node);
    }
  }
};

const makeLinks = (linksNode, links) => {
  for (const { name, href } of links) {
    const node = document.createElement("a");
    node.setAttribute("href", href);
    node.setAttribute("class", "link");
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener");
    node.innerText = name;
    linksNode.appendChild(node);
    linksNode.appendChild(document.createTextNode(" "));
  }
};

const randomizePageAds = () => {
  const textAdNodes = document.getElementsByClassName("text-ad");
  for (const node of textAdNodes) {
    const ad = textAds[Math.floor(Math.random() * textAds.length)];

    const aNode = document.createElement("a");
    aNode.setAttribute("href", ad.href);
    aNode.setAttribute("target", "_blank");
    aNode.setAttribute("rel", "noopener");

    const imgNode = document.createElement("img");
    imgNode.setAttribute("class", "ad");
    // imgNode.setAttribute("src", `${textAdsPath}/${ad.src}`);
    imgNode.setAttribute("src", ad.src);

    aNode.appendChild(imgNode);
    node.appendChild(aNode);
  }
};

const makeChains = () => {
  const chainNodes = document.getElementsByClassName("chain");

  for (const chainNode of chainNodes) {
    const mqNode = document.createElement("marquee");
    mqNode.setAttribute("scrollamount", "15");

    const wrapperNode = document.createElement("div");
    wrapperNode.style.transform = "translateX(-100%)";
    wrapperNode.style.width = "150%";

    for (let i = 0; i < 3; i++) {
      const imgNode = document.createElement("img");
      imgNode.setAttribute("src", "res/misc/chain.gif");
      imgNode.style.width = "150%";
      imgNode.style.height = "24px";

      wrapperNode.appendChild(imgNode);
    }

    mqNode.appendChild(wrapperNode);
    chainNode.appendChild(mqNode);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  if (left == null) return;
  if (right == null) return;

  const x = left.offsetWidth;
  const y = right.offsetWidth;

  const ads = shuffled(sideAds.concat(sideAds).concat(sideAds));

  const pivot = Math.ceil(ads.length * (y / (x + y)));

  if (left) {
    makeAds(left, ads.slice(0, pivot));
  }

  if (right) {
    makeAds(right, ads.slice(pivot));
  }

  randomizePageAds();

  makeChains();
});
