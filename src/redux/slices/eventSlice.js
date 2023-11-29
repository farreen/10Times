import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
    name: "eventname",
    initialState: {
        data: []
    },
    reducers:{
        addEvent:(state, action) => {
            console.log("action_payload", action.payload)
            state.data.push(action.payload);
        } 
    }
})

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;