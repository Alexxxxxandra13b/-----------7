
import React, { useState } from 'react';
function Sixxx() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> нажмали  {count} разов</p>
            <button onClick={() => setCount(count + 1)}>
                6 задание
            </button>
        </div>
    );
}
export default Sixxx;