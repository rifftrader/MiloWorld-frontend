<template>
  <div class="filter-section">
    <b-container class="filter-dropdown">
      <b-row>
        <b-col class="filter-dropdown-label text-left">
          <h5 class="filter-h5">
            <i class="fas fa-chevron-right" /><i class="fas fa-chevron-right" /> {{ dropdownTitle }}
          </h5>
        </b-col>
        <b-col class=" filter-dropdown-label text-right my-auto">
          <transition name="slide-fade">
            <button v-if="showContent" key="on" class="show-filter-button" @click="showContent = false">
              <i class="fas fa-minus-circle" />
            </button>
            <button v-else key="off" class="show-filter-button" @click="showContent = true">
              <i class="fas fa-plus-circle" />
            </button>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    <DropdownContent
      :show-content="showContent"
      :content-selector="contentSelector"
      :article-number="articleNumber"
      :short-name="shortName"
      :description="description"
      :net-weight="netWeight"
      :packaging-quantity="packagingQuantity"
      :cloudinary-base-u-r-l="cloudinaryBaseURL"
      :product-family-name="productFamilyName"
    />
  </div>
</template>

<script>

import DropdownContent from '@/components/Dropdowns/DropdownContent'
export default {
  name: 'DropdownMenu',
  components: {
    DropdownContent
  },
  props: {
    dropdownTitle: {
      type: String,
      required: true,
      default: ''
    },
    contentSelector: {
      type: String,
      required: true,
      default: ''
    },
    articleNumber: {
      type: String,
      required: false,
      default: ''
    },
    shortName: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    netWeight: {
      type: String,
      required: false,
      default: ''
    },
    packagingQuantity: {
      type: Number,
      required: false,
      default: 0
    },
    cloudinaryBaseURL: {
      type: String,
      required: false,
      default: ''
    },
    productFamilyName: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      showContent: true
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

.row {
  padding: 10px;
}
.show-filter-button {
  border:none;
  background-color:transparent;
  outline:none;
}

.filter-dropdown {
  min-width: 100%;
  background-color: #f1f1f1;
}

.filter-dropdown-label {
  padding: 0;
}

.filter-h5 {
  margin: 0;
}

.filter-section {
  margin: 16px 0 16px 0;
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

.fa-chevron-right {
  color: #039c81;
}
</style>
