import React from "react";

import {
    StyleSheet,
    View,
    Text, 
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native'

const TopNavHeader = () =>{

    return(
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

                    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', height: 200, width: '100%'}}>
                        <Text style={styles.amount}>
                            My Cards
                        </Text>
                    </View>
                
                </View>
    )
}

export default TopNavHeader;

const styles = StyleSheet.create({
    topNav:{
        flex: 1,
        flexDirection: 'row',
        padding: 10
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
});