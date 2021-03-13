import Toast from './Toast'
let currentToast
function createToast({Vue,message,propsData}){
    let Constructor=Vue.extend(Toast)
    let toast=new Constructor({
        propsData
    })
    toast.$slots.default=[message]
    toast.$mount()
    toast.$on('close',()=>{ //监听自定义close  触发后currentToast赋值为Null
        currentToast=null
    })
    document.body.appendChild(toast.$el)
    return toast
}
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,propOption){
            if(currentToast){
                currentToast.close()   //当出现新的toast关闭之前的   调用close会触发自定义close 将currentToast赋值为null
            }
            currentToast=createToast({Vue,message,propsData:propOption})
        }
    }
}
