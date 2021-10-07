import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    place-items: center;
    grid-template-columns: 1fr;
  }
`
