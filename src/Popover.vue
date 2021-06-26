<template>
  <div class="popover" ref="popover">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="classes">
      <slot name="content" :close="close"></slot>
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
      visible: false,
      timer: null
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    classes() {
      return {[`position-${this.position}`]: this.position}
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroyed() {
    this.putBackContent()
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    putBackContent(){
      const {contentWrapper, popover} = this.$refs
      if(!contentWrapper){return}
      popover.appendChild(contentWrapper)
    },
    getPosition() {
      this.$nextTick(() => {
        const {contentWrapper, triggerWrapper} = this.$refs
        const {top, left, right, height} = triggerWrapper.getBoundingClientRect()
        document.body.appendChild(contentWrapper)
        const {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
        let object = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + window.scrollY + height,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: right + window.scrollX
          }
        }
        contentWrapper.style.top = object[this.position].top + 'px'
        contentWrapper.style.left = object[this.position].left + 'px'
      })
    },
    documentClick(event) {
      if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target)) {
        return
      }
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {
        return
      }
      clearTimeout(this.timer)
      this.visible = false
      document.removeEventListener('click', this.documentClick)
    },
    open() {
      clearTimeout(this.timer)
      this.visible = true
      this.getPosition()
      document.addEventListener('click', this.documentClick)
    },
    close() {
      if (this.trigger === 'hover') {
        this.timer = setTimeout(() => {
          this.visible = false
          document.removeEventListener('click', this.documentClick)
        }, 1500)
      } else {
        this.visible = false
        document.removeEventListener('click', this.documentClick)
      }
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
  border: 1px solid black;
  border-radius: 4px;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-word;

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
      border-bottom: none;
      left: 10px;
    }

    &::before {
      border-top-color: black;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
      border-top: none;
    }

    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);

    &::before, &::after {
      border-right: none;
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: black;
      left: 100%;
    }

    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
      border-left: none;
    }

    &::before {
      border-right-color: black;
      right: 100%;
    }

    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
