import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../Screens/BookDonateScreen'
import {Image} from 'react-native'
import BookRequestScreen from '../Screens/BookRequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon: <Image source = {require("../assets/bookIMG2.webp")} style = {
                {width:20, height:20}}/>,

            tabBarLabel: "Donate Books" 
        }
    },
BookRequests:{
    screen:BookRequestScreen,
    navigationOptions:{
        tabBarIcon: <Image source = {require("../assets/bookIMG.jpg")} style =
        {{width : 20, height : 20}}/>,

        tabBarLabel: "Book Requests"
    }
}

})

