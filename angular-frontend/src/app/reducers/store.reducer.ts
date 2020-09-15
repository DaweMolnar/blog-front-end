import { Action } from '@ngrx/store'
import { Token } from './../models/api.models'
import * as TokenActions from './../actions/store.actions'

export function reducer(state: Token, action: TokenActions.Actions) {
  switch(action.type) {
    case TokenActions.ADD_TOKEN:
      return state = action.payload;
    default:
      return state;
  }
}
