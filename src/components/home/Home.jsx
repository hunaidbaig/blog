import { Avatar, Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

import Styles from './Home.module.css'
import { Link, useNavigate } from "react-router-dom";

const data = [
    {
        id: 1,
        name: 'Hotel Swiss',
        shortDesc: 'A basic hotel on a budget.',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/HotelSwiss-Karachi.png?raw=true',
        location: 'Karachi',
        experience: 'Budget',
        pool: false,
        price: 2500

    },
    {
        id: 2,
        name: 'Pearl Continental Hotel',
        shortDesc: 'A luxury experience in the heart of the commercial center',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/PearlContinental-Karachi.jpg?raw=true',
        location: 'Karachi',
        experience: 'Luxury',
        pool: true,
        price: 40000,
    },

    {
        id: 3,
        name: 'Star Guest House',
        shortDesc: 'The nicest place in town for a moderate price!',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/StarGuestHouse-Karachi.jpg?raw=true',
        location: 'Karachi',
        experience: 'Business',
        pool: false,
        price: 15000,
    },
    {
        id: 4,
        name: 'Hammad Lodges',
        shortDesc: 'It got a bed and a toilet. What else do you want?',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/HammadLodges-Islamabad.jpg?raw=true',
        location: 'Islamabad',
        experience: 'Budget',
        pool: false,
        price: 2700,
    },
    {
        id: 5,
        name: 'Holidazzle Serviced Apartments',
        shortDesc: 'Luxury on a budget!  Full apartments with electric kettles in every room!',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/Holidazzle-Islamabad.jpg?raw=true',
        location: 'Islamabad',
        experience: 'Business',
        pool: true,
        price: 14000,
    },
    {
        id: 6,
        name: 'Centaurus Hotel Suites',
        shortDesc: 'The finest Islamabad has to offer - like visiting the future!',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/CentaurusHotelSuites-Islamabad.jpg?raw=true',
        location: 'Islamabad',
        experience: 'Luxury',
        pool: true,
        price: 62000,
    },
    {
        id: 7,
        name: 'New Taj Hotel',
        shortDesc: 'For those nights when you’re too tired to care where you sleep!',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/NewTajHotel-Lahore.jpg?raw=true',
        location: 'Lahore',
        experience: 'Budget',
        pool: false,
        price: 810,
    },
    {
        id: 8,
        name: '12th Avenue',
        shortDesc: 'All the amenities at a price perfect for the business traveler.',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/12thAvenue-Lahore.jpg?raw=true',
        location: 'Lahore',
        experience: 'Business',
        pool: true,
        price: 13500,
    },
    {
        id: 9,
        name: 'Hilton Suites',
        shortDesc: 'European luxury at an unaffordable price!',
        longDesc: 'Hotel Swiss is a 2-star property located in Karachi. With free WiFi, this 2-star hotel offers a shared lounge and room service. The property has a 24-hour front desk and a concierge service for guests.All guest rooms in the hotel are equipped with a flat-screen TV with cable channels. All rooms feature a private bathroom, free toiletries and bed linen.A halal breakfast is available every morning at Hotel Swiss.The nearest airport is Jinnah International Airport, 8.7 miles from the accommodation.',
        image: 'https://github.com/jeff-lent/exotourista/blob/main/HiltonSuites-Lahore.jpg?raw=true',
        location: 'Lahore',
        experience: 'Luxury',
        pool: true,
        price: 120000,
    }
]

const Home = () => {

    const navigate = useNavigate();

    const onSearch = (hotel) => {
        console.log('search', hotel)
        navigate(`/hotel/${hotel.id}`, {state: hotel})
    }

    return (
        <>
            <Row className={Styles.row}>
                {
                    data.map(hotel => {
                        return (
                            
                            <Col key={hotel.id}>
                                <Card
                                    style={{ width: 300, height: '450px' }}
                                    cover={
                                        <img
                                            alt="hotel image"
                                            width={'auto'}
                                            height={'200px'}
                                            src={hotel.image}
                                        />}>
                                        <Meta
                                            style={{ height: '80px' }}
                                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                            title={hotel.name}
                                            description={hotel.shortDesc}
                                        />
                                    <div className="additional">
                                        <div className={Styles.fields}>
                                            <p>Price:</p>
                                            <p>{hotel.price}</p>
                                        </div>

                                        <div className={Styles.fields}>
                                            <p>Pool:</p>
                                            <p>{hotel.pool ? 'yes' : 'No'}</p>
                                        </div>

                                        <div className={Styles.fields}>
                                            <p>Experience Level:</p>
                                            <p>{hotel.experience}</p>
                                        </div>
                                    </div>
                                    <Button style={{ marginTop: '10px' }} type="primary" onClick={()=>onSearch(hotel)}>
                                        Book now
                                    </Button>
                                </Card>
                            </Col>
                       );
                    })
                }
            </Row>
        </>
    )
}

export default Home;