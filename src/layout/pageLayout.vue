<template>
  <a-layout>
    <div class="header-outer">
      <a-layout-header class="header">
        <a-row>
          <a-col
            :xs="{ span: 12, offset: 6 }"
            :sm="{ span: 6, offset: 9 }"
            :md="{ span: 4, offset: 0 }"
          >
            <div class="logo">
              <img src="../assets/logo.svg" alt="" />
            </div>
          </a-col>
          <a-col
            :xs="{ span: 4, offset: 2 }"
            :sm="{ span: 4, offset: 5 }"
            :md="{ span: 0 }"
          >
            <a-row type="flex" align="middle" justify="end">
              <a-col>
                <a-button class="menu-button" @click="toggleMenu">
                  <a-icon type="menu" />
                </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-drawer
        placement="right"
        :closable="false"
        :visible="menu"
        @close="onClose"
      >
        <slot name="leftMenu"></slot>
      </a-drawer>
    </div>

    <a-row>
      <a-col
        :xs="{ span: 0 }"
        :sm="{ span: 0 }"
        :md="{ span: 3, offset: 5 }"
        style="margin-top: 2em"
      >
        <slot name="leftMenu"></slot>
      </a-col>
      <a-col :md="{ span: 11 }">
        <h1 style="margin-top: 1em">
          <slot name="title">{{ menu }}</slot>
        </h1>
        <div>
          <slot name="detail">no data</slot>
        </div>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
export default {
  name: 'pageLayout',
  data() {
    return {
      menu: false,
      selectedKey: '',
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    onClose() {
      this.menu = false;
    },
  },
};
</script>

<style scoped>
.header-outer {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}
.header {
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto 0;
  background: #fff;
}
.logo {
  text-align: center;
}
img {
  width: 80%;
  height: 80%;
}
</style>
