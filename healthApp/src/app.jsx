import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";
import "taro-ui/dist/style/index.scss";
import "./app.less";
import { AtTabBar } from "taro-ui";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    sitemapLocation: "sitemap.json",
    pages: [
      "pages/index/index",
      "pages/shareArticle/shareArticle",
      "pages/health/health",
      "pages/ask/ask",
      "pages/my/my",
      "pages/detail/detail",
      "pages/sport/sport",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "个人健康管理",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./icon/tb/index.png",
          selectedIconPath: "./icon/tb/index_s.png",
          text: "首页",
        },
        {
          pagePath: "pages/health/health",
          iconPath: "./icon/tb/jk.png",
          selectedIconPath: "./icon/tb/jk_s.png",
          text: "健康管理",
        },
        {
          pagePath: "pages/ask/ask",
          iconPath: "./icon/tb/news.png",
          selectedIconPath: "./icon/tb/news_s.png",
          text: "健康资讯",
        },
        {
          pagePath: "pages/my/my",
          iconPath: "./icon/tb/mine.png",
          selectedIconPath: "./icon/tb/mine_s.png",
          text: "个人",
        },
      ],
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
    // return (
    //   <AtTabBar
    //     fixed
    //     tabList={[
    //       { title: "待办事项", iconType: "bullet-list", text: "new" },
    //       { title: "拍照", iconType: "camera" },
    //       { title: "文件夹", iconType: "folder", text: "100", max: 99 }
    //     ]}
    //     onClick={this.handleClick.bind(this)}
    //     current={this.state.current}
    //   />
    // );
  }
}

Taro.render(<App />, document.getElementById("app"));
