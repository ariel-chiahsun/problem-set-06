import React , {useContext} from "react";
import SavedButton from "./SavedButton";
import 'bootstrap/dist/css/bootstrap.min.css'

function GroupedWordInstance(props){
    const {groupedWordsList} = props
    console.log('this is from WordInstance', groupedWordsList)
    const wordInstance = groupedWordsList.map((wordInstance,Index)=>{
        return (
            <li key={Index}>{wordInstance.word} <SavedButton word={wordInstance.word}/></li>
        )
    })

    return(
        <ul>{wordInstance}</ul>
    )
}
export default GroupedWordInstance