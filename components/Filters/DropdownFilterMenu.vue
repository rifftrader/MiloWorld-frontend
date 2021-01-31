<template>
  <div class="filter-section">
    <b-container class="filter-dropdown">
      <b-row>
        <b-col class="filter-dropdown-label text-left">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> {{ dropdownTitle }}
          </h5>
        </b-col>
        <b-col class="filter-dropdown-label" />
        <b-col class=" filter-dropdown-label text-right">
          <transition name="slide-fade">
            <button v-if="showFilters" key="on" class="show-filter-button" @click="showFilters = false">
              <i class="fas fa-minus-circle" />
            </button>
            <button v-else key="off" class="show-filter-button" @click="showFilters = true">
              <i class="fas fa-plus-circle" />
            </button>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    <FilterSelection :show-filters="showFilters" :filter-data="filterData" />
  </div>
</template>

<script>
import FilterSelection from '@/components/Filters/FilterSelection'

export default {
  name: 'DropdownFilterMenu',
  components: {
    FilterSelection
  },
  props: {
    dropdownTitle: {
      type: String,
      required: true,
      default: ''
    },
    filterData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showFilters: false
    }
  }
}
</script>

<style scoped>

.filter-dropdown {
  min-width: 100%;
  /*border-bottom: solid 1px black;*/
}

.filter-dropdown-label {
  padding: 0;
}

.filter-h6 {
  margin: 0;
}

.filter-section {
margin: 16px 0 16px 0;
}
.show-filter-button {
  border:none;
  background-color:transparent;
  outline:none;
}

.fas {
  text-shadow: black;
}

.fa-minus-circle {
  color: red;
}

.fa-plus-circle {
  color: green;
}

/*TEST*/
.fa-chevron-right {
  color: #039c81;
}

.fa-chevron-double-down {
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

</style>
