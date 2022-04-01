import './App.css';
import DisplayWordSVG from './components/DisplayWordSVG';
import data from './data/scp_word_polygon_keyvals.json';
import {useState} from 'react';
// data may be too big to import all of it? v slow to load - get lighter version of dataset, most common words

function App() {
  const getSessionStorageOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return stored;
  }

  const handleSubmit = () => {
    console.log(word)
    sessionStorage.setItem('currentWord', word)
}

const [word, setWord] = useState(getSessionStorageOrDefault('currentWord', null));
const wordPoints = word ? data[word]: null;
console.log(wordPoints)

  
  return (
    <>
    <DisplayWordSVG word={word} handleSubmit={handleSubmit} setWord={setWord} />
    <div className="App">
      <header className="App-header">
        <h1>Word2Vec2SVG</h1>
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  
           <polygon points={wordPoints}
              fill="black" stroke="black" />
  </svg>
      </header>
    </div>
    </>
  );
}

export default App;
