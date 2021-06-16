<template>
    <div>
        <button class="young-button" ref='button' @click="clickButton">
            <span class='text sencond' :class='classes' :disabled='disabled'>
                <svg v-if='loading' class="icon">
                    <use xlink:href="#icon-jiazai1"></use>
                </svg>
                <slot></slot>
            </span>    
            <span class='text first' :class='classes' :disabled='disabled'>                
                <svg v-if='loading' class="icon">
                    <use xlink:href="#icon-jiazai1"></use>
                </svg>
                <slot></slot>
            </span>
 
        </button>
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            defalut: false
        }
    },
    computed: {
        classes:function(){
            return {
                [`young-size-${this.size}`]: this.size,
                [`young-level-${this.level}`]: this.level,
                'young-loading': this.loading,
            }
        }
    },
    mounted() {
        if(this.circle){
            this.$refs.button.style.borderRadius = '23px'
            var children = Array.prototype.slice.call(this.$refs.button.children)
            children.forEach(child => {
                child.style.borderRadius = '23px'
            });
        }
    },
    methods: {
        clickButton(){
            this.$emit('click')
        }
    }
}
</script>
<style lang="scss">
$main: #40a9ff;
$danger: #f56c6c;
$grey: grey;
$radius: 4px;
$success: #67c23a;
$warn: #e6a23c;

.young-button{
    position: relative;   
    border: 1px solid #EBEEF5;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);


    >.text{
        padding: 12px 20px;
        display: inline-block;
        line-height: 1;
        border-radius: $radius;

        &[disabled] {
            cursor: not-allowed;
            }

        &.first{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #8cc5ff;
            color: #fff;
            z-index: 2;
            transition: 0.5s;
            clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%, 50% 50%);
            &:hover{               
                clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 99%, 0% 50%);
            }  
            &:active{
                background: lighten($color: #8cc5ff, $amount: 10%);
                &[disabled]{
                    background: #8cc5ff;
                }
                &.young-loading{
                    background: #8cc5ff;
                }
            }         
        }
        &.sencond{
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            color: #8cc5ff;
            background: #fff;
            &:hover ~ .text.first{
                clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 52%);
            }
            &:active{
                background: rgb(233, 233, 235);
                &[disabled]{
                    background: #fff;
                }
                &.young-loading{
                    background: #fff;
                }
            }
        }

        &.young-level-main{
            &.first{
                background: $main;
                color: #fff;
                &:active{
                    background: lighten($color: $main, $amount: 20%);
                    &[disabled]{
                        background: $main;
                    }
                    &.young-loading{
                        background: $main;
                    }
                }
            }
            &.sencond{
                color: $main;
            }
        }

        &.young-level-danger{
            &.first{
                background: $danger;
                color: #fff;
                &:active{
                    background: lighten($color: $danger, $amount: 20%);
                    &[disabled]{
                        background: $danger;
                    }
                    &.young-loading{
                        background: $danger;
                    }
                }
            }
            &.sencond{
                color: $danger;
            }
        }

        &.young-level-success{
            &.first{
                background: $success;
                color: #fff;
                &:active{
                    background: lighten($color: $success, $amount: 20%);
                    &[disabled]{
                        background: $success;
                    }
                    &.young-loading{
                        background: $success;
                    }
                }
            }
            &.sencond{
                color: $success;
            }
        }

        &.young-level-warn{
            &.first{
                background: $warn;
                color: #fff;
                &:active{
                    background: lighten($color: $warn, $amount: 20%);
                    &[disabled]{
                        background: $warn;
                    }
                    &.young-loading{
                        background: $warn;
                    }
                }
            }
            &.sencond{
                color: $warn;
            }
        }

        &.young-size-small{
            padding: 9px 15px;
            font-size: 12px;
            >.icon{
                width: 12px;
                height: 12px;
            }
        }
        &.young-size-big{       
            padding: 15px 25px;
            font-size: 16px;
            >.icon{
                width: 16px;
                height: 16px;
            }
        }
        >.icon{
            width: 14px;
            height: 14px;
            margin-right: 4px;
            z-index: 3;
            animation: young-spin 1.5s infinite linear;
        }


    }
}
@keyframes young-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>