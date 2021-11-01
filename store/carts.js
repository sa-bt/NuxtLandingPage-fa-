export default {
  state() {
    return{
      carts: []
    }

  },
  getters: {
    allProducts(state) {
      return state.carts;
    }
  },
  mutations: {
    ADD(state, product) {
      const item = state.carts.find(p => p.id == product.id)
      console.log(item )
      if (!item) {
        state.carts.push({
          ...product,
          quantity: 1
        })
      }else{
        item.quantity++
      }
      console.log(state.carts)
    }
  },
  actions: {
    addToCart({commit}, product) {
      commit('ADD', product)
    }
  }
}
