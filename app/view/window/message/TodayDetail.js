import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';
import comstyle from '../../../common/CommonStyle';
import {API,postFetch} from '../../../common/GConst';
export default class TodayDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: 0,
            beforMonthFee: 0,
            yesterdayFee: 0,

            money:'',
            changedir:'',
            paytype:'',
            goodsdes:'',
            account:'',
            mine:'',
            createtime:'',
            orderid:'',
        }
    }
    componentDidMount(){
        const list=this.props.navigation.state.params.data;
        postFetch(API.TodayDetail,{id:list,type:2},(result)=>{
            //alert(JSON.stringify(result))
            if(result.status==1){
                this.setState({
                    money:8,//result.data.quantity,
                    changedir:0,//result.data.changeDirection,
                    paytype:'八月消除',//result.data.paymentMode,
                    goodsdes:'外卖订单',//result.data.changeReason,
                    account:result.data.reciprocalAccount,
                    mine:result.data.accountId,
                    createtime:'2018/7/6 13:13',//result.data.createTime,
                    orderid:'093845786744748589',//result.data.orderId,

                })
            }
        })
    }
    render(){
        return(<View style={[comstyle.contain,{backgroundColor:'#f9f9f9'}]}>
            <View style={styles.con}>
                <View style={styles.first}>
                    <Image style={{marginBottom:-10}} source={require('../../../img/shezhi/renmb.png')}/>
                    <Text style={{fontSize:36,color:this.state.changedir==0?'#FF305E':'#459CF4'}}>
                        {this.state.money}</Text>
                </View>
                <View style={styles.sec}>
                    <Text>交易成功</Text>
                </View>
                <View style={comstyle.item}>
                    <Text style={comstyle.maleft}>付款方</Text>
                    <Text style={comstyle.textright}>{this.state.paytype}</Text>
                </View>
                <View style={comstyle.item}>
                    <Text style={comstyle.maleft}>商品说明</Text>
                    <Text style={comstyle.textright}>{this.state.goodsdes}</Text>
                </View>
                {/*<View style={comstyle.item}>*/}
                    {/*<Text style={comstyle.maleft}>对方账户</Text>*/}
                    {/*<Text style={comstyle.textright}>{this.state.account}</Text>*/}
                {/*</View>*/}
                <View style={comstyle.item}>
                    <View style={comstyle.contain}/>
                    <View style={styles.time}>
                        <Text style={comstyle.textright}>{this.state.mine}</Text>
                    </View>

                </View>
                <View style={comstyle.heng}/>
                <View style={comstyle.item}>
                    <Text style={comstyle.maleft}>创建时间</Text>
                    <View style={[comstyle.time,{marginRight:20}]}>
                        {/*<Text style={comstyle.textright}>{this.state.createtime}</Text>*/}
                        <Text>{new Date(this.state.createtime).getFullYear()+'-'}</Text>
                        <Text>{new Date(this.state.createtime).getMonth()+1+'-'}</Text>
                        <Text>{new Date(this.state.createtime).getDate()}</Text>
                        <Text style={{marginLeft:10}}>{new Date(this.state.createtime).getHours()+':'}</Text>
                        <Text>{new Date(this.state.createtime).getMinutes()}</Text>
                        {/*<Text style={{marginRight:20}}>{new Date(this.state.createtime).getSeconds()}</Text>*/}
                    </View>
                </View>
                <View style={comstyle.item}>
                    <Text style={comstyle.maleft}>订单号</Text>
                    <Text style={comstyle.textright}>{this.state.orderid}</Text>
                </View>

            </View>
            <View style={styles.sec}>
                <Text style={styles.text}>对此订单有疑问 | 投诉</Text>
            </View>
        </View>)
    }

}
const styles=StyleSheet.create({
    con:{
        // height:351,
        backgroundColor:'white',
        flexDirection:'column',
        marginTop:20
    },
    first:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    sec:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize:12,
        color:'#459CF4'
    },
    time:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',

    }


})