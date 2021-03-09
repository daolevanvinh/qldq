<template>
  <div class="row">
    <div class="col-lg-3 col-xl-2" style="z-index: 999">
      <LeftMenu style="z-index: 999"></LeftMenu>
    </div>
    <div class="col-lg-9 col-xl-10">
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "../../components/LeftMenu/LeftMenu";
export default {
  components: { LeftMenu },
};
</script>
<style lang="scss" scoped>
.right-content {
  padding: 10px 10px 10px 0;
}
</style>