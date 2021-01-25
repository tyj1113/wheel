<template>
    <div class="tabs-item">
      <slot></slot>
    </div>
</template>

<script >
export default {
name: "Tabs-item"
}
</script>

<style lang="scss" scoped>
.tabs-item{
  padding: 0 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>