Page({
   data:{
    // text:"这是一个页面"
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3'],
    toast1Hidden:true

  },

  listenerButton: function() {
      this.setData({
        //取反
          actionSheetHidden: !this.data.actionSheetHidden
      });
  },

  listenerActionSheet:function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  bindItemTap: function(e) {
    console.log('tap'+e.currentTarget.dataset.name)
  },

  toast1Change: function(e) {
    this.setData({
      toast1Hidden: true
    })
  },
  toast1Tap: function(e) {
    this.setData({
      toast1Hidden: false
    })
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
  }
})