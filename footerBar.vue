<template>
  <div></div>
  <!-- <div class="footer">
    <van-nav-bar class="footerBar" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" size=".7rem" :color="canPre ? '#1989fa' : '#999'"/> 
      </template>
      <template #right>
        <van-icon name="arrow" size=".7rem" :color="canNext ? '#1989fa' : '#999'"/> 
      </template>
    </van-nav-bar>
  </div> -->
</template>

<script>

export default {
  name: 'footerBar',
  data() {
    return {
      routes: this.$store.state.routes,
      historyRoutes: this.$store.state.historyRoutes,
    }
  },
  computed: {
    canNext() {
      return this.routes.length > 0
    },
    canPre() {
      console.log('canPre-----: ', this.historyRoutes);
      return this.historyRoutes.length > 0
    }
  },
  created() {
  },
  methods: {
    onClickLeft() {
      if (this.canPre) {
        this.$router.push(this.historyRoutes[this.historyRoutes.length - 1])
      }
    },
    onClickRight() {
      if (this.canNext) {
        this.$router.push(this.routes[this.routes.length - 1])
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.footer {
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 1.4rem;
  background: #fff;
  z-index: 999;
  padding: 0 3rem;
}
.footerBar {
  height: 1.4rem;
  line-height: 1.4rem;
  width: 4rem;
}
</style>