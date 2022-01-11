import React, {useState} from "react";
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    // ScrollView,
} from 'react-native';
// import {ScrollView} from "react-native-gesture-handler";
import {
    ScrollView,
} from "react-native-gesture-handler"

const {width, height} = Dimensions.get('screen');

const ActionSheet = (props) =>{

    const [alignment] = useState(new Animated.Value(0));

    const bringUpActionSheet = ()=>{
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500
        }).start();
    };

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0 , 1],
        outputRange: [-height/2.9 + 50, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    };

    const gestureHandler = (e) =>{
        if(e.nativeEvent.contentOffset.y > 0) bringUpActionSheet()
        // if((e.nativeEvent.contentOffset.y) < 0) bringUpActionSheet()
    }

    const newPressed = () =>{
        console.log('owned')
    }

    return(
        <Animated.View style={[styles.container, actionSheetStyle]}>
            <ScrollView 
            onScroll={(e) => gestureHandler(e)}
            style={styles.grabber}
            ></ScrollView>
            <Text style={{color: 'black'}}> Hello JSX </Text>
            <Text style={{color: 'black'}}> Hello JSX </Text>
            <Text style={{color: 'black'}}> Hello JSX </Text>
            <Text style={{color: 'black'}}> Hello JSX </Text>
            <Text style={{color: 'black'}}> Hello JSX </Text>
            
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: '#eee',
        height: height / 2.9,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: width / 1.05,
        marginHorizontal: 11,
    },
    grabber:{
        width: 60,
        borderTopWidth: 5,
        borderTopColor: '#aaa',
        alignSelf: 'center',
        
    },
})

export default ActionSheet;