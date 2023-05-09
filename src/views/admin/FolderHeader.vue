<template>
  <v-menu offset-y transition="slide-y-transition" location="end">
    <!-- -------------------Menu list-------------------- -->
    <template v-slot:activator="{ attrs, on }">
      <div class="d-flex">
        <div v-bind="attrs" v-on="on">Chọn thư mục</div>
        <img src="@/assets/icons/arrow-down.svg" alt="" />
      </div>
    </template>

    <v-list class="pa-0 layout-list" style="min-width: 300px">
      <v-list-item>
        <v-list-item-title class="ml-4 d-flex">
          Thêm thư mục
        </v-list-item-title>
        <v-img
          :src="getIcon('plus')"
          alt=""
          style="width: 10px; height: 10px"
          @click="handleAddFolder()"
        />
      </v-list-item>
      <v-list-item
        class="py-1"
        v-for="(option, index) in options"
        :key="index"
        link
      >
        <v-list-item-title class="ml-4 d-flex">
          {{ option.title }}
        </v-list-item-title>
        <v-img
          :src="option.icon && getIcon(option.icon)"
          alt=""
          @click="handleEditFolder(option.id)"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: "1",
          title: "Tuần thi 1 đại học",
          emitFunction: "addFolder",
          icon: "menu",
        },
        {
          id: "2",
          title: "Ielts",
          emitFunction: "delete",
          icon: "menu",
        },
      ],
    };
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleAddFolder() {
      this.$emit("addFolder");
    },
    handleEditFolder(id) {
      console.log(id);
      this.$emit("editFolder", id);
    },
  },
};
</script>
