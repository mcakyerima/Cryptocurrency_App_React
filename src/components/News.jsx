import React from 'react';
import { Select , Typography , Row, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';

const { Text , Title} = Typography;
const { Options } = Select;
const News = ({ simplified }) => {
    // pull out data from
    const { data:cryptoNews } =  useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100});
    console.log('crypto News' ,cryptoNews)
    return (
        <div>
            News
        </div>
    )
}

export default News;