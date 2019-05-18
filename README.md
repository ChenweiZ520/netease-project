## 问题
  1. 当给ul加display：flex时，ul没被子元素撑开
     原因：因为子元素是flex-item，ul会继承父元素宽，不会被子元素撑开
     解决：给ul父元素加display：flex
