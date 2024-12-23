import React, { useState } from 'react';
function Twooo() {
    const [comm, setComm] = useState('');

    return (
        <div>
            <form>
                <input onChange={(e) => setComm(e.target.value)} />

            </form>
            <p>2 Задание ЛР7: {comm}</p>

            <button>
                {comm}
            </button>

        </div>



    );
}
export default Twooo;