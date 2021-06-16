<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'YoungTabs',
    props: {
      selected: {
        type: String,
      },
      editable: {
        type: [Boolean, String],
        default: false
      },
      deleteable: {
        type: [Boolean, String],
        default: false        
      },
      edit: {
        default: undefined
      },
      type: {
        type: String,
        default:'simple'
      }
    },
    data () {
      return {
        eventBus: new Vue(),
        nameList: []
      }
    },
    provide () {
      return {
        eventBus: this.eventBus,    
      }
    },
    created() {
        this.eventBus.$on('deleteName', name => {

            let len = this.nameList.length, activeName
            if(this.nameList.indexOf(name) === len-1){
                if(len-2 >= 0){
                    activeName = this.nameList[len-2]
                }else{
                    this.eventBus.$emit('updateSelected', undefined)
                    return 
                }
            }else{
                activeName = this.nameList[this.nameList.indexOf(name)+1]
            }
            this.nameList = this.nameList.filter(val => {
                return val !== name 
            })

            this.eventBus.$emit('updateSelected', activeName)
        })
    },
    methods: {
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'YoungTabsHead') {
            vm.$children.forEach((childVm) => {
              this.nameList.push(childVm.name)
              
              if (childVm.$options.name === 'YoungTabsItem'
                && childVm.name === this.selected) {
                this.eventBus.$emit('updateSelected', this.selected)
              }
            })
          }

        })

        if(!this.selected){
          this.eventBus.$emit('updateSelected', this.nameList[0])
        }
      }
    },
    mounted () {
      this.selectTab();
      if(this.editable){
        this.eventBus.$emit('isEditable', this.editable)
      }
      if(this.deleteable){
        this.eventBus.$emit('isDeleteable', this.deleteable)
      }
      if(this.edit){
        this.eventBus.$emit('isEdit', this.edit)
      } 

    },
    updated(){
        this.$children.forEach((vm) => {
            var nodeList = []
            if (vm.$options.name === 'YoungTabsHead') {
                nodeList = vm.$children.filter((childVm) => {
                    return childVm.show
                })
                this.nameList = nodeList.map(node => node.name)
              
            }
        })
        this.eventBus.$emit('updateSelected', this.nameList[this.nameList.length-1])

        if(this.editable){
          this.eventBus.$emit('isEditable', this.editable)
        }
        if(this.deleteable){
          this.eventBus.$emit('isDeleteable', this.deleteable)
        }
        if(this.edit){
          this.eventBus.$emit('isEdit', this.edit)
        } 
      
    }
  }
</script>
<style lang='scss'>

</style>