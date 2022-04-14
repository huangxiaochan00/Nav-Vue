type webItem = {
    name: string,
    brief: string,
    address: string,
    icon: string
}
const blogWebList: webItem[] = [
    {

        name: "Github", brief: "全球UI设计师作品分享平台。",
        address: "https://github.com/",
        icon: "https://github.com/favicon.ico"
    },
    {

        name: "博客园", brief: "一个面向开发者的知识分享社区。",
        address: "https://www.cnblogs.com/",
        icon: "https://www.cnblogs.com/favicon.ico"
    },
    {
        name: "简书", brief: "一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。",
        address: "https://www.jianshu.com/",
        icon: "https://www.jianshu.com/favicon.ico"
    },
    {
        name: "思否", brief: "中国领先的开发者技术社区。以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。",
        address: "https://segmentfault.com/",
        icon: "https://cdn.segmentfault.com/r-030f5fa2/favicon.ico"
    },
    {
        name: "CSDN", brief: "全球知名中文IT技术交流平台,提供原创、优质、完整内容的专业IT技术开发社区。",
        address: "https://www.csdn.net/",
        icon: "https://www.csdn.net/favicon.ico"
    },
    {
        name: "开源中国", brief: "目前领先的中文开源技术社区。为IT 开发者提供了的一个发现、使用、并交流开源技术的平台。",
        address: "https://www.oschina.net/",
        icon: "https://www.oschina.net/favicon.ico"
    },
    {
        name: "知乎", brief: "中文互联网高质量的问答社区和创作者聚集的原创内容平台。",
        address: "https://www.zhihu.com/",
        icon: "https://www.zhihu.com/favicon.ico"
    },
    {
        name: "掘金", brief: "一个帮助开发者成长的社区。",
        address: "https://juejin.cn/",
        icon: "https://juejin.cn/favicon.ico"
    },
    {
        name: "stackoverflow", brief: "一个最大、最受信任的在线社区，供开发者学习、分享编程知识并建立职业生涯。",
        address: "https://stackoverflow.com/",
        icon: "https://stackoverflow.com/favicon.ico"
    }
]
const learnWebList: webItem[] = [
    {
        name: "Vue", brief: "一套用于构建用户界面的渐进式框架。",
        address: "https://cn.vuejs.org/index.html",
        icon: "https://cn.vuejs.org//images/logo.svg"
    },
    {
        name: "React", brief: "用于构建用户界面的 JavaScript 库。",
        address: "https://zh-hans.reactjs.org/",
        icon: "https://zh-hans.reactjs.org/favicon.ico"
    },
    {
        name: "力扣", brief: "全球极客挚爱的技术成长平台。",
        address: "https://leetcode-cn.com/",
        icon: "https://leetcode-cn.com/favicon.ico"
    },
    {
        name: "菜鸟教程", brief: "提供了编程的基础技术教程, 介绍了各种编程语言的基础知识。",
        address: "https://www.runoob.com/",
        icon: "https://www.runoob.com/favicon.ico"
    },
    {
        name: "Mdn", brief: "提供有关开放式Web技术的信息，包括用于网站和渐进式Web应用的HTML、CSS和API。",
        address: "https://developer.mozilla.org/zh-CN/",
        icon: "https://developer.mozilla.org/favicon.ico"
    },
    {
        name: "牛客网", brief: "就业找工作一站解决。求职神器，在线进行企业校招实习笔试面试真题模拟考试练习。",
        address: "https://www.nowcoder.com/",
        icon: "https://www.nowcoder.com/favicon.ico"
    },
    {
        name: "慕课网", brief: "IT技能学习平台，涉及60类主流技术语言。",
        address: "https://www.imooc.com/",
        icon: "https://www.imooc.com/favicon.ico"
    }
]
const commonWebList: webItem[] = [
    {
        name: "Vue", brief: "一套用于构建用户界面的渐进式框架。",
        address: "https://cn.vuejs.org/index.html",
        icon: "https://cn.vuejs.org//images/logo.svg"
    },
    {
        name: "Github", brief: "全球UI设计师作品分享平台。",
        address: "https://github.com/",
        icon: "https://github.com/favicon.ico"
    },
    {
        name: "力扣", brief: "全球极客挚爱的技术成长平台。",
        address: "https://leetcode-cn.com/",
        icon: "https://leetcode-cn.com/favicon.ico"
    },
    {
        name: "菜鸟教程", brief: "提供了编程的基础技术教程, 介绍了各种编程语言的基础知识。",
        address: "https://www.runoob.com/",
        icon: "https://www.runoob.com/favicon.ico"
    },
    {
        name: "知乎", brief: "中文互联网高质量的问答社区和创作者聚集的原创内容平台。",
        address: "https://www.zhihu.com/",
        icon: "https://www.zhihu.com/favicon.ico"
    },
    {
        name: "牛客网", brief: "就业找工作一站解决。求职神器，在线进行企业校招实习笔试面试真题模拟考试练习。",
        address: "https://www.nowcoder.com/",
        icon: "https://www.nowcoder.com/favicon.ico"
    }
]

const tvWebList: webItem[] = [
    {
        name: "腾讯视频", brief: "中国领先的在线视频媒体平台。",
        address: "https://v.qq.com/",
        icon: "https://v.qq.com/favicon.ico"
    },
    {
        name: "爱奇艺", brief: "拥有海量、优质、高清的网络视频的大型视频网站。",
        address: "https://www.iqiyi.com/",
        icon: "https://www.iqiyi.com/favicon.ico"
    },
    {
        name: "优酷", brief: "阿里巴巴集团旗下的一家大型影片分享网站",
        address: "https://www.youku.com/",
        icon: "https://www.youku.com/favicon.ico"
    },
    {
        name: "哔哩哔哩", brief: "国内知名的视频弹幕网站。",
        address: "https://www.bilibili.com/",
        icon: "https://www.bilibili.com/favicon.ico"
    },
    {
        name: "看韩剧", brief: "国内最大的韩剧网站。",
        address: "https://www.kan.cc/",
        icon: "https://www.kan.cc/statics/logo/favicon.ico"
    }
]
const listenWebList: webItem[] = [
    {
        name: "网易云", brief: "一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。",
        address: "https://music.163.com/",
        icon: "https://s1.music.126.net/style/favicon.ico?v20180823"
    },
    {
        name: "酷狗音乐", brief: "酷狗官方唯一指定的下载站点。",
        address: "https://www.kugou.com/",
        icon: "https://www.kugou.com/root/favicon.ico"
    },
    {
        name: "QQ音乐", brief: "腾讯公司推出的一款网络音乐服务产品。",
        address: "https://y.qq.com/",
        icon: "https://y.qq.com/favicon.ico"
    },
    {
        name: "酷我音乐", brief: "中国最新最全的在线正版音乐网站。",
        address: "http://www.kuwo.cn/www/",
        icon: "http://www.kuwo.cn/www/favicon.ico"
    }
]


const xxx = {
    blogWebList,
    commonWebList,
    learnWebList,
    tvWebList,
    listenWebList
}

export { xxx }
