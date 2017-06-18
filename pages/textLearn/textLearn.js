var initData = 'this is firs line\nthis is second line'
var extraLine = [];
Page({
  data:{
    text:initData
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  add: function(e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function(e) {
    if(extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text : initData + '\n' + extraLine.join('\n')
      })
    }
  }
})