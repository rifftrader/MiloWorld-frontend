<template>
  <div>
    <NavigationHeader
      :sub-route-title="'/ Accessories'"
      :sub-route-url="'/accessories'"
    />
    <div class="page-content">
      <div v-if="loading">
        <div class="loader" />
      </div>
      <div v-if="!loading">
        <div v-for="(item, i) in singleAccessory" :key="i">
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
            :cloudinary-base-u-r-l="'/Accessories/'"
          />

          <DropdownMenu
            :dropdown-title="'Compatible Products'"
            :content-selector="'Compatible Products'"
            :cloudinary-base-u-r-l="'/Products/'"
            :article-number="item.articleNumber"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationHeader from '@/components/Navigation/NavigationHeader'
import singleAccessory from '@/apollo/queries/singleAccessory.graphql'
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
    singleAccessory: {
      $loadingKey: 'loading',
      query: singleAccessory,
      variables () {
        return {
          searchCriteria: this.$route.params.id
        }
      },
      update: data => data.accessories,
      throttle: 500
    }
  }

}
</script>

<style scoped>

</style>
