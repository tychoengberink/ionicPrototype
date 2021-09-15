import {Drivers, Storage} from '@ionic/storage';

export default {
    name: 'StorageService',
    data() {
      return {
        localStorage: new Storage({
            driverOrder: [Drivers.LocalStorage]
          })
      }
    },
    mounted() {
      this.localStorage.create();
    },
    methods: {
      async setLocalStorage(index, value) {
        await this.localStorage.set(index, value);
      },
      async getLocalStorage(index) {
        return await this.localStorage.get(index);
      },
      async getLocalStorageLength() {
        return await this.localStorage.length();
      },
      async removeLocalStorage(index) {
        await this.localStorage.remove(index);
      },
      async clearLocalStorage() {
        await this.localStorage.clear();
      },
      async forEachStorage(){
        const arr = [];
        await this.localStorage.forEach((value, key) => {
            value = JSON.parse(value);
            value.id = key
            arr.push(value);
        })

        return arr;
      }
    }
}