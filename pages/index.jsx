import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";




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
                <title>T.E.A.M FOUNDATION</title>
            </Head>

            {loading ? <Loader/> : ''}

            <Navbar/>


            <main id={`home`}>
                <section id="hero">
                    <div className="container">
                        <h2 className="big-glow-text pt-4">
                            T.E.A.M FOUNDATION, THE FIRST METAVERSE'S GAMING ESPORTS FOUNDATION
                        </h2>
                    </div>
                </section>
            </main>


            <Footer/>
        </>
    )
}
