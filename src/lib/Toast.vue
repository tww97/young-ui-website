<template>
  <div class="young-toast" :class="toastClasses">
    <div class="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line"></div>
      <span class="close" @click="onClickClose">
        关闭
      </span>
    </div>
  </div>
</template>
<script>
  export default {      
    props: {
      autoClose: { 
        type: [Boolean, Number],
        default: 3,
        validator (value) {
          return typeof value === 'boolean' || typeof value === 'number';
        }
      },
      beforeClose: {
        type: Function,
        default: function(){return true} 
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      },
      zIndex: {
          type: Number,
          default: undefined
      }
    },
    mounted () {
      this.execAutoClose()
    },
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      execAutoClose () {
        if(this.autoClose === true) this.autoClose = 3
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close () {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose () {
        if(this.beforeClose()){
            this.close()
        }
               
      }
    }
  }
</script>
<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0; }
    100% {opacity: 1;}
  }
  .young-toast {
    position: fixed;
    left: 50%;
    min-width: 150px;
    transform: translateX(-50%);
    $animation-duration: 300ms;
    &.position-top {
      top: 0;
      z-index: 10;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      z-index: 10;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle {
      top: 50%;
      z-index: 10;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    .message {
      padding: 8px 0px;
      padding-right: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      position: absolute;
      top: 0;
      right: 60px;
      height: 100%;
      border-left: 1px solid #666;
    }
  }
</style>
