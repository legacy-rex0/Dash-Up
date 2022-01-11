import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text, 
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    Modal,
    FlatList,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ActionSheet from '../components/actionSheet';
import TopNavHeader from '../components/Header';
import ReviewForm from './reviewForm';

import { Actions } from "react-native-router-flux";




const {width, height} = Dimensions.get('screen');

const Transaction = () => {
                   
    state = {
        cardNumber: "",
        cvv: "",
        expireDate: ""
    }  


    const [modalOpen, setModalOpen] = useState(false);

    const [card, setCard] = useState([
        {cardNumber: 'xxxxxx78789', cvv: '128', expireDate: '08/22', key: 1},
        
    ])
    const [newCard, setNewCard] = useState('')
    const [newCard2, setNewCard2] = useState('')
    const [newCard3, setNewCard3] = useState('')

    const pressOnHandler = (key) =>{
        setCard((defaultCard)=>{
            return defaultCard.filter(eachCard => eachCard.key != key)
        })
    }

    const changeHandlerCard = (value) =>{
       setNewCard(value)
        // console.log(setNewCard)
    }

    const changeHandlerCard2 = (val) =>{
        setNewCard2(val);
        // console.log(setNewCard)
    }

    const changeHandlerCard3 = (val) =>{
        setNewCard3(val);
        // console.log(setNewCard)
    }
    const submitHandler = (changeHandlerCard, changeHandlerCard2, changeHandlerCard3) =>{
        setCard((defaultCard) => {
            return [
                {cardNumber: newCard, cvv: newCard2, expireDate: newCard3, key: Math.random().toString()},
                ...defaultCard
            ]
        })
    }

    const gotoHome = () =>{
        Actions.Home()
      }

    
   
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
                        onChangeText={changeHandlerCard}
                        />

                        <TextInput
                        placeholder='CVV'
                        placeholderTextColor={'#ccc'}
                        style={styles.cardTextInput}
                        onChangeText={changeHandlerCard2}
                        />  

                        <TextInput
                        placeholder='Expire Date e.g 01/2222'
                        placeholderTextColor={'#ccc'}
                        style={styles.cardTextInput}
                        onChangeText={changeHandlerCard3}
                        />

                        <TouchableOpacity onPress={() => submitHandler()}>
                            <Text style={styles.modalAddCardBtn} >
                                Add Card
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            </Modal>
            <TopNavHeader/>

            <View style={{width: '100%', height: 350, backgroundColor: '#ffffff', position: 'absolute', top: 100, padding: 15}}>
                <TouchableOpacity style={styles.addCard} onPress={()=> setModalOpen(true)}>
                        <Image
                        source={require('../assets/icons/plus-math.png')}
                        style={{width: 26, height: 26, alignSelf:'center'}}
                        
                        />
                </TouchableOpacity>
                <FlatList
                style={{left: 50}}
               data={card}
               horizontal={true}
               renderItem={({item}) =>(
                   <View style={{flex: 1, flexDirection: 'row'}}>
                   
                    <TouchableOpacity style={styles.card} onPress={() => pressOnHandler(item.key)}>
                        <View style={styles.cardView}>
                            <Text style={styles.cardNumInput}>
                                {item.cardNumber} 
                            </Text>
                            <View style={{flexDirection: 'row', top: 65}}>
                                <Text style={styles.cardNumInput}>
                                    {item.expireDate}
                                </Text> 

                                <Text style={styles.cardNumInput}>
                                    {item.cvv}
                                </Text> 
                            </View>
                        
                        </View>

                    </TouchableOpacity>

                   </View>
               )}
               />

            </View>

            <View style={styles.operation}>

                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 40}}>
                    Popular Operations
                </Text>

                <ScrollView
                horizontal= {true}
                >
                    <View style={{}}>

                        <TouchableOpacity style={styles.operationCard} onPress={gotoHome}>
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

export default Transaction;

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
        top: 60,
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
        borderRadius:20,
        
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