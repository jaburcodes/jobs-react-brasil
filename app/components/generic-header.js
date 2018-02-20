import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Wrapper = styled.View`
  height: 80px;
  background-color: #F1F1F1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.15;
  shadow-radius: 20;
  elevation: 1;
`

const HeaderTitle = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
  padding-top: 15px;
  margin-left: 10px;
`

const HeaderText = styled.Text`
  font-size: 16px;
  color: #007aff;
  margin-right: 15px;
  font-weight: bold;
  padding-top: 24px;
  padding-bottom: 10px;
`

const HeaderButton = styled.TouchableOpacity``

const SearchInput = styled.TextInput`
  border-radius: 15;
  height: 32px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #EFEFF0;
  padding-left: 19px;
`




const GenericHeader = props => (
  <Wrapper>
    <HeaderTitle>{props.text}</HeaderTitle>
  </Wrapper>
)

export default GenericHeader
