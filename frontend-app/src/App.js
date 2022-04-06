import './App.css';
import DisplayWordSVG from './components/DisplayWordSVG';
import complexData from './data/word_polygon_data_complex.json';
import simpleData from './data/word_polygon_data_simple.json';
import {useState} from 'react';
import DataToggle from './components/DataToggle';

function App() {
  
  const getSessionStorageOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return stored;
  }

const [data, setData] = useState(getSessionStorageOrDefault('data', simpleData));
const [text, setText] = useState(data === complexData ? "View Simpler Shapes" : "View More Complex Shapes")

const handleDataChange = () => {
  if (data === complexData){
    setData(simpleData)
    setText("View More Complex Shapes")
  } else {
    setData(complexData);
    setText("View Simpler Shapes")
  }
}

  const handleSubmit1 = () => {
    sessionStorage.setItem('currentWord1', word1)
}

const handleSubmit2 = () => {
  sessionStorage.setItem('currentWord2', word2)
}

const [word1, setWord1] = useState(getSessionStorageOrDefault('currentWord1', "space"));
const wordPoints1 = word1 ? data[word1]: null;

const [word2, setWord2] = useState(getSessionStorageOrDefault('currentWord2', "time"));
const wordPoints2 = word2 ? data[word2]: null;

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Word2Vec2SVG</h1>
      </header>
      <DataToggle handleDataChange={handleDataChange} text={text} />
      <div className="main-body-container">
        <DisplayWordSVG word={word1} handleSubmit={handleSubmit1} setWord={setWord1} wordPoints={wordPoints1} />
        <DisplayWordSVG word={word2} handleSubmit={handleSubmit2} setWord={setWord2} wordPoints={wordPoints2} />
      </div>
    </div>
    </>
  );
}

export default App;
