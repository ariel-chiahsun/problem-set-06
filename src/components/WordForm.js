import React, {useReducer} from 'react'
 import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
// states as properties of a single object
const initialState = {
    topic: '',
    word: '',
}
///takes in (current state, action) and returns updated states
const reducer = (state, action) => {
    return {
        ...state,
        [action.key]: action.value
    }

}

function WordForm(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {query, setQuery, type, setType, url, setUrl} = props
    const handleSubmit = (e) => {
        e.preventDefault()
        setUrl(`https://api.datamuse.com/words?${state.topic}=${state.word}`)
        setQuery(state.word)
        setType(state.topic)
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='input'
                placeholder='Enter a Word'
                value={state.word}
                onChange={e => dispatch({
                    key: 'word',
                    value: e.target.value
                })}
            />
            <button
                type="submit"
                onClick={e => dispatch({
                    key: 'topic',
                    value: 'rel_rhy',

                })}

            >Show rhyming words
            </button>
            <button
                type="submit"
                onClick={e => dispatch({
                    key: 'topic',
                    value: 'ml'
                })}

            >Show synonyms
            </button>
        </form>

    )
}

export default WordForm