<template>
  <div>
    <NavigationHeader
      :sub-route-title="'/ Search Results'"
      :sub-route-url="'/search'"
    />
    <div class="page-content">
      <div v-if="loading" class="center-loader">
        <div class="loader" />
      </div>
      <div v-if="!loading">
        <b-row>
          <h1 class="page-header">
            Search Results
          </h1>
        </b-row>

        <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Your Search Terms
          </h5>
        </b-row>
        <div v-if="searchTerms.length > 0 " class="page-description text-left">
          <div class="row">
            <div v-if="searchTerms.length > 1" class="col card-text font-weight-bold">
              You searched for the following terms:
            </div>
            <div v-else class="col font-weight-bold">
              You searched for the following term:
            </div>
          </div>

          <div v-for="term in searchTerms" :key="term" class="row justify-content-center">
            <div class="col-sm-6 col-md-6">
              <p class="border result text-center">
                {{ term }}
              </p>
            </div>
          </div>
        </div>

        <div v-else class="page-description text-left">
          <div class="row">
            <div class="col">
              Currently all products and accessories are being displayed. Please use the search bar to narrow down the results.
            </div>
          </div>
        </div>
        <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Your Search Results
          </h5>
        </b-row>

        <div v-if="apolloError" class="center-loader">
          <h3 v-if="apolloError = 'Network error: Failed to fetch'">
            Apologies - there has been a server or database problem and we cannot retrieve any data.
          </h3>
        </div>

        <div v-if="loading" class="center-loader">
          <div class="loader" />
        </div>

        <div v-if="!searchResults && !apolloError" class="center-loader">
          <div class="loader" />
        </div>
        <div>
          <h5 class="card-title border-top border-bottom">
            Products
          </h5>
        </div>

        <div class="row">
          <div class="col-sm">
            <p v-if="searchResults" class="font-weight-bold">
              {{ searchResults.filteredProductsLength }}
            </p>
          </div>
        </div>
        <div v-if="searchResults" class="card-deck justify-content-center">
          <div
            v-for="(product, j) in searchResults.filteredProducts"
            :key="j"
            class="item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
          >
            <div>
              <ItemThumbnail
                :nuxt-link-u-r-l="'/products/' + product.articleNumber"
                :short-name="product.shortName"
                :article-number="product.articleNumber"
                :cloudinary-base-u-r-l="'/Products/'"
                :cloudinary-endpoint-u-r-l="product.articleNumber + '_1.jpg'"
                :alt-text="product.shortName"
              />
            </div>
          </div>
        </div>

        <div>
          <h5 class="card-title border-top border-bottom">
            Accessories
          </h5>
        </div>

        <div class="col-sm">
          <p v-if="searchResults" class="font-weight-bold">
            {{ searchResults.filteredAccessoriesLength }}
          </p>
        </div>
        <div v-if="searchResults" class="card-deck justify-content-center">
          <div
            v-for="(item, j) in searchResults.filteredAccessories"
            :key="j"
            class="item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
          >
            <div>
              <ItemThumbnail
                :nuxt-link-u-r-l="'/accessories/' + item.articleNumber"
                :short-name="item.shortName"
                :article-number="item.articleNumber"
                :cloudinary-base-u-r-l="'/Accessories/'"
                :cloudinary-endpoint-u-r-l="item.articleNumber + '_1.jpg'"
                :alt-text="item.shortName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import searchAllProductsAndAccessories from '@/apollo/queries/searchAllProductsAndAccessories.graphql'

export default {
  name: 'Index',
  data () {
    return {
      loading: 0,
      apolloError: null
    }
  },
  computed: {
    searchTerms () {
      return this.$store.getters.searchTerms
    }
  },
  apollo: {
    searchResults: {
      $loadingKey: 'loading',
      query: searchAllProductsAndAccessories,
      variables () {
        return {
          searchTerms: this.searchTerms
        }
      },
      update: (data) => {
        let getALlProducts = []
        let getAllAccessories = []
        let filteredProducts = []
        let filteredAccessories = []
        let filteredProductsLength = null
        let filteredAccessoriesLength = null

        getALlProducts = [...data.getProductsByArticleNumber, ...data.getProductsByDescription]
        getAllAccessories = [...data.getAccessoriesByArticleNumber, ...data.getAccessoriesByDescription]

        const removeDuplicates = (duplicates) => {
          const flag = {}
          const unique = []
          duplicates.forEach((elem) => {
            if (!flag[elem.articleNumber]) {
              flag[elem.articleNumber] = true
              unique.push(elem)
            }
          })
          return unique
        }

        filteredProducts = removeDuplicates(getALlProducts)

        if (filteredProducts.length > 1) {
          filteredProductsLength = `We have found ${filteredProducts.length} products that match your search criteria.`
        } else if (filteredProducts.length === 1) {
          filteredProductsLength = '1 product matches your search criteria.'
        } else {
          filteredProductsLength = 'No products match your search criteria.'
        }

        filteredAccessories = removeDuplicates(getAllAccessories)

        if (filteredAccessories.length > 1) {
          filteredAccessoriesLength = `We have found ${filteredAccessories.length} accessories that match your search criteria.`
        } else if (filteredAccessories.length === 1) {
          filteredAccessoriesLength = '1 accessory matches your search criteria.'
        } else {
          filteredAccessoriesLength = 'No accessories match your search criteria.'
        }

        return {
          filteredProducts,
          filteredProductsLength,
          filteredAccessories,
          filteredAccessoriesLength
        }
      },
      error (error) {
        this.apolloError = error.message
      }
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 1000px) {
  .page-content {
    padding: 1rem;
  }
}

.fa-chevron-right {
  color: #039c81;
}

.filter-h5 {
  margin: 0;
}

.filter-dropdown {
  min-width: 100%;
  background-color: #f1f1f1;
}

.row {
  padding: 10px;
}

.page-description {
  margin: 0;
}

.filter-section {
  margin: 16px 0 16px 0;
}

.filter-section {
  margin: 16px 0 16px 0;
}

.result {
  background-color: #039c81;
  color: white;
  padding: 10px;
}

.card-title {
  margin-bottom: 16px;
  color: #039c81;
  padding: 10px 0;
}
</style>
