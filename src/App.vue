<template>
  <div id="app">
    <div>
      <a-spin :spinning="this.$store.state.loadingNum > 0" tip="loading...">
        <router-view />
      </a-spin>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Menu from '@/components/Menu';

Vue.component('v-menu', Menu);

window.LOG_LEVEL = 'VERBOSE';

export default {
  name: 'app',
};
</script>

<style>
#app {
  background: #f0f2f5;
  min-height: 100%;
}
</style>
