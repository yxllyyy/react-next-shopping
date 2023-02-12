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

export interface IProduct {
  id: number;
  type?: number;
  name?: string;
  minPrice: number;
  maxPrice: number;
  originalCost?: number;
  couponLabelDesc?: string;
  coverUrl?: string;
}

export interface IHotProduct {
  id: number;
  products?: IProduct
}

export interface IHotproductV2 {
  count?: number;
  hasMore?: boolean;
  hotProduct?: IHotProduct[]
}

export interface IAllProduct {
  count?: number;
  allProduct?: IProduct[]
}

// 搜索建议的数据
export const getSearchSuggest = () => {
 return hyRequest.get<IResultData<ISearchSuggest>>("/searchSuggest/get")
}

// 获取首页数据(如轮播图)
export const getHomeInfo = () => {
 return hyRequest.get<IResultData<IHomeInfo>>("/home/info")
}

// 编辑推荐的商品
export const getHotproduct_v2 = () => {
  return hyRequest.get<IResultData<IHotproductV2>>("/hotproduct_v2/gets");
};

// 编辑推荐的商品
export const getAllProduct = () => {
 return hyRequest.get<IResultData<IAllProduct>>("/allProduct/gets")
}