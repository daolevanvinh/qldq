<template>
  <div style="height: 100%">
    <v-navigation-drawer permanent dark :src="nav" class="left-nav">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Quản lý dân quân
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="v-left-wrap">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item.link)"
          :light="true"
          class="un-light"
        >
          <v-list-item-icon>
            <v-icon color="#fff">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import nav from "../../assets/nav.jpg";
export default {
  data() {
    return {
      nav: nav,
      items: [
        {
          title: "Danh sách dân quan",
          icon: "mdi-view-dashboard",
          link: "list-page",
        },
        { title: "Đăng xuất", icon: "mdi-help-box", link: "home-page" },
      ],
      right: null,
    };
  },
  methods: {
    goTo(name) {
      let c_name = this.$route.name;
      c_name !== name ? this.$router.push({ name: name }) : "";
    },
  },
};
</script>
<style lang="scss" scoped>
.left-nav {
  height: 100%;
}
.v-left-wrap {
  .theme--light {
    opacity: 1 !important;
  }
}
.un-light {
  color: #fff;
  div {
    color: #fff;
  }
}
</style>