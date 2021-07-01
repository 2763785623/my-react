import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

import logo from './logo.gif'
import { adminRoutes } from '../../routes/index'

const routes = adminRoutes.filter(route => route.isShow)

const { Header, Content, Sider } = Layout;

const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2645414_c8kovpj82z.js',
});

function Index(props) {
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt={logo} style={{ width:'250px', height:'50px' }}/>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routes.map(route => {
                            return (<Menu.Item key={route.path}>
                                <Icon type={route.icon} />
                                {route.title}
                            </Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Index
