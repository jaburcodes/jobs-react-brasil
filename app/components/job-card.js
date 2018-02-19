import React from 'react';
import { TextInput, Image } from 'react-native'
import {fetchUser} from '../redux/actions/home-actions'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Badges from './badges'
import { dispatch } from '../redux/store'

const Wrapper = styled.View`
  flexGrow: 1;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 10px;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.15;
  shadow-radius: 20;
  elevation: 1;
  border-top-width: 4px;
  border-top-color: blue;
`

const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  margin-left: 20px;
`

const ContentWrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 20;
`

const JobBasicInfos = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20;
`

const CompanyName = styled.Text`
  color: #2f80ed;
  font-size: 14px;
  padding: 20px;
`

const ContentSkills = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20;
`

const SkillsText = styled.Text`
  font-size: 11px;
  color: #828282;
  margin-right: auto;
  margin-bottom: 10px;
`

const BadgesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`

const UserImage = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 20;
`

const UserName = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`


class JobCard extends React.Component {
  componentWillReceiveProps(nextProps) {
    const {job} = this.props
  }

  render(){
    const {job, users, userKey} = this.props
    return (
      <Wrapper>
        <IconWrapper>
          <UserImage
          source={{uri: users && users[userKey] && users[userKey].image_72}}/>
          <UserName>{users && users[userKey] && users[userKey].real_name}</UserName>
        </IconWrapper>
        <ContentWrapper>
          <CompanyName>{job.text}</CompanyName>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default JobCard
