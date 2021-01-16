<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`]:iconPosition}" @click="$emit('click')">
    <t-icon v-if="loading" name="xingzhuang" class="loading icon"></t-icon>
    <t-icon v-if="icon && !loading" :name="icon" class="icon"></t-icon>
    <div class="content">
      <slot/>
    </div>

  </button>
</template>

<script>
export default {
  name: "Button",
  props:
      {
        icon: {},
        iconPosition: {
          type: String,
          validate(value) {
            return value === 'right'
          }
        },
        loading: {
          type: Boolean,
          default: false
        }
      }
}
</script>

<style lang="scss" scoped>
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.t-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin-right: .1em;
  }

  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
    }

    .content {
      margin-right: .1em;
      order: 1;
    }
  }

  .loading {
    animation: loading 2s infinite linear;
  }

}


</style>