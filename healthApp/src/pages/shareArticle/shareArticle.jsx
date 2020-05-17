import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtInput, AtTextarea, AtButton, AtToast } from 'taro-ui'

import "./shareArticle.less";

export default class shareArticle extends Component {

  config = {
    navigationBarTitleText: '发布文章'
  }

  state={
    titleValue: '',
    articleValue: '',
    isOpened: false,
    totastText: ''
  }

  handleChange (titleValue) {
    this.setState({
      titleValue
    })
    return titleValue
  }

  handleTextAreaChange (articleValue) {
    this.setState({
      articleValue
    })
  }

  publishArticle = () => {
    const bool = this.checkValue([{
      value: this.state.titleValue,
      totastText: '请输入标题'
    },{
      value: this.state.articleValue,
      totastText: '请输入文章内容'
    }])
    if (!bool) return false
    let json = Taro.getStorageSync('json') || {data:{news:[]}}
    json.data.news.unshift({
      title: this.state.titleValue,
      img: "../img/food-2.png",
      content: this.state.articleValue
    })
    Taro.setStorageSync('json',json)
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }

  checkValue = (arr) => {
    return !arr.some((curr)=>{
      if (!curr.value) {
        this.setState({
          isOpened: true,
          totastText: curr.totastText
        })
        return true
      } 
    })
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <AtInput
          title='文章标题'
          type='text'
          placeholder='请输入文章标题'
          value={this.state.titleValue}
          onChange={this.handleChange.bind(this)}
        />
        <View className='article-content'>文章内容</View>
        <AtTextarea
          className='textarea'
          value={this.state.articleValue}
          onChange={this.handleTextAreaChange.bind(this)}
          maxLength={200}
          placeholder='请输入文章内容...'
        />
        <AtButton
          className='publish-article'
          type='primary'
          full
          onClick={this.publishArticle.bind(this)}
        >确认发布</AtButton>

        <AtToast isOpened={this.state.isOpened} text={this.state.totastText}></AtToast>

      </View>
    );
  }
}