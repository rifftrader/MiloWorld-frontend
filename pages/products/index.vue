<template>
  <div>
    <NavigationHeader
      :sub-route-title="'/ Products'"
      :sub-route-url="'/products'"
    />
    <div class="page-content">
      <div v-if="loading" class="center-loader">
        <div class="loader" />
      </div>
      <div v-if="!loading">
        <b-row>
          <h1 class="page-header">
            Products
          </h1>
        </b-row>

        <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Introduction
          </h5>
        </b-row>
        <b-row class="page-description text-left">
          <ul class="text-left">
            <li>All parts are OEM certified refurbished.</li>
            <li>1 year limited warranty on all parts.</li>
            <li>Contact us for pricing information.</li>
            <li>Can't find what you're looking for? Contact us and we'll find it for you.</li>
            <li>Use the filters in the dropdown menu to narrow down your search.</li>
          </ul>
        </b-row>
        <div v-if="apolloError" class="center-loader">
          <h3 v-if="apolloError = 'Network error: Failed to fetch'">
            Apologies - there has been a server or database problem and we cannot retrieve any data.
          </h3>
        </div>
        <div v-if="!getProducts && !apolloError" class="center-loader">
          <div class="loader" />
        </div>
        <div v-if="getProducts">
          <DropdownFilterMenu
            v-if="getProducts"
            :dropdown-title="'Filter Products'"
            :filter-data="getProducts"
          />
          <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
            <h5 class="filter-h5">
              <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Available Products
            </h5>
          </b-row>

          <div class="row">
            <div class="col-sm">
              <p v-if="getProducts" class="font-weight-bold">
                {{ getProducts.totalProductsFound }}
              </p>
            </div>
          </div>

          <div v-if="getProducts" class="card-deck justify-content-center">
            <div
              v-for="(product, j) in getProducts.products"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationHeader from '@/components/Navigation/NavigationHeader'
import ItemThumbnail from '@/components/Cards/ItemThumbnail'
import DropdownFilterMenu from '@/components/Filters/DropdownFilterMenu'
import mainProductFilter from '@/apollo/queries/mainProductFilter'

export default {
  name: 'Index',
  components: {
    NavigationHeader,
    ItemThumbnail,
    DropdownFilterMenu
  },
  data () {
    return {
      loading: 0,
      apolloError: null
    }
  },
  computed: {
    selectCategory () {
      return this.$store.getters.selectCategory
    },
    selectType () {
      return this.$store.getters.selectType
    },
    selectProductFamily () {
      return this.$store.getters.selectProductFamily
    }
  },
  apollo: {
    getProducts: {
      $loadingKey: 'loading',
      query: mainProductFilter,
      variables () {
        return {
          arrays: {
            searchCategory: [],
            searchTypeName: [],
            searchProductFamilyName: []
          },
          searchCategory: this.selectCategory,
          searchTypeName: this.selectType,
          searchProductFamilyName: this.selectProductFamily
        }
      },
      update: (data) => {
        const categoryField = []
        const typeField = []
        const productFamilyField = []
        const products = []
        let totalProductsFound = null

        // EXTRACT FIELD NAMES AND INSERT COUNT- THESE WILL NOT CHANGE
        data.getFields.map((category) => {
          categoryField.push({ categoryName: category.categoryName, count: 0 })
          category.types.map((type) => {
            typeField.push({ typeName: type.typeName, count: 0 })
            type.product_families.map((productFamily) => {
              productFamilyField.push({ productFamilyName: productFamily.productFamilyName, count: 0 })
            })
          })
        })

        // MAP PRODUCTS TO FLATTENED OBJECT AS A PRECURSOR TO ENABLE FILTERING
        data.getProducts.map((product) => {
          products.push({
            articleNumber: product.articleNumber,
            shortName: product.shortName,
            categoryName: product.category.categoryName,
            typeName: product.type.typeName,
            productFamilyName: product.product_families[0].productFamilyName
          })
        })

        // CATEGORY TOTALISER
        for (let i = 0; i < products.length; ++i) {
          for (let j = 0; j < categoryField.length; ++j) {
            if (products[i].categoryName === categoryField[j].categoryName) {
              categoryField[j].count++
            }
          }
        }

        // TYPE TOTALISER
        for (let i = 0; i < products.length; ++i) {
          for (let j = 0; j < typeField.length; ++j) {
            if (products[i].typeName === typeField[j].typeName) {
              typeField[j].count++
            }
          }
        }

        // PRODUCT FAMILY TOTALISER
        for (let i = 0; i < products.length; ++i) {
          for (let j = 0; j < productFamilyField.length; ++j) {
            if (products[i].productFamilyName === productFamilyField[j].productFamilyName) {
              productFamilyField[j].count++
            }
          }
        }

        // OUTPUT TOTAL RESULTS FOUND
        if (products.length > 1) {
          totalProductsFound = `${products.length} products displayed`
        } else if (products.length === 1) {
          totalProductsFound = '1 product displayed'
        } else {
          totalProductsFound = 'No products match your filter criteria'
        }
        return {
          categoryField,
          typeField,
          productFamilyField,
          products,
          totalProductsFound
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

.center-loader {
  color: red;
}

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

.filter-section {
  margin: 16px 0 16px 0;
}

.filter-section {
  margin: 16px 0 16px 0;
}

</style>
