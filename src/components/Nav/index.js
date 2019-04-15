import React, { Component, Fragment } from 'react'
import meunConfig from '../../config/meunConfig'
import { Menu, Icon } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;

export default class Nav extends Component{
  constructor (props) {
    super(props);
    this.state = {
      MeunTreeNode: []
    }
  }
  componentDidMount () {
    const MeunTreeNode = this.randerMeun(meunConfig)
    this.setState(()=> ({
      MeunTreeNode
    }))
  }
  randerMeun = (data) => { // 菜单渲染
    return data.map((item, i) => {
      if (item.children) {
        return ( //
          <SubMenu title={item.title} key={item.key}>
            { this.randerMeun(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }
  render(){
    return(<Fragment>
      <div className='nav-logo'>
        <img src='/assets/logo-ant.svg' alt=""/>
        <h1>Antd管理系统</h1>
      </div>
      <div>
        <Menu theme='dark'>
          {this.state.MeunTreeNode}
        </Menu>
      </div>
    </Fragment>);
  }
}
