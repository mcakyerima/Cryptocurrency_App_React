import React from 'react';
import {Switch, Route , Link } from 'react-router-dom';
import {Layout, Typography , Space} from 'antd';
import { Navbar , Exchanges , Cryptocurrencies , News , CryptoDetails , Homepage , About} from './components';
import './App.css';
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className='main'>
                {/* create ant design layout for our app */}
                <Layout>
                    <div className="routes">
                        {/* switch allows you to use multiple routes */}
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className='footer' >
                <Typography.Title level={5} style={{color: 'white' , textAlign: 'center'}}>
                    Cryptosphere <br/>
                    All Right Reserved
                </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/about'>About</Link>

                    </Space>
                    <Typography.Paragraph style={{color: 'white'}}>
                        made with 💖 by Mc Ak Yerima
                    </Typography.Paragraph>
                    
            </div>
            </div>
            
        </div>
    )
}

export default App
