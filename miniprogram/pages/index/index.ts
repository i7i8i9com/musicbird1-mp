// index.ts

import { sayHello } from "../../api/hello"


Page({
  data: {
    message:"hello hello i7i8i9"
  },
  hi(){
    sayHello().then(data=>{
        const message=data+''
       this.setData({
         message
       })
      }
    )
  }
})
