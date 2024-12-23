import {useState} from 'react';

 function Chetire() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? 'red' : '',
          color: isActive ? 'black' : '',
        }}
        onClick={handleClick}
      >
        неКНопО4ка
      </button>
    </div>
  );
  
}
export default Chetire;