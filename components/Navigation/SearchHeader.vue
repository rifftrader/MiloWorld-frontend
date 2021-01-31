<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="success">
      <nuxt-link
        tag="img"
        :src="require('../../static/logo/logo_dark_background_cropped.png')"
        to="/"
        height="31.89"
        width="81.10"
        class="hvr-grow"
        alt="Milo Logo"
      />
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form onsubmit.prevent>
            <b-form-input
              id="search-bar"
              ref="search"
              v-model="searchTerms"
              size="sm"
              placeholder="Search by article number or description..."
              @keydown.enter.prevent="startSearch(searchTerms)"
            />
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'SearchHeader',
  data () {
    return {
      searchTerms: null
    }
  },
  methods: {
    startSearch (payload) {
      let searchTerms = []
      function isEmptyOrSpaces (str) {
        return str === null || str.match(/^[\s\n\r]*$/) !== null
      }

      if (!isEmptyOrSpaces(payload)) {
        searchTerms = this.searchTerms.split(/[^a-zA-Z0-9-]/g)
        searchTerms = searchTerms.filter(function (str) {
          return /\S/.test(str)
        })
        if (searchTerms.length === 0) {
          return null
        } else {
          this.$store.commit('searchTerms', searchTerms)
          this.searchTerms = ''
          this.$router.push('/search')
        }
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

.navbar-light >>> .navbar-toggler-icon {
  background-image: url("../../static/search-icon.png") !important;
}

.form-inline {
  display: block;
}

@media (min-width: 576px) {
  .form-inline .form-control {
    display: block;
    width: 100%;
  }
}

@media (max-width: 990px) {
  input {
    margin-top: 10px !important;
  }
}

@media (min-width: 990px) {
  input {
    min-width: 600px;
  }
}

</style>
