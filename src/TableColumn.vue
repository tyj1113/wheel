<template>

</template>

<script lang="ts">
export default {
  name: "TableColumn",
  props: {
    text: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    width: {
      type: Number,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
