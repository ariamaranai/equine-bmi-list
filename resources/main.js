ondragstart = e => !1;
{
  p.oninput = e => {
    let r = $total, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (a ??= [...t.children], l--)
        while (t.appendChild(a[$orders[l][r]]), --r);
      else
        while (n.after(a[r]), --r);
  },
  r.oninput = e => {
    let r = $total, l = e.target.value.toLowerCase().replace(/[^-\u0020\w\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      d ??= (a ??= [...t.children]).map(e => e.textContent);
      while (a[r].setAttribute("style", d[r].includes(l) ? (++i, "") : "display:none"), --r);
      s.textContent = i
    } else if (a) {
      while (a[--r].style = "", r);
      s.textContent = $total
    }
  },
  addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 - t.scrollTop % 40 || 40 : - t.scrollTop % 40 || -40)) :
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 : -40)), { passive: !1 });
  let t = document.body, a, s = r.nextSibling, d
}