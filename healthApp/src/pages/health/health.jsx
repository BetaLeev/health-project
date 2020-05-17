import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtTimeline, AtSegmentedControl } from "taro-ui";

import "./health.less";

import json from "../../mock/data.json";
export default class Health extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    };
  }
  componentWillMount() {
    this.setState({
      health: json.data.health,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "健康管理",
  };
  handleClick(value) {
    this.setState({
      current: value,
    });
  }

  render() {
    const { health } = this.state;
    return (
      <View className="health">
        <AtSegmentedControl
          values={["早餐", "午餐", "晚餐"]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {this.state.current === 0 ? (
          <View className="tab-content">
            <View className="tab-container">
              <View className="tab-title">早餐</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
            </View>
          </View>
        ) : null}
        {this.state.current === 1 ? (
          <View className="tab-content">
            <View className="tab-container">
              <View className="tab-title">午餐</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
            </View>
          </View>
        ) : null}
        {this.state.current === 2 ? (
          <View className="tab-content">
            <View className="tab-container">
              <View className="tab-title">晚餐</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
              <View className="tab-list">火腿</View>
            </View>
          </View>
        ) : null}

        <View className="line">
          <View className="text-center">健康的生活作息安排!</View>
          <AtTimeline
            items={[
              { title: "刷牙洗脸" },
              { title: "吃早餐", color: "green" },
              { title: "上班", color: "red" },
              { title: "睡觉", color: "yellow" },
            ]}
          ></AtTimeline>
        </View>

        <Navigator
          className="shareArticle"
          openType="navigate"
          url="/pages/shareArticle/shareArticle"
        >
          发布文章
        </Navigator>

        {health.map((item, index) => {
          return (
            <View key={index} className="list-wrap">
              <Image src={item.url} className="img"></Image>
              <View className="title">{item.title}</View>
              <View className="f-title">{item.container}</View>
            </View>
          );
        })}
      </View>
    );
  }
}
