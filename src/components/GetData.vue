<template>
  <div>
    Your infos are:
    <span>{{ infos }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GetData',
  props: {
    defaultInfos: {
      type: String,
      default: 'None for now, please completely fill your infos into the inputs in `Route1`.',
    },
  },
  computed: {
    ...mapGetters(['getInfos']),
    infos() {
      const infos = this.getInfos;
      if (!infos) return this.defaultInfos;
      return infos;
    },
  },
};
</script>

<style scoped>
</style>
