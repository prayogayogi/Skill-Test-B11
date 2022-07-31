<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand ml-5" href="#">
      <img src="https://www.kotakode.com/static/media/kotakode-logo.6f6a3051.png" style="height:30px" class="logo" alt="Vite logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Produk</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Partnership</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Academy</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn masuk btn-outline-success my-2 my-sm-0" type="submit">Masuk</button>
        <button class="btn daftar btn-outline-success my-2 my-sm-0" type="submit">Daftar</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .collapse{
    color: red;
  }
</style>