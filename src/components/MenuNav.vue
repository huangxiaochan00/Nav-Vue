<template>
  <div class="menu">
    <div class="menuHeader">
      <img src="../assets/logo.png" />
    </div>
    <ul>
      <li
        v-for="list in classList"
        :key="list.index"
        :class="
          isActive === list.index || currentIndex === list.index ? 'active' : ''
        "
        @mouseenter="active(list.index)"
        @click="setWebIndex(list.index)"
      >
        <UseIcon :name="list.icon" />
        <span>{{ list.class }}</span>
      </li>
    </ul>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UseIcon from "@/components/UseIcon.vue";
@Component({
  components: {
    UseIcon,
  },
})
export default class MenuNav extends Vue {
  isActive = 0;
  get classList() {
    return this.$store.state.webData;
  }
  get currentIndex() {
    return this.$store.state.currentIndex;
  }
  active(x: number) {
    // console.log(x);
    this.isActive = x;
  }
  setWebIndex(index: number) {
    // console.log(index);
    this.$store.commit("setCurrent", index);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  width: 280px;
  height: 100vh;
  background: #2c2e2f;
  color: #979898;
  // border: 1px green solid;
  .menuHeader {
    // width: 100%;
    // height: 80px;
    padding: 19px 20px;
    // padding: 19px 20px;
    border-bottom: 1px #313437 solid;
    img {
      width: 178px;
      height: 40px;
      // border: 1px green solid;
    }
  }
  ul {
    list-style-type: none;
    padding: 0 40px;
  }

  li {
    border-bottom: 1px #313437 solid;
    padding: 13px 5px;
    display: flex;
    align-items: center;
    &.active {
      color: white;
      .icon {
        fill: white;
      }
    }
    // height: 200px;
    .icon {
      // width: 13px;
      // height: 13px;
      // margin: 0 2.6px;
      // border: 1px red solid;
      // color: white;
      fill: #979898;
    }
    span {
      font-size: 13px;
      padding: 0px 10px;
      // height: 62px;
    }
  }
}
</style>

