import {AsyncStorage} from 'react-native'

export function fetchJobs(count) {
  return dispatch => {
    dispatch({
      type: 'FETCH_JOBS_REQUEST'
    })

    fetch(`https://slack.com/api/channels.history?token=xoxp-48492776786-227882252357-308641535524-63df13c98710ea3fbee92905d9f6799f&channel=C1EK2JHD4&count=${count}&pretty=1`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET"
    })
    .then(res => {
      const jobs = JSON.parse(res._bodyInit).messages
      console.log('action jobs', jobs)
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

