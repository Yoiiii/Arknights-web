//rem 自适应
function initRem () {
  //window.screen.availWidth 屏幕可用宽度
  const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  console.log(window.screen.availWidth);
  window.document.documentElement.style.fontSize = `${12 * cale}px`
}
initRem()
window.addEventListener('resize', function () {
  initRem()
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA'
  ) {
    window.setTimeout(function () {
      if ('scrollIntoView' in document.activeElement) {
        document.activeElement.scrollIntoView(false)    
      } else {
        document.activeElement.scrollIntoViewIfNeeded(false)
      }
    }, 0)
  }
})
                 
document.addEventListener('focusout', () => {
  setTimeout(() => {
    const height = document.documentElement.scrollTop || document.body.scrollTop
    window.scrollTo(0, height + 1)
  }, 20)
})
