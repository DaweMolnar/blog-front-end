import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Token } from './../models/api.models'

export const ADD_TOKEN       = '[TOKEN] Add'
export const REMOVE_TOKEN    = '[TOKEN] Remove'

export class AddToken implements Action {
  readonly type = ADD_TOKEN

  constructor(public payload: Token) {}
}

export class RemoveToken implements Action {
  readonly type = REMOVE_TOKEN

  constructor(public payload: number) {}
}

export type Actions = AddToken | RemoveToken
