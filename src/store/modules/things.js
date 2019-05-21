import {THINGS_TAB_DATA,COMMEND_DATA} from '../mutations-type'
import {reqThingsTabData,reqCommendData} from '@/api'

const state = {
  thingsTabData:[],
  commendData:[]
}

const mutations = {
  [THINGS_TAB_DATA](state,thingsTabData){
    state.thingsTabData = thingsTabData
  },
  [COMMEND_DATA](state,commendData){
    state.commendData = commendData
  }
}

const actions = {
  //异步获取识物页tab数据
  async getThingsTabData({commit}){
    const result = await reqThingsTabData()
    if (result.code==="200") {
      const thingsTabData = result.data
      //console.log(thingsTabData)
      commit(THINGS_TAB_DATA,thingsTabData)
    }
  },
  //异步获取识物页推荐数据
  async getCommendData({commit}){
    const result = await reqCommendData()
    if(result.code === "200"){
      const commendData = result.data
      commit(COMMEND_DATA,commendData)
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
