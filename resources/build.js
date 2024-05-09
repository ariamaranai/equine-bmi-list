import heights from "./height.json";

let wts = heights.toSorted((a, b) => a.wt > b.wt ? 1 : a.wt < b.wt ? -1 : 0);
let bmis = heights.toSorted((a, b) => a.bmi > b.bmi ? 1 : a.bmi < b.bmi ? -1 : 0);
let total = heights.length;
let js = (await Bun.file("main.js").text()).replaceAll(/(?<!let|new)\s/g, "").replace("async", "async ").replace("await", "await ").replaceAll("$total", total);
let hhCSS = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let hhHTML = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", hhCSS);
let wtHTML = hhHTML.replace("<option>Weight", "<option selected>Weight");
let bmiHTML = hhHTML.replace("<option>BMI", "<option selected>BMI");
let hrefing =href=> href[12] == "j" ? href.slice(-11) : "//www.pedigreequery.com/" + href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+");
let footer = `</p><a href=//ariamaranai.github.io/>@ariamaranai</a><script>${js}</script>`;

for (let i = 0; i < heights.length; ++i) {
  {
    let { name, href, sname, gname, hh, wt, bmi } = heights[i];
    hhHTML += `<p><a href=${hrefing(href)}>${name}</a>${hh} ${wt}(${bmi.toFixed(1)})<i>${sname}\u000a${gname}</i>`;
  }
  {
    let { name, href, sname, gname, hh, wt, bmi } = wts[i];
    wtHTML += `<p><a href=${hrefing(href)}>${name}</a>${hh} ${wt}(${bmi.toFixed(1)})<i>${sname}\u000a${gname}</i>`;
  }
  {
    let { name, href, sname, gname, hh, wt, bmi } = bmis[i];
    bmiHTML += `<p><a href=${hrefing(href)}>${name}</a>${hh} ${wt}(${bmi.toFixed(1)})<i>${sname}\u000a${gname}</i>`;
  }
}

hhHTML += footer;
wtHTML += footer;
bmiHTML += footer;

Bun.write("../index.htm", hhHTML);
Bun.write("../wt/index.htm", wtHTML);
Bun.write("../bmi/index.htm", bmiHTML);
console.log(`size: ${Bun.gzipSync(Buffer.from(hhHTML)).length}`);