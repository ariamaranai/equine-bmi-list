ondragstart =e=> !1;
{
oninput =e=> {
  if (a ??= [...t.children], r = $total, l = (e = e.target).selectedIndex) {
    if (--l < 3)
      while (t.appendChild(a[$orders[l][r]]), --r);
    else
      location.href = "//ariamaranai.github.io"
  } else if (l == 0)
    while (t.prepend(a[--r]), r);
  else {
    d ??= a.map(e => e.textContent.toLowerCase()),
    e = e.value.trim().replace(/['.]/g, "").toLowerCase(), l = 0;
    while (a[r].setAttribute("style", d[r].includes(e) ? (++l, "") : "display:none"), --r);
    s.textContent = l
  }
},
addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
  e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 36 - t.scrollTop % 36 || 36 : - t.scrollTop % 36 || -36)) :
  e => (e.preventDefault(), scrollBy(0 ,e.deltaY > 0 ? 36 : -36)), { passive: !1 });
let l, t = document.body, a, d, r, s=t.querySelector("s")
}