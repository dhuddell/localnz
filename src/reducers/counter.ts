import { createSlice } from "@reduxjs/toolkit"

type State = {
    count: number
}

const initialState: State = {
    count: 0
}

type Reducers = {
    increment: (state: State) => void,
    decrement: (state: State) => void,
    reset: (state: State) => void
}

const reducers: Reducers = {
    increment: (state) => { state.count++},
    decrement: (state) => { state.count--},
    reset: (state) => { state.count = 0},
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers
})

export const { increment, decrement, reset } = slice.actions

export default slice.reducer