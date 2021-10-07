import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import {
  Container,
  Table,
  Head,
  Body,
  Row,
  Header,
  Data
} from '../styles/components/Database.style'
import { MdDelete } from 'react-icons/md'
import { notify } from '../utils/notifications'

type TableProps = {
  _id: string
  email: string
  hash: string
}

export default function Database() {
  const [list, setList] = useState<TableProps[]>([])

  async function removeAccount(id: string) {
    await axios.delete('/api/delete', { params: { id } })

    setList(list.filter((item) => item._id !== id))
    notify('info', 'E-mail deletado')
  }

  const getTableData = useCallback(async () => {
    const tableData = await axios.get('/api/list').then((res) => res.data)
    setList(tableData)
  }, [list])

  useEffect(() => {
    getTableData()
  }, [getTableData])

  return (
    <Container>
      <Table>
        <Head>
          <Row>
            <Header></Header>
            <Header>Email</Header>
            <Header>Password</Header>
            <Header></Header>
          </Row>
        </Head>

        <Body>
          {list.map((row, i) => (
            <Row key={row._id}>
              <Data data-label='ID'>{i + 1}</Data>
              <Data data-label='Email'>{row.email}</Data>
              <Data data-label='Password'>{row.hash}</Data>
              <Data data-label='Delete'>
                <MdDelete
                  color='red'
                  size={20}
                  onClick={(e) => removeAccount(row._id)}
                />
              </Data>
            </Row>
          ))}
        </Body>
      </Table>
    </Container>
  )
}
