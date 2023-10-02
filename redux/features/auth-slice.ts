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

export type RestoreState = {
    number: string
    password: string
}

const initialState : InitialState = {
    value: []
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state , action: PayloadAction<AuthState>) => {
            state.value.push(action.payload)
        },
        restore: (state, action: PayloadAction<RestoreState>) => {
                const accountId = state.value.findIndex((account) => account.number == action.payload.number)
                if(accountId) state.value[accountId].password = action.payload.password
        }
    }
})

export const { signUp, restore } = auth.actions
export default auth.reducer