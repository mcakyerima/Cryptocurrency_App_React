import React ,{useState} from 'react';
import { Select , Typography , Row, Avatar, Card, Col } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Slide from 'react-reveal/Slide';


import moment from 'moment';
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const { Text , Title} = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
    const [newsCategory , setNewsCategory ] = useState('Cryptocurrency')
    // pull out data from
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data} = useGetCryptosQuery(100);
 
    if(!cryptoNews?.value) return <Loader/>;
    cryptoNews?.value?.map((news) => (console.log('this is news' , news.provider)))
    return (
        <Row gutter={[24 , 24]}>
            {
                !simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) =>setNewsCategory(value)}
                            filterOption={(input , option) => option.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
                        
                        >
                            {/* set the default value for options and loop thruough coin names in data.name.coin and add all 100 coin names to options */}
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            { data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option> )}

                        </Select>
                    </Col>
                )
            }
            {cryptoNews.value.map((news , key) => (
           
                <Col xs={24} sm={12}  lg={8} key={key}>
                <Slide bottom>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel='noferrer'>
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{maxWidth:'200px' , maxHeight:'100px'}}  src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
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
            </Slide>

                </Col>
            ))}

        </Row>
    )
}

export default News;