<template>
    <div class="wrapper" >
      <input  ref="input" type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{error}"
              @change="$emit('change',$event.target.value)"
              @blur="$emit('blur',$event.target.value)"
              @input="$emit('input',$event.target.value)"
              @focus="$emit('focus',$event.target.value)"
      >
      <template v-if="error">
        <icon name="warning" class="icon-error"></icon>
        <span class="errorMessage">{{error}}</span>
      </template>
    </div>
</template>

<script >
import Icon from "./Icon";
export default {
name: "Input",
  components: {Icon},
  props: {
  value:{
    type: [String, Date]
  },
    disabled:{
    type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error: {
      type: String
    }
  },
  methods:{
    setRawValue(value){
      this.$refs.input.value = value
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em;
  }
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px; padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  >.error {
      border-color: $red;
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
