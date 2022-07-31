<template>
  <h1>{{ msg }}</h1>
  <h2>Status {{ Vue3GoogleOauth.isAuthorized }}</h2>
</template>

<script>
import { inject } from "vue";

export default{
  name: "Content",
  props: {
    msg: String,
    default: ""
  },

  setup(){
    const Vue3GoogleOauth = inject("Vue3GoogleOauth")

    return{
      Vue3GoogleOauth,
    };
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
