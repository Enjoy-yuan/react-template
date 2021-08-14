import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Layout, Menu } from 'antd'
import { UnorderedListOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { adminRoutes } from '../../../routes'
const { Header, Content, Sider } = Layout
const routes = adminRoutes.filter((route) => route.isShow)

export class index extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {routes.map((route) => {
              return (
                <Menu.Item key={route.path} onClick={(p) => this.props.history.push(p.key)}>
                  <UnorderedListOutlined />
                  <span style={{ marginLeft: 10 }}>{route.title}</span>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="logo">
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle
              })}
            </div>
            <span className="person" onClick={() => this.props.history.push('/login')}>
              退出登录
            </span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: 10,
              padding: 10,
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(index)
