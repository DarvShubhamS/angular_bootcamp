import { Action } from '@ngrx/store'
import { DataModel } from '../model/mymodel.model'
export const ADD_DATA = 'ADD_DATA'
export const DELETE_DATA = 'DELETE_DATA'

export class AddData implements Action {
    //seeting readonly so that its not changed from outside
    readonly type = ADD_DATA;

    constructor(public payload: DataModel) { }

}

export class RemoveData implements Action {
    //seeting readonly so that its not changed from outside
    readonly type = DELETE_DATA;



}



export type Actions = AddData | RemoveData