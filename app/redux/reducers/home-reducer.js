const initialState = {
  jobs: [],
  refreshing: false,
  users: []
}

const homeRecucer = (state = initialState, action) => {
  switch (action.type) {

  //login
  case 'FETCH_JOBS_REQUEST':
    newState = Object.assign({}, state, {
      refreshing: true
    })
    return newState

  case 'FETCH_JOBS_SUCCESS':
    let key = -1
    const jobs = action.jobs.filter(job => ((job.reactions) && (job.reactions[0].name === 'calling') && (job.reactions[0].users.includes('U6PRY7EAH') || job.reactions[0].users.includes('U5SD6F1UY'))))
    .map(job => {
      key++
      return Object.assign(job, {}, {key})
    })

    newState = Object.assign({}, state, {
      jobs,
      refreshing: false
    })
    return newState

  case 'FETCH_USER_SUCCESS':
    const users = action.users

    newState = Object.assign({}, state, {
      users
    })
    return newState

  case 'LOGIN_FAILURE':
    return state

  default:
    return state

  }
}

export default homeRecucer