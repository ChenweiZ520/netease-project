import ajax from './ajax'

//获取home中的grow数据
export const reqHomeGrow = () => ajax('/mock/home')

//
export const reqCategoryData = () =>ajax('/mock/category')
