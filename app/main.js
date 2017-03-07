import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;


class SiderContainer extends React.Component {
	render() {
		const MenuItemStyle = {
			height: '60px',
			padding: '0px'
		}
		const MenuIconStyle = {
			textAlign: 'center',
			fontSize: '30px',
			padding: '5px 15px 0px 15px',
			lineHeight: '40px'
		}
		const MenuIconTextStyle = {
			lineHeight: '14px',
			fontSize: '14px',
			display: 'block',
			textAlign: 'center',
			marginTop: '-10px',
			transform: 'scale(0.83)',
			whiteSpace: 'nowrap'
		}
		return (
			<Menu theme="white" mode="vertical" defaultSelectedKeys={['sub1']} style={ { height: '100%' } }>
				<Menu.Item  key="sub1" style={MenuItemStyle}>
					<Link to='/quotes/main'>
						<span><Icon style={MenuIconStyle} type="line-chart" /><span style={MenuIconTextStyle}>行情</span></span>
					</Link>
				</Menu.Item>
				<Menu.Item  key="sub2" style={MenuItemStyle}>
					<Link to='/quotes/custom'>
						<span><Icon style={MenuIconStyle} type="star-o" /><span style={MenuIconTextStyle}>自选</span></span>
					</Link>
				</Menu.Item>
				<Menu.Item  key="sub3" style={MenuItemStyle}>
					<span><Icon style={MenuIconStyle} type="file-text" /><span style={MenuIconTextStyle}>详情</span></span>
				</Menu.Item>
				<Menu.Item  key="sub4" style={MenuItemStyle}>
					<span><Icon style={MenuIconStyle} type="pay-circle-o" /><span style={MenuIconTextStyle}>交易</span></span>
				</Menu.Item>
				<Menu.Item  key="sub5" style={MenuItemStyle}>
					<span><Icon style={MenuIconStyle} type="team" /><span style={MenuIconTextStyle}>圈子</span></span>
				</Menu.Item>
			</Menu>
		)
	}
}

class Main extends React.Component {
	render() {
		const HeaderStyle = {
			height: 48
		};
		const FooterStyle = {
			height: 32,
			textAlign: 'center'
		};
		const contentStyle = {
			background: '#fff', 
			borderRadius: '5px',
			border: '1px solid #ddd',
			margin: 12, 
			minHeight: 600 
		};
		return (
			<Layout>
				<Header style={HeaderStyle}>
					<h1 style={{color:'#fff', paddingTop: 10}}>DEMO</h1>
				</Header>
				<Layout id="components-layout-demo-side">
					<Sider width={60}>
						<SiderContainer></SiderContainer>
					</Sider>
					<Content style={contentStyle}>
						{this.props.children}
					</Content>
				</Layout>
				<Footer style={ FooterStyle }>
					Shinny ©2016 Created by Shinny
				</Footer>
			</Layout>
		)
	}
}

export default Main;