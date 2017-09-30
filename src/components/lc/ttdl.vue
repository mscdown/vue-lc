<template>
  <div class="ttdl" ref="content">
      <div class="ttdl-content">
        <div class="list-box" v-for="(item,index) in ttdlData">
          <a href="../detail" class="goseach">
            <div class="left">
              <img  src="../../assets/tian.png" alt="">
            </div>
            <div class="right">
              <ul>
                <li class="name">{{item.name}} <span v-show="item.percent!=null" class="get"><i style="font-size: 1.4rem">{{item.get}}</i>%</span></li>
                <li class="type"><span class="type1">中合担保</span><span class="type2">随时赎回</span> <span v-show="item.percent==null" class="get"><i style="font-size: 1.4rem">{{item.get}}</i>%</span></li>
                <li class="money"><i class="fa">&#xe621;</i> {{item.start}}元起 <span v-show="item.percent!=null" class="percent"><i class="fa">&#xe606;</i>  完成{{item.percent}}%</span></li>
              </ul>
              <i class="fa arrow">&#xe602;</i>
            </div>
            <div v-show="item.percent==100" class="ui-list-null">
              <span>今日已售罄</span>
            </div>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  const ERR_OK = 0;
  export default{
    data(){
      return {
        ttdlData: {}
      }
    },
    methods:{
      _initScroll(){
        this.picScroll = new BScroll(this.$refs.content, {
          click: true
        });
      }
    },
    created() {
      this.$http.get('/api/ttdlData').then((response) => {
        if ( response.body.errno === ERR_OK) {
          this.ttdlData = response.body.data.RETURN;
          console.log(this.ttdlData);
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    }
  }
</script>

<style>
  .ttdl{background: #fff}
  .list-box{border-bottom: 1px solid #eee;position: relative}
  .list-box .ui-list-null{z-index: 11;position: absolute;left: 0; top: 0; right: 0;bottom: 0;}
  .list-box .ui-list-null span{ border-radius: 0.3rem;display: block;padding: 0 1rem;background: #fff;font-size: 1rem;
    line-height: 1.6rem;border: 1px solid #e72d20;color: #e72d20; position: absolute;right: 1rem; top: 2.5rem;
    font-weight: bold; -webkit-transform: rotate(-22deg);transform: rotate(-22deg);}
  .list-box .goseach{display: block;position: relative}
  .list-box .goseach .left{position: absolute;left: 0.5rem;top:0.7rem;width: 1.8rem}
  .list-box .goseach .left img{display: block;width: 100%;margin: 0 auto}
  .list-box .goseach .right{height: 100px;position: relative}
  .list-box .goseach .right .arrow{position: absolute;top:50%;right: 0.2rem;font-size: 1.6rem;margin-top: -0.8rem;}
  .list-box .goseach .right ul{margin: 0px 2rem 0px 2.5rem;}
  .list-box .goseach .right ul li{line-height: 2rem;position: relative}
  .list-box .goseach .right ul .name{color: #555555;font-size: 1.1rem;}
  .list-box .goseach .right ul .get{position: absolute;right: 0;top:0;color:#d8523f;font-size: 0.7rem}
  .list-box .goseach .right .type1{border: 1px solid #6bb43d;color:#6bb43d}
  .list-box .goseach .right .type2{border: 1px solid #e9a464;color:#e9a464}
  .list-box .goseach .right .type .type1,.list-box .goseach .right .type .type2{display: inline-block;height: 1.2rem;box-sizing: border-box;line-height: 1.2rem; border-radius: 0.3rem;width: 5rem;margin-right: 1rem; text-align: center;font-size: 0.7rem;}
  .list-box .goseach .right .money{color:#bebebe;font-size: 0.8rem}
  .list-box .goseach .right .percent{position: absolute;right: 0;top:0}
</style>
