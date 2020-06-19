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
        </a-row>
      </a-layout-header>
    </div>
    <slot></slot>
  </a-layout>
</template>

<script>
export default {
  name: 'defaultLayout',
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
