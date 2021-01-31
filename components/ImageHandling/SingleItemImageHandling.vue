<template>
  <div class="text-center reflow-prevention">
    <client-only>
      <cld-image
        :public-id="'/Milo' + cloudinaryBaseURL + cloudinaryEndpointURL"
        responsive="width"
        fetch-format="auto"
        quality="auto"
        loading="lazy"
        :alt="altText"
      >
        <cld-placeholder type="pixelate" />
      </cld-image>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'SingleItemImageHandling',
  props: {
    cloudinaryBaseURL: {
      type: String,
      required: true,
      default: ''
    },
    cloudinaryEndpointURL: {
      type: String,
      required: true,
      default: ''
    },
    altText: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style scoped>
.reflow-prevention {
  padding-bottom: 100%;
}
</style>
