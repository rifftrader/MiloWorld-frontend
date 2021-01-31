<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-4 col-lg-2 my-auto">
        <SingleItemImageHandling
          :cloudinary-base-u-r-l="cloudinaryBaseURL"
          :cloudinary-endpoint-u-r-l="articleNumber + '_1.jpg'"
          :alt-text="articleNumber"
        />
      </div>
      <div class="col-md-8 col-lg-10">
        <div class="card-body">
          <h5 class="card-title border-top border-bottom">
            Product Details
          </h5>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Article Number:
            </div>
            <div class="col-sm-8">
              {{ articleNumber }}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Short Name:
            </div>
            <div class="col-sm-8">
              {{ shortName }}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Product Description:
            </div>
            <div class="col-sm-8">
              {{ description }}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Product Lifecycle:
            </div>
            <div class="col-sm-8">
              PM300: active product
            </div>
          </div>

          <h5 class="card-title border-top border-bottom">
            Delivery Details
          </h5>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Net Weight (no packaging):
            </div>
            <div class="col-sm-8">
              {{ netWeight }} kg
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 card-text font-weight-bold">
              Package Quantity:
            </div>
            <div class="col-sm-8">
              {{ packagingQuantity }} each
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SingleItemImageHandling from '~/components/ImageHandling/SingleItemImageHandling'

export default {
  name: 'SingleProductTechnicalDetails',
  components: {
    SingleItemImageHandling
  },
  props: {
    articleNumber: {
      type: String,
      required: true,
      default: ''
    },
    shortName: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    netWeight: {
      type: String,
      required: true,
      default: ''
    },
    packagingQuantity: {
      type: Number,
      required: true,
      default: 0
    },
    cloudinaryBaseURL: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style scoped>

.row {
  margin-bottom: 16px;
}

.card-title {
  margin-bottom: 16px;
  color: #039c81;
  padding: 10px 0;
}

@media only screen and (min-width: 576px) {
  .card-body {
    padding-bottom: 0;
  }
}

</style>
