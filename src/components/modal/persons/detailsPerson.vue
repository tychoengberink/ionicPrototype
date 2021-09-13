<template>
<ion-header>
    <ion-toolbar>
      <ion-title>{{ name }}</ion-title>
      <ion-buttons slot="end" class="buttons-last-slot sc-ion-buttons-ios-h sc-ion-buttons-ios-s ios hydrated">
        <ion-button @click="dismissModal"
                    class="ios button button-clear in-toolbar ion-activatable ion-focusable hydrated">
          <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
  <p class="ion-text-center">{{ phonenumber }}</p>
  <p class="ion-text-center">{{ email }}</p>
  <ion-item-divider></ion-item-divider>
  
  </ion-content>
</template>

<script>
import {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, modalController} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';

export default {
name: 'detailsPerson',
  props: ['name', 'phonenumber', 'email'],
  components: {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar},
  setup(){
    return { closeOutline }
  },
  
  methods: {
    async dismissModal() {
      await modalController.dismiss();
    },
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