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
import Icon from './Icon.vue'
export default {
  name: "Button",
  components:{
    't-icon':Icon
  },
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
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.t-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
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