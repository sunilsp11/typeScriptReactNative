import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Note{
    title: string,
    desc: string
}
 
const initialeState : Array<Note> = []

 export const noteSlice = createSlice({
    name: 'notes',
    initialeState,
    reducers:{
        addNote(state, action:PayloadAction<Note>){
      state.push(action.payload);
        }
    }
 })

 export const { addNote} = noteSlice.actions
 export const noteSelector = (state:RootState)=> state.notes
 export default noteSlice.reducer