<template>
    <div>
        <div class="topnav">
            <svg class="toggleAside" @click="toggleAside">
                <use xlink:href="#icon-menu-two1"></use>
            </svg>
            <router-link to='/' class="logo" >
                <div>
                    <svg class="icon" >
                        <use xlink:href="#icon-pixel"></use>
                    </svg>
                    <span>
                        YOUNG UI
                    </span>
                </div>
            </router-link>
            <ul class="menu">
                <li>
                    <router-link to='/doc/install'>文档</router-link>
                </li>
            </ul>

        </div> 
     </div>         
</template>
<script>
export default{
    methods: {
        toggleAside(){
            this.$emit('changeVisibility')
        },
    }
}
</script>
<style lang="scss">
$color: #28d1c9;
.topnav{
    background: white;
    display: flex;
    position: fixed;
    padding: 24px 16px;
    top: 0;
    width: 100%;
    z-index: 4;
    color: $color;

    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaecef;
    >.logo{
        max-width: 10rem;
        &:hover{
            text-decoration: none;
        }
        >div{
            display: flex;
            align-items: center;
            >svg{
                width: 32px;
                height: 32px;
            }
            >span{
                padding-left: 6px;
                display: inline-block;
                font-size: 24px;
                height: 32px;
                line-height: 35px;
            }
        }

    }
    >.toggleAside{
        width: 32px;
        height: 32px;
        display: none;
    }

    @media (max-width: 500px) {
        >.menu {
        display: none;
        }
        >.logo {
        margin: 0 0 0 auto;
        }
        >.toggleAside {
        display: inline-block;
        }
    }
}
@media(min-width: 1140px){
    .topnav{
        width: 1140px;
        margin: 0 auto;
        z-index: 4;
    }
}
</style>