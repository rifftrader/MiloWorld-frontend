<template>
  <div>
    <SearchHeader />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
// import Header from '@/components/Navigation/Header'
import SearchHeader from '@/components/Navigation/SearchHeader'
import Footer from '@/components/Navigation/Footer'

export default {
  components: {
    SearchHeader,
    Footer
  }
}
</script>
<style>

</style>
