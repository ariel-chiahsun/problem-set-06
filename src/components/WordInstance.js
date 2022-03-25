import React , {useContext} from "react";
import {WordsContext} from "../App";
import SavedButton from "./SavedButton";

function WordInstance(props){
    const {wordsList, savedWordsList, setSavedWordsList} = useContext(WordsContext)
    console.log('this is from WordInstance', wordsList)
    const wordInstance = wordsList.map((wordInstance,Index)=>{
        return (
            <>
                <li key={Index}>{wordInstance.word} <SavedButton word={wordInstance.word}/></li>

            </>

        )
    })

    return(
        <div>{wordInstance}</div>
    )
}
export default WordInstance