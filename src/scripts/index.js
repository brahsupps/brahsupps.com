const products = [
  { name: "PURE COCONUT-BASED OIL", price: "1,500 ¥", src: "pure-coconut-based-oil.jpg" },
  { name: "TOTAL CLEANSE", price: "1,200 ¥", src: "total-cleanse.jpg" },
  { name: "STRONG BUCK", price: "3,000 ¥", src: "strong-buck.jpg" },
  { name: "HORNYGOAT MILK", price: "1,200 ¥", src: "hornygoat-milk.jpg" },
  { name: "APETAMIN", price: "3,000 ¥", src: "apetamin.jpg" },
  { name: "SAIGA HORN 10g", price: "3,200 ¥", src: "saiga-horn.gif" },
  { name: "7K PE PILL", price: "2,000 ¥", src: "7k.png" },
  { name: "POSEIDON", price: "1,500 ¥", src: "poseidon.png" },
  {
    name: "EBONYCAFE.COM",
    isAd: true,
    src: "ebony-cafe.gif",
    href: "https://ebony-cafe.com/",
  },
  { name: "RHINO 69", price: "2,000 ¥", src: "rhino.png" },
  { name: "PANGOPEN", price: "3,500 ¥", src: "pangopen.jpg" },
  { name: "BRAH SHORT (兄弟短裤)", price: "4,000 ¥", src: "shorts.png" },
  { name: "STUD 100", price: "2,000 ¥", src: "stud100.png" },
  { name: "KOKOMAMA", price: "4,000 ¥", src: "kokomama.jpg" },
  {
    name: "GORILLA KILLER SUPPLEMENTS",
    isAd: true,
    src: "gorillakiller.png",
    href: "https://5percentnutrition.com/collections/best-sellers",
  },
] //
  .map((x) => ({
    ...x,
    src: x.isAd ? `res/ads/${x.src}` : `res/products/${x.src}`,
  }));

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("chat").style.display = "inline";
  }, 3000);

  document.getElementById("chat").onclick = () => {
    document.getElementById("chat").remove();
  };

  makeLinks(document.getElementById("links"), [
    { name: "www.twitter.com", href: "https://twitter.com/brahsupps" },
    { name: "www.telegram.com", href: "https://t.me/brahsupps" },
    { name: "ww.raydium.io", href: "https://dexscreener.com/solana/26K7hPZdokCd38pgRm4j2VzJkT6XR2DtDZQStSTZsZEN" },
    { name: "(the www.pump.fun)", href: "https://www.pump.fun/6CBm8B8uoCUZWjs9n32BNy4z6LjGj4etBH2X48JWVhzf" },
  ]);

  makeProducts(document.getElementById("products"), products);
});
