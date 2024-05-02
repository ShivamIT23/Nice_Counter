import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { handleIncrement , handleDecrement } from "./helper";

export default function CountButtons({newNumber, locked}) {
  return (
    <div className="button-container">
      <button disabled={locked} onClick={(e)=> handleDecrement(e,newNumber)}  className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button disabled={locked} onClick={(e)=> handleIncrement(e,newNumber)} className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}