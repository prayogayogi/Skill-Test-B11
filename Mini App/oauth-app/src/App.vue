<template>
  <div class="nabar">
      <Navbar/>
  </div>
  <div class="content">
    <Content/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Content from './components/Content.vue';

  export default{
    components:{Navbar,Content}
  }
</script>

<style scoped>

</style>
