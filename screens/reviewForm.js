// import React from "react";
// import { 
//     StyleSheet, 
//     Button, 
//     TextInput, 
//     View, 
//     Text,
//     Dimensions,
//  } from 'react-native';
// import {Formik} from 'formik';

// const {width, height} = Dimensions.get('screen');

// export default function ReviewForm(){
//     const {width, height} = Dimensions.get('screen');
//     return(
//         <View style={styles.container}>
//             <Formik
//             initialValues={{cardNumber: '', cvv: '', expireDate: ''}}
//             onSubmit={(values)=> {
                
//             }}
//             >
//                 {(props) => {
//                     <View style={styles.content}>
//                         <TextInput
//                         style={styles.input}
//                         placeholder="Enter Last Six Digit of Card Number"
//                         onChangeText={props.handleChange('cardNumber')}
//                         value={props.values.cardNumber}
//                         />
//                         <TextInput
//                         style={styles.input}
//                         placeholder="Enter CVV"
//                         onChangeText={props.handleChange('cvv')}
//                         value={props.values.cvv}
//                         />
//                         <TextInput
//                         style={styles.input}
//                         placeholder="Enter Expire Date"
//                         onChangeText={props.handleChange('expireDate')}
//                         value={props.values.expireDate}
//                         />

//                         <Button
//                         title="Submit"
//                         color= 'maroon'
//                         onPress={() => props.handleSubmit()}
//                         />
//                     </View>
//                 }}
//             </Formik>

//         </View>
//     )
// };

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignContent: 'center',
//         padding: 10,


//     },
//     content:{
//         width: width,
//         height: height
//     }
// })