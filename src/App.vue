<template>
  <!-- v-appタグの代わり -->
  <v-card>
    <v-toolbar dense>
      <!-- v-toolbar-side-iconの代わり -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default{
    name :'App',data(){
      return {
        //
      }
    }
  }
</script>