import React from 'react';
import { Card, Select, Button } from 'antd';

import './style.css';

const { Option } = Select;

export default (props) => {
    return (
        <div className="borrow">
            <Card className="borrow-card">
                <p className="borrow-card-title">BORROW</p>
                <p>
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                </p>
                <p>
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                </p>
                <div className="borrow-operation-container">
                    <p className="borrow-operation-container-title">Select a keyword</p>
                    <Select
                        placeholder="Select any borrow here..."
                        style={{width: 400}}
                        size="large"
                    >
                        <Option value="1">Borrow 1</Option>
                        <Option value="2">Borrow 2</Option>
                        <Option value="3">Borrow 3</Option>
                        <Option value="4">Borrow 4</Option>
                        <Option value="5">Borrow 5</Option>
                        <Option value="6">Borrow 6</Option>
                    </Select>
                    <Button 
                        className="borrow-btn"
                        size="large"
                        style={{
                            backgroundColor: '#d5b75f',
                            color: "white"
                        }}
                    >
                        BORROW NOW
                    </Button>
                </div>
            </Card>
        </div>
    );
}