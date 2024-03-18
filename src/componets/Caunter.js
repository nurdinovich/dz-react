import '../App.css';
import { useState } from 'react'
function Counter() {
    const [state, setState] = useState(0)
    function add() {
        if (state < 20) {
            setState(state + 1)
        }

    }
    function remove() {
        if (state > 0) {
            setState(state - 1)
        }

    }
    function add10() {
        if (state < 10) {
            setState(state + 10)
        }
    }

    function remove10() {
        if (state >= 10) {
            setState(state - 10)
        }
    }
    function add2() {
        if (state >= 5) {
            setState(state * 5)
        }
    }
    function
        Divide() {
        if (state >= 5) {
            setState(state / 5)
        }
    }


    return (
        <div className="Counter">
            <h1>{state}</h1>
            <div className='button'>
                <button onClick={(add)}>incriment</button>
                <button onClick={(remove)}>decriment</button>
                <button onClick={(add10)}>+10</button>
                <button onClick={(remove10)}>-10</button>
                <button onClick={(add2)}>*5</button>
                <button onClick={(Divide)}>Divide 5</button>

            </div>
        </div>
    );
}

export default Counter;