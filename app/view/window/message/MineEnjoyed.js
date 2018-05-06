import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    Image,
    Platform,
    BackHandler
} from 'react-native';
import comstyle from '../../../common/CommonStyle';
import {API,postFetch} from '../../../common/GConst';
export default class MineEnjoyed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: 0,
            falseSwitchIsOn:false,
            newsworn:true,
            tongzhi:true,
            shenyin:false,
            zhendong:false
        }
    }
    _androidBack = () => {

        this.props.navigation.goBack()

        return true;

    }
    componentDidMount(){
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._androidBack);
        }
    }
    componentWillUnmount(){
        if(Platform.OS==='android'){
            BackHandler.removeEventListener('hardwareBackPress', this._androidBack);
        }
    }
    render(){
        return(<View style={[comstyle.contain,{backgroundColor:'#f9f9f9'}]}>
          <View style={[comstyle.item,{marginTop:20}]}>
              <Text style={comstyle.maleft}>勿扰模式</Text>
              <TouchableOpacity style={{marginRight:20}}
                                onPress={()=>{ this.setState({falseSwitchIsOn:!this.state.falseSwitchIsOn })  }}>
                  <Image  source={ this.state.falseSwitchIsOn? require('../../../img/goods/switchon.png'):
                      require('../../../img/goods/switchoff.png')}/>
              </TouchableOpacity>

              {/*<Switch style={comstyle.textright} onValueChange={(value)=>*/}
              {/*{this.setState({falseSwitchIsOn:value})}}*/}
                      {/*value={this.state.falseSwitchIsOn}*/}
              {/*/>*/}

          </View>
            <View style={[comstyle.item,{marginTop:10}]}>
                <Text style={comstyle.maleft}>接收新消息通知</Text>
                {/*<Switch style={comstyle.textright}/>*/}

                <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{ this.setState({newsworn:!this.state.newsworn })  }}>
                    <Image  source={ this.state.newsworn? require('../../../img/goods/switchon.png'):
                        require('../../../img/goods/switchoff.png')}/>
                </TouchableOpacity>
            </View>
            <View style={[comstyle.item,{marginTop:10}]}>
                <Text style={comstyle.maleft}>通知显示消息详情</Text>

                <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{ this.setState({tongzhi:!this.state.tongzhi })  }}>
                    <Image  source={ this.state.tongzhi? require('../../../img/goods/switchon.png'):
                        require('../../../img/goods/switchoff.png')}/>
                </TouchableOpacity>
            </View>
            <View style={[comstyle.item,{marginTop:10}]}>
                <Text style={comstyle.maleft}>声音</Text>

                <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{ this.setState({shenyin:!this.state.shenyin })  }}>
                    <Image  source={ this.state.shenyin? require('../../../img/goods/switchon.png'):
                        require('../../../img/goods/switchoff.png')}/>
                </TouchableOpacity>
            </View>
            <View style={[comstyle.item,{marginTop:10}]}>
                <Text style={comstyle.maleft}>震动</Text>

                <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{ this.setState({zhendong:!this.state.zhendong })  }}>
                    <Image  source={ this.state.zhendong? require('../../../img/goods/switchon.png'):
                        require('../../../img/goods/switchoff.png')}/>
                </TouchableOpacity>
            </View>

        </View>)
    }
}
const styles=StyleSheet.create({
    fenl:{
        margin:20
    }
})