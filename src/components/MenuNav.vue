<template>
  <div class="menu" :class="isClose ? 'close' : 'show'">
    <div class="menuHeader">
      <img src="../assets/logo.png" />
      <UseIcon name="list" @click="toggleClose()" />
    </div>
    <ul class="item">
      <li
        v-for="list in classList"
        :key="list.index"
        :class="
          isActive === list.index || currentIndex === list.index ? 'active' : ''
        "
        @mouseenter="active(list.index)"
        @click="scrollToPosition(list.index)"
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
  isActive = -1;
  get classList() {
    return this.$store.state.webData;
  }
  get currentIndex() {
    return this.$store.state.currentIndex;
  }
  get isClose() {
    return this.$store.state.isClose;
  }
  active(index: number) {
    this.isActive = index;
  }
  toggleClose() {
    this.$store.commit("toggleClose");
  }
  scrollToPosition(index: number) {
    this.isActive = index;
    this.$store.commit("setCurrent", index);
    document.getElementsByClassName("roll")[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 1000px) {
  .menu {
    width: 80px;
    .menuHeader {
      img {
        width: 40px;
      }
      .icon {
        right: -50px;
      }
    }
    span {
      display: none;
    }
  }
}
@media screen and (max-width: 750px) {
  .menu {
    width: 100%;
    .menuHeader {
      img {
        width: 178px;
      }
      .icon {
        // border: 1px red solid;
        right: 50px;
        fill: #a8a5a5;
      }
    }
    &.close {
      .item {
        display: none;
      }
    }
    &.show {
      .item {
        display: block;
        li {
          span {
            display: block;
            font-size: 13px;
            padding: 0px 10px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .menu {
    height: 100vh;
    .menuHeader {
      .icon {
        right: -50px;
      }
    }
    &.close {
      width: 80px;
      img {
        width: 40px;
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
}
.menu {
  background: #2c2e2f;
  color: #979898;
  .menuHeader {
    padding: 19px 20px;
    border-bottom: 1px #313437 solid;
    position: relative;
    img {
      height: 40px;
    }
    .icon {
      position: absolute;
    }
  }
  li {
    border-bottom: 1px #313437 solid;
    padding: 13px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>

