import Head from "next/head";
import Navbar from "@components/Navbar";
import Link from "next/link";
import Footer from "@components/Footer";

export default function BugN() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Contact Us</title>
            </Head>
            <Navbar/>

            <main id={`security`}>
                <section className="security-section" style={{paddingTop: '160px', paddingBottom: '60px'}}>
                    <div className="container">
                        <h2 style={{marginBottom: '40px'}}>Contact us</h2>
                        <div className="row justify-content-md-center">
                            <div className="col-md-7">
                                <div className="form-contact-us">
                                    <form action="#">
                                        <div className="form-group">
                                            <textarea name="" id="" placeholder="Your message" rows="5"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Your name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder="Your email"/>
                                        </div>
                                        <button>Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="inform-address">
                    <div className="container">
                        <div className="col-md-7">
                            <h2>Office location</h2>
                            <p>
                                The team Foundation is based in Zug, Switzerland with a focus on growing the team
                                ecosystem. Connect with us to speak about team today.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}