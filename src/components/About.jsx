import React from 'react';
import Slide from 'react-reveal/Slide';
import image from '../images/about_image.png';

import {Typography , Row , Col } from 'antd';
import { GithubOutlined , LinkedinOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const About = () => {
    const {Title} = Typography;
    return(
        <Row gutter={[32, 32]} className='about-container'>
             <Slide left>
                <Col  xs={24} sm={20} lg={15} xl={12} className="image-container">
                    
                    <img src={image} className="about-image"/>
                </Col>
            </Slide>
            <Col  xs={24} sm={20} lg={8} xl={12} className="body-container">
                <Slide top>
                <Title level={2}>
                    Hello!  I'am  <span className="about-name"><a href="https://github.com/mcakyerima">Mc Ak Yerima</a></span>
                </Title>
                </Slide>
               
                <Slide right>
                <p className="about-body">
                    I'm a MERN Stack developer, a UX/UI designer and A.I and
                    machine Learning obsessive who loves to create ingenious software
                    and daring interaction concepts. <strong>Crpyptosphere</strong> is a React Web App that is built on top 
                    of Crytpo API. it gives you Stats and Latest News about any crypto currency around the Globe.
                    simply search or Click on any crypto currency to view a comprehensive stats for that currency.
                    if you enjoy this App, please share the Link with your friends and crypto forums. dont forget to visit my github repo and drop a Star... peace✌ 
                </p>
                <Col span={12} className="icons">
                    
                    <a href="https://github.com/mcakyerima"><GithubOutlined /></a>
                    <a href='https://www.linkedin.com/in/mohammed-abba-kaka-a69144195/'><LinkedinOutlined /></a>
                    <a href='https://www.instagram.com/mc_freesh/'><InstagramOutlined /></a>
                    <a href='https://twitter.com/mcakyerima'><TwitterOutlined /></a>
                </Col>
                </Slide>
                
            </Col>
          
         
        </Row>
    )
}
export default About;