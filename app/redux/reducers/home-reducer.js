const initialState = {
  loginIsLoading: false,
  registerIsLoading: false,
  isAuth: false
}

const homeRecucer = (state = initialState, action) => {
  let newState
  let isCorrect
  switch (action.type) {

  //login
  case 'LOGIN_REQUEST':
    newState = Object.assign({}, state, {
      loginIsLoading: true
    })
    return newState

  case 'LOGIN_SUCCESS':
    console.log('isAuth gonna be true')
    newState = Object.assign({}, state, {
      loginIsLoading: false,
      isAuth: true
    })
    return newState

  case 'LOGIN_FAILURE':
    newState = Object.assign({}, state, {
      loginIsLoading: false
    })
    return newState

    default:
    return state

  }
}

export default homeRecucer
