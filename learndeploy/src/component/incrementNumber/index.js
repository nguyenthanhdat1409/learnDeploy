import React, { useState } from 'react';

function IncrementNumber() {
    const [count, setCount] = useState(0);
    const increment = () =>{
        // setCount(count+1);
        setCount((prevCount) => prevCount + 1);
    }
    const save = () =>{
        alert(count);
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={save}>Alert</button>
        </>
    );
}

export default IncrementNumber;
