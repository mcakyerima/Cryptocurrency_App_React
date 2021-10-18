import React from 'react';
import { Select , Typography , Row, Avatar, Card, Col } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';

const { Text , Title} = Typography;
const { Options } = Select;
const News = ({ simplified }) => {
    // pull out data from
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });
    if(!cryptoNews) return "Loading News";
    console.log(cryptoNews)
    if(!cryptoNews.value) return 'Loading';
    return (
        <Row gutter={[24 , 24]}>
            {cryptoNews.value.map((news , key) => (
                <Col xs={24} sm={12}  lg={8} key={key}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel='noferrer'>
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default News;