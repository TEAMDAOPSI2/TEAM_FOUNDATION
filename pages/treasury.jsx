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
                <section className="amounts">
                    <div className="container">
                        <div className="title">
                            {/*<p>Total dollar amount of tokens held in T.E.A.M Dao treasury</p>*/}
                            {/*<h2><span>$</span><span>1,746,448,670</span></h2>*/}
                            {/*<a href="#">VIEW ON ETHERSCAN</a>*/}
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
                                    <td className="number">268.954 ETH <span>15.5%</span></td>
                                    <td className="number"><span>$</span>1.746.448.670</td>
                                </tr>
                                <tr>
                                    <td>USDC <span>USD Coin</span></td>
                                    <td className="number">268.954 USDC <span>15.5%</span></td>
                                    <td className="number"><span>$</span>315.297.667</td>
                                </tr>
                                <tr>
                                    <td>USDT <span>Tether</span></td>
                                    <td className="number">268.954 USDT <span>45.5%</span></td>
                                    <td className="number"><span>$</span>315.297.667</td>
                                </tr>
                                <tr>
                                    <td>DAI <span>DAI Token</span></td>
                                    <td className="number">268.954 DAI <span>15.5%</span></td>
                                    <td className="number"><span>$</span>315.297.667</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="utility">
                    <div className="container">
                        <div className="get-to-know">
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
                                <span className="number">$2.204.617.776</span>
                            </li>
                            <li>
                                <h5>TEAM Price</h5>
                                <div className="d-flex">
                                    <span className="number">$0.88</span>
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
            </main>
            <Footer/>
        </>
    );
}
export default treasury;