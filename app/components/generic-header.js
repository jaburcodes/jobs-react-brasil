import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Wrapper = styled.View`
  height: 110px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const HeaderTitle = styled.Text`
  font-size: 32px;
  color: #ffffff;
  color: black;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 10px;
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
    <SearchInput placeholder='Search' placeholderTextColor='#8e8e93'/>
  </Wrapper>
)

export default GenericHeader
