import { get } from '@/utils/http';
export const getArticles = (id) =>{
  get('articles/',id,false)
}

