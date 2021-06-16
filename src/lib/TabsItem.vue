<template>
  <div class="tabs-item" :class="classes" :data-name="name" @click="onClick" v-if='show'>
    <div>
      <slot></slot>
    </div>    
    <span class="delete" @click.stop="deleteIt" v-if='deleteable'>
        <svg class="icon">
            <use xlink:href="#icon-cha"></use>
        </svg>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'YoungTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false,
        show: true,
        deleteable: false,
        nameList: []
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [Number, String],
        required: true
      },

    },
    computed: {
      classes () {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('updateSelected', (name) => {
          this.active = name === this.name;
        })
        this.eventBus.$on('isDeleteable', val => {
          this.deleteable = val
        })
      }
    },
    methods: {
      onClick () {
        if (this.disabled) { return }
        this.eventBus && this.eventBus.$emit('updateSelected', this.name)
        this.$emit('before-skip', this)
      },
      deleteIt(){
        if(this.disabled){ return }
        this.show = false
        this.eventBus && this.eventBus.$emit('deleteName', this.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    // margin: 0 1em;
    padding: 0 1em;
    border-right: 1px solid #e4e7ed;
    border-top: 1px solid #e4e7ed;
    margin-left: 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    >.delete{
      display: none;
      position: relative;
      width: 14px;
      height: 14px;
      margin-left: 7px;
      >.icon{
        position: absolute;
      }
    }
    &:hover{
      color: #409eff;
      transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
      >.delete{
        display: inline-block;
        &:hover{
          color: #f56c6c;
        }
      }
    }
    &.active {
      >.delete{
        display: inline-block;
      }
      color: #409eff;
      border-top: 1px solid #409eff;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
      >.delete{
        display: none;
      }
    }

  }
</style>