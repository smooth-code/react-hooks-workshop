import styled from 'styled-components'

const Card = styled.div`
  color: #fff;
  text-shadow: 1px 1px 0 #000;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

Card.Body = styled.div`
  padding: 10px;
`

Card.Title = styled.h3`
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 500;
  margin: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
Card.Subtitle = styled.p`
  font-size: 0.9em;
  margin: 0;
`

export default Card
