import React, { useState } from 'react';
import { PageHeader, Input, Table, Radio, Select, Button } from 'antd';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

import {
    AaveMarketImage,
    AaveV1MarketImage,
    AaveV2MarketImage,
    AmmMarketImage,
} from 'img';
import './style.css';

const { Search } = Input;
const { Column } = Table;
const { Option } = Select;

const dataSource = [];

for (let i = 1; i <= 100; i++) {
    dataSource.push({
        key: i,
        assets: `Edward King ${i}`,
        marketSize: '$1.67M',
        totalBorrowed: `$24.88K`,
        depositApy: `0.04%`,
        borrowAprVariable: `0.18%`,
        borrowAprStable: `3.23%`,
    });
}

export default props => {
    const { path } = props;
    const [pageSize, setPageSize] = useState(10);
    const isDashboard = path === '/dashboard' ? true : false;

    const onSearch = seachKey => {
        console.log('seach key: ', seachKey);
    }

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <Button style={{backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center'}}><AiOutlineDoubleLeft />&nbsp;Previous</Button>;
        }
        if (type === 'next') {
            return <Button style={{backgroundColor: '#d5b75f', color: 'white', display: 'flex', alignItems: 'center'}}>Next&nbsp;<AiOutlineDoubleRight /></Button>;
        }

        return originalElement;
    }


    const MarketSizeContainer = () => (
        <div className="market-size-container">
            <div className="market-size-container-title">MAEKET SIZE</div>
            <div className="market-size-container-content">
                <span>$ 16,820,981,911.91</span>
                <div className="market-size-container-link-group">
                    <img src={AaveMarketImage} />
                    <img src={AaveV1MarketImage} />
                    <img src={AaveV2MarketImage} />
                    <img src={AmmMarketImage} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="dashboard">
            <div className="dashboard-container" >
            <PageHeader 
                title={<span className="page-title">{isDashboard ? 'My Dashboard' : 'SEARCH RESULT'}</span>}
            >
                {!isDashboard && <Search placeholder="Kyber Network" size="large" onSearch={onSearch} allowClear />}
                <MarketSizeContainer />
            </PageHeader>
            <div className="dashboard-table-setting">
                <Radio.Group defaultValue="usd" buttonStyle="solid">
                    <Radio.Button value="usd" className="usd-native-btn usd">USD</Radio.Button>
                    <Radio.Button value="native" className="usd-native-btn native">NATIVE</Radio.Button>
                </Radio.Group>
                <div className="dashboard-table-setting-right">
                    <Search placeholder="Search" />
                    <Select defaultValue="10" onChange={(value) => setPageSize(value)}>
                        <Option value="10">10 per page</Option>
                        <Option value="20">20 per page</Option>
                        <Option value="50">50 per page</Option>
                        <Option value="100">100 per page</Option>
                    </Select>
                </div>
            </div>
            <Table
                dataSource={dataSource}
                pagination={{
                    showSizeChanger: false,
                    total: dataSource.length,
                    pageSize: pageSize,
                    position: ['bottomLeft'],
                    itemRender: itemRender,
                }}
            >
                <Column
                    key="assets"
                    title="ASSETS"
                    dataIndex="assets"
                />
                <Column
                    key="marketSize"
                    title="MARKET SIZE"
                    dataIndex="marketSize"
                />
                <Column
                    key="totalBorrowed"
                    title="TOTAL BORROWED"
                    dataIndex="totalBorrowed"
                />
                <Column
                    key="depositApy"
                    title="DEPOSIT APY"
                    dataIndex="depositApy"
                />
                <Column
                    key="borrowApr"
                    title={<><span className="header-title-fore">Valiable</span><br /><span>BORROW APR</span></>}
                    dataIndex="borrowAprVariable"
                />
                <Column
                    key="borrowApr"
                    title={<><span className="header-title-fore">State</span><br /><span>BORROW APR</span></>}
                    dataIndex="borrowAprStable"
                />
                <Column
                    key="btn"
                    render={() => (
                        <>
                            <Button size="small" className="dashboard-row-btn">DEPOSIT</Button>
                            <Button size="small" className="dashboard-row-btn">BORROW</Button>
                        </>
                    )}
                />
            </Table>
            </div>
        </div>
    );
}