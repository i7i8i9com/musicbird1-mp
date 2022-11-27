
const baseURL='https://musicbird-19419-6-1315189763.sh.run.tcloudbase.com'
export const get =(uri:string)=>{
wx.showLoading({
  title:'加载中'
}
)
return new Promise((resolve,reject)=>{
  wx.request({
    url:baseURL+uri,
    method:'GET',
    success:(res)=>{
      resolve(res.data)},//返回成功，promise类型三要素之一，把数据传过去，promise就会出来
    fail:reject,  //返回失败  promise类型三要素之二
    complete:()=>{wx.hideLoading()} //无论成功失败都结束掉加载 promise类型三要素之三
  })
})

}




