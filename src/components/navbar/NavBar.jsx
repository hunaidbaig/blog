import { Col, Typography, Input } from "antd";

const { Title } = Typography;
const { Search } = Input;

const NavBar = () => {

    return (
        <Col style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }} 
                span={24}>
            <div>
                <ul 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "20px",
                        listStyle: "none",
                    }}
                >
                    <li>Collections</li>
                    <li>Most Popular</li>
                </ul>
            </div>
            <div>
                <Title level={3}>REBUNI</Title>
            </div>
            <div>
                <Search placeholder="Search" onSearch={value => console.log(value)} enterButton />
            </div>            

        </Col>
    )
}

export default NavBar;