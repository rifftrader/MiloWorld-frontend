<template>
  <footer class="text-muted">
    <div class="container">
      <div class="row">
        <div class="col-sm text-center" />
        <div class="col-sm text-center font-weight-bold">
          <span>Rig Pig Enterprises © 2021</span>
        </div>
        <div class="col-sm text-center" />
      </div>
      <br>
      <div class="row">
        <div class="col-sm text-center" />
        <div class="col-sm text-center hvr-grow font-weight-bold">
          <span><a href="https://github.com/rifftrader/MiloWorld-frontend"><i class="fab fa-github" /> Click here to view source code and project notes </a><i class="fas fa-external-link-square-alt" /></span>
        </div>
        <div class="col-sm text-center" />
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
p {
  padding: 10px;
  margin-bottom: 0;
}

footer {
  background-color: #039c81;
  /*background-color: #333b3f;*/
  margin: 0;
  padding: 16px 0;
}

.text-center {
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>
