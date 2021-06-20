<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span> 
  </div>
</template>

<script>
  export default {  
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      },    
      width: {
          type: [Number, String]
      },
      zIndex: {
          type: [Number, String]
      }
    },
    data () {
      return {
        visible: false,
      }
    },
    mounted () {
      this.addPopoverListeners()

    },
    beforeDestroy () {
      this.removePopoverListeners()
    },
    methods: {
      addPopoverListeners(){
        if (this.trigger === 'click') {
          this.$refs.popover.addEventListener('click', this.onClick)
        } else {
          this.$refs.popover.addEventListener('mouseenter', this.open)
          this.$refs.popover.addEventListener('mouseleave', this.close)
        }
      },
      removePopoverListeners(){
        if (this.trigger === 'click') {
          this.$refs.popover.removeEventListener('click', this.onClick)
        } else {
          this.$refs.popover.removeEventListener('mouseenter', this.open)
          this.$refs.popover.removeEventListener('mouseleave', this.close)
        }
      },
      positionContent () {
        
        if(this.width){
            this.$refs.contentWrapper.style.width = this.width + 'px'
        }

        if(this.zIndex){
            this.$refs.contentWrapper.style.zIndex = Number(this.zIndex)
        }

        if(this.position === 'bottom'){
            this.$refs.contentWrapper.style.marginTop =  this.$refs.triggerWrapper.clientHeight + 10 + 'px'
        }
        if(this.position === 'right'){
            this.$refs.contentWrapper.style.marginLeft =  this.$refs.triggerWrapper.clientWidth + 10 + 'px'
            this.$refs.contentWrapper.style.top = -this.$refs.contentWrapper.clientHeight/2 + this.$refs.triggerWrapper.clientHeight/2  + 'px'
        }
        if(this.position === 'left'){
            this.$refs.contentWrapper.style.top = -this.$refs.contentWrapper.clientHeight/2 + this.$refs.triggerWrapper.clientHeight/2  + 'px'
        }
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
            this.positionContent()
            document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #ebeef5;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: $border-radius;
    background: white;
    padding: .5em 1em;   
    min-width: 150px;
    word-break: break-all;
    z-index: 10;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: $border-color;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top: none;
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after {
        border-top: none;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: $border-color;
        border-right: none;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: $border-color;
        border-left: none;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
  }
</style>
