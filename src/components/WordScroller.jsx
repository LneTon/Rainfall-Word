import React, { useEffect, useRef, useState } from "react";
import "../styles/scroller.css";

const WORDS = 
[
    "linear", "shout", "cosmos", "trout", "yesterday", 
    "whirlpool", "banana", "future", "last month", "midnight",
    "sunset", "doubt", "bubble", "serenity", "cloud", "this week", "happiness", 
    "gymnastics","humanoid", "desert",
    "nocturnal", "muscle", "devourness", "bow", "bread", 
    "dreamy", "darling",  "tender", "admiration", 
];

export default function WordScroller({ onLock, lockedWord }) 
{
    const [index, setIndex] = useState(0);
    const [scrolling, setScrolling] = useState(true);
    const interval = useRef(null);

    useEffect(() => 
    {
        if (lockedWord) 
        {
            setScrolling(false);
            return;
        }
        interval.current = setInterval(() => 
        {
            setIndex((i) => (i + 1) % WORDS.length);
        }, 500);
        return () => clearInterval(interval.current);
    }, [lockedWord]);

    const handleClick = () => 
    {
        if (scrolling) 
        {
          onLock(WORDS[index]);
          setScrolling(false);
          clearInterval(interval.current);
        } else 
        {
          setScrolling(true);
          onLock(null);
        }
    };
    return (
    <div className="scroller" onClick={handleClick}>
    <div className="scroller-word">
      {WORDS[index]}
    </div>
    </div>
    );
}
