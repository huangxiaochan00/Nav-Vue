<template>
  <div id="app">
    <MenuNav />
    <ContentPage />
  </div>
</template>

<script lang="ts">
import MenuNav from "@/components/MenuNav.vue";
import ContentPage from "@/components/ContentPage.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    MenuNav,
    ContentPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 200px;
  // display: flex;
}
@media screen and (min-width: 750px) {
  #app {
    display: flex;
  }
}

body {
  padding: 0;
  margin: 0;
  background: #f8f8f2;
}
* {
  box-sizing: border-box;
}
ul,
li,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
