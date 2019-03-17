<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">//better-scroll组件
  import BScroll from 'better-scroll'
    export default {
       props:{
         probeType:{
           type:Number,
           default:1
         },
         click:{
           type:Boolean,
           default:true
         },//手动派发点击事件
         data:{
           type:Array,
           default:null
         }//会有一些数据，是动态变化的，要refrush，如果不refrish滚动条可能滚不动
       },
      mounted(){//什么时候调用这个组件
         setTimeout(()=>{
            this._initScroll()
         },20)
      },
      methods:{//定义一个初始化方法
         _initScroll(){
           //如果第一个参数还是undefined的话
           if(!this.$refs.wrapper){
             return
           }
           //初始化scroll，然后把$refs.wrapper传入，
           // 他的参数probeType，外部控制它是什么就初始成什么样，click也是
           this.scroll = new BScroll(this.$refs.wrapper,{
             probeType:this.probeType,
             click:this.click
           })

         },
        enable(){
           this.scroll && this.scroll.enable()
        },
        disable(){
          this.scroll && this.scroll.disable()
        },
        refresh(){
           //刷新这个scroll，并重新计算它的高度
          this.scroll && this.scroll.refresh()
        }

      },
      watch:{
         //
         data(){
           setTimeout(()=>{
             this.refresh()
           },20)
  }
}
    }
</script>

<style scoped>

</style>
