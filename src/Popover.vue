<template>
  <div class="popover" @click.stop="onClick">
    <div class="content-wrapper" v-if="visible" @click.stop="" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          const {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          const content=this.$refs.contentWrapper
          document.body.appendChild(content)
          this.$refs.contentWrapper.style.top = top+'px'
          this.$refs.contentWrapper.style.left = left+'px'
        })
        let documentClick = () => {
          this.visible = false
          document.removeEventListener('click', documentClick)
        }
        document.addEventListener('click', documentClick)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  //vertical-align: top;
  //position: relative;
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background: white;
}
</style>