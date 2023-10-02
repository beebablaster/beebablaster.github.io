import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState[]
}

export type AuthState = {
    number: string
    password: string
    name: string
    email: string
}

const initialState : InitialState = {
    value: []
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: () => {

        },
        signOut: () => {
            return initialState
        },
        signUp: (state , action: PayloadAction<AuthState>) => {
            state.value.push(action.payload)
        },
        restore: () => {

        }
    }
})

export const { signIn, signOut, signUp, restore } = auth.actions
export default auth.reducer