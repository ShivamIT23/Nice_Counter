function handleReset(e,setCount){
    setCount(0);
    e.currentTarget.blur();
}

function handleIncrement(e,setCount){
    setCount(prevVal=> {
        if(prevVal<5){
            return prevVal+1;
        }
        else{
            return 5;
        }
    });
    e.currentTarget.blur();
}

function handleDecrement(e,setCount){
    setCount(prevVal=> {
        if(prevVal>0){
        return prevVal-1;
        }
        else{
            return 0;
        }
    });
    e.currentTarget.blur();
}

export {handleReset , handleIncrement , handleDecrement}