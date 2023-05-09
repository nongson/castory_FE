<template>
  <v-container fluid class="mt-5">
    <v-row :class="{ 'mt-1': $vuetify.breakpoint.xsOnly }" class="px-4">
      <v-col cols="12" md="3" sm="12" class="pa-1" style="margin-top: 82px">
        <TableComponent
          :items="getCardSet"
          :headers="cardSetHeader"
          :options="this.optionsFolder"
          @delete="handleShowDialogDelete"
        />
        <ButtonComponent
          title="Tạo bộ thẻ mới"
          appendIcon="white-plus"
          class="mt-3"
          @click="handleShowDialogAddFolder"
        />
      </v-col>
      <v-col
        cols="12"
        md="5"
        sm="12"
        :class="{ 'mt-5': $vuetify.breakpoint.smAndDown }"
      >
        <v-flex class="mb-4">
          <InputComponent
            :inputProps="inputProps"
            v-model.trim="searchValues"
          />
        </v-flex>
        <TableComponent
          :items="getCardSetDetails"
          :headers="cardSetDetailHeader"
          :options="this.optionsCardSet"
          @delete="handleShowDialogDelete"
        />
        <ButtonComponent title="Chọn thẻ" class="d-flex justify-end mt-3" />
      </v-col>
      <!-- ------------------Add new card set----------------- -->
      <v-col cols="12" md="4" sm="6" class="pa-1 pr-0" style="margin-top: 82px">
        <v-card class="browse-card-detail" elevation="0">
          <v-card-actions class="pa-0 ml-3">
            <ButtonComponent
              title="Tạo thẻ mới"
              @click="handleAddCardForm"
              appendIcon="white-plus"
            />
          </v-card-actions>
          <!-- ------------------Add new card--------------------- -->
          <div v-if="showAddFrom">
            <FormAddNewCard />
          </div>
        </v-card>
      </v-col>
    </v-row>

    <DialogComponent
      typeDialog="delete-folder"
      :showDialogValue="showDialogDelete"
      @closeDialog="handleCloseDialog"
    />
    <DialogComponent
      typeDialog="add-folder"
      :showDialogValue="showDialogAddFolder"
      @closeDialog="handleCloseDialog"
    />
  </v-container>
</template>
<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import { mapGetters } from "vuex";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import FormAddNewCard from "@/views/admin/FormAddNewCard.vue";
import FolderHeader from "@/views/admin/FolderHeader.vue";

export default {
  components: {
    FormAddNewCard,
    ButtonComponent,
    TableComponent,
    InputComponent,
    DialogComponent,
  },
  data() {
    return {
      showDialogDelete: false,
      showDialogAddFolder: false,
      showAddFrom: false,
      inputProps: {
        typeInput: "text",
        placeholder: "Tìm kiếm thẻ",
        id: "search",
      },
      searchValues: "",

      // -----------------card set data table------------------
      cardSetHeader: [
        {
          text: <FolderHeader />,
          value: "cardSetName",
          sortable: false,
        },
        {
          text: "",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],
      optionsFolder: [
        {
          title: "Đổi tên",
          emitFunction: "changeName",
        },
        {
          title: "Nạp",
          emitFunction: "Add",
        },
        {
          title: "Duplicate",
          emitFunction: "duplicate",
        },
        {
          title: "Xoá",
          emitFunction: "delete",
        },
      ],

      //   ----------card details data table----------
      cardSetDetailHeader: [
        {
          text: "Thẻ",
          value: "name",
          sortable: false,
        },
        {
          text: "Đến hạn",
          value: "dueDate",
          sortable: false,
          align: "center",
        },
        {
          text: "Bộ thẻ",
          value: "cardSetName",
          sortable: false,
          align: "center",
        },
        {
          text: "Kiểu thẻ",
          value: "cardType",
          sortable: false,
          align: "center",
        },
        {
          text: "",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],
      optionsCardSet: [
        {
          title: "Convert",
          emitFunction: "convert",
        },
        {
          title: "Xoá",
          emitFunction: "delete",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("admin", ["getCardSet", "getCardSetDetails"]),
  },
  methods: {
    handleShowDialogDelete() {
      this.showDialogDelete = true;
    },
    handleShowDialogAddFolder() {
      this.showDialogAddFolder = true;
    },
    handleAddCardForm() {
      this.showAddFrom = !this.showAddFrom;
    },
    handleCloseDialog() {
      this.showDialogDelete = false;
      this.showDialogAddFolder = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.browse-card-detail
  min-height: 70vh
.browse-card-title
  color: #1BB763
.browse-card-title-des
  color: #F56742

li
  font-weight: bold
</style>
