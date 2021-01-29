<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="classes">
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {[`position-${this.position}`]: this.position}
    }
  },
  methods: {
    getPosition() {
      this.$nextTick(() => {
        const {top, left, right, height} = this.$refs.triggerWrapper.getBoundingClientRect()
        document.body.appendChild(this.$refs.contentWrapper)
        const {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapper.style.top = top + window.scrollY + height + 'px'
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        } else if (this.position === 'left') {
          this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        } else {
          this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
          this.$refs.contentWrapper.style.left = right + window.scrollX + 'px'
        }

      })
    },
    documentClick(event) {
      if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target)) {
        return
      }
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {
        return
      }
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