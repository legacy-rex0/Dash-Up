import React, {Component, useState} from 'react';
import {
    StyleSheet,
    View,
    Text, 
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    Modal,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import ActionSheet from '../components/actionSheet';
import TopNavHeader from '../components/Header';
import ReviewForm from './reviewForm';

const {width, height} = Dimensions.get('screen');


export default class NewTransaction extends Component{
    constructor(props){
        super(props)
        state = {
            cardNumber: "",
            cvv: "",
            expireDate: ""
        }  
    }
    
    

   render(){

    // const [modalOpen, setModalOpen] = useState(false);
    return(
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                   <TouchableOpacity 
                   style={[styles.addCard, {position: 'absolute', left: '88%', top: -30}]} 
                   onPress={()=> setModalOpen(false)}>
                        <Image
                        source={require('../assets/icons/close.png')}
                        style={{width: 20, height: 20, alignSelf:'center'}}
                        
                        />

                    </TouchableOpacity>
                   
                     
                    <View style={{padding: 60}}>  
                    
                    <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                        Add Card
                    </Text>

                    <View style={{marginTop: 40}}>
                        <TextInput
                        placeholder='Card Number'
                        placeholderTextColor={'#ccc'}
                        keyboardType='numeric'
                        style={styles.cardTextInput}
                        onChangeText={(val)=> this.setState({cardNumber: val})}
                        />

                        <TextInput
                        placeholder='CVV'
                        placeholderTextColor={'#ccc'}
                        style={styles.cardTextInput}
                        onChangeText={(val) => this.setState({cvv: val})}
                        />  

                        <TextInput
                        placeholder='Expire Date e.g 01/2222'
                        placeholderTextColor={'#ccc'}
                        style={styles.cardTextInput}
                        onChangeText={(val) => this.setState({expireDate: val})}
                        />

                        <TouchableOpacity>
                            <Text style={styles.modalAddCardBtn} onPress={() => pressHandler()}>
                                Add Card
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            </Modal>
            <TopNavHeader/>

            <View style={{width: '100%', height: 240, backgroundColor: '#ffffff', position: 'absolute', top: 170, padding: 15}}>
                <ScrollView
                horizontal= {true}
                >

                    <TouchableOpacity style={styles.addCard} onPress={()=> setModalOpen(true)}>
                        <Image
                        source={require('../assets/icons/plus-math.png')}
                        style={{width: 26, height: 26, alignSelf:'center'}}
                        
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardView}>
                            <Text style={styles.cardNumInput}>
                                5399129920010019
                            </Text>
                            <View style={{flexDirection: 'row', top: 65}}>
                                <Text style={styles.cardNumInput}>
                                    Expire Date: 02/00
                                </Text> 

                                <Text style={styles.cardNumInput}>
                                    CVV: 02/00
                                </Text> 
                            </View>
                           
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>

                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.operation}>

                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 40}}>
                    Popular Operations
                </Text>

                <ScrollView
                horizontal= {true}
                >
                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/icons/home.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', marginTop: 8}}>
                            Home
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/heart-health.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            Health
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/sandwich.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            Food
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/notification.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            Notification
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/travelaa.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            Travel
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/tran_dollar.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            P2P
                        </Text>
                    </View>

                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard}>
                            <Image
                            source={require('../assets/images/activity.png')}
                            style={{width: 50, height: 50, alignSelf:'center', margin: 20}}
                            />

                        </TouchableOpacity>
                        <Text style={{color: 'black', textAlign: 'center', margin: 8}}>
                            Activity
                        </Text>
                    </View>
                    
                   
                </ScrollView>


            </View>

            <ActionSheet/>

        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        // padding: 10

    },
    balance:{
        color: 'grey',
        fontFamily: 'Times New Roman',
        fontSize: 18,
        textAlign:'center'
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        margin: 10
    },
    addCard:{
        backgroundColor: '#eee',
        height: 45,
        width: 45,
        borderRadius: 15,
        padding: 15,
        marginTop: 40,
        justifyContent: 'center'
    },
    operationCard:{
        backgroundColor: '#f7f7f7',
        height: 80,
        width: 80,
        borderRadius: 20,
        padding: 15,
        marginTop: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    card:{
        backgroundColor: '#0f0f0f',
        width: 270,
        height: 150,
        margin: 15,
        borderRadius:20
    },
    operation:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        // marginTop: 100,
        position: 'absolute',
        padding: 20

    },
    bottomTransaction:{
        flex: 2,
        flexGrow:1,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        width: '100%',
        height: 400,
        paddingLeft:3,
        paddingRight:3,
        backgroundColor: '#fafafa'

    },
    bottomSwipe:{
        height: 320,
        width: '100%',
        backgroundColor: 'grey',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,

    },
    cardNumInput:{
        color: '#fff',
        marginHorizontal: 13

    },
    cardView:{
        padding: 20
    },
    cardTextInput:{
        borderBottomWidth: 1,
        color: 'black',
        
    },
    modalAddCardBtn:{
        padding: 20, 
        color: 'maroon', 
        backgroundColor: '#eee', 
        marginVertical: 20, 
        alignSelf: 'center', 
        fontWeight: 'bold',
        borderRadius: 13
    }
    

})