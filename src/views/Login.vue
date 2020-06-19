<template>
  <div>
    <defaultLayout>
      <a-row>
        <a-col
          :xs="{ span: 22, offset: 1 }"
          :md="{ span: 10, offset: 7 }"
          :lg="{ span: 8, offset: 8 }"
          :xl="{ span: 6, offset: 9 }"
          style="margin-top: 10.5em"
        >
          <a-card>
            <login-avatar :avatar="avatar" />
            <a-form
              id="hitokoto-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-item style="margin-bottom: 0.9em">
                <a-input
                  v-decorator="[
                    'username',
                    {
                      rules: [
                        { required: true, message: 'Username cannot be empty' },
                      ],
                    },
                  ]"
                  placeholder="Enter your username"
                  @blur="mailOnBlur"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom:0.8em">
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        { required: true, message: 'Password cannot be empty' },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="Enter your password"
                  @blur="inputBlur"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom: 0.5em;">
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                  block
                >
                  Sign in
                </a-button>
                <a-button block @click="goRegister">
                  Sign up
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </defaultLayout>
  </div>
</template>

<script>
import AmplifyEventBus from 'aws-amplify-vue/src/events/AmplifyEventBus';
import { mapMutations } from 'vuex';
import defaultLayout from '@/layout/defaultLayout';
import loginAvatar from '../components/loginAvatar';

const newAvatar = require('../assets/newAvatar.jpg');

export default {
  name: 'Login',
  components: {
    loginAvatar,
    defaultLayout,
  },
  data() {
    return {
      avatar: '',
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    ...mapMutations(['showLoading', 'closeLoading']),
    goRegister() {
      this.$router.push('/register');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log('Received values of form: ');
          window.console.log(values);
          this.login(values);
        }
      });
    },
    async login({ username, password }) {
      this.showLoading();
      try {
        const data = await this.$Amplify.Auth.signIn(username, password);

        // 不检查用户态，各种状态验证（正式项目需要检查）

        if (data) {
          this.$router.push('/');
        }
      } catch (error) {
        this.msgBox(error.message || error, 'error');
      } finally {
        this.closeLoading();
      }
    },

    msgBox(msg, type) {
      this.$message[type]({
        content: msg,
      });
    },

    inputBlur() {
      // 处理 ios 关闭键盘页面不回弹问题
      setTimeout(function() {
        const scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 300);
    },

    mailOnBlur() {
      this.inputBlur();
      const username = this.form.getFieldValue('username') || '';
      if (username.trim() === '') {
        this.avatar = '';
        return;
      }

      const newAvatar = newAvatar;
      if (newAvatar !== this.avatar) {
        this.avatar = newAvatar;
      }
    },
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
