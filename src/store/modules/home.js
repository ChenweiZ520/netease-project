import {HOMEDATE_LIST} from '@/store/mutations-type'
import {reqHomeGrow} from '@/api'

const state = {
  homeDate:{}
}

const mutations = {
  [HOMEDATE_LIST](state,homeDate){
    state.homeDate = homeDate
  }
}

const actions = {
  //获取home数据
  async getHomeDate({commit}){
    const result = await reqHomeGrow()
    if (result.code===0){
      const homeDate = result.data
      //console.log(homeDate)
      commit(HOMEDATE_LIST,homeDate)
    }
  },

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
