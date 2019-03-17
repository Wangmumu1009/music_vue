import originJSONP from 'jsonp'

export default function jsonp(url,data,option) {

  //如果没有问号，第一个就要拼一个问号，否则就是个&就可以
  url += (url.indexOf('?')<0?'?':'&')+param(data)
  //要把url拼好
  return new Promise((resolve,reject)=>{
    originJSONP(url,option,(err,data)=>{
      if (!err){
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data){
    //不为空就传data
    let value = data[k] !== undefined ? data [k] :''
    //es6语法，模板字符串
    //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
    url += `&${k}=${encodeURIComponent(value)}`
  }
  //如果有data的话，就把第一个&删掉，如果没有的话直接返回
  return url ? url.substring(1) : ''
}
