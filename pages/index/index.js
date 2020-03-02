var app = getApp()
Page({
  data: {
    cqList: [],
    newsList:[],
  },
  //点击区
  activeNav: function (e) {
    app.globalData.a = e.target.dataset.string
    let that = this;
    wx.request({
      url: "https://luvpr.cn/getProject",
      data: {
        area: app.globalData.a
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res);

        that.setData(
          {
            cqList: res.data
          }
        )
      }
    })
  },
  getCqList: function (e) {
    let that = this;
    wx.request({
      url: "https://luvpr.cn/getProject",
      success(res) {
        console.log(res);
        wx.setStorage({
          key: 'newsList',
          data: res.data,
        })
        that.setData(
          {
            cqList: res.data
          }
        
        )
      }
    })
   
  },
  gtnp: function (e) {
    app.globalData.d = e.target.dataset.string
    wx.navigateTo({
      url: '../index/gtnp/gtnp'
    })



  },
  //搜索方法 key为用户输入的查询字段
  search: function (key) {
    /*console.log('搜索函数触发')*/
    var that = this;
    var newsList = wx.getStorage({
      key: 'newsList',
      success: function (res) {//从storage中取出存储的数据*/
        console.log(res)
        if (key == '') {//用户没有输入 全部显示
          that.setData({
            newsList: res.data
          })
          return;
        }
        var arr = [];//临时数组 用于存放匹配到的数据
        for (let i in res.data) {
          if (i.indexOf(key) >= 0) {//查找
            arr.push(i)
          }
        }
        if (arr.length == 0) {
          that.setData({
            newsList: []
          })
        } else {
          that.setData({
            newsList: arr
            //在页面显示找到的数据
          })
          wx.setStorage({
            key: 'newsList',
            data: arr,
          })
        }
        
      }
      
    })
 
  },
  wxSearchInput: function (e) {
    this.search(e.detail.value);
    console.log(e.detail.value)
  },
  wxSerchFocus: function (e) {
    this.search(e.detail.value);
  },
  wxSearchBlur: function (e) {
    this.search(e.detail.value);
  },
  wxSearchFn: function (e) {
    wx.navigateTo({
      url: '../index/result/result?newsList'
    })

    /*console.log(e)*/
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCqList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
