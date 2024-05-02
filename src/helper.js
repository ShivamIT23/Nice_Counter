function handleReset(setCount){
    setCount(0);
}

function handleIncrement(setCount){
    setCount((prevVal)=> prevVal+1);
}

function handleDecrement(setCount){
    setCount((prevVal)=> prevVal-1);
}

export {handleReset , handleIncrement , handleDecrement}