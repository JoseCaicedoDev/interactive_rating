import React from 'react'
import { Link } from 'react-router-dom';
import Star from '../assets/icon-star.svg'
import { Button } from '../button/button';
import { Card, Description, Title } from '../icon/card/card';
import { Container } from '../container';
import { ListConstainer, ListItem } from '../icon/icon';
import { NumberContext } from '../context'

function Home(){

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
                <ListItem>1</ListItem>
                <ListItem>2</ListItem>
                <ListItem>3</ListItem>
                <ListItem>4</ListItem>
                <ListItem>5</ListItem>
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