import {HOMEDATE_LIST,SEARCH_RESULT} from '@/store/mutations-type'
import {reqHomeGrow,reqSearchResult} from '@/api'

const state = {
  homeDate:{},
  searchData:[]
}

const mutations = {
  [HOMEDATE_LIST](state,homeDate){
    state.homeDate = homeDate
  },
  [SEARCH_RESULT](state,searchData){
    state.searchData = searchData
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
  //获取搜索结果数据
  async getSearchData({commit},keywordPrefix){
    const result = await reqSearchResult(keywordPrefix)
    //console.log(result)
    if (result.code==="200") {
      const searchData = result.data
      //console.log(searchData)
      commit(SEARCH_RESULT,searchData)
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
