import heights from "../../equine-lib/bmi.json";

let hrefs = heights.map(v => v.href);
let toIndexOf = v => hrefs.indexOf(v.href) + 1;
let wts = heights.toSorted((a, b) => b.wt - a.wt || -1).map(toIndexOf);
let bmis = heights.toSorted((a, b) => b.bmi - a.bmi || -1).map(toIndexOf);
let years = heights.toSorted((a, b) => a.year - b.year || -1).map(toIndexOf);
let total = heights.length;
let orders = `[[0,${wts}],[0,${bmis}],[0,${years}]]`;
let css = (await Bun.file("main.css").text()).replace(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text())
  .replace(/(?<!let|new)\s/g, "")
  .replaceAll("$total", total)
  .replace("$orders", orders)
  .replace("elseif", "else if")
  .replace("elsel", "else l")
  .replace("(^|)", "(^| )");
let html = (await Bun.file("main.htm").text())
  .replaceAll("\n", "")
  .replaceAll("$total", total)
  .replace("/*css*/", css);

for (let i = 0; i < heights.length; ++i) {
  let {name, year, hh, wt, bmi, href, sire, gsire} = heights[i];
  html += `<p><a href=${
    href[12] == "j"
      ? href.slice(-11)
      : "//www.pedigreequery.com/" +
        href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+")
  }>${name}</a>${hh} ${wt} ${bmi.toFixed(1)} ${year}<u>${sire}\u000a${gsire}</u>`
}
Bun.write("../s.js", js);
Bun.write("../index.htm", html);
console.log(`html size: ${Bun.gzipSync(Buffer.from(html)).length}`);
console.log(`js size: ${Bun.gzipSync(Buffer.from(js)).length}`);