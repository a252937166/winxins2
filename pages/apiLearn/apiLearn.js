Page({
  data:{
    text:"Page apiLearn",
    src:""
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
  apiTest: function () {
    var that=this; 
    wx.request({
      url:"https://www.ouyanglol.com/wxapp/api/test",
      data:{
        x:'222',
        y:'22222'
      },
      header: {
        'Content-Type': 'application/json;'
      },
      success: function(res) {
        that.setData({
          text:res.data
        });
      },
      fail: function() {
        that.setData({
          text:'失败'
        });
      }
    })
  },
  uploadImg:function() {
    var that = this; 
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.upload(that, tempFilePaths);
      }
    })
  },
  upload:function(page, path) {
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
    wx.uploadFile({
      url: "https://www.ouyanglol.com/wxapp/api/uploadImg",
      filePath: path[0], 
      name: 'file',
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) { 
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
  },
  imgError: function() {
    console.log("错误了！")
    this.setData({
      src: "http://pic8.nipic.com/20100723/145234_165955024385_2.gif"
    })
  }
})
