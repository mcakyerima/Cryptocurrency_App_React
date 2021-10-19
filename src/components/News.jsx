import React from 'react';
import { Select , Typography , Row, Avatar, Card, Col } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const { Text , Title} = Typography;
const { Options } = Select;
const News = ({ simplified }) => {
    // pull out data from
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });
 
    if(!cryptoNews?.value) return 'Loading';
    return (
        <Row gutter={[24 , 24]}>
            {cryptoNews.value.map((news , key) => (
                <Col xs={24} sm={12}  lg={8} key={key}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel='noferrer'>
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                            </div>
                            <p>
                                {   news.description > 100 ? 
                                    `${news.description.substring(0,100)}.....`
                                    : news.description
                                }
                                </p>
                                <div className="provider-container">
                                    <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

                                </div>

                        </a>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default News;