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
  <ion-content class="ion-padding">
    <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
        <ion-item>
        <ion-label position="floating">Start DateTime</ion-label>
        <ion-datetime pickerFormat="YYYY-MM-DD HH mm" display-format="YYYY-MM-DD HH mm" v-model="enteredStartDateTime"></ion-datetime>
      </ion-item>
        <ion-item>
        <ion-label position="floating">End DateTime</ion-label>
        <ion-datetime pickerFormat="YYYY-MM-DD HH mm" display-format="YYYY-MM-DD HH mm" v-model="enteredEndDateTime"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
  </ion-content>
</template>

<script>
import {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, modalController, IonLabel, IonInput, IonItem, IonTextarea, IonList, IonDatetime} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
import { Storage, Drivers } from '@ionic/storage';
// import { isPlatform } from '@ionic/vue';
// import {Calendar} from '@ionic-native/calendar';


const store = new Storage({
        driverOrder: [Drivers.LocalStorage]
      });

export default{
  name: 'addParty',
  props: {
    title: {type: String, default: 'Super Modal'},
  },
  setup(){
    return { closeOutline }
  },
  components: {IonContent, IonIcon, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonItem, IonTextarea, IonList, IonDatetime},
  methods: {
    async dismissModal() {
      await modalController.dismiss();
    },

    submitForm() {
      this.saveParty();
      this.dismissModal();
    },

    async saveParty(){
      
     await store.create();
      const key = await store.length();
      const id = key + 1;
      const partyData = {
          title: this.enteredTitle,
          description: this.enteredDescription,
          startDateTime: this.enteredStartDateTime,
          endDateTime: this.enteredEndDateTime,
       };
       await store.set(id, JSON.stringify(partyData));

        // const cal = new Calendar();
        // cal.calendarName = "partyPlanner";

      //  if(isPlatform('ios')){
      //     //not needed
      //     console.log('ios');
      //  }else if(isPlatform('android')){
      //    console.log('android');
      //    cal.createEvent(this.enteredTitle, 'none', this.enteredDescription, new Date(this.enteredStartDateTime), new Date(this.enteredEndDateTime))
      //  }
    }
  }
};
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  ion-icon {
    color: white;
  }
}

</style>