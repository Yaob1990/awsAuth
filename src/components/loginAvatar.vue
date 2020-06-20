<template>
  <div class="login-avatar">
    <div class="inner">
      <template v-if="avatar.trim() !== ''">
        <img v-lazy="`${avatar.trim()}?&ts=${Date.now()}`" draggable="false" />
      </template>
      <template v-else>
        <img :src="avatarDefault" draggable="false" />
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginAvatar',
  props: {
    avatar: {
      require: true,
      type: [String],
      default: '',
    },
  },
  data() {
    return {
      avatarDefault: require('../assets/blueAvatar.png'),
    };
  },
};
</script>
<style lang="scss" scoped>
.login-avatar {
  margin-top: -6.5em;
  height: 8em;
  margin-bottom: 1.05em;
}

.login-avatar .inner {
  display: block;
  height: 8em;
  width: 8em;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 2px;

  & > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
</style>
