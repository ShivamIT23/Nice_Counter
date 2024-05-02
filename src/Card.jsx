import Title from "./Title";
import Counter from "./Counter";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
        <Title />
        <Counter count={count}/>
        <Reset newNumber={setCount}/>
        <CountButtons newNumber={setCount}/>
      </div>
  )
}
