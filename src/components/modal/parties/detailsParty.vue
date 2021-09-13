<template>
<ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end" class="buttons-last-slot sc-ion-buttons-ios-h sc-ion-buttons-ios-s ios hydrated">
        <ion-button @click="dismissModal"
                    class="ios button button-clear in-toolbar ion-activatable ion-focusable hydrated">
          <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
  <p class="ion-text-center">Description: {{ description }}</p>
  <p class="ion-text-center"> Start: {{ new Date(startDateTime).toLocaleDateString()}} {{new Date(startDateTime).toLocaleTimeString()}}</p>
  <p class="ion-text-center"> End:  {{ new Date(endDateTime).toLocaleDateString()}} {{new Date(endDateTime).toLocaleTimeString()}}</p>
    <ion-button expand="full"  @click="pickContactsFun"
                    class="ios md">
          Add invitee
    </ion-button>
  <ion-item-divider></ion-item-divider>
  <persons-list :invitees="invitees">
  </persons-list>
  </ion-content>
</template>

<script>
import {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, IonItemDivider,modalController} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
import PersonsList from '@/components/persons/PersonsList.vue';
import { Contacts } from '@ionic-native/contacts';

export default {
name: 'detailsParty',
  props: ['title', 'description', 'startDateTime', 'endDateTime', 'invitees'],
  components: {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, IonItemDivider, PersonsList},

  setup(){
    return{ closeOutline }
  },
  
  methods: {
    async dismissModal() {
      await modalController.dismiss();
    },

    pickContactsFun(){
    document.addEventListener("deviceready", () => {
      Contacts.pickContact(function(contact){
        console.log('The following contact has been selected:' + JSON.stringify(contact));
    },function(err){
        console.log('Error: ' + err);
    });
    });
    }
  }
}
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  ion-icon {
    color: white;
  }
}
</style>