import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import json from "../../mock/data.json";
import { AtTextarea, AtButton } from "taro-ui";

import "./ask.less";

export default class Ask extends Component {
  constructor() {
    this.state = {
      value: "",
    };
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({
      questions: json.data.question,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "健康咨询中心",
  };
  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    const { questions } = this.state;
    return (
      <View className="ask">
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={200}
          placeholder="你的问题是..."
        />

        <View style="margin:20px 0px">
          <AtButton type="primary">发布问题</AtButton>
        </View>
        <View className="list-title">最新资讯信息</View>
        {questions.map((item, index) => {
          return (
            <View key={index} className="litt-wrap">
              <Image src={item.url} className="img"></Image>
              <View className="content">
                <View className="content-title">{item.title}</View>
                <View className="content-info">{item.content}</View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
