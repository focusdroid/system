import React, { Component, Fragment } from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Nav from './components/Nav/index'
import { Row, Col } from 'antd'
import './style/common.less'

export default class Admin extends Component{
  constructor (props){
    super(props);
  }
  render(){
    return(<Fragment>
      <Row className="container">
        <Col span={3} className="nav-left">
          <Nav>
          </Nav>
        </Col>
        <Col span={21} className="main">
          <Header>
          </Header>
          <Row className="content">
          </Row>
          <Footer>
          </Footer>
        </Col>
      </Row>
    </Fragment>);
  }
}
