import Title from "./Title";
import Counter from "./Counter";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const isLocked = count === 5 ? true : false;

  useEffect(()=> {
    const handleKeyDown = (eve) => {
      if(eve.code === 'Space') {
        if(count<5){
        setCount(count + 1);
        }
      }
    }
    window.addEventListener('keydown',handleKeyDown);

    return () => {
      window.removeEventListener('keydown',handleKeyDown)
    }
  }, [count]);

  return (
    <div className={`card ${isLocked ? 'card--limit' : ''}`}>
        <Title locked={isLocked}/>
        <Counter count={count}/>
        <Reset newNumber={setCount}/>
        <CountButtons newNumber={setCount} locked={isLocked}/>
      </div>
  )
}
