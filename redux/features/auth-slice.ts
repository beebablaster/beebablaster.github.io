import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState
}

type AuthState = {
    isAuth: boolean
    number: string
    password: string
    name: string
    email: string
}

const initialState = {
    value: {
        isAuth: false,
        number: '',
        password: '',
        name: '',
        email: ''
    } as AuthState[]
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
        signUp: (state = initialState, action: PayloadAction<AuthState>) => {
            console.log(action.payload)
            return {
                ...state,
                value: action.payload
            }
        },
        restore: () => {

        }
    }
})

export const { signIn, signOut, signUp, restore } = auth.actions
export default auth.reducer