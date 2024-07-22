import React, { useReducer } from 'react';

const transactionReducer = (state, action) => {
    switch(action.type) {
        case 'WITHDRAW':
            return state - action.payload
        case 'DEPOSIT':
            return state + action.payload
        default:
            return state
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(transactionReducer,1000)

    const withdraw = (amount) => {
        dispatch({type:'WITHDRAW',payload:amount})
    }
    const deposit = (amount) => {
        dispatch({type:'DEPOSIT',payload:amount})
    }

    return (
        <>
            <h3>{ `Opening Balance is 1000`}</h3>
            <button onClick={() => withdraw(500)}>Withdraw</button> 
            <button onClick={() => deposit(500)}>Deposit</button>
            <hr />
            <h4>{`Closing Balance: ${state}`}</h4> 
        </>
    )
}
