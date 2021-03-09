<template>
  <div class="list-container">
    <div class="action">
      <v-btn @click="$router.push({ name: 'new-page' })" color="primary"
        ><v-icon>mdi-plus</v-icon>Thêm mới</v-btn
      >
    </div>
    <v-text-field
      v-model="search"
      prepend-icon="mdi-magnify"
      label="Tìm kiếm"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="10"
      :page.sync="page"
      hide-default-footer
      @page-count="pageCount = $event"
      class="elevation-1 custom-table"
      dense
    >
      <template v-slot:[`item.index`]="{ item }">{{ items.indexOf(item) +1 }}</template>
      <template v-slot:[`item.userName`]="{ item }">
        <div v-html="$options.filters.highlight(item.userName, search)">
          {{ item.userName }}
        </div>
      </template>

      <template v-slot:[`item.avatar`]="{ item }">
        <div class="avatar" @click="avatarDialog = true">
          <img :item="item" src="@/assets/logo.png" alt="avatar" />
        </div>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon title="chỉnh sửa" class="icon-btn" :item="item"
          >mdi-pencil</v-icon
        >
        <v-icon
          title="xóa"
          class="icon-btn"
          :item="item"
          @click="notificationDialog = true"
          >mdi-delete</v-icon
        >
      </template>
    </v-data-table>
    <div class="text-right pt-2">
      <v-pagination
        style="float: right"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
    <v-dialog v-model="avatarDialog" persistent width="800">
      <div class="custom-dialog">
        <div class="avatar__large">
          <img src="@/assets/logo.png" alt="avatar" />
        </div>
        <div class="custom-dialog__action">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="avatarDialog = false">Trở về</v-btn>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="notificationDialog" width="300" persistent>
      <div class="custom-dialog">
        <p>Bạn muốn thực hiện thay đổi ?</p>
        <div class="custom-dialog__action">
          <v-spacer></v-spacer>
          <div>
            <v-btn color="primary" @click="notificationDialog = false">
              <span>Đồng ý</span>
            </v-btn>
            <v-btn color="red" @click="notificationDialog = false">
              <span>Trở về</span>
            </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      avatarDialog: false,
      notificationDialog: false,
      pageCount: 0,
      page: 1,
      headers: [
        { text: "#", value: "index", width: "5%" },
        { text: "Hình ảnh", value: "avatar", width: "10%" },
        { text: "Họ & Tên", value: "userName" },
        { text: "Điện thoại", value: "phone" },
        { text: "Năm sinh", value: "birthDate" },
        { text: "", value: "action" },
      ],
      items: [
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 1", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 2", phone: "0123456", birthDate: "20/12/1111" },
        { userName: "vinh 3", phone: "0123456", birthDate: "20/12/1111" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.custom-table {
  margin-top: 1rem;
  height: 360px !important;
}
.action {
  display: flex;
  justify-content: flex-end;
}
.icon-btn {
  cursor: pointer;
  margin-right: 5px;
}
.avatar {
  width: 30px;
  height: 30px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &__large {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.custom-dialog {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px 20px;
  &__action {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    button {
      margin-right: 10px;
    }
  }
}
</style>