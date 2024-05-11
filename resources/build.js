import horses from "./mstn.json";

let total = horses.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replaceAll("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);
let mainNameForDebug = [];
let hrefsForDebug = [];
let namesForDebug = [];

for (let i = 0; i < total; ++i) {
  html += "<p>";
  // Debug
  let mainName = horses[i][0].name;
  mainName != "-" && mainNameForDebug.includes(mainName) ? console.log(mainName) : mainNameForDebug.push(mainName);

  for (let j = 0; j < 4; ++j) {
    let { name, year, type, href, mstn } = horses[i][j];
    if (href) {
      // Debug
      let hrefsIdx = hrefsForDebug.indexOf(href);
      if (hrefsIdx < 0) {
        hrefsForDebug.push(href);
        namesForDebug.push(name);
      } else if (namesForDebug[hrefsIdx] != name) {
        console.log(horses[i]);
      }

      let host = href.slice(8, href.indexOf("/", 10));
      if (host == "www.allbreedpedigree.com")
        href = " href=" + href.slice(33).split("+").map(v => v.length < 3 ? v : v[0].toUpperCase() + v.slice(1)).join("+");
      else if (host == "www.pedigreequery.com")
        href = " href=//www.pedigreequery.com/" + href.slice(30).split("+").map(v => v.length < 3 ?  v : v[0].toUpperCase() + v.slice(1)).join("+");
      else
        href = " href=" + href.slice(6);
    }
    mstn = mstn ? mstn == "CC" ? " s" : mstn == "CT" ? " a" : " e" : "";
    html += `<a${href}${mstn}>${name}${year ? "\u000a" + year : ""}${year ? " " + type : type ? "\u000a" + type : ""}`;
  }
  html += "</a>"
}

html += "</p>by <a href=//ariamaranai.github.io/ Class=p>@ariamaranai";
Bun.write("../index.htm", html);
console.log(`size: ${Bun.gzipSync(Buffer.from(html)).length}`);