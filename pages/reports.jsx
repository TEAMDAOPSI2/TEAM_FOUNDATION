import Head from "next/head";
import Navbar from "@components/Navbar";
import Image from "next/image";
import BiannualImageMarch from "@public/images/Tezos_Foundation_Bianual_March_22_Overview.jpg";
import Link from "next/link";
import Footer from "@components/Footer";

export default function Reports() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Reports</title>
            </Head>
            <Navbar/>
            <main id={`reports`}>
                <section className="small-hero">
                    <div className="container">
                        <div className="col-md-7">
                            <h2>Tezos Foundation Reports</h2>
                            <div className="text animate__animated animate__go">
                                <p>
                                    Our reports provide insights and an overview of the Foundation’s activities. Twice a
                                    year, we issue a Biannual Update that covers our activities during the last six
                                    months.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="list-reports">
                    <div className="container-fluid">
                        <div className="row item-report">
                            <div className="col-md-8">
                                <div className="box-image">
                                    <Image src={BiannualImageMarch}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="entry">
                                    Biannual Update
                                    <h3 className="title">March 2022</h3>
                                    <p>
                                        Since the last Biannual Update in September 2021, Tezos has witnessed an
                                        increase in adoption driven by the collective efforts of builders around the
                                        world creating new and engaging applications and tools, as well as adoption
                                        from high-profile brands. Furthermore, empowered by a grass-roots
                                        community-driven movement, Tezos has been propelled forward as the de facto
                                        art-driven NFT blockchain. This momentum in the arts and culture category is
                                        expected to continue growing with enhanced presence at global events, which
                                        will allow the art world to embrace Tezos even more. In parallel, keystone
                                        Tezos NFT marketplaces continue to onboard talented artists and passionate
                                        collectors through their user-centric experiences and functionality.
                                    </p>
                                    <div className="links">
                                        <Link href="#"><a>Download English</a></Link>
                                        <Link href="#"><a>Download Chinese Simplified</a></Link>
                                        <Link href="#"><a>Download Spanish</a></Link>
                                        <Link href="#"><a>Download Japanese</a></Link>
                                        <Link href="#"><a>Download Ukraine</a></Link>
                                        <Link href="#"><a>Download Russian</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row item-report">
                            <div className="col-md-4">
                                <div className="entry">
                                    Biannual Update
                                    <h3 className="title">March 2022</h3>
                                    <p>
                                        Since the last Biannual Update in September 2021, Tezos has witnessed an
                                        increase in adoption driven by the collective efforts of builders around the
                                        world creating new and engaging applications and tools, as well as adoption
                                        from high-profile brands. Furthermore, empowered by a grass-roots
                                        community-driven movement, Tezos has been propelled forward as the de facto
                                        art-driven NFT blockchain. This momentum in the arts and culture category is
                                        expected to continue growing with enhanced presence at global events, which
                                        will allow the art world to embrace Tezos even more. In parallel, keystone
                                        Tezos NFT marketplaces continue to onboard talented artists and passionate
                                        collectors through their user-centric experiences and functionality.
                                    </p>
                                    <div className="links">
                                        <Link href="#"><a>Download English</a></Link>
                                        <Link href="#"><a>Download Chinese Simplified</a></Link>
                                        <Link href="#"><a>Download Spanish</a></Link>
                                        <Link href="#"><a>Download Japanese</a></Link>
                                        <Link href="#"><a>Download Ukraine</a></Link>
                                        <Link href="#"><a>Download Russian</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="box-image">
                                    <Image src={BiannualImageMarch}/>
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