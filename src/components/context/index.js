import React, {useState} from 'react';

const NumberContext = React.createContext()

function UseNumberProvider(props){
  const onClickNumberSupport = (num) => {
    let numberSupport = parseInt(num.target.innerText)
    return setNumber(numberSupport)
  }
  const [number, setNumber] = useState(0)
  return(
    <NumberContext.Provider value={{
      onClickNumberSupport,
      number
    }}>
       {props.children}
    </NumberContext.Provider>
  )
}

export {NumberContext, UseNumberProvider}