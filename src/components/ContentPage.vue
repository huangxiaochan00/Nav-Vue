<template>
  <div class="view">
    <div class="nav"></div>
    <div class="roll" v-for="webClass in WebList" :key="webClass.index">
      <h4>
        <UseIcon name="tag2" />
        {{ webClass.class }}
      </h4>
      <div class="content">
        <!-- <a href=""> -->
        <div
          class="webBox"
          v-for="data in webClass.data"
          :key="data.id"
          @mouseenter="show(data.index, webClass.class)"
          @mouseleave="show(-1, '')"
        >
          <a :href="data.address" target="_blank">
            <div class="icon">
              <img :src="data.icon" alt="" />
            </div>
            <div class="text">
              <strong>{{ data.name }}</strong>
              <span>{{ data.brief }}</span>
            </div>
          </a>
          <div
            class="detail"
            :class="
              showIndex === data.index && currentWebClass === webClass.class
                ? 'active'
                : ''
            "
          >
            <div class="box"></div>
            {{ data.brief }}
          </div>
        </div>
      </div>
    </div>
    <footer>
      Copyright © 2022 前端导航 Design by Webstack Modify by huangxiaochan
    </footer>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from "vue-property-decorator";
import { Component, Vue } from "vue-property-decorator";
import UseIcon from "@/components/UseIcon.vue";
@Component({
  components: {
    UseIcon,
  },
})
export default class ContentPage extends Vue {
  showIndex = -1;
  currentWebClass = "";
  get WebList() {
    return this.$store.state.webData;
  }
  get index() {
    return this.$store.state.currentIndex;
  }
  toggleClose() {
    this.$store.commit("toggleClose");
  }
  show(index: number, currentClass: string) {
    this.currentWebClass = currentClass;
    this.showIndex = index;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 750px) {
  .view {
    .nav {
      display: none;
      .icon {
        fill: #a8a5a5;
      }
    }
    .webBox {
      width: calc(100% - 30px);
    }
  }
}
@media screen and (min-width: 750px) {
  .view {
    height: 100vh;
    overflow: scroll;
    .nav {
      width: 100%;
      background: #fff;
      height: 80px;
      padding: 30px;
      display: flex;
      .icon {
        fill: #555555;
      }
    }
    .webBox {
      width: calc((100% - 120px) / 4);
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
.view {
  width: 100%;
  h4 {
    margin: 9px 0;
    color: #555555;
    text-align: left;
    margin: 30px 30px 0;
    font-size: 17px;
    font-weight: 400;
    .icon {
      width: 1.2em;
      height: 1.2em;
      margin-right: 8px;
    }
  }
  footer {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-top: 32px;
  }
  .content {
    padding: 0px 0px 0px 30px;
  }
  .webBox {
    font-size: 13px;
    background: #fff;
    padding: 15px;
    margin: 20px 30px 0 0;
    position: relative;
    .detail {
      z-index: 10;
      position: absolute;
      background: black;
      border: 1px solid black;
      color: white;
      top: 120%;
      width: calc(100% - 30px);
      border-radius: 5px 5px;
      text-align: left;
      display: none;
      &.active {
        display: block;
      }
      .box {
        width: 0;
        height: 0;
        border: 7px solid;
        border-color: transparent transparent black transparent;
        position: absolute;
        top: -15.5px;
        left: calc(50% - 10px);
      }
    }
    a {
      display: flex;
      text-decoration: none;
      color: inherit;
    }
    img {
      height: 54px;
      width: 40px;
      margin: 0 10px 0 0;
      padding: 7px 0;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: calc(100% - 50px);
      text-align: left;
      justify-content: center;
      span {
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
