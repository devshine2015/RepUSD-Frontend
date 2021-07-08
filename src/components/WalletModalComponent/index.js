import React from 'react';
import { Modal, Select, Card } from 'antd';

import './style.css';

const { Option } = Select;

export default (props) => {
    const { visible, setIsModalVisible } = props;

    const handleCancel = () => {
		setIsModalVisible(false);
	};

    return (
        <Modal visible={visible} footer={null} closable={false} onCancel={handleCancel} className="connect-wallet">
            <div className="connect-wallet-modal">
                <div className="connect-wallet-modal-header">
                    <div className="connect-wallet-modal-title">CONNECT YOUR WALLET</div>
                    <p className="connect-wallet-modal-explain">Selected preferred network</p>
                    <Select defaultValue="1" size="large" className="connect-wallet-select">
                        <Option value="1">Etherinum Mainnet</Option>
                        <Option value="2">Etherinum Mainnet 1</Option>
                        <Option value="3">Etherinum Mainnet 2</Option>
                        <Option value="4">Etherinum Mainnet 3</Option>
                    </Select>
                </div>
                <div className="connect-wallet-modal-body">
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                    <Card className="wallet"></Card>
                </div>
                <div className="connect-wallet-modal-footer">
                    <p className="connect-wallet-modal-explain">
                        Need help connecting a wallet?<span className="theme-color">Read our FAQ</span>
                    </p>
                    <p>
                        By unlocking Your wallet You agree to our <span className="theme-color">Terms of Service, Privacy, and Cookie Policy</span>
                    </p>
                    <p>
                        <span className="theme-color">Disclaimer: </span>Wallets are provided by External Provider and by selecting  you agree to Terms  of Providers.
                         Your access to the wallet might be reliant on the External Provider being opertional.
                    </p>
                </div>
            </div>
        </Modal>
    );
}