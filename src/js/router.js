import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import ButtonDemo from '../components/ButtonDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import ToastDemo from '../components/ToastDemo.vue'
import PopoverDemo from '../components/PopoverDemo.vue'
import Install from '../components/Install.vue'
import GetStart from '../components/GetStart.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
     children:[
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'toast', component: ToastDemo},
        {path: 'popover', component: PopoverDemo},

        {path: 'install', component: Install},
        {path: 'get-start', component: GetStart},
    ]}
]

const router = new VueRouter({  
    routes
})

export default router