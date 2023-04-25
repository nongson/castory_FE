<template>
  <v-simple-table fixed-header height="672px">
    <template v-slot:default>
      <thead class="table-wrapper-header">
        <tr>
          <th class="text-left table-header-border-left table-header-border">
            Bộ thẻ
          </th>
          <th class="text-center table-header-border">Thẻ mới</th>
          <th class="text-center table-header-border">Thẻ ôn tập</th>
          <th
            class="text-left table-header-border-right table-header-border"
          ></th>
        </tr>
      </thead>
      <tbody class="table-wrapper-content">
        <tr
          v-for="item in value"
          :key="item.name"
          @click="handleNavigate(item.id)"
        >
          <td class="table-name">{{ item.name }}</td>
          <td class="text-center table-new-card">{{ item.newCard }}</td>
          <td class="text-center table-remind-card">{{ item.remindCard }}</td>
          <td class="text-center">
            <v-menu offset-y transition="slide-y-transition" location="end">
              <!-- -------------------Menu list-------------------- -->
              <template v-slot:activator="{ attrs, on }">
                <img
                  src="@/assets/icons/menu.svg"
                  style="cursor: pointer; padding: 15px 2px"
                  v-bind="attrs"
                  v-on="on"
                  alt=""
                />
              </template>
              <v-list class="pa-0 layout-list">
                <v-list-item
                  class="px-5 py-1"
                  v-for="(item, index) in items"
                  :key="index"
                  link
                  @click="handleEmit(item.emitFunction)"
                >
                  <v-img :src="getIcon(item.icon)" alt="" />
                  <v-list-item-title class="ml-4 d-flex">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [
        {
          color: "color: #1BB763",
          icon: "bookmark",
          title: "Ôn tập trước",
          emitFunction: "study",
        },
        {
          color: "color: #FD443A",
          icon: "openbook",
          title: "Ôn tập ngẫu nhiên",
          emitFunction: "randomStudy",
        },
      ],
    };
  },
  methods: {
    handleNavigate(id) {
      this.$emit("navigate", id);
    },
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleEmit(action) {
      return this.$emit(action);
    },
  },
};
</script>

<style lang="sass" scoped>
table
  border-top-right-radius: 3px
  th
    background-color: #453FE3 !important
    margin-right: 1px !important
    color: #FFFFFF !important
    font-weight: 400
  tr
    cursor: pointer
    td
      font-weight: 600

.table-header-border-left
  border-top-left-radius: 12px
.table-header-border
  border-left: 1px solid
  &:first-child
    border-right: 1px solid
    border-left: none
.table-header-border-right
  border-top-right-radius: 13px

.table-wrapper-content
  background-color: #F9FBFC
  .table-name
    color: #1C283D !important
  .table-new-card
    color: #3887FE
  .table-remind-card
    color: #1BB763
</style>
