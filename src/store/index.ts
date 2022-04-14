import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const commonWeb = [
  { name: "Dribbble", brief: "全球UI设计师作品分享平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "Behance", brief: "Adobe旗下的设计师互动平台，来自世界各地的分享。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "UI中国", brief: "图形交互与界面设计交流、作品展示、学习平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "站酷", brief: "中国设计师互动平台", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "Pinterest", brief: "全球美图收藏采集站。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
]
const blogWeb = [
  { name: "知乎", brief: "全球UI设计师作品分享平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "简书", brief: "Adobe旗下的设计师互动平台，来自世界各地的分享。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "UI中国", brief: "图形交互与界面设计交流、作品展示、学习平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "站酷", brief: "中国设计师互动平台", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "Pinterest", brief: "全球美图收藏采集站。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
]
const learnWeb = [
  { name: "github", brief: "全球UI设计师作品分享平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "vue", brief: "Adobe旗下的设计师互动平台，来自世界各地的分享。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "react", brief: "图形交互与界面设计交流、作品展示、学习平台。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "菜鸟", brief: "中国设计师互动平台", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
  { name: "Pinterest", brief: "全球美图收藏采集站。", icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" },
]
const webData = [
  { index: 0, class: "常用推荐", data: commonWeb, icon: "star" },
  { index: 1, class: "博客网站", data: blogWeb, icon: "blog" },
  { index: 2, class: "学习平台", data: learnWeb, icon: "learn" },
  { index: 3, class: "关于本站", data: [], icon: "about" }
  // {class:"",data:commonWeb}
]
export default new Vuex.Store({
  state: {
    webData: webData,
    currentIndex: 0,
    isClose: false
  },
  getters: {
  },
  mutations: {
    setCurrent(state, index) {
      state.currentIndex = index
    },
    toggleClose(state) {
      state.isClose = !state.isClose

    }
  },
  actions: {
  },
  modules: {
  }
})
