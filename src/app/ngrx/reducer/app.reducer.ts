import { Action } from '@ngrx/store'
import { DataModel } from '../model/app.model'
import * as MyActions from '../actions/myactions.action'
//setting initial state
const initialState = {
    users: [
        new DataModel('shubham', 1)
    ]
}

// exporting our reducer 
export function myReducer(state = initialState, action: MyActions.Actions) {

    //checking dispatched action and making changes to state

    switch (action.type) {
        case MyActions.ADD_DATA:
            return {
                ...state,
                users: [...state.users, action.payload]

            }
        case MyActions.DELETE_DATA:
            return {
                users: []
            }

        default:
            return state
    }
}