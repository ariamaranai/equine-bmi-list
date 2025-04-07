import heights from "../../equine-lib/bmi.json";
import mstns from "../../equine-lib/mstn-tb.json";

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
  .replace("elsewhile", "else while")
  .replace("elsel", "else l")
  .replaceAll("elseif", "else if")
  .replace("(^|)", "(^| )");
let html = (await Bun.file("main.htm").text())
  .replaceAll("\n", "")
  .replaceAll("$total", total)
  .replace("/*css*/", css);
let toMstnAttr = v =>
  v == "CC" ? " a" :
  v == "CT" ? " s" :
  v == "TT" ? " i" : "";
let _mstns = mstns.map(v => v[0]).filter(v =>
  v.sex == "S" &&
  v.name != "-" &&
  v.mstn == "CC" ||
  v.mstn == "CT" ||
  v.mstn == "TT"
);
let _mstnNames = _mstns.map(v => v.name);
let _mstnsSearch = (name, mstn) => {
  let idx = _mstnNames.indexOf(name);
  (mstn != (idx >= 0 ? _mstns[idx].mstn : "--")) && console.log(name);
}

for (let i = 0; i < heights.length; ++i) {
  let {name, year, hh, wt, bmi, href, sire, dsire, mstn} = heights[i];
  html += `<p${toMstnAttr(mstn[0])}><a href=${
    href[12] == "j"
      ? href.slice(-11)
      : "//www.pedigreequery.com/" +
        // href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+")
        href.slice(30)
  }>${name.toLowerCase()}
${year}</a><b>${hh} ${wt} ${bmi.toFixed(1)}</b>${sire.toLowerCase()}
${dsire.toLowerCase()}`;
  _mstnsSearch(name, mstn[0]);
  _mstnsSearch(sire, mstn[1]);
  _mstnsSearch(dsire, mstn[2]);
}
Bun.write("../s.js", js);
Bun.write("../index.htm", html);
console.log(`html size: ${Bun.gzipSync(Buffer.from(html)).length}`);
console.log(`js size: ${Bun.gzipSync(Buffer.from(js)).length}`);