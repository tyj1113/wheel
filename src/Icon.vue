<template>
      <svg class="t-icon">
        <use :xlink:href="`#icon${name}`"></use>
      </svg>
</template>

<script >
export default {
name: "Icon",
  props:['name']
}
</script>

<style lang="scss" scoped>
.t-icon {
  width: 1em;
  height: 1em;
}
</style>