ondragstart = e => !1;
{
  p.oninput = e => {
    let r = 0, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (l--)
        while (t.appendChild(a[$orders[l][r]]), ++r < $total);
      else
        while (n.after(a[r]), ++r < $total);
  },
  r.oninput = e => {
    let r = 0, l = e.target.value.toLowerCase().replace(/[^-\u0020\w\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      while (a[r].className = d[r].includes(l) ? (++i, "") : "a", ++r < $total);
      s.textContent = i
    } else if (a) {
      while (a[r].className = "", ++r < $total);
      s.textContent = $total
    }
  },
  addEventListener("wheel", e => {
    let r = t.scrollTop % 48;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 48 : 48 - r : r < 1 ? -48 : -r));
  }, { passive: !1 });
  let t = document.body, a = [...t.childNodes].slice(1), s = r.nextSibling, d = a.map(e => e.textContent)
}