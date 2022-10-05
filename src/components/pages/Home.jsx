import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Star from '../assets/icon-star.svg'
import { Button } from '../button/button';
import { Card, Description, Title } from '../icon/card/card';
import { Container } from '../container';
import { ListConstainer, ListItem } from '../icon/icon';
import { NumberContext } from '../context'

function Home(){
  function handleActive(num){
    setNumberBtn(prevState =>{
      return prevState.map( prevNum =>{
        if(prevNum.number === num){
          return {
            ...prevNum,
            active: true
          }
        }
        return {
          ...prevNum,
          active: false
        }
      }
      )
    })
  }
  const [numberBtn, setNumberBtn] = useState([
    {
      number: 1,
      active: false
    },
    {
      number: 2,
      active: false
    },
    {
      number: 3,
      active: false
    },
    {
      number: 4,
      active: false
    },
    {
      number: 5,
      active: false
    }])
  return(
    <>
      <NumberContext.Consumer>
        {({onClickNumberSupport}) =>(
          <Container>
            <Card>
              <ListItem>
                <img src={Star} alt="" />
              </ListItem>
              <Title>How did we do?</Title>
              <Description>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Description>
              <ListConstainer onClick={onClickNumberSupport}>
                {
                  numberBtn.map( (num, id) =>{
                   return <ListItem select={num.active} onClick={()=>{
                    handleActive(num.number)
                   }} key={id}>{num.number}</ListItem>
                  })
                }
              </ListConstainer>
              <Link to='/state'>
                <Button>SUBMIT</Button>
              </Link>
            </Card>
          </Container>
      )}
    </NumberContext.Consumer>
    </>
  )
}

export default Home