Page({
  data:{
    text:"Page swiperLearn",
    imgUrls:[
      'http://pic.58pic.com/58pic/13/60/59/50Z58PIC6jp_1024.jpg',
      'http://pic.58pic.com/58pic/15/48/15/48g58PIC9aM_1024.jpg',
      'http://www.zhlzw.com/UploadFiles/Article_UploadFiles/201204/20120412123924436.jpg'
    ],
    indicatorDots:false,
    autoplay:false,
    interval:5000,
    duration:1000

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
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration:e.detail.value
    })
  }
})