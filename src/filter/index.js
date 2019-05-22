import Vue from 'vue'

Vue.filter('read-count',function (countResult) {
  if ((countResult+"").length <= 4) {
    return countResult
  } else if((countResult+"").length === 5){
    return (countResult/1000).toString().slice(0,4)+'k'
  } else {
    return (countResult/10000).toString().split('.')[0]+'w'
  }
})
