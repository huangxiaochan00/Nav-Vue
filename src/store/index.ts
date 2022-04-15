import Vue from 'vue'
import Vuex from 'vuex'
import { xxx } from '@/store/data'
Vue.use(Vuex)


const webData = [
  { index: 0, class: "常用推荐", data: xxx.commonWebList, icon: "star" },
  { index: 1, class: "博客网站", data: xxx.blogWebList, icon: "blog" },
  { index: 2, class: "学习平台", data: xxx.learnWebList, icon: "learn" },
  { index: 3, class: "基础工具", data: xxx.styleWebList, icon: "style" },
  // { index: 4, class: "视频网站", data: xxx.tvWebList, icon: "tv" },
  // { index: 5, class: "倾听音乐", data: xxx.listenWebList, icon: "music" },
  // { index: 6, class: "社交平台", data: xxx.socialWebList, icon: "social" },
  // { index: 4, class: "关于本站", data: [], icon: "about" }
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
