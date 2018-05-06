import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Switch,
    Image,
    TouchableOpacity,
    Platform,
    BackHandler
} from 'react-native';
import comstyle from '../../../common/CommonStyle'
import {API,postFetch} from '../../../common/GConst';
import Toast from "react-native-easy-toast";
import Contants from '../../../common/Contants'
import LoactionModal from '../../window/nativemodal/LoactionModal'
export default class MineMessage extends Component{
    constructor(props){
        super(props)
        this.state={
            falseSwitchIsOn:false,
            money:0,
            fixDeposit:0,
            name:'',
            description:'',
            pic:""
        }
    }
    _androidBack = () => {

        this.props.navigation.goBack()

        return true;

    }
    componentWillUnmount(){
        if(Platform.OS==='android'){
            BackHandler.removeEventListener('hardwareBackPress', this._androidBack);
        }
    }

    componentDidMount(){
        if(Platform.OS==='android'){
            BackHandler.addEventListener('hardwareBackPress', this._androidBack);}
        postFetch(API.Personnal,null,(result)=>{
            // alert(JSON.stringify(result))
            if(result.status==1){
                this.setState({
                    // money:result.data.account,
                    // fixDeposit:result.data.fixDeposit
                    // money:result.data.userMemberAccount.account,
                    name:result.data.userMember.nickname,
                    description:'我是一个大哥',//result.data.userMember.introduction,
                    pic:'http://122.112.196.52:8080/fileService/uploads/2018/04/24/15245677336875.png',//result.data.userMember.picUrl,

                })
                if(result.data.goWork==1){
                    this.setState({
                        falseSwitchIsOn:true
                    })
                }else {
                    this.setState({
                        falseSwitchIsOn:false
                    })
                }
            }
        })
    }
    render(){
        return(<View style={[comstyle.contain,{backgroundColor:'#f9f9f9'}]}>
            <View style={styles.tou}>
                <View style={styles.flex}>
                <Image source={{uri:this.state.pic}} style={[styles.img,{width:45,height:45,borderRadius:4}]}/>
                <View style={styles.wenzi}>
                    <Text>{this.state.name}</Text>
                    <Text>{this.state.description==undefined?'':this.state.description}</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.right} onPress={()=>{
                    this.props.navigation.navigate('MyGreated')
                }
                }>
                <Image source={require('../../../img/shezhi/erweima.png')} style={styles.switch}/>
                <Image source={require('../../../img/shezhi/jian.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{width:Contants.Screen.width,height:1,backgroundColor:'#E5E5E5'}}></View>
            <View style={[comstyle.item,{marginTop:0}]}>
                <View style={styles.kaiqi}>
           <Image source={require('../../../img/dian/kaiqishangb.png')} style={styles.img}/>
            <Text style={styles.text}>开启上班</Text>
                </View>
                <TouchableOpacity style={{marginRight:20}} onPress={()=>{
                    this.setState({ falseSwitchIsOn:!this.state.falseSwitchIsOn })
                    if(this.state.falseSwitchIsOn==false){
                        postFetch(API.KaiShang,{goWork:1},(result)=>{
                            // alert(JSON.stringify(result))
                            if(result.status==1){
                                LoactionModal.startLocationUpload()
                                this._toastf.show('开启上班')
                            }
                        })
                    }else {
                        postFetch(API.KaiShang,{goWork:0},(result)=>{
                            alert(JSON.stringify(result))

                            if(result.status==1){
                                LoactionModal.stopLocationUpload()
                                this._toastf.show('关闭成功')
                            }
                        })
                    }
                }}>
                    <Image  source={ this.state.falseSwitchIsOn? require('../../../img/goods/switchon.png'):
                        require('../../../img/goods/switchoff.png')}/>
                </TouchableOpacity>

                {/*<Switch onValueChange={(value)=>*/}
                {/*{this.setState({falseSwitchIsOn:value})*/}
                    {/*if(this.state.falseSwitchIsOn==false){*/}
                        {/*postFetch(API.KaiShang,{goWork:1},(result)=>{*/}
                            {/*// alert(JSON.stringify(result))*/}
                            {/*if(result.status==1){*/}
                                {/*LoactionModal.startLocationUpload()*/}
                                {/*this._toastf.show('开启上班')*/}
                            {/*}*/}
                        {/*})*/}
                    {/*}else {*/}
                        {/*postFetch(API.KaiShang,{goWork:0},(result)=>{*/}
                            {/*alert(JSON.stringify(result))*/}

                            {/*if(result.status==1){*/}
                                {/*LoactionModal.stopLocationUpload()*/}
                                {/*this._toastf.show('关闭成功')*/}
                            {/*}*/}
                        {/*})*/}
                    {/*}*/}
                {/*}}*/}
                        {/*value={this.state.falseSwitchIsOn}*/}
                        {/*onTintColor='#FF305E'*/}
                    {/*// // tintColor='blue'*/}
                        {/*thumbTintColor='white'*/}
                    {/*style={styles.switch}*/}

                {/*/>*/}

            </View>



            <View style={{width:Contants.Screen.width,height:1,backgroundColor:'#E5E5E5'}}></View>
            <TouchableOpacity style={[comstyle.item,{marginTop:0}]} onPress={()=>{
                this.props.navigation.navigate('AccountInCom')
            }}>
                <View style={styles.kaiqi}>
                    <Image source={require('../../../img/shezhi/dongtai.png')} style={styles.img}/>
                    <Text style={styles.text}>收资记录</Text>
                </View>


                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('AccountInCom')
                }} style={styles.switch}>
                    <Image source={require('../../../img/shezhi/jian.png')}/>
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={{width:Contants.Screen.width,height:1,backgroundColor:'#E5E5E5'}}></View>
            <TouchableOpacity style={[comstyle.item,{marginTop:0}]} onPress={()=>{
                this.props.navigation.navigate('AccountSercity')
            }}>
                <View style={styles.kaiqi}>
                    <Image source={require('../../../img/dian/account.png')} style={styles.img}/>
                    <Text style={styles.text}>账号与安全</Text>
                </View>

                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('AccountSercity')
                    }} style={styles.switch}>
                        <Image source={require('../../../img/shezhi/jian.png')}/>
                    </TouchableOpacity>


            </TouchableOpacity>
            <View style={{width:Contants.Screen.width,height:1,backgroundColor:'#E5E5E5'}}></View>
            <TouchableOpacity style={[comstyle.item,{marginTop:0}]} onPress={this.shouc.bind(this)}>
                <View style={styles.kaiqi}>
                    <Image source={require('../../../img/dian/news.png')} style={styles.img}/>
                    <Text style={styles.text}>新消息提醒</Text>
                </View>
                {/*<Text onPress={this.shouc.bind(this)}> >     </Text>*/}
                <TouchableOpacity onPress={this.shouc.bind(this)} style={styles.switch}>
                    <Image source={require('../../../img/shezhi/jian.png')}/>
                </TouchableOpacity>
            </TouchableOpacity>
            <Toast ref={(e) => {
                this._toastf = e
            }}
                   position='center'
            />
        </View>)
    }
    shouc(){
        this.props.navigation.navigate('MineEnjoyed');
    }

}
const  styles=StyleSheet.create({
    switch:{
        marginRight:20
    },
    kaiqi:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    img:{
        marginLeft:20
    },
    text:{
        marginLeft:5
    },
    tou:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
        alignItems:'center',
        marginTop:20,
        justifyContent:'space-between'

    },
    wenzi:{
        flexDirection:'column',
        marginLeft:5,
        justifyContent:"flex-start",

    },
    right:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        marginRight:20
    },
    flex:{
        flexDirection:'row',
        justifyContent:'flex-start',

    }
})