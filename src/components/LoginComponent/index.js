import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const LoginComponent = ({props, loginRequest}) => {
    const VALIDATE_FIELD = {
        EMAIL: [{
            required: true,
            message: 'Please input your email!' 
        },
        {
            type: 'email', 
            message: 'The input is not valid E-mail.'
        }],
        PASSWORD: [{ 
            required: true,
            message: 'Please input your password!'
        }]
    };

    const onFinish = (values) => {
        loginRequest(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={VALIDATE_FIELD.EMAIL}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={VALIDATE_FIELD.PASSWORD}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginComponent;
