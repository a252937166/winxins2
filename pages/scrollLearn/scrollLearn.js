var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    text: "Page scrollLearn"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },



  upper: function (e) {
    console.log("up")
  },
  lower: function (e) {
    console.log('low')
  },
  scroll: function (e) {
    
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})