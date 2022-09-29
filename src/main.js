import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "firebase/auth";
import firebase from "firebase/app";
import { initializeFirebase } from "./firebase/firebaseInit";

initializeFirebase();
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    createApp(App)
      .use(store)
      .use(router)
      .mount("#app");
  }
});
