import axios from 'axios';
import { baseApi } from '../config'


class NewAxios {
  constructor() {
    this.baseURL = baseApi;//获取config中的apiurl
    this.timeout = 10000;//超时
    this.withCredentials = true;//允许携带凭证
  }
  //拦截器
  setInterceptors = (instance) => {
    //拦截请求
    instance.interceptors.request.use((config) => {
      // 在这里添加loading
      // 配置token
      config.headers.AuthorizationToken = localStorage.getItem('AuthorizationToken') || '';
      return config;
    }, err => Promise.reject(err));
    //拦截响应
    instance.interceptors.response.use((response) => {
      // 在这里移除loading
      // todo: 想根据业务需要，对响应结果预先处理的，都放在这里
      return response;
    }, (err) => {
      if (err.response) { // 响应错误码处理
        switch (err.response.status) {
          case '403':
            // todo: handler server forbidden error
            break;
            // todo: handler other status code
          default:
            break;
        }
        return Promise.reject(err.response);
      }
      if (!window.navigator.online) { // 断网处理
        // todo: jump to offline page
        return -1;
      }
      return Promise.reject(err);
    });
  }

  request(options) {
    // 每次请求都会创建新的axios实例。
    
    const instance = axios.create();
    const config = { // 将用户传过来的参数与公共配置合并。
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout,
      withCredentials: this.withCredentials,
    };
    // 配置拦截器，支持根据不同url配置不同的拦截器。
    this.setInterceptors(instance, options.url);
    return instance(config); // 返回axios实例的执行结果
  }
}

export default new NewAxios();