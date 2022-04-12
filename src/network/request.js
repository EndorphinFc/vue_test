import axios from "axios"
export function request(config) {
  
  const instance1=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  // 拦截器，请求拦截
  instance1.interceptors.request.use(config=>{
    return config
  },err=>{})
  // 响应拦截
  instance1.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })
  return instance1(config)
}
