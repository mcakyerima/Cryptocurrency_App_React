import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoApi';
import { Row, Col , Collapse , Typography, Avatar } from 'antd'
import millify from 'millify';
import HtmlReactParser  from 'html-react-parser';
import Loader from './Loader';


const { Text} = Typography;
const { Panel } = Collapse;


const Exchanges = () => {
    const {data , isFetching } = useGetExchangesQuery();
    if(isFetching) return <Loader /> ;
    const exchangesArray = data?.data?.exchanges
    console.log('this is data' , exchangesArray)
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                { 
                exchangesArray.map((exchanges) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel key={exchanges.id}
                            showArrow={false}
                            header={(
                                <Row key={exchanges.id}>
                                    <Col span={6}>
                                        <Text><strong>{exchanges.rank}. </strong></Text>
                                        <Avatar src={exchanges.iconUrl}/>
                                        <Text> <strong>{exchanges.name}</strong></Text>
                                    </Col>

                                    <Col span={6}>${millify(exchanges.volume)}</Col>
                                    <Col span={6}> {millify(exchanges.numberOfMarkets)}</Col>
                                    <Col span={6}>{millify(exchanges.marketShare)}%</Col>
                                </Row>
                            )}
                            >
                                <Row key={exchanges.id}>
                                    {HtmlReactParser(exchanges?.description || 'No Details')}
                                </Row>
                            </Panel>
                        </Collapse>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

export default Exchanges
