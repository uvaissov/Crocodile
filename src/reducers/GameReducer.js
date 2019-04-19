import { NEXT_WORD, NEXT_WORD_ERROR, LEVEL_CHANGE, TYPE_CHANGE } from '../types'
import { WORD, LEVEL_EASY } from '../wordTypes'

const INITIAL_STATE = {
  level: LEVEL_EASY,
  type: WORD,
  word: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEXT_WORD: {
    return {
      ...state,
      word: action.payload
    }
  }
  case NEXT_WORD_ERROR: {
    return {
      ...state
    }
  }
  case LEVEL_CHANGE: {
    return {
      ...state,
      level: action.payload
    }
  }
  case TYPE_CHANGE: {
    return {
      ...state,
      type: action.payload
    }
  }
  default: return state
  }
}
