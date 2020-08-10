
import {http} from '@/utils/http';
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
