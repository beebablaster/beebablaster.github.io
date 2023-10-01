import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState
}

type AuthState = {
    isAuth: boolean
    username: string
    password: string
    name: string
    email: string
}

const initialState = {
    value: {
        isAuth: false,
        username: '',
        password: '',
        name: '',
        email: ''
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: () => {

        },
        signOut: () => {
            return initialState
        },
        signUp: () => {

        },
        restore: () => {

        }
    }
})

export const { signIn, signOut, signUp, restore } = auth.actions
export default auth.reducer