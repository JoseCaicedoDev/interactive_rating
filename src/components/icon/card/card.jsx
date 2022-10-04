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
export { Card, Title, Description }