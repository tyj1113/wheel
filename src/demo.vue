<template>
  <div>
    <TNav :selected.sync="selected">
      <TNavItem name="home">首页</TNavItem>
      <TSubNav name="about">
        <template slot="title">关于</template>
        <TNavItem name="culture">企业文化</TNavItem>
        <TNavItem name="developers">开发团队</TNavItem>
        <TSubNav name="contacts">
          <template slot="title">联系方式</template>
          <TNavItem name="wechat">微信</TNavItem>
          <TNavItem name="qq">QQ</TNavItem>
          <TSubNav name="phone">
            <template slot="title">手机</template>
            <TNavItem name="cm">移动</TNavItem>
            <TNavItem name="cu">联通</TNavItem>
            <TNavItem name="cn">电信</TNavItem>
          </TSubNav>
        </TSubNav>
      </TSubNav>
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
