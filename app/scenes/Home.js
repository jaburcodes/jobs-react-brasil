import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styled from 'styled-components/native'
import GenericHeader from '../components/generic-header'
import JobCard from '../components/job-card'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

class Home extends React.Component {

  static navigationOptions = {
    header: <GenericHeader text='ReactBrasil'/>
  };

  render() {
    const { navigate } = this.props.navigation
    return(
      <Wrapper>
        <FlatList
          style={{backgroundColor: '#ffffff'}}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
          renderItem={({item}) => <JobCard />}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginIsLoading: state.loginIsLoading
  }
}

export default connect(mapStateToProps)(Home)
