
import { http,get } from '@/utils/http';
export const getNewsList = options => http({
  ...options,
  methods:'GET',
  url: 'news/list',
});
export const getOperatorsList = options => http({
  ...options,
  methods:'GET',
  url: 'operators/list',
});

// export const getAdsList = options => http({
//   ...options,
//   methods:'GET',
//   url: 'ads/list',
// })

export const getAdsList = get('operators/list')
