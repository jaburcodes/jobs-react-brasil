import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styled from 'styled-components/native'
import GenericHeader from '../components/generic-header'
import JobCard from '../components/job-card'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { fetchJobs, fetchUsers } from '../redux/actions/home-actions'

class Home extends React.Component {

  static navigationOptions = {
    header: <GenericHeader text='ReactBrasil'/>
  };

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      index: 100,
      refreshing: false,
      users: []
    }
  }

  componentDidMount() {
    dispatch(fetchJobs(this.state.index))
  }

  componentWillReceiveProps(nextProps) {
    const {jobs, refreshing, users} = this.props
    if (jobs !== nextProps.jobs){
      this.setState({jobs: nextProps.jobs})
      const users = nextProps.jobs.map(job => job.user)
      dispatch(fetchUsers(users))
    }

    if (refreshing !== nextProps.refreshing){
      this.setState({refreshing: nextProps.refreshing})
    }

    if (users !== nextProps.users){
      this.setState({users: nextProps.users})
    }
  }

  handleFlatListRefresh() {
    this.setState({refreshing: true})
    dispatch(fetchJobs(100))
  }

  handleEndReached() {
    this.setState({index: this.state.index + 100})
    dispatch(fetchJobs(this.state.index))
  }

  render() {
    const { navigate, jobs, refreshing } = this.props.navigation
    console.log('jobs', this.state.jobs)
    return(
      <View
          style={{backgroundColor: '#ffffff'}}
      >
        <FlatList
          style={{backgroundColor: '#ffffff', opacity: 1}}
          data={this.state.jobs}
          renderItem={({item}) => <JobCard key={item.key} job={item} users={this.state.users} userKey={item.key} />}
          onEndReached={() => this.handleEndReached()}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    refreshing: state.refreshing,
    users: state.users
  }
}

export default connect(mapStateToProps)(Home)
