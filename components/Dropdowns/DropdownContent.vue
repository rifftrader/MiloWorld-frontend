<template>
  <div>
    <transition name="dropdown">
      <b-container v-if="showContent" class="filter-menu">
        <SingleProductTechnicalDetails
          v-if="contentSelector === 'Technical Details'"
          :article-number="articleNumber"
          :short-name="shortName"
          :description="description"
          :net-weight="netWeight"
          :packaging-quantity="packagingQuantity"
          :cloudinary-base-u-r-l="cloudinaryBaseURL"
        />
        <SingleProductProductFamily
          v-if="contentSelector === 'Product Family'"
          :product-family-name="productFamilyName"
        />
        <SingleProductAccessories
          v-if="contentSelector === 'Compatible Accessories'"
          :article-number="articleNumber"
          :cloudinary-base-u-r-l="cloudinaryBaseURL"
        />
        <SingleAccessoryProducts
          v-if="contentSelector === 'Compatible Products'"
          :article-number="articleNumber"
          :cloudinary-base-u-r-l="cloudinaryBaseURL"
        />
      </b-container>
    </transition>
  </div>
</template>

<script>

import SingleAccessoryProducts from '@/components/Dropdowns/DropdownContent/SingleAccessoryProducts'
import SingleProductTechnicalDetails from '~/components/Dropdowns/DropdownContent/SingleProductTechnicalDetails'
import SingleProductProductFamily from '~/components/Dropdowns/DropdownContent/SingleProductProductFamily'
import SingleProductAccessories from '~/components/Dropdowns/DropdownContent/SingleProductAccessories'

export default {
  name: 'DropdownContent',
  components: {
    SingleProductTechnicalDetails,
    SingleProductProductFamily,
    SingleProductAccessories,
    SingleAccessoryProducts
  },
  props: {
    showContent: {
      type: Boolean,
      required: true,
      default: true
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
  min-width: 100% !important;
  padding-left: 0;
  padding-right: 0;
}

@media only screen and (min-width: 576px) {
  .filter-menu {
    padding-right: 0;
  }
}
</style>
