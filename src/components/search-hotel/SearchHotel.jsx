import React from 'react';
import { Button, Checkbox, Col, Form, Select,Typography } from 'antd';

import Styles from './SearchHotel.module.css';
import { useNavigate } from 'react-router-dom';

const {Title} = Typography;
const {Item} = Form;
const experience = [
    {label: 'Budget', value: 'budget' },
    {label: 'Business', value: 'business'} ,
    {label: 'Luxury', value: 'luxury'},
];

const city = [
    {label: 'Karachi', value: 'karachi' },
    {label: 'Islamabad', value: 'islamabad'} ,
    {label: 'Lahore', value: 'lahore'},
];

const SearchHotel = () => {
    const navigate = useNavigate();


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    const onFinish = (values)=>{
        console.log(values)
        navigate('/search')
    }

  return (
        <Col span={8} className={Styles.col}>
            
            <Title style={{textAlign: 'center'}}>Exotourista</Title>

            <Form onFinish={onFinish}>

                <Item label={'Select City:'} name={'city'} rules={[{ required: true, message: 'Please select your city!' }]} >
                    <Select
                        className={Styles.select}
                        onChange={handleChange}
                        options={city}
                    />
                </Item>
                
                <Item label={'Experience Level:'} name={'experience'} rules={[{ required: true, message: 'Please select your Experience!' }]} >
                    <Select
                        className={Styles.select}
                        onChange={handleChange}
                        options={experience}
                    />
                </Item>


                <Item label={'Pool:'} name={'pool'} valuePropName="checked">
                    <Checkbox onChange={onChange}></Checkbox>
                </Item>

                <Item wrapperCol={{ span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Item>

            </Form>
        </Col>
  )
}

export default SearchHotel;
