import styled from 'styled-components'

export const Container = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: hsl(0, 0%, 99%);

  @media (max-width: 860px) {
    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 1rem;
      border: 1px solid black;
    }

    td {
      text-align: right;
      padding-left: 40%;
      position: relative;

      &::before {
        padding-left: 1rem;
        position: absolute;
        left: 0;
        content: attr(data-label);
        text-align: left;

        font-weight: 800;
        font-size: 1rem;
      }
    }
  }
`

export const Head = styled.thead``

export const Body = styled.tbody``

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: hsl(0, 0%, 95%);
  }

  &:hover {
    background-color: #04aa6d;
  }
`
export const Header = styled.th`
  padding: 0.8rem;
  text-align: center;
  background-color: #04aa6d;
  color: white;
  border: 1px solid #ddd;
`
export const Data = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  padding: 8px;

  &:nth-child(0),
  &:last-of-type {
    text-align: center;
  }

  svg {
    cursor: pointer;
  }
`
