
import axios from '@/utils/http';
export const getNewsList = options => axios.request({
  ...options,
  methods:'GET',
  url: 'news/list',
});
export const getOperatorsList = options => axios.request({
          
  methods:'GET',
  url: 'operators/list',
});

export default {};   