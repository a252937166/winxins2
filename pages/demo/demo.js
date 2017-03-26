Page({
  data: {
    text: "Page demo"
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
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    console.log("11111");
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  formSubmit: function (e) {
    console.log('form发生了sumbmit事件，携带数据为：', e.detail.value);
  },
  formReset: function () {
    console.log('form发生了reset事件');
  },
  test:function(event) {
    event.target.dataset.alphaBeta == 1
    console.log(event);
  }
})