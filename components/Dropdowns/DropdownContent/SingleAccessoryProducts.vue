<template>
  <div>
    <div v-if="loading">
      <div class="loader" />
    </div>
    <div v-if="!loading" class="row no-gutters">
      <div class="col">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4 col-md-2 card-text font-weight-bold">
              This accessory can be used with the following products:
            </div>
            <div class="col-sm-8 col-md-10">
              <div v-if="!products">
                <div class="loader" />
              </div>
              <div v-else>
                <div
                  v-for="(product, i) in products"
                  :key="i"
                  class="card-deck justify-content-left"
                >
                  <div
                    v-for="(item, j) in product.products"
                    :key="j"
                    class="item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
                  >
                    <div>
                      <ItemThumbnail
                        :nuxt-link-u-r-l="'/products/' + item.articleNumber"
                        :short-name="item.shortName"
                        :article-number="item.articleNumber"
                        :cloudinary-base-u-r-l="cloudinaryBaseURL"
                        :cloudinary-endpoint-u-r-l="item.articleNumber + '_1.jpg'"
                        :alt-text="item.shortName"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemThumbnail from '@/components/Cards/ItemThumbnail'
import compatibleProducts from '@/apollo/queries/productOfSingleAccessory.graphql'

export default {
  name: 'SingleAccessoryProducts',
  components: {
    itemThumbnail
  },
  props: {
    articleNumber: {
      type: String,
      required: true,
      default: ''
    },
    cloudinaryBaseURL: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      loading: 0
    }
  },
  apollo: {
    products: {
      $loadingKey: 'loading',
      query: compatibleProducts,
      variables () {
        return {
          searchCriteria: this.articleNumber
        }
      },
      update: data => data.accessories,
      throttle: 500
    }
  }
}
</script>

<style scoped>

</style>
