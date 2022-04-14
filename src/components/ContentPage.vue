<template>
  <div class="view">
    <div class="nav"></div>
    <h4>常用推荐</h4>
    <div class="content">
      <div class="webBox">
        <div class="icon"></div>
        <div class="text">
          <strong>Dribbble</strong>
          <span> 全球UI设计师作品分享</span>
        </div>
      </div>
      <div class="webBox">
        <div class="icon"></div>
        <div class="text">
          <strong>Dribbble</strong>
          <span> 全球UI设计师作品分享</span>
        </div>
      </div>
      <div class="webBox">
        <div class="icon"></div>
        <div class="text">
          <strong>Dribbble</strong>
          <span> 全球UI设计师作品分享</span>
        </div>
      </div>
      <div class="webBox">
        <div class="icon"></div>
        <div class="text">
          <strong>Dribbble</strong>
          <span> 全球UI设计师作品分享</span>
        </div>
      </div>
      <div class="webBox">
        <div class="icon"></div>
        <div class="text">
          <strong>Dribbble</strong>
          <span> 全球UI设计师作ddddddddddd品分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from "vue-property-decorator";
import {Vue } from "vue-property-decorator";
export default class ContentPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.view {
  width: 100%;
  height: 100vh;
  h4 {
    margin: 9px 0;
    color: #555555;
    text-align: left;
    margin: 30px 30px 0;
    font-size: 17px;
    font-weight: 400;
  }
  .nav {
    width: 100%;
    background: #fff;
    height: 80px;
  }
  .content {
    padding: 0px 0px 0px 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .webBox {
    font-size: 13px;
    display: flex;
    background: #fff;
    width: calc((100% - 120px) / 4);
    padding: 15px;
    margin: 20px 30px 0 0;
    .icon {
      height: 54px;
      width: 40px;
      border: 1px red solid;
      margin: 0 10px 0 0;
      padding: 7px 0;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: calc(100% - 50px);
      text-align: left;
      span {
        height: 37px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
