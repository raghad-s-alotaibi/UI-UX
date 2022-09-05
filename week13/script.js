const page = document.getElementById('page')
const screen = document.getElementById('screen')

function updateWidth(event) {
  screen.style.width = `${(event.pageX || Math.trunc(event.touches[0].pageX)) -10}px`
}

page.onmousemove = updateWidth
page.onmouseenter = updateWidth
page.onmouseleave = updateWidth
page.ontouchmove = updateWidth
page.ontouchstart = updateWidth
page.addEventListener('mousemove', updateWidth, false)
page.addEventListener('mouseenter', updateWidth, false)
page.addEventListener('mouseleave', updateWidth, false)