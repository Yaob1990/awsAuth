<template>
  <div>
    <default-layout>
      <a-modal
        title="please enter email verification code"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <a-input v-model="smsCode"></a-input>
      </a-modal>
      <a-row>
        <a-col
          :xs="{ span: 22, offset: 1 }"
          :md="{ span: 10, offset: 7 }"
          :lg="{ span: 8, offset: 8 }"
          :xl="{ span: 6, offset: 9 }"
          style="margin-top:6.25em;"
        >
          <a-card title="Register">
            <a-form
              id="register"
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
                  placeholder="Enter username"
                  @blur="inputBlur"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom: 0.9em">
                <a-input
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        { required: true, message: 'Email cannot be empty' },
                        { type: 'email', message: 'Email is wrong' },
                      ],
                    },
                  ]"
                  placeholder="Enter Email"
                  @blur="inputBlur"
                >
                  <a-icon
                    slot="prefix"
                    type="mail"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom:0.9em">
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        { required: true, message: 'Password cannot be empty' },
                        { min: 8, message: 'Password at least 8 characters' },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="Enter password, at least 8 characters"
                  @blur="inputBlur"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom:0.8em">
                <a-input
                  v-decorator="[
                    'passwordConfirm',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Password cannot be empty!',
                        },
                        {
                          validator: checkPasswordConfirm,
                          message: 'The two passwords do not agree',
                        },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="Re-enter password"
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
                <a-button type="primary" html-type="submit" block>
                  Sign up
                </a-button>
                <a-button @click="back" block>
                  Back
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </default-layout>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import DefaultLayout from '@/layout/defaultLayout';

export default {
  name: 'Register',
  components: { DefaultLayout },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      smsCode: '',
      username: '',
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    ...mapMutations(['showLoading', 'closeLoading']),
    inputBlur() {
      // 处理 ios 关闭键盘页面不回弹问题
      setTimeout(function() {
        const scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 300);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.register(values);
        }
      });
    },
    async register({ username, password, email }) {
      const param = {
        username,
        password,
        attributes: {
          email,
        },
      };
      this.username = username;

      try {
        this.showLoading();

        const data = await this.$Amplify.Auth.signUp(param);

        if (data.userConfirmed === false) {
          this.visible = true;
        } else {
          this.$router.push('Login');
        }
      } catch (error) {
        this.msgBox(error.message || error, 'error');
      } finally {
        this.closeLoading();
      }
    },

    async confirmSignUp() {
      try {
        this.confirmLoading = true;
        // 返回是一个{}，可以不用判断，非法会返回非200状态码（严格的rest风格）
        const data = await this.$Amplify.Auth.confirmSignUp(
          this.username,
          this.smsCode
        );

        this.msgBox('Register success', 'success');
        setTimeout(() => {
          this.$router.push('Login');
        }, 2000);
      } catch (error) {
        this.msgBox(error.message || error, 'error');
      } finally {
        this.confirmLoading = false;
      }
    },

    msgBox(msg, type) {
      this.$message[type]({
        content: msg,
      });
    },
    checkPasswordConfirm(rule, value, callback) {
      const password = this.form.getFieldValue('password');
      if (password !== value) {
        callback(new Error('两次输入的密码不一致！'));
      } else {
        callback();
      }
    },

    handleCancel(e) {
      this.smsCode = '';
      this.visible = false;
    },
    handleOk(e) {
      // 这里应该做一次表单校验，时间比较赶，略...
      if (this.smsCode) {
        this.confirmSignUp();
      } else {
        this.msgBox('sms code can not be empty', 'error');
      }
    },
    showModal() {
      this.visible = true;
    },
    back() {
      this.$router.push('Login');
    },
  },
};
</script>
