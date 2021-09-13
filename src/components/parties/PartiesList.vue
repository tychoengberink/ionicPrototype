<template>
  <ion-list>
    <party-list-item
      v-for="party in parties"
      :key="party.id"
      :party="party"
    ></party-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import PartyListItem from "./PartyListItem.vue";
export default {
  props: ["parties"],
  components: {
    IonList,
    PartyListItem,
  },
};
</script>