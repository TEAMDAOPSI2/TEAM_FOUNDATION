import Head from "next/head";
import Navbar from "@components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ImgArt from "@public/images/art-collection-square-1200x1203.jpg";
import Avatar from "@public/images/Misan-Harriman-Digital-Art-Gallery-tezos-Foundation-1024x1278.jpg";
import Footer from "@components/Footer";
import {forEach} from "react-bootstrap/ElementChildren";

export default function DigitalArtGalleryHarriman() {
    return (
        <>
            <Head>
                <title>T.E.A.M FOUNDATION | Digital Art Gallery by Misan Harriman</title>
            </Head>
            <Navbar/>
            <main id={'gallery-single'}>
                <section className="section-gallery-hero position-relative">
                    <div className="container">
                        <div className="col-md-8">
                            <h2>
                                Digital Art Gallery by Misan Harriman
                            </h2>
                        </div>
                    </div>
                    <div className="creator d-flex flex-row align-items-center"
                         style={{position: 'absolute', right: '120px', bottom: '-25px'}}>
                        <div className="avatar" style={{
                            overflow: 'hidden',
                            height: '50px',
                            width: '50px',
                            borderRadius: '50%',
                            position: 'relative'
                        }}>
                            <Image src={Avatar} alt="Misan Harriman" layout="fill" objectFit="cover"/>
                        </div>
                        <div className="name ms-3">
                            <span style={{fontSize: '14px'}}>Created By</span> <br/>
                            Misan Harriman
                        </div>
                    </div>
                </section>
                <section className="section-inform-author" style={{paddingTop: '60px', paddingBottom: '60px'}}>
                    <div className="container">
                        <div className="row justify-content-md-center" style={{marginBottom: '40px'}}>
                            <div className="col-md-7">
                                The team Foundation Digital Art Gallery showcases a collection of selected artists
                                working
                                in the team ecosystem collected by curators appointed by the team Foundation.
                                Currently,
                                this includes the gallery curated by Misan Harriman, with a special focus on
                                up-and-coming
                                artists from the African and Asian regions often underrepresented in the NFT and
                                traditional
                                art communities.
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 entry bg-third" style={{marginBottom: '20px;', color: '#333'}}>
                                <div className="box-security">
                                    <h3>About the curator</h3>
                                    <p>
                                        Born in Nigeria, Misan Harriman was educated in England where he developed a
                                        life-long love for the arts. This led him to picking up a camera and honing his
                                        craft. Since then, he has become a photographer, entrepreneur and social
                                        activist.
                                        He is one of the most widely-shared photographers of the Black Lives Matter
                                        movement
                                        and was the first Black man to shoot the cover of British Vogue, for its
                                        high-profile September 2020 issue. Since July 2021, he has held the position of
                                        Chair of the Southbank Centre, London.
                                    </p>
                                    <p>
                                        Harriman is an outspoken activist supporting diversity and inclusion in the
                                        workplace, he is also a mental health campaigner with a keen interest in
                                        dyslexia
                                        and neurodiversity. He is currently exploring ways in which Web3 can help create
                                        opportunities for disadvantaged artists on a global scale.
                                    </p>
                                    <p>
                                        Website: misanharriman.com <br/>
                                        Twitter: @misanharriman
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="list-of-arts">
                    <div className="container">
                        <div className="row">
                            {
                                [1,2,3,4].map((item, index) => {
                                    return (
                                        <div className="col-md-3" key={item}>
                                            <div className="item-art">
                                                <div className="image">
                                                    <img
                                                        src="https://tezos.foundation/wp-content/uploads/2022/06/QmciXhHDZFzFgFvFMwxP9LbQCP6M85tTw1PQUddytQ1qsC_cropped-640x968.png"
                                                        alt=""/>
                                                </div>
                                                <div className="entry">
                                                    <h4>Ruja</h4>
                                                    <p>
                                                        by Barbara Bezina <br/> <br/>
                                                        <Link href="#"><a>Hic ec nft</a></Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}