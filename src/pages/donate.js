
import React from 'react';
import Zoom from 'react-reveal/Zoom';

import classes from './Donate.module.scss';
import Layout from '../components/UI/Layout';
import Decal from '../components/UI/Decal/Decal';
import Container from '../components/UI/Container/Container';
import thank_you_img from '../assets/images/thank_you.png';

const Donate = () => {
    return (
        <Layout>
            <div className={`${classes.Donate} page`}>
                <Decal heading="Donate" color="#A30000" />
                <Container>
                    <div className={classes.Content}>
                        <div className={classes.BankingDetails}>
                            <h2><Zoom><span>Donations</span></Zoom> <Zoom delay={500}><div style={{ display: 'inline-block' }}>are welcome at:</div></Zoom></h2>
                            <Zoom>
                                <ul>
                                    <li><span>Bank</span>: First National Bank</li>
                                    <li><span>Account name</span>: Thusang Social Center</li>
                                    <li><span>Account number</span>: <span className={classes.Numbers}>6285 7532 991</span></li>
                                    <li><span>Account type</span>: Cheque</li>
                                    <li><span>Branch code</span>: <span className={classes.Numbers}>250655</span> </li>
                                </ul>
                            </Zoom>
                            <Zoom delay={1000}><h3>"No amount is too little"</h3></Zoom>
                        </div>
                        <div className={classes.Image}>
                            <Zoom>
                                <img src={thank_you_img} alt="thank graphic" />
                            </Zoom>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Donate
