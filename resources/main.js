ondragstart =e=> !1;
{
addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 - t.scrollTop % 36 || 36 : - t.scrollTop % 36 || -36) :
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 : -36), { passive: !1 }),
oninput =e=> {
  if (a ??= [...t.children], r = $total, l = (e = e.target).selectedIndex) {
    if (--l < 3)
      while (t.appendChild(a[$orders[l][r]]), --r);
    else 
      (location.href = "//ariamaranai.github.io")
  } else {
    d ??= a.map(e => e.textContent),
    e = e.value, l = 0;
    while (a[r].setAttribute("style", d[r].includes(e) ? (++l, "") : "display:none"), --r);
    s.textContent = l
  }
};
let t = document.body, l, a, d, r
}