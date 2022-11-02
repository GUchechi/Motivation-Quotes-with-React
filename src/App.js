import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState('')

  const getQuote = async () => {
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json()
    let randomNum = Math.floor(Math.random() * data.length);
    setQuotes(data[randomNum])
  }

  useEffect(() => {
      getQuote();
  },[])
  return (
    <div className="App">
        <div className="quote">
          <p>{quotes.text}</p>
          <p>{quotes.author}</p>
          <div className="btnContainer">
            <button onClick={getQuote} className="btn">Get Quote</button>
            <a 
              href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn">
              Tweet
            </a>
          </div>
        </div>
    </div>
  );
}

export default App;
