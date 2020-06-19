<template>
  <div class="layout"></div>
</template>

<script>
export default {
  name: 'ContentLayOut',
  props: {
    menu: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.layout {
  min-width: 550px;
}
</style>
