import {
  ADD_CHANGE,
  EDIT_CHANGE,
  DEL_CHANGE,
  TIME_CHANGE,
  NEXT_WORD,
  NEXT_WORD_ERROR,
  LEVEL_CHANGE,
  TYPE_CHANGE
} from '../types'
import WordService from '../service/WordService'
//init async WordService
this.wordService = new WordService()

//change timeout for round
export const changeTime = (value) => {
  return {
    type: TIME_CHANGE,
    payload: value
  }
}

//change timeout for round
export const changeLevel = (value) => {
  return {
    type: LEVEL_CHANGE,
    payload: value
  }
}

//change timeout for round
export const changeType = (value) => {
  return {
    type: TYPE_CHANGE,
    payload: value
  }
}

//asunc method for get word
export const getWord = (level, type) => async (dispatch) => {
  function onSuccess(word) {
    dispatch({ type: NEXT_WORD, payload: word })
    return word
  }
  function onError(error) {
    dispatch({ type: NEXT_WORD_ERROR, error })
    return error
  }
  try {
    const res = await this.wordService.getWord(level, type)
    return onSuccess(res)
  } catch (error) {
    return onError(error)
  }
}

//save command from editor
export const saveCommand = (id, name) => {
  return (dispatch, getState) => {
    const data = getState().setting.commands
    if (id) {
      dispatch({
        type: EDIT_CHANGE,
        payload: {name},
        id
      })
    } else {
      dispatch({
        type: ADD_CHANGE,
        payload: { id: getState().setting.init_id.toString(), name}
      })
    }
    return data
  }
}

//remove command by index
export const removeCommand = id => {
  return {
    type: DEL_CHANGE,
    payload: id
  }
}

// export const getMovies = (text) => async (dispatch) => {
//   function onSuccess(success) {
//     dispatch({ type: MOVIES_FETCHED, payload: success })
//     return success
//   }
//   function onError(error) {
//     dispatch({ type: MOVIES_FAILED, error })
//     return error
//   }
//   try {
//     const URL = `https://api.tvmaze.com/search/shows?q=${text}`
//     const res = await fetch(URL, {
//       method: 'GET'
//     })
//     const success = await res.json()
//     return onSuccess(success)
//   } catch (error) {
//     return onError(error)
//   }
// }
