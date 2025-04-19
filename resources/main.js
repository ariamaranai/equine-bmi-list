ondragstart = e => !1;
{
  p.oninput = e => {
    let r = $total, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (a ??= [...t.childNodes], l--)
        while (t.appendChild(a[$orders[l][r]]), --r);
      else
        while (n.after(a[r]), --r);
  },
  r.oninput = e => {
    let r = $total, l = e.target.value.toLowerCase().replace(/[^-\u0020\w\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      d ??= (a ??= [...t.childNodes]).map(e => e.textContent);
      while (a[r].className = d[r].includes(l) ? (++i, "") : "a", --r);
      s.textContent = i
    } else if (a) {
      while (a[--r].className = "", r);
      s.textContent = $total
    }
  },
  addEventListener("wheel", e => {
    let r = t.scrollTop % 48;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 48 : 48 - r : r < 1 ? -48 : -r));
  }, { passive: !1 });
  let t = document.body, a, s = r.nextSibling, d
}