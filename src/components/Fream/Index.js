import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

import logo from './logo.gif'
import { adminRoutes } from '../../routes/index'
// 在组建中实现路由跳转需要 使用widthRouter插件
import { withRouter } from 'react-router-dom'
const routes = adminRoutes.filter(route => route.isShow)

const { Header, Content, Sider } = Layout;

const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2645414_c8kovpj82z.js',
});
/* 
 * 行内样式:
 *     
 *     1. const title = {widht: '20px', height: '20px'}
 *        <h1 style={{title}}></h1>
 *     2. <h1 style={{color:'red',fontSize:'30px'}}></h1>    
 */


function Index(props) {
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt={logo} style={{ width: '250px', height: '50px' }} />
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
                            return (<Menu.Item
                                key={route.path}
                                onClick={p => props.history.push(p.key)}
                            >
                                <Icon type={route.icon} twoToneColor="#52c41a" style={{ 'margin-right': '20px' }} />
                                {route.title}
                            </Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 15px 15px' }}>
                    <Breadcrumb style={{ margin: '10px 0' }}>
                        <Breadcrumb.Item></Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>
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

export default withRouter(Index);
