<template>
  <div class="page-content text-center">
    <!--    <h6>Page not Found</h6>-->
    <div class="error-collection">
      <img src="https://media.giphy.com/media/xT0xeh7KMi11ijnE9W/giphy.gif" class="lost-image">
      <h1 class="title">
        404
      </h1>
      <h6 class="lead-text">
        PAGE NOT FOUND
      </h6>
      <p class="countdown-text">
        Redirecting back to a safe place in {{ timerCount }} seconds...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      timerCount: 10
    }
  },
  watch: {
    timerCount: {
      handler (value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
        if (value === 0) {
          return this.$router.push('/')
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

.error-collection {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #23d5ab, 0 0 70px #039c81, 0 0 80px #23d5ab, 0 0 100px #23d5ab, 0 0 150px #039c81;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.title {
  font-size: 128px;

}

.lead-text {
  font-size: 64px;

}

.lost-image {
  max-width: 200px;
  height: auto;
}
</style>
