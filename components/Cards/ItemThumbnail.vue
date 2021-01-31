<template>
  <nuxt-link
    :to="nuxtLinkURL"
  >
    <SingleItemImageHandling
      :cloudinary-base-u-r-l="cloudinaryBaseURL"
      :cloudinary-endpoint-u-r-l="cloudinaryEndpointURL"
      :alt-text="altText"
    />
    <div class="card-body">
      <p class="card-title">
        {{ shortName }}
      </p>
      <small class="card-text">
        {{ articleNumber }}
      </small>
    </div>
    <footer v-if="isActiveProduct" class="text-muted text-center">
      <small class="">You are currently viewing this product</small>
    </footer>
  </nuxt-link>
</template>

<script>
import SingleItemImageHandling from '@/components/ImageHandling/SingleItemImageHandling'

export default {
  name: 'ItemThumbnail',
  components: {
    SingleItemImageHandling
  },
  props: {
    nuxtLinkURL: {
      type: String,
      required: true,
      default: '/'
    },
    shortName: {
      type: String,
      required: true,
      default: ''
    },
    articleNumber: {
      type: String,
      required: true,
      default: ''
    },
    cloudinaryBaseURL: {
      type: String,
      required: true,
      default: ''
    },
    cloudinaryEndpointURL: {
      type: String,
      required: true,
      default: ''
    },
    altText: {
      type: String,
      required: true,
      default: ''
    },
    isActiveProduct: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>

.card-deck {
  padding: 0 5%;
}

footer {
  margin-bottom: 20px;
}
a {
  color: #039c81;
}
a:hover {
  text-decoration: none;
}

</style>
