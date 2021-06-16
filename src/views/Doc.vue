<template>
    <div class="layout">
        <Topnav class='nav' v-on:changeVisibility='changeVisibility'></Topnav>
        <div class="content">
            <aside>
                <h3>文档</h3>
                <ol @click='changeVisibility'>

                    <li>
                        <router-link to='/doc/install'>安装</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/get-start'>开始使用</router-link>
                    </li>
                </ol>
                <h3>组件列表</h3>
                <ol @click='changeVisibility'>
                    <li>
                        <router-link to='/doc/switch'>Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/button'>Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/dialog'>Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/tabs'>Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/toast'>Toast 组件</router-link>
                    </li>  
                    <li>
                        <router-link to='/doc/popover'>Popover 组件</router-link>
                    </li>                       
                </ol>
            </aside>
            <main>
                <div class="main">
                    <router-view />
                </div>    
            </main>
        </div>
    </div>
</template>
<script>
    import Topnav from '../components/Topnav.vue'
    export default {
        components: {
            Topnav
        },
        data(){
            return {
                asideVisible: undefined
            }
        },
        methods: {
            changeVisibility(){                
                if(document.body.clientWidth <= 500){
                    this.asideVisible = !this.asideVisible
                    var content = document.getElementsByTagName('aside')[0].style
                    if(this.asideVisible){
                        content.display = 'block'
                    }else{
                        content.display = 'none'
                    }
                }
            },
        },
        mounted() {
            var content = document.getElementsByTagName('aside')[0].style
            var _self = this
            var mountedDetec = function(){
                if(document.body.clientWidth > 500){
                    content.display = 'block'
                    _self.asideVisible = true
                }else{
                    content.display = 'none'
                    _self.asideVisible = false
                }
            }
            mountedDetec()
            window.addEventListener('resize', mountedDetec)
        },
    }
</script>
<style lang="scss">
.layout{
    position: relative;
    >.content{
        margin-top: 81px;
        >aside{           
            position: fixed;
            z-index: 10;
            background: white;
            width: 170px;
            padding: 16px 0 0 16px;
            padding-top: 50px;
            height: 100%;
            border-right: 1px solid #eaecef;
            > h3 {
                height: 50px;
                line-height: 50px;
            }
            > ol {
                > li {
                    height: 40px;
                    padding: 10px 0px;
                    >a{
                        display: block;
                        padding-left: 8px;
                        height: 20px;
                        line-height: 23px;
                        &:hover{
                            text-decoration: none;
                        }
                    }
                    .router-link-active{
                        color: #28d1c9;
                        border-left: 4px solid #28d1c9;
                        text-decoration: none;
                    }
                }
            }
        }
        >main{
            padding-top: 50px;
            padding-left: 180px;
            @media(max-width: 500px){
                padding-left: 0px;
                padding-top: 10px;
            }
            >.main{
                max-width: 870px;
                margin: 0 0 0 auto;
            }
        }
    }
}
</style>