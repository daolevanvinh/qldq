<template>
  <div class="wrap-page">
    <div class="login-form">
      <v-text-field
        v-model="user.id"
        @keyup.enter="login"
        label="Tài khoản"
        :error-messages="user.id.length == 0 ? `Chưa nhập tài khoản` : ''"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.pwd"
        @keyup.enter="login"
        label="Mật khẩu"
        :error-messages="
          user.pwd.length < 4 || user.pwd.length > 16
            ? `Mật khẩu từ 4 - 16 ký tự`
            : ''
        "
        required
      ></v-text-field>
      <div>
        <label style="cursor: pointer"
          ><input type="checkbox" v-model="rememberUser" /> Nhớ mật khẩu</label
        >
      </div>
      <div class="login-form__action">
        <v-btn color="primary" @click="login">Đăng nhập</v-btn>
        <v-btn color="error" @click="clear">Hủy</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: "test",
        pwd: "password",
      },
      rememberUser: false,
    };
  },
  created() {
    if (localStorage["user"]) {
      this.user = JSON.parse(localStorage["user"]);
    }
  },
  methods: {
    login() {
      if (this.user.id === "test" && this.user.pwd === "password") {
        if (this.rememberUser) {
          localStorage["user"] = JSON.stringify(this.user);
        }
        this.$router.push({ name: "list-page" });
      } else {
        alert("sai roi");
      }
    },
    clear() {
      this.user = {
        id: "",
        password: "",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 500px;
}
.login-form {
  max-width: 600px;
  width: 30%;
  margin: auto;
  border: 1px solid silver;
  padding: 15px;
  border-radius: 10px;
  input {
    margin: 10px 0 25px 0;
  }
  &__action {
    display: flex;
    justify-content: space-between;
  }
}
</style>