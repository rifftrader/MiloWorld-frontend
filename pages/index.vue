<template>
  <div class="page-content">
    <div class="content-positioning">
      <b-jumbotron header="milo world" lead="Your partner in refurbished industrial automation supplies" />
    </div>

    <SingleImageHandling
      :resource-locator="'Milo/Milo_welcome_photo_gmrfdn.jpg'"
      :alt-text="'Milo welcome page'"
    />
    <div class="card-deck mb-3 text-center content-positioning">
      <EntryPoint
        :title="'Products'"
        :list-item1="'OEM certified refurbished parts'"
        :list-item2="'1 year limited warranty on all parts'"
        :nuxt-link="'/products'"
      />
      <EntryPoint
        :title="'Accessories'"
        :list-item1="'Brand new OEM accessories'"
        :list-item2="'Original warranty on all items'"
        :nuxt-link="'/accessories'"
      />
    </div>
  </div>
</template>

<script>
import EntryPoint from '@/components/Cards/EntryPoint'
import SingleImageHandling from '@/components/ImageHandling/SingleImageHandling'

export default {
  name: 'Index',
  components: {
    EntryPoint,
    SingleImageHandling
  }
}
</script>

<style>

.jumbotron {
  font-family: 'Montserrat', sans-serif;
  padding: 2rem !important;
  /*background-color: #039c81;*/
  color: white;
  text-shadow:  darkgray 0 5px 15px;
  margin-top: 32px;
  background: linear-gradient(-45deg, #039c81, #23d5ab, #039c81, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
/**/
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>
