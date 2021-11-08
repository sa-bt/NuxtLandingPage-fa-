function updateLocalStorage(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}
export default {
  state() {
    return {
      cart:  []
    }
  },
  getters: {
    allProducts(state) {
      return state.cart;
    },
    totalAmount(state){
      return state.cart.reduce((total,p)=>{
        return total + (p.price * p.quantity)
      },0)
    },

    count(state) {
      console.log(33)
      return state.cart.length;
    }
  },
  mutations: {
    ADD(state, product) {
      const item = state.cart.find(p => p.id == product.id);
      if (!item) {
        state.cart.push({
          ...product,
          quantity: 1
        })
      } else {
        item.quantity++
      }
      updateLocalStorage(state.cart)
    },

    SET_CART(state, cart) {
      state.cart=JSON.parse(cart);
    },

    INCREMENT(state,id){
      const item = state.cart.find(p => p.id == id);
      if (item) {
        item.quantity++
      }
      updateLocalStorage(state.cart)
    },

    DECREMENT(state,id){
      const item = state.cart.find(p => p.id == id);
      if (item) {
        item.quantity--
      }
      updateLocalStorage(state.cart)
    }
  },

  actions: {
    addToCart({commit}, product) {
      commit('ADD', product)
    },

    setCart({commit}, cart) {
      commit('SET_CART', cart)
    },

    increment({commit}, productId) {
      commit('INCREMENT', productId)
    },

    decrement({commit}, productId) {
      commit('DECREMENT', productId)
    },

  }
}
