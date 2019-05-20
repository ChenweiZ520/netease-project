import {CATEGORY_DATA} from '../mutations-type'
import {reqCategoryData} from '@/api'

const state = {
  categoryData:[]
}

const mutations = {
  [CATEGORY_DATA](state,categoryData){
    state.categoryData = categoryData
  }
}

const actions = {
  async getCategoryData({commit}){
    const result = await reqCategoryData()
    if(result.code === 0){
      const categoryData = result.data.categoryL1List
      //console.log(categoryData)
      commit(CATEGORY_DATA,categoryData)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
