import Title from "./Title";
import Counter from "./Counter";
import Reset from "./Reset";
import CountButtons from "./CountButtons";

export default function Card() {
  return (
    <div className="App-card">
        <Title />
        <Counter />
        <Reset />
        <CountButtons />
      </div>
  )
}
