//rem 自适应
function initRem () {
  //window.screen.availWidth 屏幕可用宽度
  const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  //根据屏幕宽度设置 html.fontsize
  window.document.documentElement.style.fontSize = `${12 * cale}px`
}
initRem()
//监听浏览器尺寸变化
window.addEventListener('resize', function () {
  initRem()
  //当焦点在输入框或者富文本框时
//解决键盘弹出后挡表单的问题 
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA'
  ) {
    window.setTimeout(function () {
      if ('scrollIntoView' in document.activeElement) {
        //焦点元素与可视区域底部对齐
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
