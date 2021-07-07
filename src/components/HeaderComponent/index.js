import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from '@ant-design/icons'

import NavbarList from 'const/navbar';

import { RepusdSmallMark } from 'img';
import './style.css';

export default () => {
	const [menuFoldState, setMenuFoldState] = useState(false);

	const toggleCollapsed = () => {
		setMenuFoldState(!menuFoldState);
	}

  	return (
    	<>
			<div className="logo">
				<img src={RepusdSmallMark} />
			</div>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
				{
					NavbarList.map((item, index) => {
						return <Menu.Item key={index}><a href={item.url}>{item.title}</a></Menu.Item>;
					})
				}
			</Menu>
			<Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
				{!menuFoldState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}	
			</Button>
		</>
  	)
}