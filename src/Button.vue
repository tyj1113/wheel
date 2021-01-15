<template>
  <button class="t-button"> hi </button>
</template>

<script >
export default {
name: "Button"
}
</script>

<style lang="scss" scoped>
.t-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
}
.t-button:hover {
  border-color: var(--border-color-hover);
}
.t-button:active {
  background-color: var(--button-active-bg);
}
.t-button:focus {
  outline: none;
}
</style>