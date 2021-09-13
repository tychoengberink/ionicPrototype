<template>
  <ion-item @click="openModal">
    <ion-label>
      {{ person.name }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, modalController } from "@ionic/vue";
import detailsPerson from '@/components/modal/persons/detailsPerson.vue';

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
            component: detailsPerson,
            cssClass: 'my-custom-class',
            componentProps: {
              title: this.party.title,
              description: this.party.description,
              datetime: this.party.datetime
            },
          })
      return modal.present();
    },
  },
};
</script>