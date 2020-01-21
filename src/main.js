import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGK2By3cP4v3REQOD0rGl2rHuc7V_SfVY",
  authDomain: "my-address-pj-38394.firebaseapp.com",
  databaseURL: "https://my-address-pj-38394.firebaseio.com",
  projectId: "my-address-pj-38394",
  storageBucket: "my-address-pj-38394.appspot.com",
  messagingSenderId: "788477950168",
  appId: "1:788477950168:web:a98f1f2529e25e42f1bfad",
  measurementId: "G-LVZ7EX1VCG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  //省略しなければ「router: router」
  router,

  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
