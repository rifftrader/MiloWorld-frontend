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
              The following accessories are compatible with this product:
            </div>
            <div class="col-sm-8 col-md-10">
              <!--              TEST-->
              <div v-if="!accessories">
                <div class="loader" />
              </div>
              <div v-else>
                <div
                  v-for="(accessory, i) in accessories"
                  :key="i"
                  class="card-deck justify-content-left"
                >
                  <div
                    v-for="(item, j) in accessory.accessories"
                    :key="j"
                    class="item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
                  >
                    <div>
                      <ItemThumbnail
                        :nuxt-link-u-r-l="'/accessories/' + item.articleNumber"
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
import compatibleAccessories from '~/apollo/queries/accessoryOfSingleProduct.graphql'

export default {
  name: 'SingleProductAccessories',
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
    accessories: {
      $loadingKey: 'loading',
      query: compatibleAccessories,
      variables () {
        return {
          searchCriteria: this.articleNumber
        }
      },
      update: data => data.products,
      throttle: 500
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 576px) {
  .card-body {
    padding-bottom: 0;
  }
}
</style>
