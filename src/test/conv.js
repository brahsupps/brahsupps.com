// const classes = {
//   male: {
//     heights: [
//       { cutoff: 150, label: "dwarf" },
//       { cutoff: 165, label: "halfman" },
//       { cutoff: 175, label: "manlet" },
//       { cutoff: 180, label: "almost man" },
//       { cutoff: 185, label: "standard man" },
//       { cutoff: 200, label: "tall man" },
//     ],
//     bmis: [
//       { cutoff: 19, label: "skeleton" },
//       { cutoff: 22, label: "twink" },
//       { cutoff: 27, label: "healthy" },
//     ],
//   },
// };

const conv = {
  maleHeight: (height) => {
    // for (const x of classes.male.heights) {
    //   if (height < x.cutoff) return x.label;
    // }
    // return "emperor";

    if (height < 150) return "dwarf";
    if (height < 165) return "half man";
    if (height < 175) return "manlet";
    if (height < 180) return "almost man";
    if (height < 185) return "standard man";
    if (height < 200) return "tall man";
    return "emperor";
  },
  femaleHeight: (height) => {
    if (height < 150) return "little goblin";
    if (height < 165) return "demon";
    if (height < 178) return "hot";
    if (height < 190) return "amazon";
    return "female titan, maybe man";
  },
  maleBmi: (bmi) => {
    // for (const x of classes.male.bmis) {
    //   if (bmi < x.cutoff) return x.label;
    // }
    // return "fat person (胖人)";
    if (bmi < 19) return "skeleton";
    if (bmi < 22) return "twink";
    if (bmi < 27) return "healthy";
    return "fat person (胖人)";
  },
  femaleBmi: (bmi) => {
    if (bmi < 19) return "skeleton";
    if (bmi < 22) return "skinny";
    if (bmi < 27) return "almost there";
    return "perfect";
  },
  maleStwr: (r) => {
    if (r < 1.5) return "weak";
    if (r < 1.7) return "warrior";
    return "leader";
  },
  femaleHtwr: (r) => {
    if (r < 1.25) return "pig";
    if (r < 1.5) return "healthy";
    return "busty lady";
  },
  malePenis: (r) => {
    if (r < 8) return "tiny penis";
    if (r < 12) return "average penis";
    if (r < 16) return "large penis";
    return "dragon penis";
  },
};
