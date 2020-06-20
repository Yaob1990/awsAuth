<template>
  <div class="container shifted">
    <PageLayout :menu="menu">
      <template v-slot:leftMenu>
        <LeftMenu @setMenu="setMenu" class="left"></LeftMenu>
      </template>
      <template v-slot:title>
        {{ menu }}
      </template>
      <template v-slot:detail>
        <template v-if="menu === 'Upcoming Bookings'">
          <template v-for="item in 3">
            <Card class="detailCard"></Card>
          </template>
          <div class="pagination">
            <a-pagination v-model="current" :total="50" show-less-items />
          </div>
        </template>
      </template>
    </PageLayout>
  </div>
</template>

<script>
import AmplifyEventBus from 'aws-amplify-vue/src/events/AmplifyEventBus';
import PageLayout from '@/layout/pageLayout';
import LeftMenu from '../components/LeftMenu.vue';
import ContentLayOut from '../ContentLayOut';
import Card from '../components/Card';

export default {
  name: 'Home',
  components: { PageLayout, ContentLayOut, LeftMenu, Card },
  data() {
    return {
      menu: 'Upcoming Bookings',
      current: 1,
    };
  },
  methods: {
    setMenu(menu) {
      if (menu === 'Log out') {
        return this.logout();
      }

      if (menu === 'Upcoming' || menu === 'Completed' || menu === 'Canceled') {
        this.menu = `${menu} Bookings`;
      } else {
        this.menu = menu;
      }
      console.log(this.menu);
    },
    logout() {
      console.log('logout');
      this.$Amplify.Auth.signOut()
        .then(() => {
          AmplifyEventBus.$emit('authState', 'signedOut');
          this.$router.push('/login');
        })
        .catch((e) => this.setError(e));
    },
    setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    },
  },
};
</script>
<style lang="scss">
ul {
  padding-left: 0;
}

.detailCard:nth-child(n + 2) {
  margin-top: 40px;
}

.pagination {
  margin: 20px 0 40px;
  text-align: center;
}
.left {
  /*width: 300px;*/
}
</style>
