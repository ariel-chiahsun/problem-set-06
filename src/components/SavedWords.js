import React, {useContext} from 'react'

function SavedWords(props){
    const {savedWordsList} = props
    console.log('this is from savedWords:', savedWordsList)
    const renderSavedWords =()=>{
        if (!savedWordsList) {
            return 'Saved words:'
        }else{
            return `Saved words: ${savedWordsList.join(', ')}`
        }

    }

    return(
        <div>{renderSavedWords()} </div>
    )
}

export default SavedWords