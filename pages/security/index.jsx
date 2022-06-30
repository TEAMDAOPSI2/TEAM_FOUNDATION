import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";

export default function index() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Security Policy</title>
            </Head>
            <Navbar/>

            <main id={`security`}>
                <section className="small-hero">
                    <div className="container">
                        <div className="col-md-7">
                            <h2>Tezos Foundation Security Policy</h2>
                            <div className="text animate__animated animate__go">
                                <p>
                                    Security is a core value of Tezos, and the input of security researchers acting in
                                    good-faith is highly valued to help the Tezos ecosystem maintain a high standard for
                                    the security, including high availability of the Tezos blockchain, and privacy of
                                    the community. This includes encouraging responsible vulnerability research and
                                    disclosure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="security-section" style={{paddingTop: '60px;', paddingBottom: '60px'}}>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 entry">
                                <p>
                                    This policy sets out the Tezos Foundation’s definition of good-faith in the context
                                    of finding and reporting vulnerabilities, as well as what security researchers can
                                    expect from the Tezos Foundation in return.
                                </p>
                                <div className="links">
                                    <Link href="/security/known-scam"><a style={{color: 'red'}}>Known Scam</a></Link>
                                    <Link href="/security/bug-bounty-program"><a>Security Policy & Bug Bounty</a></Link>
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