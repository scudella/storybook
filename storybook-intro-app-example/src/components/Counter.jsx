import ButtonCounter from './ButtonCounter';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {count}
      <br />
      <br />
      <ButtonCounter
        onClick={handleCount}
        label='increment'
        backgroundColor='#455eb5'
        buttonStyleVersion='counter-button1'
        size='large'
      />
    </div>
  );
};
export default Counter;
