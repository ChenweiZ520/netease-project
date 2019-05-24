## 问题
  1. 当给ul加display：flex时，ul没被子元素撑开
     原因：因为子元素是flex-item，ul会继承父元素宽，不会被子元素撑开
     解决：给ul父元素加display：flex
     
  2. watch 监视后没变化
     原因：handler没执行
     解决：加上 immediate: true 触发handler 
  
  3. input中输入数据显示搜索结果，在第二次输入时，先显示前一次的数据（闪），然后显示当前的数据
     原因：没有清空数组中的内容（清空映射过来的数组没作用）
     解决：1、请求发送之前清空数组，直接清空vuex中的数据，this.$store.state.home.searchData=[]
          2、点击右边x号时，也得清空数组（方法同上）   
     
