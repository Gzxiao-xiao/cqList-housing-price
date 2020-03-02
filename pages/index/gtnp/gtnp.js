var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  arr:[],
  isShow:true,
  isShoww:true,
  },
  getCqList: function () {
    let that = this;
    wx.request({
      url: "https://luvpr.cn/getBuilding",
      data: {
        area: app.globalData.a,
        projectid:app.globalData.d
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
  gtnpp: function (e) {
    app.globalData.f = e.target.dataset.string
    let that=this
    wx.request({
      url: "https://luvpr.cn/getRoom",
      data: {
        area: app.globalData.a,
        buildingid: app.globalData.f
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res);

        that.setData(
          {
            arr: res.data
          }
        )
      }
    })
    var thatt = this;
    thatt.setData({
      isShow: !thatt.data.isShow
    })
  },
  changeTogglee() {
    var that = this;
    that.setData({
      isShoww: !that.data.isShoww
    })
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