import Head from 'next/head'
import React from 'react'
import { Row, Col} from 'antd'
import Header from "../components/Header";
// import Link from 'next/link'

const List = () => (
  <>
    <Head>
      <title>List</title>
    </Head>
    <Header />
    {/* <Row className='comm-main' type='flex' justify='center'>
      <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
        左侧
      </Col>
      <Col className='comm-right' xs={24} sm={24} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row> */}
  </>
)
export default List