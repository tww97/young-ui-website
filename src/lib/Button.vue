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
    // margin: 20px 20px;
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

// .young-button{
//   margin: 20px 20px;
//   position: relative;
//   display: inline-block;
//   height: $h;
// //   width: 4*$h;
//   box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
 

//   >.text{
//          padding: 0 12px;
//         background: $blue;
//         color: #fff;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         &.left{
//         position: relative;
//         // top: 0;
//         // left: 0;
//         width: 100%;
//         height: 100%;
//         }
//         &.right{
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;

//         }
//         &:nth-child(2){
//             color: #6c4ba5;
//             background: #fff;
//             overflow: hidden;
//             z-index: 2;
//             transition: 0.5s;
//             clip-path: polygon(55% 0, 100% 0%, 100% 100%, 55% 100%, 50% 50%);
//             &:hover{
//                   clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0 50%);
//             };      
//                     };
//         &:nth-child(1):hover ~ .text:nth-child(2){
//           clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 52%);
//         }
        
//     }

// }

// .young-button {
//     border-radius: 5px;
//     padding: 12px 20px;
//     font-size: 14px;
//     line-height: 1;
//     text-decoration: none;
//     margin: 20px;
//     color: #fff;
//     position: relative;
//     display: inline-block;
//     border: 0px;
//     background-color: #55acee;
//     box-shadow: 0px 5px 0px 0px #3C93D5;
// }

// $h: 32px;
// $border-color: #d9d9d9;
// $color: #333;
// $blue: #40a9ff;
// $radius: 4px;
// $red: red;
// $grey: grey;
// .young-button {
//   font-family: source-code-pro;
//   box-shadow: 0px 5px 0px 0px #eceef0;
//   margin: 20px;
//   box-sizing: border-box;
//   height: $h;
//   padding: 0 12px;
//   cursor: pointer;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   white-space: nowrap;
//   background: white;
//   color: $color;
//   border: 1px solid $border-color;
//   border-radius: $radius;
// //   box-shadow: 0 1px 0 fade-out(black, 0.95);
  
//   transition: background 250ms;
//   & + & {
//     margin-left: 8px;
//   }
//   &:hover,
//   &:focus {
//     color: $blue;
//     border-color: $blue;
//   }
//   &:focus {
//     outline: none;
//   }
//   &::-moz-focus-inner {
//     border: 0;
//   }
//   &.young-theme-link {
//     border-color: transparent;
//     box-shadow: none;
//     color: $blue;
//     &:hover,
//     &:focus {
//       color: lighten($blue, 10%);
//     }
//   }
//   &.young-theme-text {
//     border-color: transparent;
//     box-shadow: none;
//     color: inherit;
//     &:hover,
//     &:focus {
//       background: darken(white, 5%);
//     }
//   }
//   &.young-size-big {
//     font-size: 24px;
//     height: 48px;
//     padding: 0 16px;
//   }
//   &.young-size-small {
//     font-size: 12px;
//     height: 20px;
//     padding: 0 4px;
//   }
//   &.young-theme-button {
//     // box-shadow: 0px 5px 0px 0px $blue;
//     &.young-level-main {
//     //   box-shadow: 0px 5px 0px 0px $blue;
//       background: $blue;
//       color: white;
//       border-color: $blue;
//     //   box-shadow: 0px 5px 0px 0px $blue;
//       &:hover,
//       &:focus {
//         background: darken($blue, 10%);
//         border-color: darken($blue, 10%);
//       }
//     }
//     &.young-level-danger {
//       background: $red;
//       border-color: $red;
//       color: white;
//       &:hover,
//       &:focus {
//         background: darken($red, 10%);
//         border-color: darken($red, 10%);
//       }
//     }
//   }
//   &.young-theme-link {
//     &.young-level-danger {
//       color: $red;
//       &:hover,
//       &:focus {
//         color: darken($red, 10%);
//       }
//     }
//   }
//   &.young-theme-text {
//     &.young-level-main {
//       color: $blue;
//       &:hover,
//       &:focus {
//         color: darken($blue, 10%);
//       }
//     }
//     &.young-level-danger {
//       color: $red;
//       &:hover,
//       &:focus {
//         color: darken($red, 10%);
//       }
//     }
//   }
//   &.young-theme-button {
//     &[disabled] {
//       cursor: not-allowed;
//       color: $grey;
//       &:hover {
//         border-color: $grey;
//       }
//     }
//   }
//   &.young-theme-link, &.young-theme-text {
//     &[disabled] {
//       cursor: not-allowed;
//       color: $grey;
//     }
//   }
//   > .young-loadingIndicator{
//     width: 14px;
//     height: 14px;
//     display: inline-block;
//     margin-right: 4px;
//     border-radius: 8px; 
//     border-color: $blue $blue $blue transparent;
//     border-style: solid;
//     border-width: 2px;
//     animation: young-spin 1s infinite linear;
//   }
// }

// .young-level-main{
//     box-shadow: 0px 5px 0px 0px #1c73b9;
// }
// .young-level-danger{
//     box-shadow: 0px 5px 0px 0px #bb1c07;
// }
// .young-button:active {
//     transform: translate(0px, 5px);
//     // -webkit-transform: translate(0px, 5px);
//     box-shadow: 0px 1px 0px 0px;
// }


</style>