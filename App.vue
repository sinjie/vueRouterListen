<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    $route: {
      handler: function(val, oldVal){
        console.log(val, oldVal);
        let historyRoutes = this.$store.state.historyRoutes
        let routes = this.$store.state.routes

        if (historyRoutes.length && val.fullPath == historyRoutes[historyRoutes.length - 1] ) {
          this.$store.dispatch('shiftRoute')
          this.$store.dispatch('pushRoute', oldVal.fullPath)
        }else if(routes.length && val.fullPath == routes[routes.length - 1]){
          this.$store.dispatch('popRoute')
          this.$store.dispatch('unshiftRoute', oldVal.fullPath)
        }else{
          this.$store.dispatch('clearRoutes')
          if (oldVal.fullPath && oldVal.fullPath !== '/login' && oldVal.fullPath !== '/' && oldVal.fullPath !== '') {
            this.$store.dispatch('unshiftRoute', oldVal.fullPath)
          }
        }
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
  }
</style>
