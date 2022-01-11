import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,

} from 'react-native';

import { Actions } from "react-native-router-flux";


const Home = () =>{

    const gotoTransaction = () =>{
        Actions.Transaction()
      }

    return(

        <View style={styles.container}>
            <View style={styles.topNav}>
                <TouchableOpacity>
                    <Image 
                    source={require('../assets/icons/back.png')}
                    style={styles.topNavIconBack}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('../assets/icons/menu--v1.png')}
                    style={styles.topNavIconMore}
                    />
                </TouchableOpacity>

                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', height: 300, width: '100%'}}>
                    <Text style={styles.balance}>
                        Total Balance
                    </Text>

                    <Text style={styles.amount}>
                        $ 13,250
                    </Text>
                </View>
            </View>
            <View style={styles.midSwitchView}>
                <TouchableOpacity style={styles.midSwitch}>
                    <Text style={styles.midSwitchText}>
                        Income
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.midSwitch1}>
                    <Text style={styles.midSwitchText}>
                        Expenses
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calendarView}>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Day
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Week
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarTextGold}>
                       Month
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Year
                   </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.bottomNav}>
               <View style={{flex: 1, marginTop: -30}}>
                    <Image
                    source={require('../assets/icons/plus-math.png')}
                    style={{width: '100%', height: 130}}
                    />
                </View>

                <View style={styles.calendarViewMonth}>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Jun
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Jul
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarTextBlack}>
                       Aug
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Sep
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Oct
                   </Text> 
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.calendarText}>
                       Nov
                   </Text>
               </TouchableOpacity>
                </View>
                
               <View style={styles.creditLimitView}>
                    <TouchableOpacity style={styles.creditLimitTouch} onPress={gotoTransaction}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image
                            source={require('../assets/images/loading.png')}
                            style={{width:80, height: 80, alignSelf: 'center'}}
                            />

                            <View style={{margin:20}}>
                                <Text style={{}}>
                                    Your credit limit
                                </Text>
                                <Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 18}}>
                                    $13,250 of $13,250
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
                

            </View>

        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },
    topNav:{
        flex: 1,
        flexDirection: 'row',
    },
    topNavIconBack:{
        width: 30,
        height: 30,
        margin: 10,
        position: 'absolute'
    },
    topNavIconMore:{
        width: 30,
        height: 30,
        margin: 10,
        left: 400,
        position: 'absolute'
        
    },
    balance:{
        color: 'grey',
        fontFamily: 'Times New Roman',
        fontSize: 18,
        textAlign:'center'
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        margin: 10
        
    },
    midSwitch:{
        padding: 20, 
        backgroundColor: '#490b8f', 
        borderRadius: 30, 
        width: 150,
        color: 'white'
    },
    midSwitch1:{
        padding: 20, 
        backgroundColor: '#fff', 
        borderRadius: 30, 
        width: 148,
        color: 'white'
    },
    midSwitchView:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 305,
        height: 60,
        borderWidth: 0.3,
        borderRadius: 20,
        position: 'absolute',
        left: '20%',
        top: 280
                      
    },
    midSwitchText:{
        textAlign: 'center',
        color: 'black',
        
    },
    calendarView:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        width: 300,
        top: 350,
        left: '22%'
    },
    calendarViewMonth:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        width: 300,
        top: 80,
        left: '16%'
        
    },
    calendarText:{
        color: 'grey',
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    calendarTextGold:{
        color: 'orange',
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    calendarTextBlack:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    bottomNav:{
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    creditLimitView:{
        flex: 1,
        flexDirection: 'row',
        position:'absolute',
        width: '94%',
        height: 200,
        color: 'blue',
        padding: 20,
        bottom: 60,
        left: '5%',
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center'
    },
    creditLimitTouch:{
        flex: 1,
        position:'absolute',
        width: '100%',
        height: '90%',
        color: 'blue',
        padding: 20,
        bottom: 60,
        left: '3%',
        borderRadius: 20,
        marginTop: 200,
        backgroundColor: '#490b8f',
        justifyContent: 'center',
        alignContent: 'center'
    },

})