import React, { useState } from 'react';

function Header({children}) {
    const [counter, setCounter] = useState(0);
    
    function increments() {
        setCounter(counter + 1);        
    }

    return (
        <header>
            <h1>
                { children } {counter}
            </h1>
            <button onClick={increments}>Incrementar</button>            
        </header>
    );
}

export default Header;