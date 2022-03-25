import React from 'react'
import WordInstance from "./WordInstance";
import SyllablesGroup from "./SyllablesGroup";

function RhymingWords(props){
    const {query}=props
    return(
        <div>
            {query && <h2>Words that rhymes with {query}</h2>}
            <SyllablesGroup/>
        </div>

    )
}

export default RhymingWords