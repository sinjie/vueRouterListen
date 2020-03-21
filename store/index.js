import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [],
    historyRoutes: []
  },
  mutations: {
    PUSH_ROUTE(state, route) {
      state.routes.push(route)
    },
    POP_ROUTE(state) {
      state.routes.pop()
    },
    UNSHIFT_ROUTE(state, route) {
      state.historyRoutes.push(route)
    },
    SHIFT_ROUTE(state) {
      state.historyRoutes.pop()
    },
    CLEAR_ROUTES(state) {
      state.routes = []
    }
  },
  actions: {
    pushRoute(ctx, route) {
      ctx.commit('PUSH_ROUTE', route)
    },
    popRoute(ctx) {
      ctx.commit('POP_ROUTE')
    },
    unshiftRoute(ctx, route) {
      ctx.commit('UNSHIFT_ROUTE', route)
    },
    shiftRoute(ctx) {
      ctx.commit('SHIFT_ROUTE')
    },
    clearRoutes(ctx) {
      ctx.commit('CLEAR_ROUTES')
    }
  }
})