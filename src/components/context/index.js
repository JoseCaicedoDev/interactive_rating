import React, {useState} from 'react';

const NumberContext = React.createContext()

function NumberProvider(props){
  const onClickNumberSupport = (num) => {
    let numberSupport = parseInt(num.target.innerText)

    setNumber(numberSupport)
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

export {NumberContext, NumberProvider}