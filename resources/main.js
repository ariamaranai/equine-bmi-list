addEventListener('wheel', n => n.preventDefault(document.body.scrollTop += n.deltaY > 0 ? Number.isInteger(devicePixelRatio) && 32 - document.body.scrollTop % 32 || 32 : Number.isInteger(devicePixelRatio) && -document.body.scrollTop % 32 || -32), { passive: !1 }),
ondragstart =n=> !1,
a.oninput =n=> {
  let e = document.body.children, r = $total, t = 0;
  while (e[r].className = e[r].textContent.includes(n.target.value) ? (++t,'') : 'p', --r);
  u.textContent = t
},
i.onchange =n=> (location.href = '//ariamaranai.github.io/equine-bmi-list/' + ['','weight/','bmi/'][i.selectedIndex])