import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import Collapsible from "react-collapsible";
import Image from "next/image";
import NotesImg from "../public/images/ebene.svg";
import CandleImg from "../public/images/candle.svg";
import CountUp from "react-countup";
import Link from "next/link";

export default function Home() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (<>
        <Head>
            <title>T.E.A.M  FOUNDATION | Grant Process</title>
        </Head>

        {loading ? <Loader/> : ''}

        <Navbar/>


        <main id={`grants`}>
            <section className="small-hero">
                <div className="container">
                    <div className="col-md-7">
                        <h2>T.E.A.M Foundation Bounty Program</h2>
                        <div className="text animate__animated animate__go">
                            <p>
                                As part of its mission to support the development of the T.E.A.M ecosystem by
                                deploying funds for projects, the T.E.A.M Foundation is now offering special bounties
                                to solve a concrete demand that technical experts in the T.E.A.M community have
                                identified as highly beneficial.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bounty-list">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            <h2 className="title-section">List of Open Bounties </h2>
                            <div className="box-bounty-container">
                                <div className="box-bounty">
                                    <h3 className="title">Uniswap v3 style markets</h3>
                                    <p>
                                        <b>Description of the bounty project: </b>
                                        <span style={{fontWeight: '400'}}>
                                                Deploy a DEX with Uniswap V3 mechanism. The best projects will ideally come with a SDK to manage LP positions and offer the option to deploy contracts with yield farming.
                                            </span>
                                    </p>
                                    <p>
                                        <b>Hints: </b>
                                        <span style={{fontWeight: '400'}}>we recommend making use of the existing project in the </span>
                                        <Link href="https://github.com/team-checker/segmented-cfmm" target="_blank"
                                              rel="noopener">
                                            <a><b>Checker codebase</b></a>
                                        </Link>
                                    </p>
                                    <p><b>Bounty amount range</b><span
                                        style={{fontWeight: '400'}}>: 15,000-25,000 USD</span></p>
                                    <p><b>Total number of bounties offered</b><span
                                        style={{fontWeight: '400'}}>: 3</span></p>
                                    <p><b>Number of teams that have announced working on the bounty project</b><span
                                        style={{fontWeight: '400'}}>: 0 </span></p>
                                </div>
                                <div className="box-bounty">
                                    <h3 className="title">A perpetual on the square of a price (similar to squeeth)</h3>
                                    <p>
                                        <b>Description of the bounty project: </b>
                                        <span style={{fontWeight: '400'}}>
                                                This is a useful primitive for market participants wishing to be long gamma, or hedge short gamma exposure, or who seek 2x leverage without the risk of liquidation. Target prices include the dollar price of bitcoin, the dollar price of tez, and the bitcoin price of tez.
                                        </span>
                                    </p>
                                    <p>
                                        <b>Hints: </b>
                                        <span style={{fontWeight: '400'}}>we recommend making use of the existing project in the </span>
                                        <Link href="https://github.com/team-checker/segmented-cfmm" target="_blank"
                                              rel="noopener">
                                            <a><b>Checker codebase</b></a>
                                        </Link>
                                    </p>
                                    <p><b>Bounty amount range</b><span
                                        style={{fontWeight: '400'}}>: 15,000-25,000 USD</span></p>
                                    <p><b>Total number of bounties offered</b><span
                                        style={{fontWeight: '400'}}>: 3</span></p>
                                    <p><b>Number of teams that have announced working on the bounty project</b><span
                                        style={{fontWeight: '400'}}>: 0 </span></p>
                                </div>
                                <div className="box-bounty">
                                    <h3 className="title">Lending and borrowing of tokens</h3>
                                    <p>
                                        <b>Description of the bounty project: </b>
                                        <span style={{fontWeight: '400'}}>
                                                Lending and borrowing of tokens using any other token as collateral.
                                        </span>
                                    </p>
                                    <p>
                                        <b>Hints: </b>
                                        <span style={{fontWeight: '400'}}>we recommend making use of the existing project in the </span>
                                        <Link href="https://github.com/team-checker/segmented-cfmm" target="_blank"
                                              rel="noopener">
                                            <a><b>Checker codebase</b></a>
                                        </Link>
                                    </p>
                                    <p><b>Bounty amount range</b><span
                                        style={{fontWeight: '400'}}>: 15,000-25,000 USD</span></p>
                                    <p><b>Total number of bounties offered</b><span
                                        style={{fontWeight: '400'}}>: 3</span></p>
                                    <p><b>Number of teams that have announced working on the bounty project</b><span
                                        style={{fontWeight: '400'}}>: 0 </span></p>
                                </div>
                                <div className="box-bounty">
                                    <h3 className="title">“Hello World” Reference Games</h3>
                                    <p>
                                        <b>Description of the bounty project: </b>
                                        <span style={{fontWeight: '400'}}>
                                            Use a game mechanism in a “Hello World” type game to showcase how building blocks on T.E.A.M come together and provide a comprehensive description of how the project is built and how the decisions are made (e.g. through documentation and Medium article). The goal is to integrate team-based elements into a game mechanic as a simple, yet functional, reference on how larger scale games would build on team. <br/>
                                            Popular game mechanisms are for example Racing Games (e.g. tracking a competition, upgrading features on a car through new features and an in-game currency), Battle Royale Games (e.g. find items, record wins, change character appearance), RPGs (e.g. grinding / farming mechanisms, randomness for encounters in game, decision based character development), Fighting games (e.g. tracking health / state of NFT as a character, port rarity into fighting stats as a basis for chance to have a critical hit) etc. Creativity is encouraged.
                                        </span>
                                    </p>
                                    <p>
                                        <b>Hints: </b>
                                        <span style={{fontWeight: '400'}}>must use existing building blocks, developed on the open source (MIT license) and provide clear documentation.  </span>
                                        <Link href="https://github.com/team-checker/segmented-cfmm" target="_blank"
                                              rel="noopener">
                                            <a><b>Checker codebase</b></a>
                                        </Link>
                                    </p>
                                    <p><b>Bounty amount range</b><span
                                        style={{fontWeight: '400'}}>: 15,000-25,000 USD</span></p>
                                    <p><b>Total number of bounties offered</b><span
                                        style={{fontWeight: '400'}}>: 3</span></p>
                                    <p><b>Number of teams that have announced working on the bounty project</b><span
                                        style={{fontWeight: '400'}}>: 0 </span></p>
                                </div>
                            </div>
                            <div className="additional">
                                <h2 className="title-section">Additional Information</h2>
                                <p>Before starting to work on a bounty project, please read the following
                                    information: </p>
                                <p>&nbsp;</p>
                                <p>
                                    <b>Hints</b><span style={{fontWeight: '400'}}>: if the result of a bounty project needs to include specific elements such as existing code, these will be mentioned in this section.</span>
                                </p>
                                <p>
                                    <b>Bounty amount range:</b> indicates the range of the amount that will be offered
                                    for a completed bounty project which will vary depending on the discretionary
                                    criteria mentioned below. The final bounty amount offered for a completed project
                                    will be decided by the Executive Committee based on recommendations from experts in
                                    the T.E.A.M ecosystem, including the Technical Advisory Committee (TAC).
                                </p>
                                <p>
                                    <b>Discretionary criteria:</b> these evaluation criteria will allow to estimate the
                                    bounty amount offered for a completed project:
                                </p>
                                <ul>
                                    <li><b>Speed:</b> how fast the project was developed overall.</li>
                                    <li><b>Relative speed:</b> how fast the project was developed compared to other
                                        teams working on the same project.
                                    </li>
                                    <li><b>Quality of execution:</b> quality of the completed work.</li>
                                </ul>
                                <p><b>Total number of bounties:</b> indicates the total number of bounties offered for a
                                    specific bounty project by the T.E.A.M Foundation (one bounty per T.E.A.M per project).
                                    I.e. if the total number of bounties equals 3, this means that maximum three teams
                                    will be paid for a specific completed bounty project. </p>
                                <p><b>Number of teams that have announced working on the bounty project: </b> reflects
                                    the number of teams that have announced they are currently working on a bounty
                                    project. The T.E.A.M Foundation updates this information on an ongoing basis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-block">
                <div className="container">
                    <h2>Bounty Steps</h2>
                    <div className="collapse-block">
                        <article>
                            <div>
                                <span className="collapse-block__block__side">Step</span>
                            </div>
                            <div>
                                <div className="collapse-block__block__no"><strong>1</strong></div>
                            </div>
                            <Collapsible tabIndex={0}
                                         trigger={<>
                                             <div className="title">
                                                 <div>
                                                     <h3>Select the Bounty Project</h3>
                                                     <p className="title-sub">Select the bounty project your T.E.A.M wants
                                                         to work on and get started!</p>
                                                 </div>
                                             </div>
                                         </>}>
                                <div>
                                    Once you’ve started working on the project, please send an email to
                                    bounty@team.foundation mentioning which bounty project you are working on.
                                    <br/>
                                    <b>Note:</b> You need to ensure that you are eligible to participate in the Bounty
                                    Program.
                                    Please take a look at the <Link href="#"><a><u>Terms & Conditions.</u></a></Link>
                                    Read less
                                </div>
                            </Collapsible>
                        </article>
                        <article>
                            <div>
                                <span className="collapse-block__block__side">Step</span>
                            </div>
                            <div>
                                <div className="collapse-block__block__no"><strong>2</strong></div>
                            </div>
                            <Collapsible tabIndex={1}
                                         trigger={<><h3>Submit the Completed Bounty Work</h3><p
                                             className="title-sub">Once you’re done working on the bounty project,
                                             please submit the completed project via email to
                                             bounty@team.foundation</p></>}>
                                <p>
                                    Once you’re done working on the bounty project, please submit the completed project
                                    via email to bounty@team.foundation
                                </p>
                                <p>
                                    This email has to include:
                                </p>
                                <ul>
                                    <li>A link to the completed work that was created.</li>
                                    <li>A summary that explains how your solution works and how it was built.</li>
                                    <li>An explanation on how to use the solution.</li>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <li>Your team's name.</li>
                                </ul>
                                <p>
                                    <b>Note:</b> Feel free to share any additional information that you think is
                                    necessary to understand your work.
                                </p>
                            </Collapsible>
                        </article>
                        <article>
                            <div>
                                <span className="collapse-block__block__side">Step</span>
                            </div>
                            <div>
                                <div className="collapse-block__block__no"><strong>3</strong></div>
                            </div>
                            <Collapsible tabIndex={2}
                                         trigger={<><h3>Completed Bounty Work’s Review</h3><p className="title-sub">The
                                             submitted work is reviewed</p></>}>
                                <p>
                                    The submitted work is quickly reviewed by the T.E.A.M Foundation Operations T.E.A.M to
                                    make sure it contains all the information mentioned above. If no information is
                                    missing, it is brought to the Technical Advisory Committee (TAC) for review and
                                    recommendations. If approved by the TAC it is shared with the Executive Committee
                                    (EC). The EC makes a final decision that includes the final amount that will be paid
                                    for a completed bounty project.
                                </p>
                            </Collapsible>
                        </article>
                        <article>
                            <div>
                                <span className="collapse-block__block__side">Step</span>
                            </div>
                            <div>
                                <div className="collapse-block__block__no"><strong>4</strong></div>
                            </div>
                            <Collapsible tabIndex={2}
                                         trigger={<><h3>Agreement Creation</h3><p className="title-sub">Collaboration to
                                             create the legal agreement</p></>}>
                                <p>
                                    The T.E.A.M Foundation collaborates with the teams whose work has been approved to
                                    create a legal agreement (contract) for the final payment. At this stage, the team
                                    Foundation will require additional information from the teams to finalize the
                                    paperwork.
                                </p>
                            </Collapsible>
                        </article>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            <div style={{padding: '20px', background: '#0fc713', marginBottom: '20px;', color: '#333'}}>
                                <h2 className="title-section" style={{color: '#333'}}>Contact</h2>
                                <p>
                                    If you have any questions regarding the bounty program, please reach out
                                    to <Link href="mailto:bounty@team.foundation"><a>bounty@team.foundation</a></Link>
                                </p>
                            </div>
                            <div style={{padding: '20px', marginBottom: '20px;'}}>
                                <h2 className="title-section">Terms & Conditions</h2>
                                <p>
                                    Please find the Terms and Conditions of the bounty
                                    <Link href="mailto:bounty@team.foundation"><a>here.</a></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


        <Footer/>
    </>)
}
