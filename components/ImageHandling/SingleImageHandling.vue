<template>
  <div class="content-positioning">
    <div class="text-center reflow-prevention">
      <client-only>
        <cld-image
          :public-id="resourceLocator"
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
  </div>
</template>

<script>
export default {
  name: 'SingleImageHandling',
  props: {
    resourceLocator: {
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
  padding-bottom: 45%;
}

</style>
