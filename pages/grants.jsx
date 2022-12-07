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


    return (
        <>
            <Head>
                <title>T.E.A.M  FOUNDATION | Grant Process</title>
            </Head>

            {loading ? <Loader/> : ''}

            <Navbar/>


            <main id={`grants`}>
                <section className="small-hero">
                    <div className="container">
                        <div className="col-md-7">
                            <h2>T.E.A.M Foundation Grant Program</h2>
                            <div className="text animate__animated animate__go">
                                <p>
                                    A key activity of the T.E.A.M Foundation is to deploy resources to entities and
                                    initiatives that will help to ensure the long-term success of the T.E.A.M blockchain.
                                    Areas of interest for grants reflect some of our current needs, and we invite you to
                                    also reach out with your own unique ideas and innovations. We look forward to
                                    discovering your project!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="process-block">
                    <div className="container">
                        <h2>Our Grant Process</h2>
                        <div className="col-md-8">
                            <div className="text">
                                <p>
                                    The grant process covers the three stages of Proposal, Award, and, if successful,
                                    Post-Award. For successful proposals, it takes on average four weeks to review a
                                    proposal and another four weeks to complete the necessary paperwork. It is essential
                                    that prospective grantees and their projects are evaluated diligently to ensure that
                                    the deployed resources add proportional value to the T.E.A.M ecosystem.
                                    <br/>
                                    <br/>
                                    Our evaluation process contains the following steps:
                                </p>
                            </div>
                        </div>
                        <div className="collapse-block">
                            <article>
                                <div>
                                    <span className="collapse-block__block__side">1 week</span>
                                </div>
                                <div>
                                    <div className="collapse-block__block__no"><strong>1</strong></div>
                                </div>
                                <Collapsible tabIndex={0}
                                             trigger={
                                                 <>
                                                     <div className="title">
                                                         <div>
                                                             <h3>Proposal</h3>
                                                             <p className="title-sub">Grant Proposal Submission</p>
                                                         </div>
                                                     </div>
                                                 </>
                                             }>
                                    <div>
                                        The Grant Process starts with a grant proposal submission.
                                        <br/>
                                        The grant proposal should include central information on the proposed project
                                        and how the T.E.A.M intends to succeed.
                                        <br/>
                                        This information can include, for example, functional and technical details of
                                        the proposed solution, its purpose, a roadmap, an introduction of the project
                                        team, evidence of familiarity with the T.E.A.M ecosystem, anticipated value added
                                        to the T.E.A.M ecosystem, and measures to assure the longevity of the solution
                                        beyond the grant duration.
                                        <br/>
                                        After proposal submission, the proposal is vetted by the T.E.A.M Foundation. The
                                        outcome of this step can be a forward for in-depth reviews, a revise and
                                        resubmit, or a decline.
                                    </div>
                                </Collapsible>
                            </article>
                            <article>
                                <div>
                                    <span className="collapse-block__block__side">3 week</span>
                                </div>
                                <div>
                                    <div className="collapse-block__block__no"><strong>2</strong></div>
                                </div>
                                <Collapsible tabIndex={1}
                                             trigger={<><h3>Award</h3><p className="title-sub">Review and Final
                                                 decision</p></>}>
                                    <p>
                                        If forwarded for in-depth review, the grant proposal is reviewed by ecosystem
                                        experts, supervised by the Technical Advisory Committee (TAC).
                                        The TAC completes an in-depth due diligence process and develops recommendations
                                        on a proposal’s fit and usefulness to the T.E.A.M ecosystem.
                                        The TAC’s recommendations are then reviewed by the Executive Committee (EC) or
                                        the T.E.A.M Foundation Council (FC) which then makes the final decision.
                                    </p>
                                    <p>
                                        Final decisions about grant proposals, which can be an accept, decline, or a
                                        revise and resubmit, are then communicated to grant proposers.
                                    </p>
                                </Collapsible>
                            </article>
                            <article>
                                <div>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <span className="collapse-block__block__side">>4 week</span>
                                </div>
                                <div>
                                    <div className="collapse-block__block__no"><strong>2</strong></div>
                                </div>
                                <Collapsible tabIndex={2}
                                             trigger={<><h3>Post-Award</h3><p className="title-sub">Grant Agreement and
                                                 Follow-Up</p></>}>
                                    <p>
                                        Approved applicants work on the legal paperwork to finalize a grant with the
                                        T.E.A.M Foundation. <br/>
                                        The grant agreement for the project and the corresponding payments are usually
                                        structured along milestones. <br/>
                                        Once a milestone is completed, the grantee submits a report, which is reviewed
                                        and if approved, the payment for the milestone is issued.
                                    </p>
                                    <p>
                                        After the project finished, the T.E.A.M Foundation conducts regular check-ins to
                                        determine the prosperity of the project. <br/>
                                        At this stage, the T.E.A.M Foundation explores further collaboration opportunities
                                        with grantees and may offer to connect parties in the T.E.A.M ecosystem with
                                        similar synergies.
                                    </p>
                                </Collapsible>
                            </article>

                        </div>
                    </div>
                </section>
                <section className="milestone">
                    <div className="container">
                        <h2>Core numbers in May</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">
                                        <CountUp end={9} duration={5}/>
                                    </h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">
                                        <CountUp end={99} duration={5}/>
                                    </h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">9</h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">9</h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">9</h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-milestone">
                                    <div className="milestone-ico">
                                        <Image src={NotesImg}/>
                                    </div>
                                    <h3 className="box-number">9</h3>
                                    <p className="text-lead">new grants approved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="interest">
                    <div className="container">
                        <h2>Areas of Interest</h2>
                        <div className="row animate__animated animate__slideInLeft" style={{animationDuration: '5s'}}>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-interest">
                                    <div>
                                        <div className="ico">
                                            <Image src={CandleImg}/>
                                        </div>
                                        <h3 className="title">STAKING</h3>
                                        <p className="text-lead">
                                            T.E.A.M has a growing number of bakers in its ecosystem that help secure the
                                            network by signing and publishing blocks. Our goal is to empower bakers by
                                            supporting the development of standardized tools, tutorials and cloud
                                            applications.
                                        </p>
                                        <Link href="#"><a>Proposal target list</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <Footer/>
        </>
    )
}
