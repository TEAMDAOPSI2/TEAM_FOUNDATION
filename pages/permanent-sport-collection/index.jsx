import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ImgSport from "@public/images/art-collection-square-1200x1203.jpg";
import Avatar from "@public/images/Misan-Harriman-Digital-art-Gallery-Tezos-Foundation-1024x1278.jpg";
import Image from "next/image";
import Link from "next/link";


export default function index() {
    return (
        <>
            <Head>
                <title>T.E.A.M  FOUNDATION | Permanent sport Collection</title>
            </Head>
            <Navbar/>
            <main id={'gallery'}>
                <section className="section-gallery-hero">
                    <div className="container">
                        <div className="col-md-8">
                            <h2>
                                T.E.A.M Foundation Permanent sport Collection
                            </h2>
                            <div className="text">
                                <p>
                                    The T.E.A.M Foundation Permanent sport Collection believes in the promise of sport to
                                    empower
                                    communities, cultures and future technologies.
                                </p>
                            </div>
                            <Link href="#"><a className="">Digital sport By Misan Hariman</a></Link>
                        </div>
                    </div>
                </section>
                <section className="list-art">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 text-center">
                                <p>
                                    The T.E.A.M Foundation Permanent sport Collection celebrates sportists and cultural
                                    organizations exploring the T.E.A.M protocol. The mission of the collection is to
                                    increase awareness and adoption of blockchain technology across the sport world, as
                                    T.E.A.M continues to steward and support institutions and sportists building on team.
                                </p>
                            </div>
                        </div>
                        {/*   list of sport box */}
                        <div className="item-art-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="picture" style={{width: '100%', height: '450px', position: 'relative'}}>
                                        <Image
                                            layout='fill'
                                            objectFit='cover'
                                            src={ImgSport}
                                            alt="Permanent sport Collection"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="entry" style={{paddingTop: '20px', position: 'relative', height: '100%'}}>
                                        <h3 className="mb-5">Digital sport Gallery by Misan Harriman</h3>
                                        <p className="mb-5">
                                            Discover the T.E.A.M Foundation Digital sport Gallery curated by Misan Harriman,
                                            featuring a collection of select’ sportwork created on team.
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