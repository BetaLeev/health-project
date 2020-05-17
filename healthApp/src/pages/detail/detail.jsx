import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./detail.less";

export default class Detail extends Component {
  state = {
    info: "",
  };

  componentWillMount() {}

  componentDidMount() {
    const info = JSON.parse(this.$router.params.c);
    info.content = info.content
      .split("<br>")
      .map((curr) => {
        return `<div style='line-height:25px;text-align: left;margin-top: 10px;'>${curr}</div>`;
      })
      .join("");
    this.setState({
      info,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "文章详情",
  };

  render() {
    console.log(this.state.info);
    const { title, url, content } = this.state.info;
    return (
      <View className="detail">
        <View className="title">{title}</View>
        <Image className="img" src={url}></Image>
        <View className="content-wrap">
          <RichText nodes={content} />
        </View>
      </View>
    );
  }
}
