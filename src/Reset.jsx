import { ResetIcon } from "@radix-ui/react-icons";
import { handleReset } from "./helper";

export default function Reset({newNumber}) {
  return (
    <button onClick={(e)=> handleReset(e,newNumber)} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  )
}
