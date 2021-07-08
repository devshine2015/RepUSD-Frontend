import React, { useState } from 'react';
import { PageHeader, Table, Button, Input, Select } from 'antd';

import './style.css';

const { Search } = Input;
const { Option } = Select;
const { Column } = Table;

const dataSource = [];

for (let i = 1; i <= 100; i++) {
    dataSource.push({
        key: i,
        user: `Edward King ${i}`,
        earn: '$1456784646.67M',
        assets: `Kyber Network ${i}`,
    });
}

export default () => {
    const [pageSize, setPageSize] = useState(10);

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <Button>Previous</Button>;
        }
        if (type === 'next') {
            return <Button>Next</Button>;
        }

        return originalElement;
    }

    return (
        <div className="earning">
            <div className="earning-container">
                <PageHeader
                    title={<span className="earning-page-title">USER EARNING</span>}
                >
                    THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.
                    THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.
                    THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.
                    THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.THis is a test.
                </PageHeader>
                <div className="earning-table-setting">
                    <div className="earning-table-setting-right">
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
                        key="user"
                        title="USER"
                        dataIndex="user"
                    />
                    <Column
                        key="earn"
                        title="EARN"
                        dataIndex="earn"
                    />
                    <Column
                        key="assets"
                        title="ASSETS"
                        dataIndex="assets"
                    />
                    <Column
                        key="btn"
                        render={() => (
                            <Button size="small">EARN</Button>
                        )}
                    />
                </Table>
            </div>
        </div>
    );
}