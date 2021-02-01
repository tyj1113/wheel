import Toast from './Toast'
let currentToast
function createToast({Vue,message,propsData}){
    let Constructor=Vue.extend(Toast)
    let toast=new Constructor({
        propsData
    })
    toast.$slots.default=[message]
    toast.$mount()
    toast.$on('close',()=>{
        currentToast=null
    })
    document.body.appendChild(toast.$el)
    return toast
}
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,propOption){
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({Vue,message,propsData:propOption})
        }
    }
}
