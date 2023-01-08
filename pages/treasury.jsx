import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import zImg from "public/images/bg-treasury.svg";
import TextLoop from "react-text-loop";
import Chart from "@sections/treasury/chart";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const treasury = () => {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION</title>
            </Head>
            <Navbar/>
            <main id={`treasury`}>
                <div style={{paddingTop: '40px'}} />
                {/*<div className="z-top">*/}
                {/*    <div>*/}
                {/*        <img src={zImg.src} alt="zImg"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<section className="hero">*/}
                {/*    <div className="container">*/}
                {/*        <div className="col-md-9">*/}
                {/*            <h2>*/}
                {/*                <div className="text-change">*/}
                {/*                    /!* eslint-disable-next-line react/no-children-prop *!/*/}
                {/*                    <TextLoop children={["TREASURY", "ECOSYSTEMS", "PARTNERSHIPS", "ORGANIZATIONS"]}/>*/}
                {/*                </div>*/}
                {/*                <div>GOVERNED BY $TEAM</div>*/}
                {/*            </h2>*/}
                {/*            <p>*/}
                {/*                T.E.A.M DAO is a collective of builders, products, and mutually beneficial ecosystems*/}
                {/*                governed by*/}
                {/*                $TEAM token holders.*/}
                {/*            </p>*/}
                {/*            <div className="button-group">*/}
                {/*                <a href="#">Documents</a>*/}
                {/*                <a href="#">Forum</a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="ecosystems">*/}
                {/*    <div className="container">*/}

                {/*        <div className="title">*/}
                {/*            <h2>Initiatives and <br/> Ecosystem partners</h2>*/}
                {/*            <svg viewBox="0 0 591 238" fill="none" xmlns="http://www.w3.org/2000/svg" width="591"*/}
                {/*                 height="238" className="text-bitdaoBlack-20 mx-auto relative -z-10 hidden md:block">*/}
                {/*                <ellipse rx="306.271" ry="82.776" transform="scale(1 -1) rotate(16.51 557.945 958.876)"*/}
                {/*                         stroke="currentColor"></ellipse>*/}
                {/*            </svg>*/}
                {/*        </div>*/}

                {/*        <div className="row partners">*/}
                {/*            <div className="col-md-6">*/}
                {/*                <div className="box-partner">*/}
                {/*                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
                {/*                         className="absolute top-4 right-4" width="12" height="12">*/}
                {/*                        <path d="M8 12V4l-8 .001" stroke="currentColor" strokeWidth="1.2"></path>*/}
                {/*                    </svg>*/}
                {/*                    <div className="logo">*/}
                {/*                        <img src="https://www.bitdao.io/images/daos/game7.svg" alt="logo"/>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-body">*/}
                {/*                        <h3 className="">Game7</h3>*/}
                {/*                        <p>*/}
                {/*                            Game7 is a collective of gaming veterans and crypto-native leaders*/}
                {/*                            passionate about building a more equitable gaming industry—one where*/}
                {/*                            developers and players are on the same side.*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-footer">*/}
                {/*                        <div>*/}
                {/*                            <dt>Allocated</dt>*/}
                {/*                            <dd>$500 Million</dd>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <dt>Proposal</dt>*/}
                {/*                            <dd>Passed</dd>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6">*/}
                {/*                <div className="box-partner">*/}
                {/*                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
                {/*                         className="absolute top-4 right-4" width="12" height="12">*/}
                {/*                        <path d="M8 12V4l-8 .001" stroke="currentColor" strokeWidth="1.2"></path>*/}
                {/*                    </svg>*/}
                {/*                    <div className="logo">*/}
                {/*                        <img src="https://www.bitdao.io/images/daos/game7.svg" alt="logo"/>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-body">*/}
                {/*                        <h3 className="">Game7</h3>*/}
                {/*                        <p>*/}
                {/*                            Game7 is a collective of gaming veterans and crypto-native leaders*/}
                {/*                            passionate about building a more equitable gaming industry—one where*/}
                {/*                            developers and players are on the same side.*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-footer">*/}
                {/*                        <div>*/}
                {/*                            <dt>Allocated</dt>*/}
                {/*                            <dd>$500 Million</dd>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <dt>Proposal</dt>*/}
                {/*                            <dd>Passed</dd>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6">*/}
                {/*                <div className="box-partner">*/}
                {/*                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
                {/*                         className="absolute top-4 right-4" width="12" height="12">*/}
                {/*                        <path d="M8 12V4l-8 .001" stroke="currentColor" strokeWidth="1.2"></path>*/}
                {/*                    </svg>*/}
                {/*                    <div className="logo">*/}
                {/*                        <img src="https://www.bitdao.io/images/daos/game7.svg" alt="logo"/>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-body">*/}
                {/*                        <h3 className="">Game7</h3>*/}
                {/*                        <p>*/}
                {/*                            Game7 is a collective of gaming veterans and crypto-native leaders*/}
                {/*                            passionate about building a more equitable gaming industry—one where*/}
                {/*                            developers and players are on the same side.*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-footer">*/}
                {/*                        <div>*/}
                {/*                            <dt>Allocated</dt>*/}
                {/*                            <dd>$500 Million</dd>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <dt>Proposal</dt>*/}
                {/*                            <dd>Passed</dd>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6">*/}
                {/*                <div className="box-partner">*/}
                {/*                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
                {/*                         className="absolute top-4 right-4" width="12" height="12">*/}
                {/*                        <path d="M8 12V4l-8 .001" stroke="currentColor" strokeWidth="1.2"></path>*/}
                {/*                    </svg>*/}
                {/*                    <div className="logo">*/}
                {/*                        <img src="https://www.bitdao.io/images/daos/game7.svg" alt="logo"/>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-body">*/}
                {/*                        <h3 className="">Game7</h3>*/}
                {/*                        <p>*/}
                {/*                            Game7 is a collective of gaming veterans and crypto-native leaders*/}
                {/*                            passionate about building a more equitable gaming industry—one where*/}
                {/*                            developers and players are on the same side.*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                    <div className="box-footer">*/}
                {/*                        <div>*/}
                {/*                            <dt>Allocated</dt>*/}
                {/*                            <dd>$500 Million</dd>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <dt>Proposal</dt>*/}
                {/*                            <dd>Passed</dd>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</section>*/}
                <section className="amounts">
                    <div className="container">
                        <div className="title">
                            <p>Total dollar amount of tokens held in T.E.A.M Dao treasury</p>
                            <h2><span>$</span><span>1,746,448,670</span></h2>
                            <a href="#">VIEW ON ETHERSCAN</a>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Symbol, <span>Name</span></th>
                                    <th>Tokens, <span>Percentage</span></th>
                                    <th>USD</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>ETH <span>Ethereum</span></td>
                                    <td>268,954 ETH <span>15.5%</span></td>
                                    <td><span>$</span>1,746,448,670</td>
                                </tr>
                                <tr>
                                    <td>USDC <span>USD Coin</span></td>
                                    <td>268,954 USDC <span>15.5%</span></td>
                                    <td><span>$</span>315,297,667</td>
                                </tr>
                                <tr>
                                    <td>USDT <span>Tether</span></td>
                                    <td>268,954 USDT <span>45.5%</span></td>
                                    <td><span>$</span>315,297,667</td>
                                </tr>
                                <tr>
                                    <td>FTT <span>FTX Token</span></td>
                                    <td>268,954 FTT <span>15.5%</span></td>
                                    <td><span>$</span>315,297,667</td>
                                </tr>
                                <tr>
                                    <td>Univ3 LP WETH <span>WETH</span></td>
                                    <td>268,954 Univ3 LP WETH <span>15.5%</span></td>
                                    <td><span>$</span>8,297,667</td>
                                </tr>
                                <tr>
                                    <td>PREEPS <span>PleasrDAO</span></td>
                                    <td>10,000 PEEPS <span>0.5%</span></td>
                                    <td><span>$</span>6,297,667</td>
                                </tr>
                                <tr>
                                    <td>XSUSHI <span>xSUSHI</span></td>
                                    <td>268,954 XSUSHI <span>0.17%</span></td>
                                    <td><span>$</span>3,297,667</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grows">
                            <div className="title">
                                <h2>How the treasury grows</h2>
                                <p>
                                    The BitDAO treasury grows through contributions, ecosystem partner success, and the
                                    increasing value of assets held.
                                </p>
                            </div>
                            <div className="table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>INTERVAL</th>
                                        <th>DAILY AVG</th>
                                        <th>ANNUALIZED</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1 Day</td>
                                        <td><span>$</span> 4,682,417</td>
                                        <td><span>$</span> 1,709,082,205</td>
                                    </tr>
                                    <tr>
                                        <td>7 Days</td>
                                        <td><span>$</span> 2,779,219</td>
                                        <td><span>$</span> 942,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>30 Days</td>
                                        <td><span>$</span> 1,709,082</td>
                                        <td><span>$</span> 647,000,000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="center">
                                <a href="#" className="link">View Contributions</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="utility">
                    <div className="container">
                        <div className="get-to-know">
                            <div className="title">
                                <h2>Get to know $TEAM</h2>
                                <p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Utility. Governance. Exposure. When you hold TEAM, you're not just getting a stake
                                    in
                                    BitDAO, but the ecosystem of partners it is helping to accelerate.
                                </p>
                            </div>
                            <Chart/>
                        </div>
                        <ul>
                            <li>
                                <h5>
                                    <span>Market Cap</span>
                                    <OverlayTrigger
                                        delay={{show: 250, hide: 400}}
                                        placement="right"
                                        overlay={
                                            <Tooltip id="tooltip-disabled">
                                                Circulating supply x $TEAM current price
                                            </Tooltip>
                                        }>
                                        <span>
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                 className="w-[18px] h-[18px] text-bitdaoBlack-60"
                                                 data-state="tooltip-hidden"
                                                 data-reach-tooltip-trigger="">
                                            <path
                                                d="M6.672 6.6a2.4 2.4 0 0 1 4.664.8c0 1.6-2.4 2.4-2.4 2.4M9 13h.008M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0Z"
                                                stroke="currentColor" strokeWidth="1.333" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        </span>
                                    </OverlayTrigger>
                                </h5>
                                <span>$2,204,617,776</span>
                            </li>
                            <li>
                                <h5>TEAM Price</h5>
                                <div className="d-flex">
                                    <span>$0,33</span>
                                    <span className="green">+0.5%</span>
                                </div>
                            </li>
                            <li>
                                <h5>Tokenomics</h5>
                                <span className="link">
                                    <a href="#">View Details</a>
                                </span>
                            </li>
                            <li>
                                <h5>Contract</h5>
                                <div className="d-flex flex-row">
                                    <span>ETH</span>
                                    0x9BADA086BAE4962037f14B0e79BaEa62e972dD21
                                    <button onClick={
                                        () => {
                                            navigator.clipboard.writeText('0x9BADA086BAE4962037f14B0e79BaEa62e972dD21')
                                        }
                                    } className="copy">
                                        <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             width="16" height="17"
                                             className="text-bitdaoBlack-100 hover:text-bitdaoBlack-50">
                                            <path
                                                d="M3.333 10.5h-.666a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 1 1.334-1.334h6A1.333 1.333 0 0 1 10 3.167v.666M7.333 6.5h6c.737 0 1.334.597 1.334 1.333v6c0 .737-.597 1.334-1.334 1.334h-6A1.333 1.333 0 0 1 6 13.833v-6C6 7.097 6.597 6.5 7.333 6.5Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/*<section className="partners">*/}
                {/*    <div className="container">*/}
                {/*        <div className="go">*/}
                {/*                <Marquee speed={50} gradient={false} >*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={BybitImg.src} alt="BybitImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={AlamendaImg.src} alt="AlamendaImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={JumpImg.src} alt="JumpImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={MiranaImg.src} alt="MiranaImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={PanImg.src} alt={"PanImg"} />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={DragonflyImg.src} alt="DragonflyImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={SparImg.src} alt="SparImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={BybitImg.src} alt="BybitImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={AlamendaImg.src} alt="AlamendaImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={JumpImg.src} alt="JumpImg" />*/}
                {/*                    </div>*/}
                {/*                    <div className="item col-md-1">*/}
                {/*                        <img width="100%" height="100%" objectFit="contain" src={MiranaImg.src} alt="MiranaImg" />*/}
                {/*                    </div>*/}
                {/*                </Marquee>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>
            <Footer/>
        </>
    );
}
export default treasury;