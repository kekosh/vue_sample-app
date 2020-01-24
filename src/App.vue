<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-app-bar-items>
    </v-app-bar>
    <SideNav />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SideNav
  },
  //ライフサイクルフック(初期化時に所定のタイミングで実行される処理)
  created() {
    // ログイン、ログアウト時にuserオブジェクトがcallback関数に渡される。(非同期)
    // ログイン時はuserオブジェクト、ログアウト時はNullが渡される。
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        //ログイン時のページがhomeなら、連絡先ページに遷移する。
        if (this.$router.currentRoute.name === "home") {
          //pushメソッドで引数に指定したアドレスのページに遷移する
          this.$router.push({ name: "addresses" });
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "home" });
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchAddresses"
    ])
  }
};
</script>
