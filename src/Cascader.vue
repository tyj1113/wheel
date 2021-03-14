<template>
  <div class="cascader">
    <div class="trigger"  @click="popoverVisible = !popoverVisible">
      请选择省
    </div>
    <div class="popover" v-if="popoverVisible">
        <t-cascader-item :items="source"></t-cascader-item>
    </div>
  </div>

</template>

<script >

export default {
  name: 'Cascader.vue',
  data () {
    return {
      popoverVisible: false,
    }
  },
  props:{
    source:{
      type:Array
    }
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  .trigger {
    border: 1px solid red;
    width: 80px;
  }
  .popover {
    border: 1px solid green;
  }
}
</style>