"use strict"

// write conde in here

const minusButton = document.getElementById("minus")
const addButton = document.getElementById("plus")
const resetButton = document.getElementById("reset")
const numberText = document.getElementById("number")
const numberInput = document.getElementById("numberInput")

let number = parseInt(numberText.textContent)

function changeValue(e){

    let numberInputValue = parseInt(numberInput.value)

    if(Number.isNaN(numberInputValue)){
        if (numberInput.value.length == 0){
            numberInputValue = 1
        }else{
            window.alert("It is wrong input")
            return
        }
    }

    switch(e.target)
    {
        case minusButton:
            number -= numberInputValue
            break
        case addButton:
            number += numberInputValue
            break
        case resetButton:
            number = 0
            numberInput.value = ""
            break
    }

    numberText.textContent = number
}

addButton.addEventListener("click", changeValue)
minusButton.addEventListener("click", changeValue)
resetButton.addEventListener("click", changeValue)
