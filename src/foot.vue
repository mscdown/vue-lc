<template>
  <div class="footer-nav">
    <ul>
      <router-link v-for="(item,index) in products" tag="li" :to="{path: item.path}">
        <!--<i class="fa m1">&#xe611;</i>-->
        <i class="fa m2" v-html="item.icon"></i>{{item.name}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        products: [
          {
            name: '首页',
            path: '../home',
            icon:'&#xe612;'
          },
          {
            name: '投资理财',
            path: '../lc',
            icon:'&#xe630;'
          },
          {
            name: '个人中心',
            path: '../personal',
            icon:'&#xe635;'
          },
          {
            name: '更多',
            path: '../more',
            icon:'&#xe614;'
          }
        ]
      }
    }
  }
</script>

<style>
  .footer-nav{width: 100%;height: 50px;line-height:50px;position: absolute;bottom: 0;left: 0;background: #fff;
              border-top: solid 1px #ccc;
              box-shadow: 0 -1px 3px rgba(0,0,0,.05);
              box-sizing: border-box;}
  .footer-nav ul{display: flex}
  .footer-nav li{display: inline-block;flex: 1;text-align: center;font-size: 11px;color:#4a505e;}
  .footer-nav li.router-link-active {color:#2180ec;}
</style>
