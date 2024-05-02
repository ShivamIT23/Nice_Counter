import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { handleIncrement , handleDecrement } from "./helper";

export default function CountButtons({newNumber}) {
  return (
    <div className="button-container">
      <button onClick={()=> handleDecrement(newNumber)}  className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={()=> handleIncrement(newNumber)} className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
