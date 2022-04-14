<template>
  <div class="menu" :class="isClose ? 'close' : 'show'">
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
        <span v-show="!isClose">{{ list.class }}</span>
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
  get isClose() {
    return this.$store.state.isClose;
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
  height: 100vh;
  background: #2c2e2f;
  color: #979898;
  .menuHeader {
    padding: 19px 20px;
    border-bottom: 1px #313437 solid;
    img {
      height: 40px;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
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
      .icon {
        fill: #979898;
      }
    }
  }
  &.close {
    width: 80px;
    img {
      width: 40px;
    }
    li {
      justify-content: center;
    }
  }
  &.show {
    width: 280px;
    img {
      width: 178px;
    }
    ul {
      padding: 0 40px;
    }
    li {
      span {
        font-size: 13px;
        padding: 0px 10px;
      }
    }
  }
}
</style>

