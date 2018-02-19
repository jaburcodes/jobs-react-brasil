import {AsyncStorage} from 'react-native'

export function fetchJobs(count) {
  return dispatch => {
    dispatch({
      type: 'FETCH_JOBS_REQUEST'
    })

    fetch(`https://slack.com/api/channels.history?token=xoxp-48492776786-227882252357-316707862848-e243e12e54fa09eeb34152cced2d9822&channel=C1EK2JHD4&count=${count}&pretty=1`, {
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
      return fetch(`https://slack.com/api/users.profile.get?token=xoxp-48492776786-227882252357-316707862848-e243e12e54fa09eeb34152cced2d9822&user=${user}&pretty=1`, {
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