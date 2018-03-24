<template>
  <div>
    <div>
      Please confirm your infos:
      <span>{{ infos }}</span>
    </div>

    <form>
      <input
        type="text"
        name="txtName"
        v-model="name"
        placeholder="Name"
      />

      <input
        type="text"
        name="txtEmail"
        v-model="mail"
        placeholder="Email"
      />

      <a href="javascript:;" @click="saveInfos">Submit</a>
    </form>

  </div>
</template>

<script>
import { joinInfos } from '../shared';

export default {
  name: 'HelloWorld',
  props: {
    defaultInfos: {
      type: String,
      default: 'None for now, please completely fill your infos into the inputs below.',
    },
  },
  data() {
    return {
      name: '',
      mail: '',
    };
  },
  computed: {
    infos() {
      if (!this.name || !this.mail) return this.defaultInfos;
      return joinInfos(this.name, this.mail);
    },
  },
  methods: {
    saveInfos() {
      if (!this.name || !this.mail) {
        /* eslint-disable no-console */
        console.error('[ERR] Please fill the infos first.');
        return;
      }

      this.$store.commit('saveInfos', {
        name: this.name,
        mail: this.mail,
      });
    },
  },
};
</script>

<style scoped>
</style>
