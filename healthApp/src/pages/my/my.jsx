import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";

import {
  AtForm,
  AtAvatar,
  AtToast,
  AtTextarea,
  AtInput,
  AtButton,
} from "taro-ui";

import "./my.less";
import json from "../../mock/data.json";
Taro.setStorageSync("json", json);
// 个人中心 - 我的页面
export default class My extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      userInfo: {
        avatarUrl: "https://jdc.jd.com/img/200",
        nikeName: "",
      },
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "个人中心",
  };
  handleChange(value) {
    this.setState({
      value,
    });
  }
  onSubmit(event) {
    console.log(this.state.value);
  }
  onReset(event) {
    this.setState({
      value: "",
    });
  }

  setUserInfo = (userInfo) => {
    console.log(userInfo);
    this.setState(
      {
        userInfo,
      },
      () => {
        Taro.showToast({
          title: "登录成功",
          icon: "success",
        });
        "", this.state.userInfo;
      }
    );
  };

  userInfo = (e) => {
    let userInfo = e.detail.userInfo;
    this.setUserInfo(userInfo);
    console.log(e);
  };

  toHome = (e) => {
    let type = e.currentTarget.dataset.index;
    console.log(e);

    Taro.navigateTo({
      url: "../sport/sport?type=" + type,
    });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <View className="my">
        <View className="header-wrap">
          <AtAvatar
            circle
            image={userInfo.avatarUrl}
            className="avatar"
          ></AtAvatar>
          <View className="right">
            <View className="title">{userInfo.nickName}</View>
            {userInfo.nikeName == "" ? (
              <AtButton
                openType="getUserInfo"
                onGetUserInfo={this.userInfo}
                className="btn"
              >
                身份未绑定
              </AtButton>
            ) : (
              ""
            )}
          </View>
        </View>
        {/* <View className="info-wrap blue-color">
          <Image className="img"></Image>
          <View className="right">
            <View data-index="0" onClick={this.toHome} className="title">
              文章管理
            </View>
            <View className="f-title">管理我发布的所有文章</View>
          </View>
        </View> */}
        <View className="info-wrap yellow-color">
          <Image className="img"></Image>
          <View data-index="1" onClick={this.toHome} className="right">
            <View className="title">我的健康信息</View>
            <View className="f-title">查看我录入的健康信息</View>
          </View>
        </View>
        <View className="info-wrap pink-color">
          <Image className="img"></Image>
          <View className="right" data-index="2" onClick={this.toHome}>
            <View className="title">我的运动信息</View>
            <View className="f-title">查看我的运动信息</View>
          </View>
        </View>
        <View className="info-wrap skyblue-color">
          <Image className="img"></Image>
          <View className="right">
            <View className="title">其他设置</View>
            <View className="f-title"></View>
          </View>
        </View>
      </View>
    );
  }
}
