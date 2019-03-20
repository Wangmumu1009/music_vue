export const commonParams = {
  g_tk:5381,
  inCharset:'utf-8',
  outCharset:'utf-8',
  notice:0,
  format:'jsonp'
}
//这样可以不用每个请求都写一遍参数

export const options = {
  param:'jsonpCallback',

}

export const ERR_OK = 0
