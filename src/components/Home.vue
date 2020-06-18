<template>
  <div class="container shifted">
    <LeftMenu @setMenu="setMenu" class="left"></LeftMenu>
    <ContentLayOut :menu="menu">
      <template v-slot:title>
        {{menu}}
      </template>
      <template v-slot:detail>
        <template v-if="menu==='Upcoming Bookings'">
          <template v-for="item in 3">
            <Card class="detailCard"></Card>
          </template>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </template>
      </template>

    </ContentLayOut>
  </div>
</template>

<script>

  import LeftMenu from "./LeftMenu"
  import ContentLayOut from "../ContentLayOut"
  import Card from "./Card"
  import AmplifyEventBus from "aws-amplify-vue/src/events/AmplifyEventBus"

  export default {
    name: 'Home',
    components: {ContentLayOut, LeftMenu, Card},
    data() {
      return {
        menu: 'Upcoming Bookings'
      }
    },
    methods: {
      setMenu(menu) {

        if(menu==='Log out'){
          return this.logout()
        }

        if (menu === 'Upcoming' ||
          menu === 'Completed' ||
          menu === 'Canceled'
        ) {
          this.menu = `${menu} Bookings`
        } else {
          this.menu = menu
        }
        console.log(this.menu)
      },
      logout(){
        console.log("logout")
        this.$Amplify.Auth.signOut()
          .then(() => {
             AmplifyEventBus.$emit('authState', 'signedOut')
            this.$router.push('/auth')
          })
          .catch(e => this.setError(e));
      },
      setError: function(e) {
        this.error = this.$Amplify.I18n.get(e.message || e);
        this.logger.error(this.error)
      }
    }

  }
</script>
<style lang="scss">

  .detailCard:nth-child(n+2) {
    margin-top: 40px;
  }

  .pagination {
    margin: 20px 0 40px;
    text-align: center;
  }
  .left{
    width: 300px;
  }
</style>
