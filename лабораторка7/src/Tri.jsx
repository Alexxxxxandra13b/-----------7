import React, { useState } from 'react';
function Tri() {
    const [threezd, setThreezd] = useState('');
   
    return (
        <div>
        <form>
            <input onChange={(e)=>setThreezd(e.target.value)} />
        </form>
        <p>3 задание ЛР7: {threezd}</p>
    
        </div>
    );
}
export default Tri;