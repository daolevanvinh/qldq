<template>
  <div style="height: 100%">
    <Header />
    <v-app style="min-height: 100%; overflow: hidden">
      <router-view></router-view>
    </v-app>
    <Footer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: { Header, Footer },
};
</script>