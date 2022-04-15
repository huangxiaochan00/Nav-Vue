import Vue from 'vue'
import Vuex from 'vuex'
import { xxx } from '@/store/data'
Vue.use(Vuex)


const webData = [
  { index: 0, class: "常用推荐", data: xxx.commonWebList, icon: "star" },
  { index: 1, class: "博客网站", data: xxx.blogWebList, icon: "blog" },
  { index: 2, class: "学习平台", data: xxx.learnWebList, icon: "learn" },
  { index: 3, class: "基础工具", data: xxx.styleWebList, icon: "style" },
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
      console.log(state.isClose);


    }
  },
  actions: {
  },
  modules: {
  }
})
