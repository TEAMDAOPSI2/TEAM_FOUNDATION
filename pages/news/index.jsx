import Head from 'next/head'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "@components/Loader";
import Collapsible from "react-collapsible";
import Image from "next/image";
import MainNewsImage from "@public/images/main-news.png";
import Link from "next/link";

export default function News() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (<>
        <Head>
            <title>T.E.A.M  FOUNDATION | Grant Process</title>
        </Head>

        {loading ? <Loader/> : ''}

        <Navbar/>


        <main id={`news`}>
            <section className="small-hero" style={{position: 'relative'}}>
                <div className="container">
                    <div className="col-md-7">
                        <h2 style={{paddingTop: '90px'}}>News</h2>
                        <div className="menu-filter-news" style={{paddingBottom: '40px'}}>
                            <ul>
                                <li><Link href="/news"><a className="active">All</a></Link></li>
                                <li><Link href="/news"><a>Weekly Update</a></Link></li>
                                <li><Link href="/news"><a>Blog</a></Link></li>
                                <li><Link href="/news"><a>Announcement</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-weekly-news">
                <div className="container-fluid" style={{paddingLeft: '0'}}>
                    <div className="row">
                        <div className="col-md-7 position-relative">
                            <div className="picture">
                                <Image src={MainNewsImage}/>
                            </div>
                        </div>
                        <div className="col-md-5 entry">
                            <div className="meta-post">
                                <Link href="#"><a>Announcement</a></Link>
                                <Link href="#"><a>Blog</a></Link>
                                <Link href="#"><a>Weekly Update</a></Link>
                                <time className="date label">12.05.2022</time>
                            </div>
                            <h3 className="title">
                                T.E.A.M Foundation Launches Permanent Art Collection, and a Digital Art Gallery Curated by
                                Photographer Misan Harriman
                            </h3>
                            <div className="post-teaser">
                                <p>
                                    We are proud to announce the creation of a first-of-its-kind Permanent Art
                                    Collection
                                    (PAC) to…
                                </p>
                            </div>
                            <Link href="#"><a className="read-more">Read more</a></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list-news">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                    return (
                                        <div className="item-news entry" key={item}>
                                            <div className="meta-post">
                                                <Link href="#"><a>Announcement</a></Link>
                                                <Link href="#"><a>Blog</a></Link>
                                                <Link href="#"><a>Weekly Update</a></Link>
                                                <time className="date label">12.05.2022</time>
                                            </div>
                                            <h3 className="title">
                                                T.E.A.M Foundation Launches Permanent Art Collection, and a Digital Art
                                                Gallery
                                                Curated by
                                                Photographer Misan Harriman
                                            </h3>
                                            <div className="post-teaser">
                                                <p>
                                                    We are proud to announce the creation of a first-of-its-kind
                                                    Permanent Art
                                                    Collection
                                                    (PAC) to…
                                                </p>
                                            </div>
                                            <Link href="#"><a className="read-more">Read more</a></Link>
                                        </div>
                                    )
                                }, this)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>


        <Footer/>
    </>)
}
