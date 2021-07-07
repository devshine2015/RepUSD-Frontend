import React from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';

const { Option } = Select;

const RegisterComponent = props => {
    const [form] = Form.useForm();

    const VALIDATTE_FIELD = {
        EMAIL: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
        }],
        PASSWORD: [{
            required: true,
            message: 'Please input your password!',
        }],
        PASSWORD_CONFIRM: [
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
    
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
        ],
        NICKNAME: [{
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
        }],
        PHONE_NUMBER: [{
            required: true,
            message: 'Please input your phone number!',
        }],
        GENDER: [{
            required: true,
            message: 'Please select gender!',
        }],
        AGREEMENT: [{
            validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
        }],
    };

    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
        },
    };
       
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={VALIDATTE_FIELD.EMAIL}
            >
                <Input />
            </Form.Item>
        
            <Form.Item
                name="password"
                label="Password"
                rules={VALIDATTE_FIELD.PASSWORD}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={VALIDATTE_FIELD.PASSWORD_CONFIRM}
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={VALIDATTE_FIELD.NICKNAME}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
        
            <Form.Item
                name="gender"
                label="Gender"
                rules={VALIDATTE_FIELD.GENDER}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>
            </Form.Item> 
        
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={VALIDATTE_FIELD.AGREEMENT}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
}

export default RegisterComponent;