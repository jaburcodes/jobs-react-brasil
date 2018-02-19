import {AsyncStorage} from 'react-native'
import { slackToken } from '../../config'
export function fetchJobs(count) {
  return dispatch => {
    dispatch({
      type: 'FETCH_JOBS_REQUEST'
    })

    fetch(`https://slack.com/api/channels.history?token=${slackToken}&channel=C1EK2JHD4&count=${count}&pretty=1`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET"
    })
    .then(res => {
      const jobs = JSON.parse(res._bodyInit).messages
      dispatch({
        type: 'FETCH_JOBS_SUCCESS',
	      jobs
      })
    })
    .catch(error => {
      console.log()
      dispatch({
        type: 'FETCH_JOBS_FAILURE',
        error
      })}
    )
  }
}

export function fetchUsers(users) {
  return dispatch => {
    dispatch({
      type: 'FETCH_USER_REQUEST'
    })

    const newUsers = users.map(user => {
      return fetch(`https://slack.com/api/users.profile.get?token=${slackToken}&user=${user}&pretty=1`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "GET"
      })
    })
    Promise.all(newUsers)
    .then(res => {
      console.log('promise all res', res)
      let users = []
      res.map(response => {
        users = [...users, JSON.parse(response._bodyInit).profile]
      })
      dispatch({
        type: 'FETCH_USER_SUCCESS',
	      users
      })
    })
    .catch(error => {
      console.log()
      dispatch({
        type: 'FETCH_USER_FAILURE',
        error
      })}
    )
  }
}