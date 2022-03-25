import React, {useContext} from 'react'
import WordInstance from "./WordInstance";
import {WordsContext} from "../App";
import GroupedWordInstance from "./GroupedWordInstance";

function SyllablesGroup(props){
    const {wordsList, savedWordsList, setSavedWordsList} = useContext(WordsContext)
    console.log('this is from SyllablesGroup', wordsList)
    const groupBy =(objects, property)=> {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }

        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }

        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }
    const groups= groupBy(wordsList,'numSyllables');
    console.log(groups);
    const groupedWordInstance = Object.entries(groups).map( ([key, groupedWordsList]) => {
        return(
            <>
                <h3>Syllables {key}</h3>
                <GroupedWordInstance groupedWordsList={groupedWordsList}/>
            </>

        )
    }
)
    return(
        <div>
            {groupedWordInstance}
        </div>

    )


}
export default SyllablesGroup