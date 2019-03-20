<template>
  <div class="recommend-context">
    <div v-if="recommends.length" class="slider-wrapper">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img :src="item.picUrl"/>
          </a>
        </div>
      </slider>
    </div>
    <div class="：recommend-list">
      <h1 class="list-tittle">热门歌单推荐</h1>
      <ul></ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from "../../api/recommend";
  import {ERR_OK} from "../../api/config";
  import Scroll from 'base/scroll/scroll';
  import Slider from 'base/slider/slider'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code == ERR_OK) {
            this.recommends = console.log(res.data.slider)

          }
        })
      }
    },
    components: {
      Slider,
      Scroll
    }
  }
</script>

<style scoped>

</style>
