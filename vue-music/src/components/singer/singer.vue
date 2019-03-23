<!--歌手界面-->
<template>

</template>

<script type="text/ecmascript-6">

  import Axios from 'axios';
  export default {
    data(){
      return{
        musicList:[],
        isShow:false
      }
    },
    created(){
      Axios.get('/api/package.json').then((res)=>{
        var data = res.data.musicData;
        data.forEach(elem=>{
          var obj = {};
          obj.title = elem.title;
          obj.src = elem.src;
          obj.artist = elem.author;
          obj.pic = elem.musicImgSrc;
          obj.lrc = 'http://localhost:8080/'+elem.lrc;
          this.musicList.push(obj);
        });
        this.isShow = true;
      })
    },
    components:{
      Aplayer
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
