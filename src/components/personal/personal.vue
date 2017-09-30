<template>
  <div >
    <v-head :name="name"></v-head>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import head from '../../head.vue'
  import footNav from '../../foot.vue';
  export default {
    data () {
      return {
        name: '个人中心'
      }
    },
    components:{
      vHead:head,
      footNav
    }
  }
</script>

<style>
  .nav{width:100%;height: 2.6rem;line-height: 2.6rem;font-size:0;background: #eee;}
  .nav .content{display:inline-block;position:relative;width: 85%;height:2.6rem;line-height:2.6rem;overflow: hidden;vertical-align: top;}
  .nav ul{width: 110%;}
  .nav ul li{display: inline-block;font-size:0.7rem;height:2.5rem;color:#666;padding: 0 0.5rem}
  .nav .router-link-active{color: #f60; border-bottom: solid 0.18rem #f60;}
  .nav .seach-more{width:15%;height:2.6rem;display: inline-block;text-align:center;vertical-align: top;box-shadow: 0 0 0.5rem rgba(0,0,0,.2);}
  .nav .seach-more i{line-height: 2.8rem}
</style>
