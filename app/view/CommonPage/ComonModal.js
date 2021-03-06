
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native';
import Contants from '../../common/Contants'
import Modal from 'react-native-modal';
export default class ComonModal extends Component{
    constructor(props){
        super(props)
        this.state={
            isshowmodal:false,
            isSearch:false
        }
    }
    render(){
        if(Platform.OS=='ios'){
            return(<View style={{zIndex:100}}>
                {this.renderHeader()}
                <Modal
                    isVisible={this.state.isshowmodal}
                    hideOnBack={true}
                    transparent={true}
                    style={styles.modalstyles}
                    //backdropColor='transferent'
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                >

                    <Image source={require("../../img/page/background.png")} style={{marginRight:2,marginTop:25}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={styles.gonggao} onPress={this.publicord.bind(this)}>
                                <Image source={require("../../img/order/diaodu.png")} />
                                <Text>调 度</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sousuo} onPress={this.searchview.bind(this)}>
                                <Image source={require("../../img/order/shousuo.png")} />
                                <Text>搜 索</Text>
                            </TouchableOpacity>
                            {/*中心红色按钮*/}
                            <TouchableOpacity style={styles.btncons} onPress={()=>{
                                this.setState({
                                    isshowmodal:false
                                })
                            }}>

                                <Image source={require("../../img/page/buttonselt.png")} style={styles.btnimgs} />
                            </TouchableOpacity>
                        </View>
                        {/*下面的订单等*/}
                        <Image source={require('../../img/daisong/xiaokuang.png')} style={{marginRight:Contants.Screen.width/3,position:'absolute',alignItems:'center',justifyContent:'center',marginTop:Contants.Screen.height/8}}>
                            <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}} onPress={()=>{
                                this.setState({isshowmodal:false})
                                this.props.navigation.navigate('Index',{data:0});
                            }}>
                                <Image source={require('../../img/daisong/list.png')}/>
                                <Text style={{marginLeft:20}}>订单列表</Text>
                            </TouchableOpacity>
                        </Image>
                        <Image source={require('../../img/daisong/xiaokuang.png')} style={{marginRight:Contants.Screen.width/3,position:'absolute',alignItems:'center',justifyContent:'center',marginTop:Contants.Screen.height/5+20}}>
                            <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}} onPress={()=>{
                                this.setState({isshowmodal:false})
                                this.props.navigation.navigate('OrderGaiLan')
                            }}>
                                <Image source={require('../../img/daisong/gailan.png')}/>
                                <Text style={{marginLeft:20}}>订单概览</Text>
                            </TouchableOpacity>
                        </Image>

                        {/*下面的订单等*/}
                        <View style={{flexDirection:'column',justifyContent:"flex-end",alignSelf:'flex-end',marginRight:15}}>
                            <TouchableOpacity style={styles.dingdan} onPress={this.dingdan.bind(this)}>
                                <Image source={require("../../img/order/dingdan.png")} />
                                <Text>订 单</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.xiaoxi} onPress={this.news.bind(this)}>
                                <Image source={require("../../img/order/message.png")} />
                                <Text>消 息</Text>
                            </TouchableOpacity>
                            {/*<TouchableOpacity style={styles.xiaoxi} onPress={this.gongju.bind(this)}>*/}
                            {/*<Image source={require("./img/order/tools.png")} />*/}
                            {/*<Text>工 具</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity style={styles.xiaoxi} onPress={this.settingview.bind(this)}>
                                <Image source={require("../../img/order/mine.png")}/>
                                <Text>我 的</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.xiaoxi} onPress={this.hexiao.bind(this)}>
                                <Image source={require("../../img/order/hexiao.png")}/>
                                <Text>扫 码</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </Modal>
                <Modal
                    isVisible={this.state.isSearch}
                    hideOnBack={true}
                    transparent={true}
                    style={styles.modalstyle}
                    //backdropColor='transferent'
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                >
                    {/*点击外框，键盘消失*/}
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({isSearch: false});

                        }}
                        style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
                    />
                    <View style={{flexDirection:'column',width:Contants.Screen.width,height:150}}>
                        <TouchableOpacity style={styles.close} onPress={()=>{this.setState({isSearch:false})}}>
                            <Image source={require('../../img/search/close.png')} style={styles.closeimg}/>
                        </TouchableOpacity>
                        <View style={styles.first}>
                            <Image source={require('../../img/search/classify.png')} style={styles.news}>
                                <Text style={styles.totle}>消息/联系人</Text>
                            </Image>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SearchOrder')
                                this.setState({
                                    isSearch:false
                                })
                            }}>
                                <Image source={require('../../img/search/classify.png')} style={styles.news}>
                                    <Text style={styles.totle}>订单</Text>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>)
        }else {


        return(
            <View >
                {this.renderHeader()}
                <Modal
                    isVisible={this.state.isshowmodal}
                    hideOnBack={true}
                    transparent={true}
                    style={styles.modalstyles}
                    //backdropColor='transferent'
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                >

                    <Image source={require("../../img/page/background.png")} style={{marginRight:2}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={styles.gonggao} onPress={this.publicord.bind(this)}>
                                <Image source={require("../../img/order/diaodu.png")} />
                                <Text>调 度</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sousuo} onPress={this.searchview.bind(this)}>
                                <Image source={require("../../img/order/shousuo.png")} />
                                <Text>搜 索</Text>
                            </TouchableOpacity>
                            {/*中心红色按钮*/}
                            <TouchableOpacity style={styles.btncons} onPress={()=>{
                                this.setState({
                                    isshowmodal:false
                                })
                            }}>

                                <Image source={require("../../img/page/buttonselt.png")} style={styles.btnimgs} />
                            </TouchableOpacity>
                        </View>
                        {/*下面的订单等*/}
                        <Image source={require('../../img/daisong/xiaokuang.png')} style={{marginRight:Contants.Screen.width/3,position:'absolute',alignItems:'center',justifyContent:'center',marginTop:Contants.Screen.height/8}}>
                            <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}} onPress={()=>{
                                this.setState({isshowmodal:false})
                                this.props.navigation.navigate('Index',{data:0});
                            }}>
                                <Image source={require('../../img/daisong/list.png')}/>
                                <Text style={{marginLeft:20}}>订单列表</Text>
                            </TouchableOpacity>
                        </Image>
                        {/*<TouchableOpacity onPress={()=>{this.props.navigation.navigate('OrderGaiLan')}}>*/}
                        <Image source={require('../../img/daisong/xiaokuang.png')} style={{marginRight:Contants.Screen.width/3,position:'absolute',alignItems:'center',justifyContent:'center',marginTop:Contants.Screen.height/5+20}}>
                            <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}} onPress={()=>{
                                this.setState({isshowmodal:false})
                                this.props.navigation.navigate('OrderGaiLan')}}>
                                <Image source={require('../../img/daisong/gailan.png')}/>
                                <Text style={{marginLeft:20}}>订单概览</Text>
                            </TouchableOpacity>
                        </Image>
                        {/*</TouchableOpacity>*/}

                        {/*下面的订单等*/}
                        <View style={{flexDirection:'column',justifyContent:"flex-end",alignSelf:'flex-end',marginRight:15}}>
                            <TouchableOpacity style={styles.dingdan} onPress={this.dingdan.bind(this)}>
                                <Image source={require("../../img/order/dingdan.png")} />
                                <Text>订 单</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.xiaoxi} onPress={this.news.bind(this)}>
                                <Image source={require("../../img/order/message.png")} />
                                <Text>消 息</Text>
                            </TouchableOpacity>
                            {/*<TouchableOpacity style={styles.xiaoxi} onPress={this.gongju.bind(this)}>*/}
                            {/*<Image source={require("./img/order/tools.png")} />*/}
                            {/*<Text>工 具</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity style={styles.xiaoxi} onPress={this.settingview.bind(this)}>
                                <Image source={require("../../img/order/mine.png")}/>
                                <Text>我 的</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.xiaoxi} onPress={this.hexiao.bind(this)}>
                                <Image source={require("../../img/order/hexiao.png")}/>
                                <Text>扫 码</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </Modal>
                <Modal
                    isVisible={this.state.isSearch}
                    hideOnBack={true}
                    transparent={true}
                    style={styles.modalstyle}
                    //backdropColor='transferent'
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                >
                    {/*点击外框，键盘消失*/}
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({isSearch: false});

                        }}
                        style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
                    />
                    <View style={{flexDirection:'column',width:Contants.Screen.width,height:150}}>
                        <TouchableOpacity style={styles.close} onPress={()=>{this.setState({isSearch:false})}}>
                            <Image source={require('../../img/search/close.png')} style={styles.closeimg}/>
                        </TouchableOpacity>
                        <View style={styles.first}>
                            <Image source={require('../../img/search/classify.png')} style={styles.news}>
                                <Text style={styles.totle}>消息/联系人</Text>
                            </Image>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SearchOrder')
                                this.setState({
                                    isSearch:false
                                })
                            }}>
                                <Image source={require('../../img/search/classify.png')} style={styles.news}>
                                    <Text style={styles.totle}>订单</Text>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
        </View>)
        }
    }
    renderHeader(){
        return(

                <View style={styles.headercontainer}>
                    <TouchableOpacity style={styles.btncon} onPress={()=>{
                        this.setState({
                            isshowmodal:true
                        })
                    }}>

                        <Image source={require("../../img/page/button.png")} style={styles.btnimg}/>
                    </TouchableOpacity>
                </View>

        )
    }
    publicord(){
         // this.props.navigation.navigate("Login")
        this.setState({
            isshowmodal:false
        })
       // this.state.props.navigation.navigate('Login')
    }
    searchview(){
        // this.props.navigation.navigate("SearchView")
        this.setState({
            isshowmodal:false,
            // isSearch:true
        },()=>{
            setTimeout(()=>{
                this.setState({
                    isSearch:true
                })
            },500)

        })
    }
    dingdan(){
        this.props.navigation.navigate('Index',{data:0})
        this.setState({
            isshowmodal:false
        })
    }
    settingview(){
        // this.props.navigation.navigate('MessageMain')
        this.props.navigation.navigate('MineMessage')
        this.setState({
            isshowmodal:false
        })
    }
    news(){
        this.props.navigation.navigate('NewsMain')
        this.setState({
            isshowmodal:false
        })
    }
    hexiao(){
        this.props.navigation.navigate('HeXiaoView')
        this.setState({
            isshowmodal:false
        })
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img:{
        width:20,
        height:20,
        backgroundColor:"white"
    },
    btnimg:{
        width:60,
        height:60,
        marginRight:20,
    },
    btncon:{
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:30,
        zIndex:10
    },
    headercontainer:{
        zIndex:1000,
        // marginBottom:40,
        position:'absolute',
        // marginLeft:Contants.Screen.width/2+80,
        marginTop:10,
        alignSelf:'flex-end',
    },
    modalstyle:{
        backgroundColor:"transparent",
        margin:0,
        position:'absolute',
        // marginLeft:Contants.Screen.width/2+80,
        marginTop:20
    },
    modalstyles:{
        backgroundColor:"transparent",
        margin:0,
        position:'absolute',
        // marginLeft:Contants.Screen.width/2+80,
        marginTop:5,
        alignSelf:'flex-end',
    },
    btncons:{
        marginTop:5,
        alignItems:"center",
        justifyContent:"center",
        // marginBottom:30,
        // marginLeft:Contants.Screen.width/3+29
        marginLeft:30
    },


    gonggao:{
        flexDirection:'column',
        // position:'absolute',
        marginLeft:30,
        // marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },

    sousuo:{
        flexDirection:'column',
        // position:'absolute',
        // marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:40,
    },
    dingdan:{
        flexDirection:'column',

        alignItems:'center',
        justifyContent:'center',
        // marginLeft:Contants.Screen.width/3+50
        marginTop:30
    },
    xiaoxi:{
        flexDirection:'column',

        alignItems:'center',
        justifyContent:'center',
        // marginLeft:Contants.Screen.width/3+50,
        marginTop:30
    },
    close:{
        marginTop:30,
        flexDirection:'row',
        // justifyContent:'flex-end',
    },
    closeimg:{
        alignSelf:'flex-end',
        marginLeft:"80%"
    },
    first:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    news:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:15
    },
    totle:{
        fontSize:14,
        color:'#4D4D4D'
    },
});