ondragstart =e=> !1;
{
oninput =e=> {
  if (a ??= [...t.children], r = $total, l = (e = e.target).selectedIndex) {
    if (--l < 3)
      while (t.appendChild(a[o[l][r]]), --r);
    else
      (location.href = "//ariamaranai.github.io")
  } else if (l == 0)
    while (t.prepend(a[--r]), r);
  else {
    d ??= a.map(e => e.textContent),
    e = e.value, l = 0;
    while (a[r].setAttribute("style", d[r].includes(e) ? (++l, "") : "display:none"), --r);
    s.textContent = l
  }
},
addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 - t.scrollTop % 36 || 36 : - t.scrollTop % 36 || -36) :
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 : -36), { passive: !1 });
let t = document.body, l, a, d, r, s=t.querySelector("s"), o=$orders
}