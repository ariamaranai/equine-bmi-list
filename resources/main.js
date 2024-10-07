ondragstart =e=> !1;
{
addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 - t.scrollTop % 36 || 36 : - t.scrollTop % 36 || -36) :
  e => e.preventDefault(t.scrollTop += e.deltaY > 0 ? 36 : -36), { passive: !1 }),
oninput =e=> {
  if (a ??= [...t.children], r = $total, e = e.target.selectedIndex) {
    if (--e < 3)
      while (t.appendChild(a[$orders[e][r]]), --r);
    else 
      (location.href = "//ariamaranai.github.io")
  } else {
    d ??= a.map(e => e.textContent),
    e = e.target.value;
    let t = 0;
    while (a[r].setAttribute("style", d[r].includes(e) ? (++t, "") : "display:none"), --r);
    t.textContent = t
  }
};
let t = document.body, a, d, r
}