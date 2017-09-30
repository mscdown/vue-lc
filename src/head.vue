<template>
  <div class="head">
    <a href="javascript:history.go(-1);"><em class="fa icon back">&#xe608;</em></a>
    <div class="title">{{name}}</div>
    <a href="javascript:;"><em class="fa icon">&#xe635;</em></a>
  </div>
</template>

<script>
export default {
  props:{
    name
  }
}
</script>

<style>
.head{width: 100%;height: 50px;background: #fff;font-size:0px;border-bottom: 1px solid #ccc;box-shadow: 0 1px 1px rgba(0,0,0,.05);}
.head a{display: inline-block;width: 10%;height:50px;text-align: center}
.head a .fa{font-size: 20px;line-height: 50px;}
.head .title{display: inline-block;width: 80%;height:50px;font-size:16px;line-height:50px;text-align: center}
</style>
