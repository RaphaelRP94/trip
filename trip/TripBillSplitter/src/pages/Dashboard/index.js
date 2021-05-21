import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import MainHeader from '../../components/Header';

import {
  Container,
  Name,
  Link,
  Info,
  EditContainer,
  Edit,
  Header,
  Coins,
} from './styles';
import {Title} from '../../styles/components';

const MyProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Container>
          <MainHeader />
          <Header>
            <Title>My Profile</Title>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <MaterialCommunityIcons name="coins" size={18} color="#F8B550" />
              <Coins>200</Coins>
            </View>
          </Header>

          <Info />

          <Button
            onPress={() => navigation.navigate('Home')}
            color={'#E83D5F'}
            title="Logout"
            marginTop={68}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
