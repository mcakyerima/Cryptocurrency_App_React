import React from 'react';
import { Select , Typography , Row, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';

const { Text , Title} = Typography;
const { Options } = Select;
const News = ({ simplified }) => {
    // pull out data from
    const { data: cryptoNews } = useGetCryptoNewsQuery({ Cryptocurrency: 'newsCategory', count: simplified ? 6 : 12 });
    if(!cryptoNews) return "Loading News";
    console.log(cryptoNews)
    return (
        <div>
            News
        </div>
    )
}

export default News;