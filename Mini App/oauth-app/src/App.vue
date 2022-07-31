<template>
  <div class="nabar">
      <Navbar/>
  </div>
  <div class="content">
    <!-- <Content/> -->
    <Login/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  // import Content from './components/Content.vue';
  import Login from './components/Login.vue';

  export default{
    components:{Navbar,Login}
  }
</script>

<style scoped>

</style>
