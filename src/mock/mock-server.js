/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import category from './category.json';
import homeData from './homeData.json';
import categoryList from './categoryList.json'

Mock.mock('/mock/home', {code: 0, data: homeData});
Mock.mock('/mock/category', {code: 0, data: category});
Mock.mock('/mock/categoryList', {code: 0, data: categoryList});
