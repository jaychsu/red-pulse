import Vue from 'vue';
import Vuex from 'vuex';
import { joinInfos } from '../shared';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    mail: '',
  },
  mutations: {
    saveInfos(state, { name, mail }) {
      if (!name || !mail) {
        /* eslint-disable no-console */
        console.error('[ERR] Invalid infos.');
        return;
      }
      state.name = name;
      state.mail = mail;
    },
  },
  getters: {
    getInfos: state => joinInfos(state.name, state.mail),
  },
});
