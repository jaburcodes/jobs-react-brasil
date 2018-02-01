const initialState = {
  jobs: []
}

const homeRecucer = (state = initialState, action) => {
  switch (action.type) {

  //login
  case 'FETCH_JOBS_REQUEST':
    return state

  case 'FETCH_JOBS_SUCCESS':
    newState = Object.assign({}, state, {
      jobs: action.res
    })
    return newState

  case 'LOGIN_FAILURE':
    return state

  default:
    return state

  }
}

export default homeRecucer
