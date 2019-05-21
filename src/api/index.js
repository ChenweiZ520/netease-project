import ajax from './ajax'

const BASE = '/api'

//获取home中的grow数据
export const reqHomeGrow = () => ajax('/mock/home')
//获取分类数据
export const reqCategoryData = () =>ajax('/mock/category')
//获取搜索结果数据
export const reqSearchResult = (keywordPrefix) =>ajax(BASE+'/xhr/search/searchAutoComplete.json',{keywordPrefix})
//获取识物页的tab数据
export const reqThingsTabData = ()=>ajax(BASE+'/topic/v1/find/getTabs.json')
//获取识物页推荐数据
export const reqCommendData = ()=>ajax(BASE+'/topic/v1/find/recManual.json')

