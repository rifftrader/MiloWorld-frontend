<template>
  <div class="border">
    <b-row class="filter-category-title">
      <b-col class="text-left filter-category-col">
        <h6>{{ filterName }}</h6>
      </b-col>

      <transition name="slide-fade">
        <b-col class="text-right filter-category-col">
          <button v-if="showFilters" key="on" class="show-filter-button" @click="showFilters = false">
            <i class="fas fa-chevron-up" />
          </button>
          <button v-else key="off" class="show-filter-button" @click="showFilters = true">
            <i class="fas fa-chevron-down" />
          </button>
        </b-col>
      </transition>
    </b-row>

    <div v-if="showFilters" class="dropdown-container">
      <div v-if="filterName === 'Category'">
        <div v-for="category in filterData" :key="category.categoryName">
          <div class="row container-checkbox" :class="(category.count === 0) ? 'deselect-class' : null">
            <div class="col-2 checkbox-col">
              <input
                :id="category.categoryName"
                v-model="selectCategory"
                type="checkbox"
                :value="category.categoryName"
                :disabled="category.count === 0"
              >
            </div>
            <div class="col-8 text-left description-col">
              <label :for="category.categoryName" class="ipad-formatting">{{ category.categoryName }}</label>
            </div>
            <div class="col-2 count-col">
              <b-badge v-if="category.count > 0" pill variant="dark">
                {{ category.count }}
              </b-badge>
              <b-badge v-if="category.count === 0" pill variant="danger">
                {{ category.count }}
              </b-badge>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showFilters" class="dropdown-container">
      <div v-if="filterName === 'Type'">
        <div v-for="type in filterData" :key="type.typeName">
          <div class="row selection-row container-checkbox" :class="(type.count === 0) ? 'deselect-class' : null">
            <div class="col-2 checkbox-col">
              <input
                :id="type.typeName"
                v-model="selectType"
                type="checkbox"
                :value="type.typeName"
                :disabled="type.count === 0"
              >
            </div>
            <div class="col-8 text-left description-col">
              <label :for="type.typeName" class="ipad-formatting">{{ type.typeName }}</label>
            </div>
            <div class="col-2 count-col">
              <b-badge v-if="type.count > 0" pill variant="dark">
                {{ type.count }}
              </b-badge>
              <b-badge v-if="type.count === 0" pill variant="danger">
                {{ type.count }}
              </b-badge>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showFilters" class="dropdown-container">
      <div v-if="filterName === 'Product Family'">
        <div v-for="productFamily in filterData" :key="productFamily.productFamilyName">
          <div
            class="row selection-row container-checkbox"
            :class="(productFamily.count === 0) ? 'deselect-class' : null"
          >
            <div class="col-2 checkbox-col">
              <input
                :id="productFamily.productFamilyName"
                v-model="selectProductFamily"
                type="checkbox"
                :value="productFamily.productFamilyName"
                :disabled="productFamily.count === 0"
              >
            </div>
            <div class="col-8 text-left description-col">
              <label :for="productFamily.productFamilyName" class="ipad-formatting">{{ productFamily.productFamilyName }}</label>
            </div>
            <div class="col-2 count-col">
              <b-badge v-if="productFamily.count > 0" pill variant="dark">
                {{ productFamily.count }}
              </b-badge>
              <b-badge v-if="productFamily.count === 0" pill variant="danger">
                {{ productFamily.count }}
              </b-badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndividualFilterForm',
  props: {
    filterName: {
      type: String,
      required: true,
      default: ''
    },
    filterData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showFilters: false
    }
  },
  computed: {
    selectCategory: {
      get () {
        return this.$store.getters.selectCategory
      },
      set (value) {
        if (value.includes('')) {
          if (value.length > 1) {
            const index = value.indexOf('')
            value.splice(index, 1)
          }
        } else if (value.length === 0 || undefined) {
          value.push('')
        }
        this.$store.commit('selectCategory', value)
      }
    },
    selectType: {
      get () {
        return this.$store.getters.selectType
      },
      set (value) {
        if (value.includes('')) {
          if (value.length > 1) {
            const index = value.indexOf('')
            value.splice(index, 1)
          }
        } else if (value.length === 0 || undefined) {
          value.push('')
        }
        this.$store.commit('selectType', value)
      }
    },
    selectProductFamily: {
      get () {
        return this.$store.getters.selectProductFamily
      },
      set (value) {
        if (value.includes('')) {
          if (value.length > 1) {
            const index = value.indexOf('')
            value.splice(index, 1)
          }
        } else if (value.length === 0 || undefined) {
          value.push('')
        }
        this.$store.commit('selectProductFamily', value)
      }
    }
  }
}
</script>

<style scoped>

.deselect-class {
  color: red;
}

input[type=checkbox] {
  transform: scale(1.25);
}

h6 {
  padding: 10px 0 0 10px;
}

.border {
  margin: 16px 0;
  border-radius: 5px;
}

.checkbox-col {
  padding-left: 20px;
  padding-right: 10px;
}

.description-col {
  padding-left: 0;
  /*margin-top: 8px;*/
}

.count-col {
  padding-left: 10px;
  padding-right: 20px;
}

.container-checkbox {
  padding: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dropdown-container {
  max-height: 156px;
  overflow-x: hidden;
  overflow-y: scroll;
}

@media only screen and (max-width: 1126px) {
  .dropdown-container {
    max-height: 180px;
  }

}

.ipad-formatting {
  margin-left: 10px;
}

.filter-category-title {
  background-color: #f1f1f1;
  margin: 0;
}

.filter-category-col {
  padding: 0;
}

.parameter-selection {
  margin: 2px 0;
  padding-left: 10px;
}

.parameter-selection:hover {
  cursor: pointer;
  background-color: #039c81;
  color: white;
}

.fas {
  text-shadow: black;
}

.show-filter-button {
  border: none;
  background-color: transparent;
  outline: none;
  padding: 8px 10px 10px 10px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

</style>
