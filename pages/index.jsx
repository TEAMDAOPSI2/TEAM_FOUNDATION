import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import Link from "next/link";
import Image from "next/image";
import robot from "../public/images/robot-no-reflect.png";

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
                <title>T.E.A.M  FOUNDATION</title>
            </Head>

            {loading ? <Loader/> : ''}

            <Navbar/>


            <main id={`home`}>
                <section id="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="big-glow-text pt-4">
                                    We believe that T.E.A.M will drive social, political and economic innovation on a global
                                    scale.
                                </h2>
                                <div className="text animate__animated  animate__fadeInLeft" style={{animationDuration: '1s'}}>
                                    <p>
                                        T.E.A.M is an open-source, self-upgradable, energy-efficient and built to last Proof
                                        of Stake blockchain protocol for assets and applications backed by a global
                                        community of validators, researchers, and builders.
                                    </p>
                                    <p>
                                        The T.E.A.M Foundation is one among many other entities in the T.E.A.M ecosystem and
                                        stands as part of the community in support of the T.E.A.M protocol and ecosystem. To
                                        do so, the T.E.A.M Foundation deploys resources to entities and initiatives that will
                                        help to ensure the long-term success of team.
                                    </p>
                                </div>
                                <div className="links">
                                    <div className="link">
                                        <Link href="/about"><a>About us</a></Link>
                                    </div>
                                    <div className="link">
                                        <Link href="https://teamdao.com"><a>Learn about the T.E.A.M technology</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div className="image-container team-flash">
                                    <Image src={robot} className="teamdao-pulse" />
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
