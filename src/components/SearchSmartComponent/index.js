import React from 'react';
import { Card, Input } from 'antd';

import './style.css';

const { Search } = Input;

export default (props) => {
    const { changePage } = props;

    const onSearch = value => {
        changePage(true);
    };

    return (
        <div className="search-smart">
            <Card className="search-smart-card">
                <p className="search-smart-card-title">SEARCH SMART CONTRACT</p>
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
                <div className="search-smart-container">
                    <p className="search-smart-container-search-title">Search a smart contract</p>
                    <Search placeholder="Search a smart contract here..." size="large" onSearch={onSearch} />
                </div>
            </Card>
        </div>
    );
}