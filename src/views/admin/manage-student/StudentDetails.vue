<template>
  <v-container class="pl-2">
    <v-row class="mt-2">
      <v-col cols="12" md="12" sm="12">
        <v-card elevation="0">
          <v-card-title class="d-flex justify-space-between mb-10 pl-0">
            <div class="d-flex align-center">
              <img
                src="@/assets/icons/button-back.svg"
                alt=""
                @click="handleBack"
                style="cursor: pointer"
              />
              <h4 class="ml-3">Thái Quang Minh</h4>
            </div>
            <ButtonComponent title="Browse" @click="handleNavigateBrowse" />
          </v-card-title>
          <v-card-text class="mt-5" style="max-height: 65vh; overflow: auto">
            <!-- ---------------Content------------------- -->
            <v-row v-for="cardItem in studentCardSet" :key="cardItem.id">
              <v-col
                col="12"
                md="10"
                sm="10"
                class="d-flex justify-start align-center"
              >
                <div class="d-flex">
                  <h6 class="px-10">{{ cardItem.cardName }}</h6>
                  <h6 class="px-10 text-color-new">{{ cardItem.newCard }}</h6>
                  <h6 class="px-10 text-color-review">
                    {{ cardItem.remindCard }}
                  </h6>
                </div>
              </v-col>
              <v-col col="12" md="2" sm="2" class="d-flex justify-end">
                <div>
                  <ButtonComponent
                    title="Xoá bộ thẻ"
                    @click="handleShowDialogDelete(cardItem.id)"
                  />
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="d-flex justify-center mt-12">
            <captionOne>Đã học 140 thẻ trong 21 phút (3s/thẻ)</captionOne>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <DialogComponent
      typeDialog="delete"
      :showDialogValue="showDialogDelete"
      @closeDialog="handleCloseDialog"
    />
  </v-container>
</template>
<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";

export default {
  components: { DialogComponent, ButtonComponent },
  data() {
    return {
      idStudent: "",
      showDialogDelete: false,
      //   fake data
      studentCardSet: [
        {
          id: "1",
          cardName: "Tuần 1 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "2",
          cardName: "Tuần 2 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "3",
          cardName: "Tuần 3 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "4",
          cardName: "Tuần 4 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "5",
          cardName: "Tuần 5 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "6",
          cardName: "Tuần 6 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "7",
          cardName: "Tuần 7 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "8",
          cardName: "Tuần 8 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "9",
          cardName: "Tuần 9 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "10",
          cardName: "Tuần 10 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "11",
          cardName: "Tuần 11 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
        {
          id: "12",
          cardName: "Tuần 12 thi đại học",
          newCard: 120,
          remindCard: 20,
        },
      ],
    };
  },
  created() {
    this.handleGetIdStudent();
    console.log(this.idStudent);
  },
  methods: {
    handleBack() {
      this.$router.push("/manage");
    },
    handleNavigateBrowse() {
      this.$router.push(`/browse-admin/student/${this.idStudent}`);
    },
    handleShowDialogDelete(id) {
      console.log(id);
      this.showDialogDelete = true;
    },
    handleCloseDialog() {
      this.showDialogDelete = false;
    },
    handleGetIdStudent() {
      this.idStudent = this.$route.params.id;
    },
  },
};
</script>

<style lang="sass" scoped>
.text-color-new
  color: #3887FE
.text-color-review
  color: #1BB763
</style>
