<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" v-if="visible"  ref="contentWrapper">
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
      let documentClick = (event) => {
        if(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target) ){return}
        if(this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)){return}
        this.visible = false
        document.removeEventListener('click', documentClick)
      }
      if (this.visible === true) {
        this.$nextTick(() => {
          const {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          const content=this.$refs.contentWrapper
          document.body.appendChild(content)
          this.$refs.contentWrapper.style.top = top+window.scrollY+'px'
          this.$refs.contentWrapper.style.left = left+window.scrollX+'px'
        })
        document.addEventListener('click', documentClick)
      }else{
        document.removeEventListener('click', documentClick)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background: white;
}
</style>