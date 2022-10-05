import React from 'react'
import { Container } from '../container'
import { Card, Description, Title, Text, Image } from '../icon/card/card'
import imageCard from '../assets/illustration-thank-you.svg'
import { NumberContext } from '../context'

function CardState() {
  return(
    <>
      <NumberContext.Consumer>
        {({number})=>(
          <Container>
            <Card>
              <Image src={imageCard} alt="" />
              <Text>You select {number} out of 5</Text>
              <Title>Thank you!</Title>
              <Description>We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesilate to get in touch!
              </Description>
            </Card>
          </Container>
        )}
      </NumberContext.Consumer>
    </>
  )
}

export default CardState