import Vue from 'vue'
import Vuex from 'vuex'

//モジュールの有効化
Vue.use(Vuex)

export default new Vuex.Store({

  //stateの値を変更する場合は、actions→mutationsの流れで
  //データを渡す。
  state: {
    drawer: false
  },
  //mutationには自動的にstateの値が渡ってくる。
  mutations: {
    toggleSideMenu(state){
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleSideMenu({commit}){
      //「commit」・・・mutaionに定義されている同名メソッドを実行する。
      commit('toggleSideMenu')
    }
  },
  modules: {
  }
})
