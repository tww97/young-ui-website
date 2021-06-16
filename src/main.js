import './scss/index.scss'
import './scss/young.scss'
import './js/svg.js'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router.js'
// import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的
// import 'github-markdown-css'
import  install  from './js/toast'
install(Vue)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

// Vue.use(mavonEditor)  //让Vue使用mavonEditor
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
