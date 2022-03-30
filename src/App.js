import React, {useState, useReducer, useEffect} from "react";
import './App.css';
import WordForm from './components/WordForm'
import RhymingWords from './components/RhymingWords'
import Synonyms from './components/Synonyms'
import SavedWords from "./components/SavedWords";
import axios from 'axios'


export const WordsContext = React.createContext()

function App() {
    const [loading, setLoading] =useState(true)
    const [type, setType] = useState('')
    const [query, setQuery] = useState('')
    const [url, setUrl] = useState('')
    const [save, setSave] = useState(false)
    const [wordsList, setWordsList] = useState([])
    const [savedWordsList, setSavedWordsList] = useState([])

    const fetchData = async () => {
        await axios
            .get(url)
            .then(response => {
                setWordsList(response.data)
                setLoading(false)
            })

            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }

    useEffect(() => {
        if (url) {
            fetchData()
        }
        setLoading(!loading)

    }, [url])


    return (
        <div className="App">
            <a href="https://github.com/ariel-chiahsun/problem-set-06/tree/main/src">Link to source code</a>
            <a href="https://ariel-chiahsun.github.io/problem-set-06/">Link to deployed page</a>
            <h1>Rhyme Finder (579 Problem Set 6)</h1>
            <SavedWords savedWordsList={savedWordsList}/>
            <WordForm query={query} setQuery={setQuery} type={type} setType={setType} url={url} setUrl={setUrl}/>
            {loading && type? 'loading': <> {type&&wordsList.length==0?  'no results': <> {type === 'rel_rhy' ? <WordsContext.Provider value={{wordsList, savedWordsList, setSavedWordsList}}>
                <RhymingWords query={query}/>
            </WordsContext.Provider> : <WordsContext.Provider value={{wordsList, savedWordsList, setSavedWordsList}}>
                <Synonyms query={query}/>
            </WordsContext.Provider>}</>} </>}

        </div>
    );
}

export default App;
