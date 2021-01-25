<template>
    <div class="tabs-head">
      <slot></slot>
      <div class="line" ref="line"></div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
</template>

<script >
export default {
name: "Tabs-header",
  inject:['eventHub']
}
</script>

<style lang="scss" scoped>
.tabs-head{
  display: flex;
  height: 40px;
  border-bottom: 1px solid #ddd;
  >.actions{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }

}
</style>