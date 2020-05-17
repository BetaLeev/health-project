import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtInput, AtButton } from "taro-ui";

import "./sport.less";

export default class Sport extends Component {
  state = {
    title: "",
    value: "",
    lists: [],
    fare: "",
    ganmao: "",
    touyun: "",
    run: "",
    walk: "",
    oterh: "",
  };
  componentWillMount() {
    console.log(this.$router.params);
    let type = this.$router.params.type;
    let info = "";
    let healthInfo = "健康信息管理";
    let sportInfo = "运动信息管理";
    console.log(type);
    if (type === "1") {
      info = healthInfo;
      console.log(type);
    } else if (type === "2") {
      info = sportInfo;
      console.log(type);
    }
    console.log("iiinfo ", info);
    this.setState({
      title: info,
      type,
    });
    Taro.setNavigationBarTitle({
      title: info,
    });
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getData = () => {
    let type = this.state.type;
    let url = "http://localhost:3000/info";
    if (type === "1") {
      url = "http://localhost:3000/info";
    } else if (type === "2") {
      url = "http://localhost:3000/sport";
    }
    Taro.request({
      url: url,
    }).then((res) => {
      console.log(res);
      let lists = res.data;
      this.setState({
        lists,
      });
    });
  };

  setValue = (value, e) => {
    let key = e.target.id;
    this.setState({
      [key]: value,
    });
  };

  save = async () => {
    const type = this.state.type;
    let data = {};
    let url;
    let that = this;
    if (type === "1") {
      data.touteng = this.state.touteng;
      data.fare = this.state.fare;
      data.ganmao = this.state.ganmao;
      data.touyun = this.state.touyun;
      url = "http://localhost:3000/info";
    } else {
      data.walk = this.state.walk;
      data.run = this.state.run;
      data.other = this.state.other;
      url = "http://localhost:3000/sport";
    }

    Taro.request({
      url: url,
      method: "post",
      data,
    }).then((res) => {
      console.log(res);
      Taro.showToast({
        title: "成功",
        icon: "success",
        duration: 2000,
      }).then((res) => {
        console.log(res);
        this.getData();
        that.setState({
          fare: "",
          ganmao: "",
          touyun: "",
          walk: "",
          run: "",
          other: "",
        });
      });
    });
  };
  render() {
    const { title, lists, type } = this.state;
    return (
      <View className="sport">
        <Text className="text-center">
          我的 <Text style="color:red">{title}</Text>
        </Text>

        <View className="text-center">
          我的<Text style="color:red">{title}</Text>记录
        </View>

        <View>录入我的信息</View>

        {type === "1" ? (
          <View>
            <AtInput
              name="fare"
              title="是否发热"
              type="text"
              value={this.state.fare}
              onChange={this.setValue}
            />

            <AtInput
              name="ganmao"
              title="是否感冒"
              type="text"
              value={this.state.ganmao}
              onChange={this.setValue}
            />

            <AtInput
              name="touyun"
              title="是否头晕"
              type="text"
              value={this.state.touyun}
              onChange={this.setValue}
            />
          </View>
        ) : (
          <View>
            <AtInput
              name="run"
              title="跑步时间"
              type="text"
              value={this.state.run}
              onChange={this.setValue}
            />

            <AtInput
              name="walk"
              title="走路时间"
              type="text"
              value={this.state.walk}
              onChange={this.setValue}
            />

            <AtInput
              name="other"
              title="其他运动"
              type="text"
              value={this.state.other}
              onChange={this.setValue}
            />
          </View>
        )}

        <View className="save-history">👇</View>

        <AtButton onClick={this.save}>录入保存</AtButton>

        <View className="save-history">我的历史记录</View>

        {type === "1" ? (
          <View>
            {lists.reverse().map((item) => {
              return (
                <View className="item">
                  <View className="item-text">{item.fare}</View>

                  <View className="item-text"> {item.ganmao}</View>
                  <View className="item-text"> {item.touyun}</View>
                  <View className="item-date">
                    <View className="item-text">
                      {" "}
                      时间：{item.date.split("T")[0]} _
                    </View>
                    <View className="item-text">
                      {item.date.split("T")[1].split(".")[0]}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            {lists.map((item) => {
              return (
                <View className="item">
                  <View className="item-text">{item.run}</View>
                  <View className="item-text"> {item.walk}</View>
                  <View className="item-text"> {item.other}</View>
                  <View className="item-date">
                    <View className="item-text">
                      {" "}
                      时间：{item.date.split("T")[0]} _
                    </View>
                    <View className="item-text">
                      {item.date.split("T")[1].split(".")[0]}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}
