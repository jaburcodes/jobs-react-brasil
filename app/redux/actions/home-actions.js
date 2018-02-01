import {AsyncStorage} from 'react-native'

export function fetchJobs(count) {
  return dispatch => {
    dispatch({
      type: 'FETCH_JOBS_REQUEST'
    })

    const saveObj = {
      email,
      password
    }
    console.log(saveObj)
    fetch(`https://slack.com/api/channels.history?token=xoxp-48492776786-227882252357-309431015910-cf25fe47d61f463e84b6666059ca7985&channel=C1EK2JHD4&count=${count}&pretty=1`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET",
      body: JSON.stringify(saveObj)
    })
    .then(res =>
      dispatch({
        type: 'FETCH_JOBS_SUCCESS',
	res
      })
    )
    .catch(error => {
      console.log('error', error)
      dispatch({
        type: 'FETCH_JOBS_FAILURE',
        error
      })}
    )
  }
}

