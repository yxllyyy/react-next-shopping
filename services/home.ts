import hyRequest from './index'
import type { IResultData } from './index'

export interface ISearchSuggest {
  id: string;
  defaultKey: string;
  configKey: any[]
}

export interface IBanner {
  id: number;
  picStr?: string;
  backendPicStr?: string;
}

export interface ICategory {
  cid: number;
  picStr?: string;
  title?: string;
  tabIndex?: number;
  targetUrl?: string;
  count?: number;
  desc?: string;
  type?: number;
}

export interface IRecommend {
  id: number;
  picStr?: string;
  title?: string;
}

export interface IHomeInfo {
  banners?: IBanner[]
  categorys?: ICategory[]
  recommends?: IRecommend[]
  digitalData?: any[]
}

export const getSearchSuggest = () => {
 return hyRequest.get<IResultData<ISearchSuggest>>("/searchSuggest/get")
}
export const getHomeInfo = () => {
 return hyRequest.get<IResultData<IHomeInfo>>("/home/info")
}