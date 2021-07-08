import React, { useState } from 'react';
import { Menu, Button } from 'antd';

import NavbarList from 'const/navbar';

import { RepusdSmallMark } from 'img';
import './style.css';

export default (props) => {
	const { selectedItem } = props;
	const [menuFoldState, setMenuFoldState] = useState(false);

	const toggleCollapsed = () => {
		setMenuFoldState(!menuFoldState);
	}

	const selectedItemArray = () => {
		let newArray = []
		NavbarList.forEach((item, index) => {
			if (item.url === selectedItem) {
				newArray.push(index.toString());
			}
		})
		console.log(newArray)

		return newArray;
	}

	const showWalletModal = () => {
		alert("here");
	}

  	return (
    	<>
			<div className="logo">
				<img src={RepusdSmallMark} />
			</div>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedItemArray()} className="menu">
				{
					NavbarList.map((item, index) => {
						if (item.url === '/connect_wallet') {
							return <Menu.Item key={index}><a onClick={showWalletModal}>{item.title}</a></Menu.Item>;
						} else {
							return <Menu.Item key={index}><a href={item.url}>{item.title}</a></Menu.Item>;
						}
					})
				}
			</Menu>
			<Button className="header-collapse-btn" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
				{!menuFoldState ? 'Unfold' : 'Fold'}	
			</Button>
		</>
  	)
}