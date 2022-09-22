import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--Orange);
  color:var(--White);
  width: 100%;
  border: none;
  border-radius: 2rem;
  padding: 1rem 0;
  letter-spacing: .1rem;
  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1.rem;
  margin-bottom: .5rem;
  :hover{
    background-color: var(--White);
    color: var(--Orange);
  }
`
export { Button }