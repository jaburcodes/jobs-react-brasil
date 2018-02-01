import {AsyncStorage} from 'react-native'

export function login(email, password) {
  return dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST'
    })

    const saveObj = {
      email,
      password
    }
    console.log(saveObj)
    fetch('https://goninja.herokuapp.com/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(saveObj)
    })
    .then(res => {
      console.log(res)
      if (res.ok) {
        return AsyncStorage.setItem('loginId', res._bodyInit)
      } else {
        throw new Error(res._bodyInit.message)
      }
      return
    })
    .then(res =>
      dispatch({
        type: 'LOGIN_SUCCESS'
      })
    )
    .catch(error => {
      console.log('error', error)
      dispatch({
        type: 'LOGIN_FAILURE',
        error
      })}
    )
  }
}

