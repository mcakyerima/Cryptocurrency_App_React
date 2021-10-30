import React from 'react'
import millify from 'millify';
import {Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

import Loader from './Loader';


const Cryptocurrencies = ( { simplified }) => {
    // destructure data as cryptolist and isfetching as Loading to useGetCryptosQuery
    const count = simplified ? 10 : 100;
    // fetch cryptocurrency
    const { data : cryptoList , isFetching : Loading} = useGetCryptosQuery(count);
    const [cryptos , setCryptos ] = useState([]);
    const [searchTerm , setSearchTerm] = useState('')
    // use useEffect to filter and call the filter funcition when ever the cryptolist and search term changes
    useEffect( ()=> {
        const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        // set the cryptos state Filtered data so that it only displays the searched crypto
        setCryptos(filteredData);
    }, [cryptoList, searchTerm])
    if(Loading) return <Loader/>;
    

    console.log("this is crypto" , cryptos)

    return (
        
       <>
            {!simplified && (
                <div className="search-crypto">
                <input placeholder="search Cryptocurrency" autoFocus onChange= {(e) =>   setSearchTerm(e.target.value)} ></input>
            </div>
            )}
            
                <Row gutter={[32 , 32]} className="crypto-card-container">
                    {cryptos?.map(( currency) => (
                        
                            <Col xs={24} sm={12} lg={6} key={currency.id} className='crypto-card'>
                                <Slide bottom>
                                <Link to={`/crypto/${currency.id}`}>
                                    <Card title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                    hoverable>
                                        <p>Price: {millify(currency.price)}</p>
                                        <p>Market Cap: {millify(currency.marketCap)}</p>
                                        <p>Daily Change: {millify(currency.change)}%</p>
                                    </Card>
                                </Link>
                                </Slide>
                            </Col>
                       
                    ))}

                </Row>
           
       </>
    )
}

export default Cryptocurrencies
