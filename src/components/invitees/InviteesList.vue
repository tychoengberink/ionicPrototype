<template>
  <ion-list>
    <invitee-list-item
      v-for="invitee in invitees"
      :key="invitee.id"
      :invitee="invitee"
      :party="party"
    ></invitee-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import InviteeListItem from "./InviteeListItem.vue";
export default {
  props: ["invitees", "party"],
  components: {
    IonList,
    InviteeListItem,
  },
};
</script>