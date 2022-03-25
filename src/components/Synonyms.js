import React from 'react'
import WordInstance from "./WordInstance";


function Synonyms(props){
    const {query}=props
    return(
        <div>
            {query && <h2>Words with a similar meaning to {query}</h2>}
            <WordInstance/>
        </div>

    )
}

export default Synonyms