<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h1 class="card-title pricing-card-title">
        {{ title }}
      </h1>
      <ul class="list-unstyled mt-3 mb-4">
        <li>{{ listItem1 }}</li>
        <li>{{ listItem2 }}</li>
      </ul>
      <nuxt-link :to="nuxtLink" type="button" class="btn btn-lg btn-block btn-success">
        Browse
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryPoint',
  props: {
    title: {
      type: String,
      required: true
    },
    listItem1: {
      type: String,
      required: true
    },
    listItem2: {
      type: String,
      required: true
    },
    nuxtLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
