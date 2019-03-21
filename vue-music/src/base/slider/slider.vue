<template>
<div class="slider" ref="slider">
  <div class="slider-group" ref="sliderGroup">
    <slot>
    </slot>
  </div>
  <div class="dots">
    <span class="dot" v-for="(item,index) in dots"
          :class="{active:currentPageIndex===index}">
    </span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from "../../common/js/dom";

  export default {
       name:'slider',
       props:{
         loop:{
           type:Boolean,
           default:true
         },//默认循环播放
         autoPlay:{
           type:Boolean,
           default:true
         },//默认自动播放
         interval:{
           type:Number,
           default:4000
         },//自动轮播间隔
       },
        data(){
          return{
            dots:[],
            currentPageIndex:0//当前是第几页
          }
        },
      //better scroll渲染时间
      mounted(){
         setTimeout(()=>{
           this._setSliderWidth()
           this._initSlider()
           this._initDots()

           if (this.autoPlay) {
             this._play()
           }
         },20);//浏览器刷新时间17毫秒

        window.addEventListener('resize',()=>{
          if (!this.slider){
            return
          }
          this._setSliderWidth(true)
          this.slider.refresh()
        })
      },
      activated() {
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
      methods:{
         _setSliderWidth(isResize){//整个列表有多少个元素
            this.children = this.$refs.sliderGroup.children;
            // console.log(this.children.length)

//设置sliderGroup的宽度
           let width = 0;
           let sliderWidth = this.$refs.slider.clientWidth;//父容器的宽度
           for (let i=0;i<this.children.length;i++){
              //获取每个子元素
              let child = this.children[i]
             //给每个元素都添加这样一个class，确保他渲染的样式是正确的
             addClass(child,"slider-item")
             child.style.width = sliderWidth + 'px'
             width += sliderWidth
           }
           if (this.loop && !isResize) {
              width += 2 * sliderWidth
           }
           this.$refs.sliderGroup.style.width = width +'px'
         },
        _initSlider(){
           this.slider = new BScroll(this.$refs.slider,{
             scrollX:true,
             scrollY:false,
             momentum:false,
             snap: true,
             snapLoop: this.loop,
             snapThreshold: 0.3,
             snapSpeed: 400,
             // click:true
           })
          this.slider.on('scrollEnd',()=>{
            let pageIndex = this.slider.getCurrentPage().pageX
            if (this.loop){
              pageIndex -= 1
            }
            this.currentPageIndex = pageIndex

            if (this.autoPlay){
              this._play()
            }
          })
          this.slider.on('beforeScrollStart',()=>{
            if (this.autoPlay){
              clearTimeout(this.timer)
            }
          })
        },
        _initDots(){
          this.dots = new Array(this.children.length)
        },
        _play(){
           let pageIndex = this.currentPageIndex + 1
           if (this.loop){
             pageIndex += 1
          }
          this.timer = setTimeout(()=>{
            this.slider.goToPage(pageIndex,0,400)
          },this.interval)
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>

