<template>
  <div>
    <div>
      <b-navbar
        class="navbar"
        toggleable="sm"
        type="dark"
        variant="light"
      >
        <b-navbar-brand>
          <small>
            <nuxt-link :to="'/'">
              Home
            </nuxt-link>
            <nuxt-link :to="subRouteUrl">
              {{ subRouteTitle }}
            </nuxt-link>
            <span>{{ currentRoute }}</span>
          </small>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationHeader',
  props: {
    subRouteUrl: {
      type: String,
      required: true,
      default: ''
    },
    subRouteTitle: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    currentRoute () {
      if (this.$route.params.id) {
        return `/ ${this.$route.params.id.charAt(0).toUpperCase() + this.$route.params.id.slice(1)}`
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

small {
  padding-left: 10px;
  color: #333b3f;
}

a, span{
  color: #039c81;
  text-decoration: none;
}

a :hover {
  text-decoration: none;
}

.navbar {
  padding: 0 8px 0 8px;
}

</style>
