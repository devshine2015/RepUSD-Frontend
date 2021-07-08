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
        <div className="reputation">
            <Card className="reputation-card">
                <p className="reputation-card-title">MY REPUTATION</p>
                <p className="reputation-explain-large">
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                </p>
                <p className="reputation-explain-medium">
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                </p>
                <p className="reputation-explain-small">
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                 </p>
                <p className="reputation-explain-tiny">
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                    This is test.This is test.This is test.This is test.This is test.This is test.This is test.
                </p>
            </Card>
        </div>
    );
}