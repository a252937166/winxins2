//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World wechat',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewDemo: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  bindView: function () {
    wx.navigateTo({
      url: '../viewLearn/viewLearn'
    })
  },
  bindScroll: function () {
    wx.navigateTo({
      url: '../scrollView/scrollView'
    })
  },
  bindScrollLearn: function () {
    wx.navigateTo({
      url:'../scrollLearn/scrollLearn'
    })
  },
  bindSwiper: function(){
    wx.navigateTo({
      url:'../swiperLearn/swiperLearn'
    })
  },
  bindText: function() {
    wx.navigateTo({
      url:'../textLearn/textLearn'
    })
  },
  bindButton:function () {
    wx.navigateTo({
      url:'../buttonLearn/buttonLearn'
    })
  },
  bindInput:function () {
    wx.navigateTo({
      url:'../inputLearn/inputLearn'
    })
  },
  actionsheet: function () {
    wx.navigateTo({
      url:'../actionsheetLearn/actionsheetLearn'
    })
  },
  map : function() {
    wx.navigateTo({
      url:'../mapLearn/mapLearn'
    })
  },
  api:function() {
    wx.navigateTo({
      url:'../apiLearn/apiLearn'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})
