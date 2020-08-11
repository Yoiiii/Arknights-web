<template>
  <div>
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/images/arknights_logo.jpg" height="30" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">明日方舟</div>
        <div class="text-gary-1 fs-xxs">资料站</div>
      </div>
      <button type="button" class="btn light-1" @click="JumpToArknights">进入官网</button>
    </div>
    <div class="bg-dark-1 pt-3 pb-2">
      <div class="nav nav-inverse jc-around pb-1">
        <div class="nav-item" :class="homeActive">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item" :class="operatorActive">
          <router-link class="nav-link" tag="div" to="/operatorlist">干员列表</router-link>
        </div>
        <div class="nav-item" :class="newsActive">
          <router-link class="nav-link" tag="div" to="/articlelist">新闻资讯</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      homeActive: "",
      operatorActive: "",
      newsActive: ""
    };
  },
  methods: {
    JumpToArknights() {
      window.location.href = "https://ak.hypergryph.com/";
    },
    navActive() {
      console.log(this.$route.path);
      if (this.$route.path == "/") {
        this.homeActive = "active";
      } else if (this.$route.path == "/operatorlist") {
        this.operatorActive = "active";
      } else {
        this.newsActive = "active";
      }
    }
  },
  created() {
    this.navActive();
  },
  watch: {
    $route(now) {
      if (now.path == "/") {
        this.homeActive = "active";
        this.operatorActive="";
        this.newsActive = "";
      } else if (now.path == "/operatorlist") {
        this.operatorActive = "active";
        this.homeActive = "";
        this.newsActive = "";
      } else {
        this.newsActive = "active";
        this.operatorActive="";
        this.homeActive = "";
      }
    }
  }
};
</script>
<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>