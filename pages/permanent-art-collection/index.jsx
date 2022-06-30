import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ImgArt from "@public/images/art-collection-square-1200x1203.jpg";
import Avatar from "@public/images/Misan-Harriman-Digital-Art-Gallery-tezos-Foundation-1024x1278.jpg";
import Image from "next/image";
import Link from "next/link";


export default function index() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Permanent Art Collection</title>
            </Head>
            <Navbar/>
            <main id={'gallery'}>
                <section className="section-gallery-hero">
                    <div className="container">
                        <div className="col-md-8">
                            <h2>
                                Team Foundation Permanent Art Collection
                            </h2>
                            <div className="text">
                                <p>
                                    The team Foundation Permanent Art Collection believes in the promise of art to
                                    empower
                                    communities, cultures and future technologies.
                                </p>
                            </div>
                            <Link href="#"><a className="">Digital Art By Misan Hariman</a></Link>
                        </div>
                    </div>
                </section>
                <section className="list-art">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 text-center">
                                <p>
                                    The team Foundation Permanent Art Collection celebrates artists and cultural
                                    organizations exploring the team protocol. The mission of the collection is to
                                    increase awareness and adoption of blockchain technology across the art world, as
                                    team continues to steward and support institutions and artists building on team.
                                </p>
                            </div>
                        </div>
                        {/*   list of art box */}
                        <div className="item-art-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="picture" style={{width: '100%', height: '450px', position: 'relative'}}>
                                        <Image
                                            layout='fill'
                                            objectFit='cover'
                                            src={ImgArt}
                                            alt="Permanent Art Collection"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="entry" style={{paddingTop: '20px', position: 'relative', height: '100%'}}>
                                        <h3 className="mb-5">Digital Art Gallery by Misan Harriman</h3>
                                        <p className="mb-5">
                                            Discover the team Foundation Digital Art Gallery curated by Misan Harriman,
                                            featuring a collection of select’ artwork created on team.
                                        </p>
                                        <Link href="#"><a className="read-more">View Gallery</a></Link>
                                        <div className="creator d-flex flex-row align-items-center" style={{position: 'absolute', left: '0', bottom:'40px;'}}>
                                            <div className="avatar" style={{overflow: 'hidden',height: '50px', width:'50px', borderRadius: '50%', position: 'relative'}}>
                                                <Image src={Avatar} alt="Misan Harriman" layout="fill" objectFit="cover"/>
                                            </div>
                                            <div className="name ms-3">Misan Harriman</div>
                                        </div>
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