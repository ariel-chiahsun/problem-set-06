import React, {useState, useContext} from 'react'
import {WordsContext} from "../App";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function SavedButton(props){
    const {wordsList, savedWordsList, setSavedWordsList} = useContext(WordsContext)
    const {word} = props
    console.log('from saved button:', wordsList, savedWordsList, setSavedWordsList, word)
    const handleSavedList=()=>{
        setSavedWordsList([...savedWordsList, word])
    }

    return(
        <Button variant="btn btn-sm btn-outline-success" onClick={handleSavedList}>save</Button>
    )
}

export default SavedButton