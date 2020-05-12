<template>
  <div class="card p-3 bg-white ai-center">
    <div class="card-body">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{active: active===i}"
          v-for="(category,i) in newsCats"
          :key="i"
          @click="$refs.list.swiper.slideTo(i)"
        >
          <div class="nav-link">{{newsCats[i].name}}</div>
        </div>
      </div>
      <swiper
        ref="list"
        :options="{autoHeight :true}"
        @slide-change="()=> active =$refs.list.swiper.realIndex"
        class="mt-2"
      >
        <swiper-slide v-for="(category,i) in newsCats" :key="i">
          <router-link
            tag="div"
            :to="`/articles/${news._id}`"
            class="py-2 fs-md d-flex"
            v-for="(news,i) in category.newsList"
            :key="i"
          >
            <span class="text-info" style="white-space: nowrap">[{{news.categoryName}}]</span>
            <span class="px-2">|</span>
            <span class="flex-grow-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
            <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      newsCats: [],
      active: 0
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/alllist");
      this.newsCats = res.data;
      console.log(this.newsCats);
    }
  },
  created() {
    this.fetchNewsCats();
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