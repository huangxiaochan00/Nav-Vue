<template>
  <div class="view">
    <div class="nav">
      <UseIcon name="list" @click="toggleClose()" />
    </div>
    <h4>
      <UseIcon name="tag2" />
      {{ WebList[index].class }}
    </h4>
    <div class="content">
      <!-- <a href=""> -->
      <div class="webBox" v-for="data in WebList[index].data" :key="data.id">
        <a :href="data.address" target="_blank">
          <div class="icon">
            <img :src="data.icon" alt="" />
          </div>
          <div class="text">
            <strong>{{ data.name }}</strong>
            <span>{{ data.brief }}</span>
          </div>
        </a>
      </div>
      <!-- </a> -->
    </div>
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
  get WebList() {
    return this.$store.state.webData;
  }
  get index() {
    return this.$store.state.currentIndex;
  }
  toggleClose() {
    this.$store.commit("toggleClose");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.view {
  width: 100%;
  height: 100vh;
  overflow: scroll;
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
      // border: 1px red solid;
    }
  }
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
  .content {
    padding: 0px 0px 0px 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .webBox {
    font-size: 13px;
    // display: flex;
    background: #fff;
    width: calc((100% - 120px) / 4);
    padding: 15px;
    margin: 20px 30px 0 0;
    a {
      display: flex;
      text-decoration: none;
      color: inherit;
    }
    img {
      height: 54px;
      width: 40px;
      // border: 1px red solid;
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
