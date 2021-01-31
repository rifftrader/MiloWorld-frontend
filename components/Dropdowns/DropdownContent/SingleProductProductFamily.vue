<template>
  <div>
    <div v-if="loading">
      <div class="loader" />
    </div>
    <div v-if="!loading" class="row no-gutters">
      <div class="col">
        <div class="card-body">
          <h5 class="card-title border-top border-bottom">
            Product Family
          </h5>
          <div class="row">
            <div class="col-sm-4 col-md-2 card-text font-weight-bold">
              Product Family Name:
            </div>
            <div class="col-sm-8 col-md-10">
              {{ productFamilyName }}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-2 card-text font-weight-bold">
              Products in Current Family:
            </div>
            <div class="col-sm-8 col-md-10">
              <div v-if="!productFamily">
                <div class="loader" />
              </div>
              <div v-else>
                <div
                  v-for="(product, i) in productFamily"
                  :key="i"
                  class="card-deck justify-content-left"
                >
                  <div
                    v-for="(item, j) in product.products"
                    :key="j"
                    class="item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
                    :class="addActiveProductCSS(item.articleNumber)"
                  >
                    <div>
                      <ItemThumbnail
                        :nuxt-link-u-r-l="'/products/' + item.articleNumber"
                        :short-name="item.shortName"
                        :article-number="item.articleNumber"
                        :cloudinary-base-u-r-l="'/Products/'"
                        :cloudinary-endpoint-u-r-l="item.articleNumber + '_1.jpg'"
                        :alt-text="item.shortName"
                        :is-active-product="isActiveProduct(item.articleNumber)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-body">
          <h5 class="card-title border-top border-bottom">
            Type
          </h5>
          <div v-for="(product, i) in productFamily" :key="i" class="row">
            <div class="col-sm-4 col-md-2 card-text font-weight-bold">
              Type:
            </div>
            <div class="col-sm-8 col-md-10 type">
              {{ product.type.typeName }}
            </div>
            <div class="col-sm-4 col-md-2 card-text font-weight-bold type">
              Description:
            </div>
            <div class="col-sm-8 col-md-10">
              <div v-html="$md.render(product.type.typeDescription)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ItemThumbnail from '~/components/Cards/ItemThumbnail'
import singleProductProductFamily from '~/apollo/queries/singleProductProductFamily.graphql'

export default {
  name: 'SingleProductProductFamily',
  components: {
    ItemThumbnail
  },
  props: {
    productFamilyName: {
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
  methods: {
    addActiveProductCSS (articleNumber) {
      if (articleNumber === this.$route.params.id) {
        return 'is-active-product'
      }
    },
    isActiveProduct (articleNumber) {
      if (articleNumber === this.$route.params.id) {
        return true
      }
    }
  },
  apollo: {
    productFamily: {
      $loadingKey: 'loading',
      query: singleProductProductFamily,
      variables () {
        return {
          searchCriteria: this.productFamilyName
        }
      },
      update: data => data.productFamilies,
      throttle: 500
    }
  }
}
</script>

<style scoped>

.is-active-product {
  z-index: -1;
}

.row {
  margin-bottom: 16px;
}

.card-title {
  margin-bottom: 16px;
  color: #039c81;
  padding: 10px 0;
}

@media only screen and (min-width: 576px) {
  .card-body {
    padding-bottom: 0;
  }
}

.type {
  margin-bottom: 16px;
}

</style>
