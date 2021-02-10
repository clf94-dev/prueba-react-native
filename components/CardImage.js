import *as React from 'react';
import {View, Text, Image} from 'react-native';
export default function CardImage(props){
    return(
        <View>
            <Image source={require(props.src)}/>
            <Text >{props.title}</Text>
        </View>
    )
}