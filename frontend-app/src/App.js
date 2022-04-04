import './App.css';
import DisplayWordSVG from './components/DisplayWordSVG';
import data from './data/scp_word_polygon_keyvals_medium.json';
import {useState} from 'react';

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

const [word, setWord] = useState(getSessionStorageOrDefault('currentWord', "example"));
const wordPoints = word ? data[word]: null;
console.log(wordPoints)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Word2Vec2SVG</h1>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <polygon points={wordPoints}
              fill="green" stroke="white" strokeWidth="0.05" />
  </svg>
      </header>
      <DisplayWordSVG word={word} handleSubmit={handleSubmit} setWord={setWord} />
    </div>
    </>
  );
}

export default App;
