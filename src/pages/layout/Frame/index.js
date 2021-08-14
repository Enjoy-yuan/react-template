import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Layout, Menu } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'
import { adminRoutes } from '../../../routes'
import './index.css'
const { Header, Content, Sider } = Layout
const routes = adminRoutes.filter((route) => route.isShow)

export class index extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" onClick={() => this.props.history.push('/admin/dashboard')}>后台管理系统</div>
          <span onClick={() => this.props.history.push('/login')}>退出登录</span>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
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
          <Layout style={{ padding: '10px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(index)
