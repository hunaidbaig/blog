import { Button, Col, Image, Row, Typography } from "antd";
import { useLocation } from "react-router-dom";

const {Title, Paragraph } = Typography;

const Post = () => {

    const location = useLocation();
    const hotel = location.state;

    return (
        // <Card>

        
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '50px' }}>
            <Col span={20}>
                <Image
                    width={'100% '}
                    // height={'50%'}
                    src={`${hotel.image}`}
                    placeholder={
                    <Image
                        preview={false}
                        src={`${hotel.image}`}
                        width={100}
                    />
                    }
                />
            </Col>
            <Col span={20}>
                <Title level={2}>{hotel.name}</Title>
                <Title level={5}>Location:</Title>
                <Paragraph>{hotel.location}</Paragraph>

                <Title level={5}>Pool:</Title>
                <Paragraph>{hotel.pool ? 'Yes' : 'No'}</Paragraph>

                <div style={{display: 'flex', alignContent: 'center', gap: '50px'}}>
                    <Paragraph strong={800}>Price: </Paragraph>
                    <Paragraph>{hotel.price} Rs</Paragraph>
                </div>
                
                <Title level={5}>Description:</Title>
                <Paragraph>{hotel.longDesc}</Paragraph>

                <Button type="primary">Book Now</Button>
            </Col>
        </Row>
        // </Card>
    )
}

export default Post;