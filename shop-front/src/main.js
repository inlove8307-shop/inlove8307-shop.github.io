import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyZLtGxng4yE5x5m8oI7-NSpXpEdjhX2Q",
  authDomain: "shop-bfa65.firebaseapp.com",
  databaseURL: "https://shop-bfa65.firebaseio.com",
  projectId: "shop-bfa65",
  storageBucket: "shop-bfa65.appspot.com",
  messagingSenderId: "688211696508",
  appId: "1:688211696508:web:3cebcd65499673a2"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
