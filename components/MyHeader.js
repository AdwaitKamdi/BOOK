import React,{Component} from 'react'
import {Header, Icon, Badge} from 'react-native-elements'
import {Text, Stylesheet, Alert, View} from 'react-native'


const MyHeader = props=>{
    return(
        <Header centerComponent = {{text:props.title, 
            style:{color:'Green', fontSize:20, fontWeight:"bold",
    }}}
    backgroundColor = "White"/>
    );
};
export default MyHeader;