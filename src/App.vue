<template>
  <v-app>
    <v-toolbar>
      <!-- v-toolbar-side-iconの代わり -->
      <!-- @clickに空文字列を設定するよエラーになる。（仕様）-->
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav></SideNav>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //配列内で定義したアクションをメソッドとして使用できるように展開する。
    //toggleSideMenuメソッドはstoreに定義されている。
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
