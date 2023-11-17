import { useState } from 'react';

import bateria from './assets/battery.svg';
import sinal from './assets/signal.svg';
import wifi from './assets/wifi.svg';
import arrow from './assets/arrow.svg';
import equal from './assets/equal.svg';
import list from './assets/list.svg';
import menu from './assets/menu.svg';

import Button from './components/Button';

function App() {

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [operator, setOperator] = useState('');

  const [result, setResult] = useState(0);

  function changeValue(value: number) {
    operator === '' ? setNumberOne(Number(`${numberOne}${value}`)) : setNumberTwo(Number(`${numberTwo}${value}`));
  }

  function changeOperator(operator: string) {
    setOperator(operator);
  }

  function clear() {
    setNumberOne(0);
    setNumberTwo(0);
    setResult(0);
    setOperator('');
  }

  function clearNumber() {
    operator === '' ? setNumberOne(0) : setNumberTwo(0);
  }

  function total() {
    if (operator === '*') {
      setResult(numberOne * numberTwo);
    }

    if (operator === '+') {
      setResult(numberOne + numberTwo);
    }

    if (operator === '-') {
      setResult(numberOne - numberTwo);
    }

    if (operator === '/') {
      setResult(numberOne / numberTwo);
    }
  }

  return (
    <div className="bg-calculator-100 h-screen w-full flex items-center justify-center">
      {/* background */}
      <div className="
        h-[750px] 
        w-[750px] 
        bg-calculator-700 
        rounded-full 
        shadow-[17px_36px_250px_0px_#1B9131]
        flex
        items-center
        justify-center
      "
      >
        {/* circle */}
        <div className="bg-white dark:bg-[#1E1E1E] veigas:bg-green-900 w-[453px] h-[870px] rounded-[47px]">
          {/* base calculator bg white */}
          <div className="w-full h-10 flex justify-between p-5">
            <p className='font-semibold'>22:15</p>
            <div className='flex space-x-3'>
              <img src={bateria} style={{ height: '25px' }} />
              <img src={sinal} style={{ height: '25px' }} />
              <img src={wifi} style={{ height: '25px' }} />
            </div>
          </div>
          <div className="w-full h-36 flex justify-between items-end p-5">
            <img src={arrow} style={{ height: '40px' }} />
            <img src={equal} style={{ height: '40px' }} className="bg-calculator-600 p-3 rounded-md" />
            <img src={menu} style={{ height: '35px' }} />
            <img src={list} style={{ height: '35px' }} />
          </div>
          <div className="w-full h-60 flex flex-col justify-end items-end pb-28 p-5">
            <p className='text-3xl mb-4'>{numberOne} {operator} {operator === '' ? '' : numberTwo}</p>
            <p className='text-5xl font-bold'>= {result}</p>
          </div>
          <div className="w-full h-[410px] p-8 grid grid-cols-4 gap-4 items-center justify-center">
            <Button text='C' action={clear} />
            <Button text='X' action={clearNumber} />
            <Button text='/' action={() => changeOperator('/')} operator={true} />
            <Button text='*' action={() => changeOperator('*')} operator={true} />
            <Button text="7" action={() => changeValue(7)} />
            <Button text="8" action={() => changeValue(8)} />
            <Button text="9" action={() => changeValue(9)} />
            <Button text="-" action={() => changeOperator('-')} operator={true} />
            <Button text="4" action={() => changeValue(4)} />
            <Button text="5" action={() => changeValue(5)} />
            <Button text="6" action={() => changeValue(6)} />
            <Button text="+" action={() => changeOperator('+')} operator={true} />
            <Button text="1" action={() => changeValue(1)} />
            <Button text="2" action={() => changeValue(2)} />
            <Button text="3" action={() => changeValue(3)} />
            <Button text="=" action={() => total()} operator={true} />
            <Button text="--" />
            <Button text="0" action={() => changeValue(0)} />
            <Button text="." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
