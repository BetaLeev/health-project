import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import "./index.less";

// 入口页面
export default class Index extends Component {
  state = {
    swipers: [],
    json: Taro.getStorageSync("json"),
  };
  componentWillMount() {}

  componentDidMount() {
    this.setState({
      swipers: this.state.json.data.swipers,
      news: this.state.json.data.news,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "个人健康管理系统",
  };

  render() {
    const { swipers, news } = this.state;
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          {swipers.map((item, index) => {
            return (
              <SwiperItem key={item.index}>
                <Image
                  mode="aspectFit"
                  style="width:100%;"
                  src={
                    index == 0
                      ? require("../../img/food-1.png")
                      : require("../../img/food-2.png")
                  }
                  alt=""
                />
              </SwiperItem>
            );
          })}
        </Swiper>
        <View className="nav-title">健康秘籍分享</View>
        {news &&
          news.map((item, index) => {
            let tmp = JSON.stringify(item);
            return (
              <Navigator
                openType="navigate"
                url={`/pages/detail/detail?c=${tmp}`}
                key={item.index}
              >
                <View className="list-wrap" key={item.index}>
                  <View className="list-title">{item.title}</View>
                  <View className="list-content">{item.content}</View>
                  <Image className="list-img" src={item.url}></Image>
                </View>
              </Navigator>
            );
          })}
      </View>
    );
  }
}
