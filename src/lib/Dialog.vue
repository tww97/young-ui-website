<template>
    <div v-if="isVisible">
            <div class="young-dialog-overlay" @click="close"></div>
            <div class="young-dialog-wrapper">
                <div class="young-dialog">
                    <header class="young-dialog-header">
                        <slot></slot>
                        <span class="young-dialog-close" @click='close'></span>
                    </header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <y-button @click='cancle'>取消</y-button>   
                        <y-button level="main" @click='ensure'>确定</y-button>                                                
                    </footer>
                </div>
            </div>
    </div>

</template>
<script>
import Button from './Button.vue'
export default {
    components: {
        'y-button': Button
    },
    props: {
        changeView: {
            type: Boolean,
            default: false
        },
        beforeClose: {
            type: Function,
            default: function(){return true}
        },
        beforeCancel: {
            type: Function,
            default: function(){return true}
        },
        beforeEnsure: {
            type: Function,
            default: function(){return true}
        },
        zIndex: {
            type: [Number, String]
        }
    },
    data(){
        return {
            isVisible: undefined
        }
    },
    created(){
        this.isVisible = this.changeView
    },
    methods: {
        close(){        
            this.isVisible = this.beforeClose() ? false : true
        },
        cancle(){           
            this.isVisible = this.beforeCancel() ? false : true
        },
        ensure(){            
            this.isVisible = this.beforeEnsure() ? false : true
        }
    },
    watch: {
        changeView: function(){
            this.isVisible = true
            this.$nextTick(function(){
                if(this.zIndex){
                    document.getElementsByClassName('young-dialog-overlay')[0].style.zIndex = Number(this.zIndex)
                    document.getElementsByClassName('young-dialog-wrapper')[0].style.zIndex = Number(this.zIndex)+1
                }
            })
        }
    },
    mounted(){

    }   
}
</script>
<style lang="scss">
$radius: 4px;
// $border-color: #d9d9d9;
.young-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 25%;
    width: 35%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 20px 20px 10px;
    // border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 30px 20px;
  }
  >footer {
    // border-top: 1px solid $border-color;
    padding: 10px 20px 20px;
    text-align: right;
    // display: inline-flex;
    // justify-content: flex-end;
    // align-items: jusitify-content;
    >div{
        display: inline-block;
        margin-left: 10px;
        // align-items: jusitify-content;
        // margin-left: 10px;
    }
  }
  &-header {
    position: relative;
    // min-height: 20px;
    >.young-dialog-close{
        position: absolute;
        right: 20px;
        top: 20px;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,
        &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
        }
        &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
        transform: translate(-50%, -50%) rotate(45deg);
        }
    }

  }
}
</style>