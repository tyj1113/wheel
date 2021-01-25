<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-item",
  inject:['eventHub'],
  data(){
    return {
      active:false
    }
  },
  props:{
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  created() {
    if (this.eventHub) {
      this.eventHub.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  },
  methods:{
    onClick(){
      if(this.disabled){return}
      this.eventHub && this.eventHub.$emit('update:selected',this.name,this)
      this.$emit('click')
    }
  },
  computed:{
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    color: blue;
    font-weight: bold;
  }
  &.disabled {
    color: grey;
    cursor: not-allowed;
  }
}
</style>