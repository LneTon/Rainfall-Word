import React, { useState } from "react";
import FixedWord from "./components/FixedWord";
import WordScroller from "./components/WordScroller";
import GenerateButton from "./components/GenerateButton";
import ResultCard from "./components/ResultCard";
import RainBackground from "./components/RainBackground";
import "./styles/layout.css";

function App() 
{
    const [lockedWord, setLockedWord] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <div className="app-layout">
        <RainBackground /> 
        <div className="word-area">
        <FixedWord word="Rainfall" />
        <WordScroller
          onLock={setLockedWord}
          lockedWord={lockedWord}
        />
        </div>
        <GenerateButton
        lockedWord={lockedWord}
        setResult={setResult}
        setLoading={setLoading}
        />
        {loading && <div className="loading">Generating...</div>}
        {result && <ResultCard result={result} />}
        </div>
    );
}
export default App;