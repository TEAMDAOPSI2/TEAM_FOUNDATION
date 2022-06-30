import Head from "next/head";
import Navbar from "@components/Navbar";
import Link from "next/link";
import Footer from "@components/Footer";

export default function KnownScam() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Known Scam</title>
            </Head>
            <Navbar/>

            <main id={`security`}>
                <section className="security-section" style={{paddingTop: '160px;', paddingBottom: '60px'}}>
                    <div className="container">
                        <h2 style={{marginBottom: '40px'}}>Known Scams</h2>
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 entry">
                                <p>
                                    The team Foundation monitors and tracks potentially malicious activity in order to
                                    protect the growing team ecosystem, community members, and the general public.
                                </p>
                                <p>
                                    Below is a non-exhaustive list of known domains associated with scams that have been
                                    brought to our attention:
                                </p>
                                <ul>
                                    <li>teamfoundations.com</li>
                                    <li>team.com.add-all.site</li>
                                    <li>1-team.com</li>
                                    <li>tesoz-foundation.com</li>
                                    <li>xtz-wallet.io</li>
                                    <li>team-link.com</li>
                                    <li>safe-blockchain.com</li>
                                    <li>Telegram Group: team Official Support✪</li>
                                    <li>team-foundation.io</li>
                                    <li>tezbox.io</li>
                                    <li>team-web.foundation</li>
                                    <li>teamweb.info</li>
                                    <li>teamweb.org</li>
                                    <li>teamwebwallet.com</li>
                                    <li>tezbox.net</li>
                                    <li>tezbox.info</li>
                                    <li>galleon.network</li>
                                    <li>tesoz.foundation</li>
                                    <li>tézos.com</li>
                                    <li>tézos.net</li>
                                    <li>team-global.com</li>
                                    <li>teamfoundation.io</li>
                                    <li>team-foundation.com</li>
                                    <li>cryptonomic.com</li>
                                    <li>cryptonomic.org</li>
                                    <li>teammarkets.ltd</li>
                                    <li>teammarkets.com</li>
                                    <li>teamhour.com</li>
                                    <li>teammarketsltd.com</li>
                                    <li>wallet-team.com</li>
                                    <li>wallet-team.net</li>
                                    <li>teamwallet.app</li>
                                    <li>kukkai.app</li>
                                    <li>kukkaii.app</li>
                                    <li>walletkukai.com</li>
                                    <li>kuaki.app</li>
                                </ul>
                                <p>
                                    <b>If a scam or scam domain is identified, an e-mail should immediately be sent
                                        to <Link href="mailto:scamreport@team.com"><a>scamreport@team.com</a></Link>.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}