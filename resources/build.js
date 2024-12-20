import heights from "../../equine-lib/bmi.json";

let hrefs = heights.map(v => v.href);
let hrefing = href =>
  href[12] == "j"
    ? href.slice(-11)
    : "//www.pedigreequery.com/" +
      href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+");
let toIndexOf = v => hrefs.indexOf(v.href) + 1;
let wts = heights.toSorted((a, b) => b.wt - a.wt).map(toIndexOf);
let bmis = heights.toSorted((a, b) => b.bmi - a.bmi).map(toIndexOf);
let years = heights.toSorted((a, b) => a.year - b.year).map(toIndexOf);
let total = heights.length;
let orders = `[[0,${wts}],[0,${bmis}],[0,${years}]]`;
let css =
  (await Bun.file("main.css").text())
    .replace(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js =
  (await Bun.file("main.js").text())
    .replace(/(?<!let|new)\s/g, "")
    .replaceAll("$total", total)
    .replace("$orders", orders)
    .replace("elseif", "else if")
    .replace("elsel", "else l")
    .replace("(^|)", "(^| )");
let html =
  (await Bun.file("main.htm").text())
    .replaceAll("\n", "")
    .replaceAll("$total", total)
    .replace("/*css*/", css);

    for (let i = 0, h; i < heights.length; ++i) (
  h = heights[i],
  html += `<p><a href=${hrefing(h.href)}>${h.name}</a>${h.hh} ${h.wt} ${h.bmi.toFixed(1)} ${h.year}<u>${h.sire}\u000a${h.gsire}</u>`
);
Bun.write("../s.js", js);
Bun.write("../index.htm", html);
console.log(`html size: ${Bun.gzipSync(Buffer.from(html)).length}`);
console.log(`js size: ${Bun.gzipSync(Buffer.from(js)).length}`);