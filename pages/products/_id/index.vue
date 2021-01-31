<template>
  <div>
    <NavigationHeader
      :sub-route-title="'/ Products'"
      :sub-route-url="'/products'"
    />
    <div class="page-content">
      <div v-if="loading">
        <div class="loader" />
      </div>
      <div v-if="!loading">
        <div v-for="(item, i) in singleProduct" :key="i">
          <h1 class="page-header">
            {{ item.shortName }}
          </h1>

          <DropdownMenu
            :dropdown-title="'Technical Details'"
            :content-selector="'Technical Details'"
            :article-number="item.articleNumber"
            :short-name="item.shortName"
            :description="item.description"
            :net-weight="item.netWeight"
            :packaging-quantity="item.packagingQuantity"
            :cloudinary-base-u-r-l="'/Products/'"
          />

          <div v-for="(productFamily, j) in item.product_families" :key="j">
            <DropdownMenu
              :dropdown-title="'Product Family and Type Information'"
              :content-selector="'Product Family'"
              :product-family-name="productFamily.productFamilyName"
            />
          </div>
          <DropdownMenu
            :dropdown-title="'Compatible Accessories'"
            :content-selector="'Compatible Accessories'"
            :cloudinary-base-u-r-l="'/Accessories/'"
            :article-number="item.articleNumber"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationHeader from '@/components/Navigation/NavigationHeader'
import singleProduct from '@/apollo/queries/singleProduct.graphql'
import DropdownMenu from '@/components/Dropdowns/DropdownMenu'

export default {
  name: 'Index',
  components: {
    NavigationHeader,
    DropdownMenu
  },
  data () {
    return {
      loading: 0
    }
  },
  apollo: {
    singleProduct: {
      $loadingKey: 'loading',
      query: singleProduct,
      variables () {
        return {
          searchCriteria: this.$route.params.id
        }
      },
      update: data => data.products,
      throttle: 500
    }
  }

}
</script>

<style scoped>

</style>
