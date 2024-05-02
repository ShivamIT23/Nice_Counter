import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { handleIncrement, handleDecrement } from "./helper";

export default function CountButtons({ type, newNumber, locked }) {
  return (
    <button
      disabled={locked}
      onClick={(e) => {
        type === "minus"
          ? handleDecrement(e, newNumber)
          : handleIncrement(e, newNumber);
      }}
      className="count-btn"
    >
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
