import React, {View} from 'react';
import {List, Icon, MD3Colors } from 'react-native-paper';


const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Icon source={icon} color={MD3Colors.error50} size={20} />
      <View>
        <View>
            <Text variant="titleMedium">{title}</Text>
            <Text variant="bodySmall">{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailListItem;
