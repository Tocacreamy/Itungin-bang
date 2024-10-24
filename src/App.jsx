import { useState } from 'react'
import { buttonStyle } from './style';

function App() {
  const [number,setNumber] = useState('');

  function handleClick(tmp){
    setNumber(number => number+tmp);
  }


  function reset(){
    setNumber('')
  }

  function count(){
    let result;

    const toOperation = number.trim().split(/[1234567890]/)
    const arrOperation = toOperation

    const toNum = number.split(/[+:x-]/)
    const arrNum = toNum.map((num)=>{ return parseInt(num)})
    
    if(arrOperation[1] === '+'){
      result = arrNum[0] + arrNum[1]
    }

    if(arrOperation[1] === '-'){
      result = arrNum[0] + arrNum[1]
    }

    if(arrOperation[1] === 'x'){
      result = arrNum[0] * arrNum[1]
    }

    if(arrOperation[1] === ':'){
      result = arrNum[0] / arrNum[1]
    }



    console.log(arrNum)
    console.log(arrOperation)
    setNumber(result)

  }
   
  

  return (
    <>
    <div className='h-auto shadow-md m-auto mt-48 border-2 box-content p-2 komputer:w-1/2 komputer:h-96'>
      <h2 className='bg-slate-200 my-3 mx-1 w-auto h-9 '>{number}</h2>
      <div className='mx-1'>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('1')}>1</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('2')}>2</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('3')}>3</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('x')}>x</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('4')}>4</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('5')}>5</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('6')}>6</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick(':')}>:</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('7')}>7</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('8')}>8</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('9')}>9</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('+')}>+</button>
        <button className={`${buttonStyle}`}onClick={()=> reset()}>c</button>
        <button className={`${buttonStyle}`}onClick={()=> handleClick('0')}>0</button>
        <button className={`${buttonStyle}`}onClick={()=> count()}>=</button>
        <button className={`${buttonStyle}`} onClick={()=> handleClick('-')}>-</button>
        
      </div>
    </div>
      
    </>
  )
}

export default App
