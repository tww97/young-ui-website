<template>
  <div class="tabs-head" ref="head">
    <div class="items">
      <slot></slot>
    </div>
    
    <div class="actions-wrapper" @click="editHead()" v-if='editableHead'>
      <svg class="icon">
          <use xlink:href="#icon-jia"></use>
      </svg>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'YoungTabsHead',
    inject: ['eventBus'],
    data(){
      return {
        editableHead: false,
        editHead: undefined,
        }
    },
    created(){
      this.eventBus.$on('isEditable', val => {
        this.editableHead = val
      })
      this.eventBus.$on('isEdit', val => {
        this.editHead = val
      })
    },
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    >.items{
      display: flex;
      border-left: 1px solid #e4e7ed;         
    }
    > .line {
      position: absolute;
      bottom: 0;
      transition: all 350ms;
    }
    > .actions-wrapper {
      &:hover{
        color: #409eff;
        cursor: pointer;
      }
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>