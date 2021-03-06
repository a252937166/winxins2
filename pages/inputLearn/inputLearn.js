Page({
  data:{
    text:"Page inputLearn",
    focus: false,
    inputValue: ''
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
  bindButtonTap: function() {
    this.setData({
      focus: Date.now()
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue:e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.curos
    if(pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0,pos)
      //计算光标的位置
      pos = left.replace(/11/g,'2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g,'2'),
      cursor: pos
    }

    //或者直接返回字符串，光标在最后
    //return value.replace(/11/g,'2'),
   },
   bindHideKeyboard: function (e) {
     if (e.detail.value === '123') {
       //收起键盘
       wx.hideKeyboard()
     }
   }
})