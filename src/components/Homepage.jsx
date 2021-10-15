
import React from 'react';
import { Typography, Row , Col , Statistic } from 'antd';
import {Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components'
import millify from 'millify';


const { Title } = Typography;
const Homepage = () => {
    // get our query data with redux using the isFetching state and data hook
    const { data , isFetching } = useGetCryptosQuery();
    if(data){
        console.log('this is data' , Object.keys(data), data.data)
    }
    const globalStats = data?.data?.stats
    if(isFetching){ return "Loading"}
    return (
        <>
            <Title level={2} className="heading" >Global Crypto Stats</Title>
            <Row>
                <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total}/> </Col>
                <Col span={12}> <Statistic title="Total Exchanges" value={globalStats.totalExchanges}/> </Col>
                <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/> </Col>
                <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/> </Col>
                <Col span={12}> <Statistic title="Total Markets" value={globalStats.totalMarkets}/> </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
                <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to="/News">Show More</Link></Title>
            </div>

        </>
    )
}

export default Homepage
