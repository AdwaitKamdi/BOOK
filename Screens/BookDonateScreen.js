import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import {ListItem} from "react-native-elements";
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';



export default class BookDonateScreen extends Component{
    constructor(){
        super();
        this.state = {
            requestedBooksList:[]
        }
        this.requestRef = null
    }
    getRequestedBooksList = ()=>{
        this.requestRef = db.collection("requested_books")
        .onSnapshot((snapshot)=>{
var requestedBooksList = snapshot.docs.map(document=>document.data());
this.setState({
    requestedBooksList:requestedBooksList
})

        })
    }
keyExtractor = (item,index)=>index.toString()
renderItem=({item,i})=>{
return(
    <ListItem
    key = {i}
    title = {item.book_name}
    subtitle = {item.reason_to_request}
    titleStyle = {{color:'black', fontWeight:'bold'}}
    rightElement = {
        <TouchableOpacity style = {styles.button}><Text style = {{color:'#ffff'}}>View</Text>
        </TouchableOpacity>
    }
    bottomDivider
    />
)
}



    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "Donate Books"/>
                <View style = {{flex:1}}>
                    this.state.requestedBooksList.length === 0
                    ?(
                        <View style = {styles.subContainer}>
                            <Text style = {{fontSize:20}}>List of All Requested Books</Text>
                        </View>
                    )
                    :(
                        <FlatList keyExtractor = {this.keyExtractor} 
                        data = {this.state.requestedBooksList} 
                        renderItem = {this.renderItem}/>
                      
                    )
                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alginItems:'center',
        backgroundColor:'#ff5722',
        shadowColor:"#000",
        shadowOffset:{width:0, height:8}
    }
})