type webItem = {
    name: string,
    brief: string,
    address: string,
    icon: string,
    index: number
}
const blogWebList: webItem[] = [
    {
        index: 0,
        name: "Github", brief: "通过Git进行版本控制的软件源代码托管服务平台。",
        address: "https://github.com/",
        icon: "https://github.com/favicon.ico"
    },
    {
        index: 1,
        name: "博客园", brief: "一个面向开发者的知识分享社区。",
        address: "https://www.cnblogs.com/",
        icon: "https://www.cnblogs.com/favicon.ico"
    },
    {
        index: 2,
        name: "简书", brief: "一个优质的创作社区。",
        address: "https://www.jianshu.com/",
        icon: "https://www.jianshu.com/favicon.ico"
    },
    // {
    //     name: "思否", brief: "中国领先的开发者技术社区。以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。",
    //     address: "https://segmentfault.com/",
    //     icon: "https://cdn.segmentfault.com/r-030f5fa2/favicon.ico"
    // },
    {
        index: 3,
        name: "CSDN", brief: "全球知名中文IT技术交流平台,提供原创、优质、完整内容的专业IT技术开发社区。",
        address: "https://www.csdn.net/",
        icon: "https://www.csdn.net/favicon.ico"
    },
    {
        index: 4,
        name: "开源中国", brief: "目前领先的中文开源技术社区。为IT 开发者提供了的一个发现、使用、并交流开源技术的平台。",
        address: "https://www.oschina.net/",
        icon: "https://www.oschina.net/favicon.ico"
    },
    {
        index: 5,
        name: "知乎", brief: "中文互联网高质量的问答社区和创作者聚集的原创内容平台。",
        address: "https://www.zhihu.com/",
        icon: "https://www.zhihu.com/favicon.ico"
    },
    {
        index: 6,
        name: "掘金", brief: "一个帮助开发者成长的社区。",
        address: "https://juejin.cn/",
        icon: "https://juejin.cn/favicon.ico"
    },
    {
        index: 7,
        name: "stackoverflow", brief: "一个最大、最受信任的在线社区，供开发者学习、分享编程知识并建立职业生涯。",
        address: "https://stackoverflow.com/",
        icon: "https://stackoverflow.com/favicon.ico"
    }
]
const learnWebList: webItem[] = [
    {
        index: 0,
        name: "Vue", brief: "一套用于构建用户界面的渐进式框架。",
        address: "https://cn.vuejs.org/index.html",
        icon: "https://cn.vuejs.org//images/logo.svg"
    },
    {
        index: 1,
        name: "React", brief: "用于构建用户界面的 JavaScript 库。",
        address: "https://zh-hans.reactjs.org/",
        icon: "https://zh-hans.reactjs.org/favicon.ico"
    },
    {
        index: 2,
        name: "力扣", brief: "全球极客挚爱的技术成长平台。",
        address: "https://leetcode-cn.com/",
        icon: "https://leetcode-cn.com/favicon.ico"
    },
    {
        index: 3,
        name: "菜鸟教程", brief: "提供了编程的基础技术教程, 介绍了各种编程语言的基础知识。",
        address: "https://www.runoob.com/",
        icon: "https://www.runoob.com/favicon.ico"
    },
    {
        index: 4,
        name: "Mdn", brief: "提供有关开放式Web技术的信息，包括用于网站和渐进式Web应用的HTML、CSS和API。",
        address: "https://developer.mozilla.org/zh-CN/",
        icon: "https://developer.mozilla.org/favicon.ico"
    },
    {
        index: 5,
        name: "牛客网", brief: "就业找工作一站解决。求职神器，在线进行企业校招实习笔试面试真题模拟考试练习。",
        address: "https://www.nowcoder.com/",
        icon: "https://www.nowcoder.com/favicon.ico"
    },
    {
        index: 6,
        name: "慕课网", brief: "IT技能学习平台，涉及60类主流技术语言。",
        address: "https://www.imooc.com/",
        icon: "https://www.imooc.com/favicon.ico"
    },
    {
        index: 7,
        name: "哔哩哔哩", brief: "国内知名的视频弹幕网站。",
        address: "https://www.bilibili.com/",
        icon: "https://www.bilibili.com/favicon.ico"
    }
]
const commonWebList: webItem[] = [
    {
        index: 0,
        name: "Vue", brief: "一套用于构建用户界面的渐进式框架。",
        address: "https://cn.vuejs.org/index.html",
        icon: "https://cn.vuejs.org//images/logo.svg"
    },
    {
        index: 1,
        name: "Github", brief: "通过Git进行版本控制的软件源代码托管服务平台。",
        address: "https://github.com/",
        icon: "https://github.com/favicon.ico"
    },
    {
        index: 2,
        name: "力扣", brief: "全球极客挚爱的技术成长平台。",
        address: "https://leetcode-cn.com/",
        icon: "https://leetcode-cn.com/favicon.ico"
    },
    {
        index: 3,
        name: "菜鸟教程", brief: "提供了编程的基础技术教程, 介绍了各种编程语言的基础知识。",
        address: "https://www.runoob.com/",
        icon: "https://www.runoob.com/favicon.ico"
    },
    {
        index: 4,
        name: "知乎", brief: "中文互联网高质量的问答社区和创作者聚集的原创内容平台。",
        address: "https://www.zhihu.com/",
        icon: "https://www.zhihu.com/favicon.ico"
    },
    {
        index: 5,
        name: "牛客网", brief: "就业找工作一站解决。求职神器，在线进行企业校招实习笔试面试真题模拟考试练习。",
        address: "https://www.nowcoder.com/",
        icon: "https://www.nowcoder.com/favicon.ico"
    }
]

const styleWebList: webItem[] = [
    {
        index: 0,
        name: "CSS Sprites Generator", brief: "一款雪碧图生成工具。",
        address: "https://www.toptal.com/developers/css/sprite-generator",
        icon: "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png"
    },
    {
        index: 1,
        name: "uni-app", brief: "一个使用 Vue.js开发所有前端应用的框架。",
        address: "https://uniapp.dcloud.io/",
        icon: "https://uniapp.dcloud.io/favicon.ico"
    },
    {
        index: 2,
        name: "Ant Design Vue", brief: "为 Web 应用提供了丰富的基础 UI 组件。",
        address: "https://antdv.com/",
        icon: "https://aliyuncdn.antdv.com/favicon.ico"
    },
    {
        index: 3,
        name: "Element-UI", brief: "一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。",
        address: "https://element.eleme.io/#/zh-CN",
        icon: "https://element.eleme.io/favicon.ico"
    },
    {
        index: 4,
        name: "WeUI", brief: "一套同微信原生视觉体验一致的基础样式库。",
        address: "https://weui.io/",
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"
    },
    {
        index: 5,
        name: "vant UI", brief: "一个轻量、可靠的移动端组件库。",
        address: "https://youzan.github.io/vant/#/zh-CN/intro",
        icon: "https://cdn.jsdelivr.net/npm/@vant/assets/logo.png"
    },
    {
        index: 6,
        name: "Iconfont", brief: "国内功能很强大且图标内容很丰富的矢量图标库，设计和前端开发的便捷工具。",
        address: "https://www.iconfont.cn/",
        icon: "https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico"
    }
    ,
    {
        index: 7,
        name: "Can I use", brief: "一个查询 CSS、JS 在各个流行浏览器中的特性和兼容性的网站。",
        address: "https://caniuse.com/",
        icon: "https://caniuse.com/img/favicon-128.png"
    },
    {
        index: 8,
        name: "Carbon", brief: "一个在线的代码转图片工具。",
        address: "https://carbon.now.sh/",
        icon: "https://carbon.now.sh/favicon.ico"
    }
]

const xxx = {
    blogWebList,
    commonWebList,
    learnWebList,
    styleWebList
}

export { xxx }
