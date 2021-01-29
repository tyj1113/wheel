<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
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
    getPosition() {
      this.$nextTick(() => {
        const {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        document.body.appendChild(this.$refs.contentWrapper)
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      })
    },
    documentClick(event) {
      if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target)) {return}
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {return}
      this.close()
    },
    open() {
      this.visible = true
      this.getPosition()
      document.addEventListener('click', this.documentClick)
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.documentClick)
    },

    onClick() {
      if (this.visible === false) {
        this.open()
      } else {
        this.close()
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
  border: 1px solid #ccc;
  border-radius:4px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-word;
  margin-top: -10px;
  &::before{
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top-color: #ccc;
    width: 0;
    height: 0;
    position: absolute;
    top:100%;
    left: 10px;
  }
  &::after{
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top-color: white;
    width: 0;
    height: 0;
    position: absolute;
    top: calc(100% - 1px);
    left: 10px;
  }
}
</style>