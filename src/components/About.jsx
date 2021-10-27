import React from 'react';
import {Typography , Row , Col } from 'antd';

const About = () => {
    const {Title} = Typography;
    return(
        <Row gutter={[32, 32]} className='about-container'>
            <Col  xs={24} sm={20} lg={15} xl={12} className="image-container">
                <img src={"https://avatars.githubusercontent.com/u/58314409?v=4"} className="about-image"/>
            </Col>
            <Col  xs={24} sm={20} lg={8} xl={10} className="body-container">
                <Title level={2}>
                    Hello!  I'am  <span className="about-name">Mc Ak Yerima</span>
                </Title>
                <p className="about-body">
                    i am a MERN Stack develper, a UX/UI designer and A.I and
                    machine Learning obsesive who loves to create ingenous software
                    and daring interaction concepts
                </p>
                <Col>
                    XXXXXXXXX
                </Col>
            </Col>
        </Row>
    )
}
export default About;