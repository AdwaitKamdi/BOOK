import React from 'react'
import LottieView from 'lottie-react-native'
export default class welcomeAnimation extends React.Component{
    render(){

        return(
            <LottieView
            source = {require('../assets/9757-welcome.json')}
            style = {{width:"60%"}}
            autoPlay loop />
        )
    }
}