<template>
  <ion-item>
    <ion-label>
      {{ invitee.name.givenName }} {{ invitee.name.familiyName }}
      {{ invitee.email[0].value }}
    </ion-label>
    <ion-button slot="end" v-bind:href="'mailto:' + invitee.email[0].value + '?subject=' + encodeURI('You have been invited to: ' + party.title) + '!&body=' + encodeURI(party.description)">
      <ion-icon slot="icon-only" :icon="mailOpen">></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonIcon } from "@ionic/vue";
import { mailOpen } from "ionicons/icons";

export default {
  props: ["invitee", "party"],
  components: {
    IonItem,
    IonLabel,
    IonIcon
  },

  setup() {
    return { 
      mailOpen
       }; 
  },
};
</script>