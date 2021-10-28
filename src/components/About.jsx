import React from 'react';
import {Typography , Row , Col } from 'antd';
import { GithubOutlined , LinkedinOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const About = () => {
    const {Title} = Typography;
    return(
        <Row gutter={[32, 32]} className='about-container'>
            <Col  xs={24} sm={20} lg={15} xl={12} className="image-container">
                <img src={"https://avatars.githubusercontent.com/u/58314409?v=4"} className="about-image"/>
            </Col>
            <Col  xs={24} sm={20} lg={8} xl={12} className="body-container">
                <Title level={2}>
                    Hello!  I'am  <span className="about-name">Mc Ak Yerima</span>
                </Title>
                <p className="about-body">
                    i am a MERN Stack develper, a UX/UI designer and A.I and
                    machine Learning obsessive who loves to create ingenous software
                    and daring interaction concepts. kawocurrency is a React Web App that is built on top 
                    of Crytpo API. it gives you Stats and Latest News about any crypto currency around the Globe.
                    simply search and Click on any crypto currency to view a comprehensive stats for that currency.
                    if you enjoy this App, please share the Link in crypto forums and dont forget to visit my github repo and give it a Star
                </p>
                <Col span={12} className="icons">
                    
                    <a href="https://github.com/mcakyerima"><GithubOutlined /></a>
                    <a href='#'><LinkedinOutlined /></a>
                    <a href='#'><InstagramOutlined /></a>
                    <a href='#'><TwitterOutlined /></a>
                </Col>
            </Col>
        </Row>
    )
}
export default About;