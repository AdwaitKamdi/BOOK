import firebase from "firebase";
import React, { Component } from "react";
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Alert, TouchableOpacity} from "react-native";
import MyHeader from '../components/MyHeader';
import db from '../config';

export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            userID:firebase.auth().currentUser.email,
            bookName:"",
            reasonToRequest:""
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7);
    }


    addRequest=(bookName, reasonToRequest)=>{
        var userID = this.state.userID;
        var randomRequestID = this.createUniqueID();
        db.collection('requested_books').add({
"user_ID":userID,
"book_name":bookName,
"reason_to_request":reasonToRequest,
"request_ID":randomRequestID,


        })
this.setState({
    bookName:'',
    reasonToRequest:'',

})
return Alert.alert("Book Requested Successfully!");
    }
    render(){
    return(
        <View style = {{flex:1}}>
            <MyHeader title = "Request Book"/>
            <KeyboardAvoidingView style = {styles.keyboardStyle}>
                <TextInput style = {styles.formTextInput} placeholder = {"Enter Book Name"}
                onChangeText = {(text)=>{
                    this.setState({
                        bookName:text
                    })
                }}
                value = {this.state.bookName}/>

                <TextInput style = {[styles.formTextInput, {height:300}]} 
                placeholder = {"Reason for Book Request"} 
                multiline
                numberOfLines = {8}
                onChangeText = {(text)=>{
                    this.setState({
                        reasonToRequest:text
                    })
                }}
                value = {this.state.reasonToRequest} />
                <TouchableOpacity style = {styles.button} 
                onPress = {()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}}
                >
                    <Text>Request</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
            
        </View>
    )
}}
const style = StyleSheet.create({
formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
},
keyboardStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

},
button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ff5722',
    shadowColor:"#000",
    shadowOffset:{
        width:0, height:8
    },
    shadowOpacity:0.44,
    shadowRadius:10.32,
    elevation:16,
    marginTop:20
}

})

