import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = ()  => {
        if(count !== 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className={classes.btn}>
            <div> {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;