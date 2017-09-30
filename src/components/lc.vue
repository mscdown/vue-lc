<template>
  <div >
    <vheader :name="name"></vheader>
    <div class="nav">
      <div class="content" ref="tab">
        <ul >
          <router-link v-for="(item,index) in products" tag="li" :to="{path: item.path}">
            {{item.name}}
          </router-link>
        </ul>
      </div>
      <div class="seach-more">
        <i class="fa seach">&#xe62c;</i>
      </div>
    </div>
    <div class="wrapper">
      <keep-alive>
        <transition :name="transitionName" >
          <router-view class="child-view"></router-view>
        </transition>
      </keep-alive>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import vheader from '../head.vue'
  import footNav from '../foot.vue'
  export default {
    data () {
      return {
        name:'投资理财',
        pathData:'recommend',
        transitionName:'',
        products: [
          {
            name: '推荐',
            path: 'recommend',
            active: false
          },
          {
            name: '天添得利',
            path: 'ttdl',
            active: false
          },
          {
            name: '月悦稳盈',
            path: 'yywy',
            active: false
          },
          {
            name: '优融创富',
            path: 'yrcf',
            active: false
          },
          {
            name: '转让专区',
            path: 'zrzq',
            active: false
          }
        ]
      }
    },
    watch: {
      '$route' (to, from){
        const toDepth = to.path.split('/')[2]
        let next = this.getPathData(toDepth);
        let prev = this.getPathData(this.pathData);
        this.transitionName = next < prev ? 'slide-right' : 'slide-left'
        this.pathData = toDepth;
      }
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods:{
      getPathData(str){
        let path = null;
         if(str === 'recommend'){
            path = 0
         }else if(str === 'ttdl'){
           path = 1
         }else if(str === 'yywy'){
           path = 2
         }else if(str === 'yrcf'){
           path = 3
         }else if(str === 'zrzq'){
           path = 4
         }
         return path
      },
      _initScroll() {
        this.picScroll = new BScroll(this.$refs.tab, {
          scrollX: true,
          eventPassthrough: 'vertical'
        });
      }
    },
    components:{
      vheader:vheader,
      footNav:footNav
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
  .wrapper{position: absolute;width: 100%;top:93px;bottom: 50px;overflow: hidden}
  .child-view {
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background-color: #f2f2f2;
    -webkit-overflow-scrolling: touch;
  }
  /* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(320px, 0);
    transform: translate(320px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-320px, 0);
    transform: translate(-320px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  .slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .slide-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>
