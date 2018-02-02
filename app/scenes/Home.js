import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styled from 'styled-components/native'
import GenericHeader from '../components/generic-header'
import JobCard from '../components/job-card'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { fetchJobs } from '../redux/actions/home-actions'

const Wrapper = styled.View`
  flexGrow: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

class Home extends React.Component {

  static navigationOptions = {
    header: <GenericHeader text='ReactBrasil'/>
  };

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      index: 10,
      refreshing: false
    }
  }

  componentDidMount() {
    dispatch(fetchJobs(this.state.index))
  }

  componentWillReceiveProps(nextProps) {
    const {jobs, refreshing} = this.props
    if (jobs !== nextProps.jobs){
      this.setState({jobs: nextProps.jobs})
    }
    if (refreshing !== nextProps.refreshing){
      this.setState({refreshing: nextProps.refreshing})
    }
  }

  handleFlatListRefresh() {
    this.setState({refreshing: true})
    dispatch(fetchJobs(20))
  }

  handleEndReached() {
    this.setState({index: this.state.index+10})
    dispatch(fetchJobs(this.state.index))
  }

  render() {
    const { navigate, jobs, refreshing } = this.props.navigation
    console.log(jobs)
    return(
        <FlatList
          style={{backgroundColor: '#ffffff'}}
          data={this.state.jobs}
          renderItem={({item}) => <JobCard key={item.key} job={item}/>}
          onEndReached={() => this.handleEndReached()}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    refreshing: state.refreshing
  }
}

export default connect(mapStateToProps)(Home)
