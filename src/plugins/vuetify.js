//material.ioのアイコン
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    //アイコン表示用
    icons:{
        iconfont: 'mdi',
    }
});
