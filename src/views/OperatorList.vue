<template>
  <div class="card p-3 bg-white ai-center">
    <div class="card-body ">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{active: active===i}"
          v-for="(category,i) in operatorCats"
          :key="i"
          @click="$refs.list.swiper.slideTo(i)"
        >
          <div class="nav-link">{{operatorCats[i].name}}</div>
        </div>
      </div>
      <swiper
        ref="list"
        :options="{autoHeight :true}"
        @slide-change="()=> active =$refs.list.swiper.realIndex"
        class="mt-2"
      >
        <swiper-slide v-for="(category,i) in operatorCats" :key="i">
          <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
            <router-link
              tag="div"
              :to="`/operators/${operator._id}`"
              class="p-2 text-center"
              style="width:20%"
              v-for="(operator,i) in category.operatorList"
              :key="i"
            >
              <img class="w-100" :src="operator.avatar" alt />
              <div>{{operator.name}}</div>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operatorCats: [],
      active:0,
    };
  },
  methods: {
    async fetchOperatorCats() {
      const res = await this.$http.get("operators/list");
      this.operatorCats = res.data;
      console.log(this.operatorCats);
    }
  },
  created() {
    this.fetchOperatorCats();
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>