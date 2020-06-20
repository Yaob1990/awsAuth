<template>
  <div>
    <Tree :list.sync="list" @setMenu="setMenu"></Tree>
  </div>
</template>

<script>
import Tree from './Tree';

export default {
  name: 'LeftMenu',
  components: { Tree },
  data() {
    return {
      list: [
        {
          name: 'MyProfile',
        },
        {
          name: 'Address Book',
        },
        {
          name: 'Booking History',
          isOpen: true,
          children: [
            {
              name: 'Upcoming',
              isOpen: true,
            },
            {
              name: 'Completed',
            },
            {
              name: 'Canceled',
            },
          ],
        },
        {
          name: 'Payments Details',
          isOpen: false,
        },
        {
          name: 'Update Password',
          isOpen: false,
        },
        {
          name: 'Log out',
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    // options()
    setMenu(menu) {
      this.$emit('setMenu', menu);
    },
  },
};
</script>

<style scoped>
.orange {
  color: orange;
}
</style>
