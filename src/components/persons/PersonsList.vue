<template>
  <ion-list>
    <person-list-item
      v-for="person in persons"
      :key="person.id"
      :person="person"
    ></person-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import PersonListItem from "./PersonListItem.vue";
export default {
  props: ["persons"],
  components: {
    IonList,
    PersonListItem,
  },
};
</script>