import React, { useState } from 'react';
import { Menu, Button } from 'antd';

import WalletModalComponent from 'components/WalletModalComponent';
import NavbarList from 'const/navbar';
import { AiOutlineMenuLeft, AiOutlineMenuRight} from 'react-icons/ai';

import { RepusdSmallMark } from 'img';
import './style.css';

export default (props) => {
	const { selectedItem } = props;
	const [menuFoldState, setMenuFoldState] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);

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

		return newArray;
	}

	const showWalletModal = () => {
		setIsModalVisible(true);
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
			<Button className="header-collapse-btn" onClick={toggleCollapsed} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
				{!menuFoldState ? <AiOutlineMenuRight /> : <AiOutlineMenuLeft />}	
			</Button>
			<WalletModalComponent visible={isModalVisible} setIsModalVisible={setIsModalVisible} />
		</>
  	)
}