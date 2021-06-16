import Toast from '../lib/Toast.vue'


let currentToast

export default function install (Vue) {
    Vue.prototype.$toast = function (message, toastOptions={}) {
      if (currentToast) {
        currentToast.close()//保证同时只存在一个toast
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }   
      })
    }
  }

/* helpers */
function createToast ({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    if(propsData.zIndex !== undefined){
        document.getElementsByClassName('young-toast')[0].style.zIndex = propsData.zIndex
    }
    return toast
  }