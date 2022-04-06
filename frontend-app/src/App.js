import './App.css';
import DisplayWordSVG from './components/DisplayWordSVG';
import data from './data/word_polygon_data_complex.json';
import {useState} from 'react';

function App() {
  const getSessionStorageOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return stored;
  }

  const handleSubmit1 = () => {
    console.log(word1)
    sessionStorage.setItem('currentWord1', word1)
}

const handleSubmit2 = () => {
  console.log(word2)
  sessionStorage.setItem('currentWord2', word2)
}

const [word1, setWord1] = useState(getSessionStorageOrDefault('currentWord1', "example"));
const wordPoints1 = word1 ? data[word1]: null;
console.log(wordPoints1)

const [word2, setWord2] = useState(getSessionStorageOrDefault('currentWord2', "example"));
const wordPoints2 = word2 ? data[word2]: null;

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Word2Vec2SVG</h1>
      </header>
      <div className="main-body-container">
        <DisplayWordSVG word={word1} handleSubmit={handleSubmit1} setWord={setWord1} wordPoints={wordPoints1} />
        <DisplayWordSVG word={word2} handleSubmit={handleSubmit2} setWord={setWord2} wordPoints={wordPoints2} />
      </div>
    </div>
    </>
  );
}

export default App;
