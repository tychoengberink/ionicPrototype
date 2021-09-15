<template>
  <ion-item @click="openModal">
    <ion-label>
      {{party.title}}
      <br>
      {{party.description}}
    </ion-label>

    <ion-label>
    {{ new Date(party.startDateTime).toLocaleDateString()}} {{new Date(party.startDateTime).toLocaleTimeString()}}
      <br>
    {{new Date(party.endDateTime).toLocaleDateString()}} {{new Date(party.endDateTime).toLocaleTimeString()}}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, modalController } from "@ionic/vue";
import detailsParty from '@/components/modal/parties/detailsParty.vue';

export default {
  props: ["party"],
  components: {
    IonItem,
    IonLabel,
  },
   methods: {
    async openModal() {
      const modal = await modalController
          .create({
            component: detailsParty,
            cssClass: 'my-custom-class',
            componentProps: {
              party: this.party
            },
          })
      return modal.present();
    },
  },
};
</script>