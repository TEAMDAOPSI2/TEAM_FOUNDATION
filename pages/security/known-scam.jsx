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
                                    The Tezos Foundation monitors and tracks potentially malicious activity in order to
                                    protect the growing Tezos ecosystem, community members, and the general public.
                                </p>
                                <p>
                                    Below is a non-exhaustive list of known domains associated with scams that have been
                                    brought to our attention:
                                </p>
                                <ul>
                                    <li>tezosfoundations.com</li>
                                    <li>tezos.com.add-all.site</li>
                                    <li>1-tezos.com</li>
                                    <li>tesoz-foundation.com</li>
                                    <li>xtz-wallet.io</li>
                                    <li>tezos-link.com</li>
                                    <li>safe-blockchain.com</li>
                                    <li>Telegram Group: Tezos Official Support✪</li>
                                    <li>tezos-foundation.io</li>
                                    <li>tezbox.io</li>
                                    <li>tezos-web.foundation</li>
                                    <li>tezosweb.info</li>
                                    <li>tezosweb.org</li>
                                    <li>tezoswebwallet.com</li>
                                    <li>tezbox.net</li>
                                    <li>tezbox.info</li>
                                    <li>galleon.network</li>
                                    <li>tesoz.foundation</li>
                                    <li>tézos.com</li>
                                    <li>tézos.net</li>
                                    <li>tezos-global.com</li>
                                    <li>tezosfoundation.io</li>
                                    <li>tezos-foundation.com</li>
                                    <li>cryptonomic.com</li>
                                    <li>cryptonomic.org</li>
                                    <li>tezosmarkets.ltd</li>
                                    <li>tezosmarkets.com</li>
                                    <li>tezoshour.com</li>
                                    <li>tezosmarketsltd.com</li>
                                    <li>wallet-tezos.com</li>
                                    <li>wallet-tezos.net</li>
                                    <li>tezoswallet.app</li>
                                    <li>kukkai.app</li>
                                    <li>kukkaii.app</li>
                                    <li>walletkukai.com</li>
                                    <li>kuaki.app</li>
                                </ul>
                                <p>
                                    <b>If a scam or scam domain is identified, an e-mail should immediately be sent
                                        to <Link href="mailto:scamreport@tezos.com"><a>scamreport@tezos.com</a></Link>.</b>
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