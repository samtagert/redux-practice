import * as actionTypes from '../actions/actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
      }
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(r => r.id !== action.id)
      }
    }
  return state
}

export default reducer