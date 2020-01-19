import Vue from "vue";
import Vuex from "vuex";

//モジュールの有効化
Vue.use(Vuex);

export default new Vuex.Store({
  //stateの値を変更する場合は、actions→mutationsの流れで
  //データを渡す。
  state: {
    drawer: false,
    addresses: []
  },
  //mutationには自動的にstateの値が渡ってくる。
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, address) {
      state.addresses.push(address);
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      //「commit」・・・mutaionに定義されている同名メソッドを実行する。
      commit("toggleSideMenu");
    },
    //actionの第2引数以降にmutationにわたす値の引数を取れる。
    addAddress({ commit }, address) {
      commit("addAddress", address);
    }
  },
  modules: {}
});
