<template>
  <div>
    <NavigationHeader
      :sub-route-title="'/ Accessories'"
      :sub-route-url="'/accessories'"
    />
    <div class="page-content">
      <div v-if="loading" class="center-loader">
        <div class="loader" />
      </div>
      <div v-if="!loading">
        <b-row>
          <h1 class="page-header">
            Accessories
          </h1>
        </b-row>
        <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Introduction
          </h5>
        </b-row>
        <b-row class="page-description text-left">
          <ul class="text-left">
            <li>Brand new OEM accessories.</li>
            <li>Original warranty on all items.</li>
            <li>Contact us for pricing information.</li>
            <li>Can't find what you're looking for? Contact us and we'll find it for you.</li>
            <li>Click on each accessory in order to see what products it is compatible with.</li>
          </ul>
        </b-row>
        <b-row class="filter-dropdown-label text-left filter-dropdown filter-section">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> Available Accessories
          </h5>
        </b-row>
        <div v-if="apolloError" class="center-loader">
          <h3 v-if="apolloError = 'Network error: Failed to fetch'">
            Apologies - there has been a problem with the backend and we cannot retrieve any data.
          </h3>
        </div>
        <div v-if="!accessories && !apolloError" class="center-loader">
          <div class="loader" />
        </div>
        <div v-if="accessories">
          <p class="font-weight-bold">
            {{ accessories.totalAccessoriesFound }}
          </p>
          <div class="card-deck justify-content-center">
            <div
              v-for="(item, j) in accessories.accessories"
              :key="j"
              class=" item-thumbnail border col-xl-2 col-lg-2 col-md-3 col-sm-4"
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
  </div>
</template>

<script>
import NavigationHeader from '@/components/Navigation/NavigationHeader'
import ItemThumbnail from '@/components/Cards/ItemThumbnail'
import accessories from '@/apollo/queries/accessories.graphql'

export default {
  name: 'Index',
  components: {
    NavigationHeader,
    ItemThumbnail
  },
  data () {
    return {
      loading: 0,
      apolloError: null
    }
  },
  apollo: {
    accessories: {
      $loadingKey: 'loading',
      query: accessories,
      update: (data) => {
        const accessories = []
        let totalAccessoriesFound = null

        data.accessories.map((accessory) => {
          accessories.push({ articleNumber: accessory.articleNumber, shortName: accessory.shortName })
        })

        if (accessories.length > 1) {
          totalAccessoriesFound = `${accessories.length} accessories displayed`
        } else if (accessories.length === 1) {
          totalAccessoriesFound = '1 accessory displayed'
        } else {
          totalAccessoriesFound = 'No accessories match your filter criteria'
        }

        return {
          accessories,
          totalAccessoriesFound
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

/*.page-content {*/
/*  padding: 2rem;*/
/*}*/

@media only screen and (max-width: 1000px) {
  .page-content {
    /*padding: 1rem;*/
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
