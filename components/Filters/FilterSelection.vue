<template>
  <div>
    <transition name="dropdown">
      <b-container v-if="showFilters" class="filter-menu">
        <b-row class="text-left border-bottom border-top applied-filters">
          <h5>
            Available Filters
          </h5>
        </b-row>
        <b-row>
          <b-col sm="4" md="4" lg="4" class="text-center">
            <IndividualFilterForm :filter-name="'Category'" :filter-data="filterData.categoryField" />
          </b-col>
          <b-col sm="4" md="4" lg="4" class="text-center">
            <IndividualFilterForm :filter-name="'Type'" :filter-data="filterData.typeField" />
          </b-col>
          <b-col sm="4" md="4" lg="4" class="text-center">
            <IndividualFilterForm :filter-name="'Product Family'" :filter-data="filterData.productFamilyField" />
          </b-col>
        </b-row>

        <transition name="slide-fade">
          <b-row
            v-if="!(selectCategory[0] === '') || !(selectType[0] === '') || !(selectProductFamily[0] === '')"
            class="text-left border-bottom border-top applied-filters"
          >
            <h5>
              Active Filters
            </h5>
          </b-row>
        </transition>
        <b-row>
          <b-col sm="4" md="4" lg="4" class="text-center active-filter-position">
            <div v-for="(category, index) in selectCategory" :key="index">
              <transition name="slide-fade">
                <SelectedFilter v-if="category" :applied-filter="category" @click.native="deleteCategoryFilter(category)" />
              </transition>
            </div>
          </b-col>
          <b-col sm="4" md="4" lg="4" class="text-center active-filter-position">
            <div v-for="(type, index) in selectType" :key="index">
              <transition name="slide-fade">
                <SelectedFilter v-if="type" :applied-filter="type" @click.native="deleteTypeFilter(type)" />
              </transition>
            </div>
          </b-col>
          <b-col sm="4" md="4" lg="4" class="text-center active-filter-position">
            <div v-for="(productFamily, index) in selectProductFamily" :key="index">
              <transition name="slide-fade">
                <SelectedFilter v-if="productFamily" :applied-filter="productFamily" @click.native="deleteProductFamilyFilter(productFamily)" />
              </transition>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col
            class="btn-div text-right"
          >
            <button class="btn btn-danger btn-reset" @click="clearAllFilters">
              Clear All Filters <i class="fas fa-trash-alt" />
            </button>
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </div>
</template>

<script>
import IndividualFilterForm from '@/components/Filters/IndividualFilterForm'
import SelectedFilter from '@/components/Filters/SelectedFilter'

export default {
  name: 'FilterSelection',
  components: {
    IndividualFilterForm,
    SelectedFilter
  },
  props: {
    showFilters: {
      type: Boolean,
      required: true,
      default: false
    },
    filterData: {
      type: Object,
      required: true
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
  methods: {
    clearAllFilters () {
      this.$store.dispatch('clearFilterCriteria')
    },
    deleteCategoryFilter (payload) {
      this.$store.dispatch('deleteCategoryFilter', payload)
    },
    deleteTypeFilter (payload) {
      this.$store.dispatch('deleteTypeFilter', payload)
    },
    deleteProductFamilyFilter (payload) {
      this.$store.dispatch('deleteProductFamilyFilter', payload)
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.filter-menu {
  /*border-bottom: solid 1px black;*/
  min-width: 100% !important;
}

.btn-div {
  padding: 15px 0 0 0;
}

.btn-reset {
  margin-bottom: 15px;
  margin-right: 16px;
}

.applied-filters {
  margin: 16px 0 10px 0;
  color: #039c81;
}

h5 {
  margin-top: 6px;
}

</style>
