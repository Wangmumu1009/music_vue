export function addClass(el,className) {
  if (hasClass(el,className)) {
    return
  }
  //获取到这个class
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el,className) {
  let reg = new RegExp('(^|\\s)'+className+'(\\s|$')//要转译
  return reg.test(el.className)//test()返回boolean，查找对应的字符串中是否存在模式
}
