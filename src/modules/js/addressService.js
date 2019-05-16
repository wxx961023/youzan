import fetch from 'js/fetch.js'
import url from 'js/api.js'

class Address{
  static list(){ //给的RAP2接口是GET请求！
    return fetch(url.addressList)
  }
  static add(data){ //要传用户名，手机号，详细地址等
    return fetch(url.addressAdd,data)
  }
  static remove(id){
    return fetch(url.addressRemove,id)
  }
  static update(data){
    return fetch(url.addressUpdate,data)
  }
  static setDefault(id){
    return fetch(url.addressSetDefault,id)
  }
}

export default Address