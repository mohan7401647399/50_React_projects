import React from 'react'

export default function Result({ randomNum, num }) {
    let result;

    if (num) {
        if (num > randomNum) {
            result = "Higer";
        } else if (num < randomNum) {
            result = "lower"
        } else if (num == randomNum) {
            result = "Yeah! winner"
        } else {
            result = "Enter valid Number"
        }
    }
    else {
        result = "Please enter Your Number"
    }

    return (
        <div>
            <h3>You Guessed: {result}</h3>
        </div>
    )
}
