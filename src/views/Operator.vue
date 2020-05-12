<template>
  <div class="page-hero" v-if="model">
    <!-- 顶栏 -->
    <!-- <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/logo.png" height="30" />
      <div class="px-2 flex-grow-1">
        <span class="text-white mx-3">明日方舟</span>
        <span class="text-gary-1 fs-xxs">攻略站</span>
      </div>
      
    </div>-->
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/images/arknights_logo.jpg" height="30" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">明日方舟</div>
        <div class="text-gary-1 fs-xxs">资料站</div>
      </div>
      <router-link to="/operatorlist" tag="div" class>更多干员 &gt;</router-link>
    </div>
    <!-- 原画 -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.name}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.star">
            <span>星级</span>
            <span class="badge bg-dark">{{model.star}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">皮肤:2 &gt;</router-link>
        </div>
      </div>
    </div>
    <div >
      <img class="fullGraph" :src="model.fullGraph" >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`operators/${this.id}`);
      this.model = res.data;
      console.log(this.model);
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff top center ;
    background-size: 100% auto ;
    
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
.fullGraph{
  width: 100%;
}
</style>