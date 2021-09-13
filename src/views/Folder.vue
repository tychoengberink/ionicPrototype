<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>


      <parties-list @refresh="refresh" :parties="parties"
                    v-if="$route.params.id === 'upcoming-parties'"></parties-list>

    </ion-content>
    <ion-button v-if="$route.params.id === 'upcoming-parties'" @click="openModal">Add party</ion-button>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  modalController
} from '@ionic/vue';
import PartyModal from '@/components/modal/parties/addParty.vue';
import PartiesList from '@/components/parties/PartiesList.vue';
import {Storage, Drivers} from '@ionic/storage';

export default {
  name: 'Folder',
  components: {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    PartiesList
  },
  data() {
    return {
      parties: [],
      loading: false
    }
  },
  mounted() {
    this.refresh();
  },
  methods: {
    async openModal() {
      const modal = await modalController
          .create({
            component: PartyModal,
            parent: this,
            cssClass: 'my-custom-class',
            componentProps: {
              title: 'Add a party!',
            },
          });
  
      await modal.present();

      await modal.onDidDismiss();
      this.refresh()
    },

    async refresh() {
      this.parties = [];
      const store = new Storage({
        driverOrder: [Drivers.LocalStorage]
      });
      await store.create();
      store.forEach((value) => {
        this.parties.push(JSON.parse(value))
      });
    }
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>