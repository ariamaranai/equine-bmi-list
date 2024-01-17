import heights from "./height.json";

let total = heights.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replaceAll("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);
let hrefing =(href, name)=> `<a href=${href.slice(href[12] == "j" ? -11 : 6)}>${name}</a>`

let heightHTML = html + " <a>HEIGHT</a>  / <a href=//ariamaranai.github.io/equine-height-list/weight/>WEIGHT</a>  / <a href=//ariamaranai.github.io/equine-height-list/bmi/>BMI</a>  / <a href=//ariamaranai.github.io/>@ariamaranai</a>";
for (let i = 0; i < heights.length; ++i) {
  let item = heights[i];
  let hh = item.hh;
  let wt  = item.wt;
  let bmi = item.bmi == -1 ? (item.bmi = wt ? ((wt / ((hh / 100) ** 2)) + .05) : 0) : item.bmi;
  heightHTML += `<p>${hrefing(item.href, item.name)}${bmi ? `${hh}  ${item.trust ? wt : `<i>${wt}</i>`}  ${String(bmi).padEnd(5, ".0")}` : `${hh}   -     -  `}  ${item.year}.${item.cnty.padEnd(4)}${hrefing(item.shref, item.sire)} /${hrefing(item.dshref, item.dsire)}`;
}
Bun.write("../index.htm", heightHTML);
console.log(`size: ${Bun.gzipSync(Buffer.from(heightHTML)).length}`);

let weightHTML = html + " <a href=//ariamaranai.github.io/equine-height-list/>HEIGHT</a>  / <a>WEIGHT</a>  / <a href=//ariamaranai.github.io/equine-height-list/bmi/>BMI</a>  / <a href=//ariamaranai.github.io/>@ariamaranai</a>";
let weights = heights.toSorted((a, b) => a.wt > b.wt ? 1 : a.wt < b.wt ? -1 : 0);
for (let i = 0; i < weights.length; ++i) {
  let item = weights[i];
  let hh = item.hh;
  let wt  = item.wt;
  let bmi = item.bmi;
  weightHTML += `<p>${hrefing(item.href, item.name)}${bmi ? `${hh}  ${item.trust ? wt : `<i>${wt}</i>`}  ${String(bmi).padEnd(5, ".0")}` : `${hh}   -     -  `}  ${item.year}.${item.cnty.padEnd(4)}${hrefing(item.shref, item.sire)} /${hrefing(item.dshref, item.dsire)}`;
}
Bun.write("../weight/index.htm", weightHTML);

let bmiHTML = html + " <a href=//ariamaranai.github.io/equine-height-list/>HEIGHT</a>  / <a href=//ariamaranai.github.io/equine-height-list/weight/>WEIGHT</a>  / <a>BMI</a>  / <a href=//ariamaranai.github.io/>@ariamaranai</a>";
let bmis = heights.toSorted((a, b) => a.bmi > b.bmi ? 1 : a.bmi < b.bmi ? -1 : 0);
for (let i = 0; i < bmis.length; ++i) {
  let item = bmis[i];
  let hh = item.hh;
  let wt  = item.wt;
  let bmi = item.bmi;
  bmiHTML += `<p>${hrefing(item.href, item.name)}${bmi ? `${hh}  ${item.trust ? wt : `<i>${wt}</i>`}  ${String(bmi).padEnd(5, ".0")}` : `${hh}   -     -  `}  ${item.year}.${item.cnty.padEnd(4)}${hrefing(item.shref, item.sire)} /${hrefing(item.dshref, item.dsire)}`;
}
Bun.write("../bmi/index.htm", bmiHTML);

let json = JSON.stringify(heights, null, 2).replaceAll('"bmi": "', '"bmi": ').replaceAll(`",\u000a    "trust"`, `,\u000a    "trust"`);
Bun.write("./height.json", json);