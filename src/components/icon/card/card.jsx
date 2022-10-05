import styled from 'styled-components'

const Card = styled.div`
  background-color: #1f2630;
  max-width: 20rem;
  border-radius: 2rem;
  padding: 1rem;
  text-align:center;
`
const Title = styled.h1`
  color: var(--White);
  font-size: 1.8rem;
  margin: 1rem 0 .5rem;
`
const Description = styled.p`
  color: var(--Medium-Grey);
  font-size: 1rem;
  line-height: 1.5rem;
`
const Text= styled.p`
  width: 9rem;
  margin: 1rem auto;
  font-size: .8rem;
  color: var(--Orange);
  background: #7c87984d;
  padding: .4rem;
  border-radius: 20px;
`
const Image = styled.img`
  margin-top: 1rem;
`
export { Card, Title, Description, Text, Image }