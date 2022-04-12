// 1.引用数据
import { request } from "./request";
// 轮播图导入
export function getHomeMultidata(){
  return  request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}
