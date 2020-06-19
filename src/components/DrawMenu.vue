<template>
  <a-drawer
    wrap-class-name="hitokoto-header-drawer"
    placement="right"
    :closable="false"
    :visible="menu"
    @close="onClose"
  >
    <a-menu mode="inline" :selected-keys="[selectedKey]">
      <a-menu-item key="/">
        <nuxt-link to="/">
          <a-icon type="home" />
          首页22
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="/api">
        <nuxt-link to="/api">
          <a-icon type="api" />
          接口说明
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="/about">
        关于我们222
      </a-menu-item>
      <a-menu-item key="/auth/login">
        <nuxt-link to="/auth/login">
          <a-icon type="user" />
          用户登录
        </nuxt-link>
      </a-menu-item>

      <a-sub-menu key="sub2">
        <span slot="title"><span style="color:red">Navigation Two</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-drawer>
</template>

<script>
export default {
  name: 'DrawMenu',
};
</script>

<style scoped></style>
