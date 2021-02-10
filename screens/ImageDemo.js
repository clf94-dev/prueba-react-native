import * as React from 'react';
import {View} from 'react-native';
import CardImage from '../components/CardImage'
import { CardImageInfo } from "./CardImageInfo";

export default function ImageDemo({navigation}){
    return(
        <View>

            {CardImageInfo.map(item => {
                
                    <CardImage title={item.title} src={item.src} />
        
                  })};
            
        </View>
    )
}