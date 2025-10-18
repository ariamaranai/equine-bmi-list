ondragstart = e => !1;
{
  p.oninput = e => {
    let r = 0, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      while (t.appendChild(a[l ? $orders[l - 1][r] : r]), ++r < $total);
  },
  r.oninput = e => {
    let r = 0, l = e.target.value.toLowerCase().replace(/[^-\w \u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      while (a[r].className = d[r].includes(l) ? (++i, "") : "a", ++r < $total);
      s.textContent = i
    } else {
      while (a[r].className = "", ++r < $total);
      s.textContent = "$total"
    }
  },
  onwheel = e => {
    let r = t.scrollTop % 48;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 48 : 48 - r : r < 1 ? -48 : -r))
  };
  let t = document.body, a = [...t.childNodes], s = (a.shift(), r.nextSibling), d = a.map(e => e.textContent)
}