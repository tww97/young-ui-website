<template>
    <div>
        <button ref='switch' class="young-switch" :class="{'young-checked': yValue}" @click='toggle' :disabled='disabled'>
            <span>
                <svg class="icon" v-if='yValue'>
                    <use xlink:href="#icon-xiao1"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-ku"></use>
                </svg>
            </span>
        </button>
    </div>
</template>
<script>
export default {
    props:['active', 'activeColor', 'inactiveColor', 'disabled'],
    data(){
        return {
            yValue: false,
        }
    },
    created(){
        this.yValue = (!this.active || this.active === 'false') ? false : true
        // document.getElementsByClassName('young-switch')[0].style.background = this.inactiveColor || '#bfbfbf'
        //不能在created中使用搜索node节点的方法，因为在这个周期中，DOM还没有挂载，因此访问不到node节点

    },
    mounted() {
        if(this.yValue){
            //不能使用document.getElementsByClassName()方法，否则在多次使用同一组件时会出现bug
            //之前使用js生成唯一字符串作为id值，然后使用document.getElementById(id)访问节点，后来使用Vue中自带的ref属性，使用this.$ref访问
            this.$refs.switch.style.background = this.activeColor || '#1890ff'
        }else{
            this.$refs.switch.style.background = this.inactiveColor || '#bfbfbf'
        }
    },
    methods: {
        toggle: function(){
            this.yValue = !this.yValue
        }
    },
    updated(){
        if(this.yValue){
            this.$refs.switch.style.background = this.activeColor || '#1890ff'
        }else{
            this.$refs.switch.style.background = this.inactiveColor || '#bfbfbf'
        }     
    }
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.young-switch {
  height: $h;
  width: $h * 2; 
  border: none; 
  background: #bfbfbf; 
  border-radius: $h/2; 
  position: relative;
  > span {
    position: absolute; 
    top: 2px; 
    left: 2px; 
    height: $h2; 
    width: $h2; 
    border-radius: $h2 / 2; 
    transition: all 250ms;//加动画
    >.icon{
        width: 18px;
        height: 18px;
    }
  }
  &.young-checked { 
    background: #1890ff;
    > span {
        left: calc(100% - #{$h2} - 2px); 
        }
  }
  &:focus { outline: none; }//去掉点击时button外的黑圈
  &[disabled]{
      cursor: not-allowed;
  }
//   &:active {
//     > span { width: $h2 + 4px; }
//   }
//   &.young-checked:active {
//     > span {
//              width: $h2 + 4px; 
//              margin-left: -4px; 
//             }
//   }
//加上动画会有一定的卡顿，后期考虑是否加上动画
}
</style>