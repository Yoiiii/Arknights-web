<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" data-swiper-autoplay="2000">
      <!-- slides -->
      <swiper-slide v-for="(item,i) in adCats" :key="i">
        <a tag="div" :href="item.url">
          <img class="w-100" :src="item.image" />
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <!-- <div class="nav-item mb-3" v-for="n in 10 " :key="n"> -->
        <div class="nav-item mb-3 pt-3" @click="JumpTodl">
          <i class="iconfont icon-upload_icon fs-xxl"></i>
          <div class="mt-2">游戏下载</div>
        </div>
        <div class="nav-item mb-3 pt-3">
          <i class="iconfont icon-renshi fs-xxl" @click="JumpToHS"></i>
          <div class="mt-2">人力资源</div>
        </div>
        <div class="nav-item mb-3 pt-3">
          <i class="iconfont icon-wiki fs-xxl" @click="JumpToPRTS"></i>
          <div class="mt-2">PRTS</div>
        </div>
        <div class="nav-item mb-3 pt-3">
          <i class="iconfont icon-NGA fs-xxl" @click="JumpToNGA"></i>
          <div class="mt-2">NGA</div>
        </div>
      </div>
      <!-- <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        收起
      </div>-->
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats" class="mt-3">
      <template #items="{category}">
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
      </template>
    </m-list-card>
    <m-list-card icon="card-hero" title="干员列表" :categories="operatorCats" class="mt-3">
      <template #items="{category}">
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
      </template>
    </m-list-card>
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
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: [],
      operatorCats: [],
      adCats: []
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.getNewsList();
      this.newsCats = res.data;
    },
    async fetchOperatorCats() {
      const res = await this.$http.getOperatorsList(); 
      this.operatorCats = res.data;
    },
    async fetchAds() {
      const res = await this.$http.getAdsList(); 
      console.log('this.$http',this.$http);
      this.adCats = res.data[0].items;
    },
    JumpTodl() {
      window.location.href = "https://ak.hypergryph.com/";
    },
    JumpToHS() {
      window.location.href = "https://duli.dev/hr/";
    },
    JumpToPRTS() {
      window.location.href = "http://ak.mooncell.wiki/w/%E9%A6%96%E9%A1%B5";
    },
    JumpToNGA() {
      window.location.href = "https://bbs.nga.cn/thread.php?fid=-34587507";
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchOperatorCats();
    this.fetchAds();
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
  }
  &.swiper-pagination-bullet-active {
    background: map-get($colors, "info");
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>