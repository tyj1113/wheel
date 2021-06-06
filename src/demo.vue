<template>
  <div>
    <TNav :selected.sync="selected">
      <TNavItem name="home">首页</TNavItem>
      <TNavItem name="about">关于</TNavItem>
      <TNavItem name="hire">招聘</TNavItem>
    </TNav>
  </div>
</template>
<script>
import TNav from './Nav.vue'
import TNavItem from './NavItem.vue'
import TSubNav from './SubNav.vue'
export default {
  name: "demo",
  components: {TNav, TNavItem, TSubNav},
  data () {
    return {
      selected: ['home']
    };
  },
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
