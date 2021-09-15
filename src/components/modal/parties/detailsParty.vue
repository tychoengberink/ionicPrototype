<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Party: {{ party.title }}</ion-title>
      <ion-buttons
        slot="end"
        class="
          buttons-last-slot
          sc-ion-buttons-ios-h sc-ion-buttons-ios-s
          ios
          hydrated
        "
      >
        <ion-button
          @click="dismissModal"
          class="
            ios
            button button-clear
            in-toolbar
            ion-activatable ion-focusable
            hydrated
          "
        >
          <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <p class="ion-text-center">Description: {{ party.description }}</p>
    <p class="ion-text-center">
      Start: {{ new Date(party.startDateTime).toLocaleDateString() }}
      {{ new Date(party.startDateTime).toLocaleTimeString() }}
    </p>
    <p class="ion-text-center">
      End: {{ new Date(party.endDateTime).toLocaleDateString() }}
      {{ new Date(party.endDateTime).toLocaleTimeString() }}
    </p>
    <ion-button expand="full" @click="pickContactsFun" class="ios md">
      Add invitee
    </ion-button>
    <ion-item-divider></ion-item-divider>
    <invitees-list :party="party" :invitees="invitees"> </invitees-list>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  modalController,
} from "@ionic/vue";
import { closeOutline } from "ionicons/icons";
import InviteesList from "@/components/invitees/InviteesList.vue";
import { Contacts } from "@ionic-native/contacts";

export default {
  name: "detailsParty",
  props: [
    "party"
  ],
  components: {
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItemDivider,
    InviteesList,
  },

   data() {
    return {
      invitees: this.party.invitees
    }
  },

  setup() {
    return { 
      closeOutline,
    };
  },

  methods: {
    async dismissModal() {
      await modalController.dismiss();
    },

    async pickContactsFun() {
      const contacts = new Contacts();
      await contacts.pickContact().then(
        (contact) => {
          if(contact.emails == undefined){
            alert("Only contact with email allowed");
          }else{
          const invitee = {
            name: contact.name,
            phoneNumber: contact.phoneNumbers,
            email: contact.emails,
          };
          this.invitees.push(invitee);

          const partyData = {
            title: this.$props.party.title,
            description: this.$props.party.description,
            startDateTime: this.$props.party.startDateTime,
            endDateTime: this.$props.party.endDateTime,
            invitees: this.party.invitees
          }

          this.removeLocalStorage(this.$props.id);
          this.setLocalStorage(this.$props.id, JSON.stringify(partyData));
          }
        }
      );
    },
  },
};
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  ion-icon {
    color: white;
  }
}
</style>