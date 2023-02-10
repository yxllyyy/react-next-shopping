import hyRequest from './index'
import type { IResultData } from './index'

export interface ISearchSuggest {
  id: string;
  defaultKey: string;
  configKey: any[]
}

export const getSearchSuggest = () => {
 return hyRequest.get<IResultData<ISearchSuggest>>("/searchSuggest/get")
}