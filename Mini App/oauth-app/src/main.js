import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
import gAuthPlugin from "vue3-google-login";
let gauthClientId =
  "350662191843-j2usrb4m90oacc44l7ffo6njm765i8ve.apps.googleusercontent.com";
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: "email",
  prompt: "consent",
});
app.mount("#app");
