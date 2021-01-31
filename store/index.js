export const state = () => ({
  // counter: 0,
  // selectedId: ''
  selectCategory: [''],
  selectType: [''],
  selectProductFamily: [''],
  searchTerms: []

})

export const getters = {
  selectCategory (state) {
    return state.selectCategory
  },
  selectType (state) {
    return state.selectType
  },
  selectProductFamily (state) {
    return state.selectProductFamily
  },
  searchTerms (state) {
    return state.searchTerms
  }

}

export const mutations = {
  selectCategory (state, payload) {
    state.selectCategory = payload
  },
  selectType (state, payload) {
    state.selectType = payload
  },
  selectProductFamily (state, payload) {
    state.selectProductFamily = payload
  },
  clearFilterCriteria (state) {
    state.selectCategory = ['']
    state.selectType = ['']
    state.selectProductFamily = ['']
  },
  deleteCategoryFilter (state, payload) {
    const index = state.selectCategory.indexOf(payload)
    state.selectCategory.splice(index, 1)
    if (state.selectCategory.includes('')) {
      if (state.selectCategory.length > 1) {
        const index = state.selectCategory.indexOf('')
        state.selectCategory.splice(index, 1)
      }
    } else if (state.selectCategory.length === 0 || undefined) {
      state.selectCategory.push('')
    }
  },
  deleteTypeFilter (state, payload) {
    const index = state.selectType.indexOf(payload)
    state.selectType.splice(index, 1)
    if (state.selectType.includes('')) {
      if (state.selectType.length > 1) {
        const index = state.selectType.indexOf('')
        state.selectType.splice(index, 1)
      }
    } else if (state.selectType.length === 0 || undefined) {
      state.selectType.push('')
    }
  },
  deleteProductFamilyFilter (state, payload) {
    const index = state.selectProductFamily.indexOf(payload)
    state.selectProductFamily.splice(index, 1)
    if (state.selectProductFamily.includes('')) {
      if (state.selectProductFamily.length > 1) {
        const index = state.selectProductFamily.indexOf('')
        state.selectProductFamily.splice(index, 1)
      }
    } else if (state.selectProductFamily.length === 0 || undefined) {
      state.selectProductFamily.push('')
    }
  },
  searchTerms (state, payload) {
    state.searchTerms = payload
  }
}

export const actions = {
  selectCategory ({ commit }, payload) {
    commit('selectCategory', payload)
  },
  selectType ({ commit }, payload) {
    commit('selectType', payload)
  },
  selectProductFamily ({ commit }, payload) {
    commit('selectProductFamily', payload)
  },
  clearFilterCriteria ({ commit }) {
    commit('clearFilterCriteria')
  },
  deleteCategoryFilter ({ commit }, payload) {
    commit('deleteCategoryFilter', payload)
  },
  deleteTypeFilter ({ commit }, payload) {
    commit('deleteTypeFilter', payload)
  },
  deleteProductFamilyFilter ({ commit }, payload) {
    commit('deleteProductFamilyFilter', payload)
  },
  searchTerms ({ commit }, payload) {
    commit('searchTerms', payload)
  }
}
