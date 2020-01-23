import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

//モジュールの有効化
Vue.use(Vuex);

export default new Vuex.Store({
  //stateの値を変更する場合は、actions→mutationsの流れで
  //データを渡す。
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  //mutationには自動的にstateの値が渡ってくる。
  //ストアのstateを更新するにはmutationで定義したメソッドをactoins経由で
  //commitする必要がある。
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, address) {
      state.addresses.push(address);
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    //firebase-Login
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    //firebase-logout
    logout() {
      firebase.auth().signOut();
    },
    //get address-data from firebase
    fetchAddresses({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => commit("addAddress", doc.data()));
        });
    },
    toggleSideMenu({ commit }) {
      //「commit」・・・mutaionに定義されている同名メソッドを実行する。
      commit("toggleSideMenu");
    },
    //actionの第2引数以降にmutationにわたす値の引数を取れる。
    addAddress({ getters, commit }, address) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .add(address);
      }
      commit("addAddress", address);
    }
  },
  //gettersには自動的にstateが渡される。
  getters: {
    userName: state => (state.login_user ? state.login_user.displayName : ""),
    photoURL: state => (state.login_user ? state.login_user.photoURL : ""),
    uid: state => (state.login_user ? state.login_user.uid : null)
  }
});
