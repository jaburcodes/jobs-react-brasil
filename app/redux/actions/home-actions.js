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

