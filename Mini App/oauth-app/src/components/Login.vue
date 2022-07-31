<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-4">
        <div class="img mt-5">
          <img src="https://www.kotakode.com/static/media/kotakode-logo.6f6a3051.png" alt="" style="width:300px">
        </div>
          <form>
            <div class="form-group">
              <label for="email">Email / Username</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password">
              <span><a href="#" class="" style="text-decoration: none">Lupa Password?</a></span>
            </div>
            <button type="submit" class="btn btn-success btn-lg btn-block">Masuk</button>
          </form>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-4">
        <div class="col ">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" width="40"></a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .container{
    text-decoration: none;
    margin-top: 130px;
  }
</style>