<template>
    <div class="main">
      <slot></slot>
    </div>
</template>

<script >
export default {
name: "Main"
}
</script>

<style lang="scss" scoped>
.main{
  flex-grow: 1;
}
</style>