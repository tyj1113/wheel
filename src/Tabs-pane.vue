<template>
  <div v-if="active" class="tabs-pane" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-pane",
  inject: ['eventHub'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  created() {
    this.eventHub.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
}
</style>