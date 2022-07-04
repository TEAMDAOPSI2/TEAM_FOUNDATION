import React, {useEffect, useState} from "react";
import Link from "next/link";
import TeamLogo from "@public/images/team-logo.png";
import Image from "next/image";
import ImgTelegramICO from "@public/images/telegram_white.svg";
import ImgTwitterICO from "@public/images/twitter_white.svg";
import ImgFacebookICO from "@public/images/iconmonstr-facebook-1-240.png";
import ImgTiktokICO from "@public/images/tiktok.png";
import ImgMediumICO from "@public/images/medium_white.svg";
import ImgDiscordICO from "@public/images/discord_white.svg";
import ImgLitePaperICO from "@public/images/litepaper.png";
import ImgGithubICO from "@public/images/github_white.svg";
import ImgYoutubeICO from "@public/images/youtube_icon.svg";
import ImgTwitchICO from "@public/images/iconmonstr-twitch-1-240.png";
import ImgLinkTreeICO from "@public/images/iconmonstr-share-thin-240.png";


// https://script.google.com/macros/s/AKfycbwYEFQFcl2Anqos_CQ5qnYMtHP07Ej9xZNNykjyGMTabeS3SPVTpa8YIAFsE7JnHrv7bw/exec?action=notif

export default function Footer() {
    const [notification, setNotification] = useState('');
    const [email, setEmail] = useState('');


    const fetchNotifications = () => {
        fetch('https://script.google.com/macros/s/AKfycbwYEFQFcl2Anqos_CQ5qnYMtHP07Ej9xZNNykjyGMTabeS3SPVTpa8YIAFsE7JnHrv7bw/exec?action=notif')
            .then(res => res.json())
            .then(res => {
                setNotification(res[0].message);
            });
        setTimeout(() => {
            setNotification(null)
        }, 4000);
    }

    useEffect(() => {
        setInterval(fetchNotifications, 8000);
    }, []);


    const submitEmail = async () => {
        event.preventDefault();
        const email = event.target.email.value;

        const res = await fetch(`https://script.google.com/macros/s/AKfycbzA9mNJjFb1RR-kabS-fi-c7ErrW-4IaPgcRi5g9iVj84HCuiuze2hMen99EXv6cm8maA/exec?action=subscribe-email&email=${email}`, {
            method: 'POST'
        });
        const result = await res.json();

        if (result.message === 'success') {
            setNotification("You are added to T.E.A.M mail");
        }

    };


    return (
        <>
            <section className="footer fixed-bottom">
                {/*<div className="edge">*/}
                {/*    <img src="images/footer-edge.svg" alt="footer ege"/>*/}
                {/*</div>*/}
                <div className="container text-white content pb-3">
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="d-flex h-100 flex-row align-items-center socials">
                                <div className="footer-logo mr-1">
                                    <Image src={TeamLogo} width={121} height={31} alt="T.E.A.M game"/>
                                </div>
                                <div className="social-group">
                                    <a href="https://t.me/TEAMDAO" target="_blank" rel="noreferrer">
                                        <Image src={ImgTelegramICO} width={25} height={25} alt="Telegram"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://twitter.com/TEAMDAOcom" target="_blank" rel="noreferrer">
                                        <Image src={ImgTwitterICO} width={25} height={25} alt="Twitter"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://web.facebook.com/TEAMDAOcom" target="_blank" rel="noreferrer">
                                        <Image width={20} height={20}
                                               src={ImgFacebookICO} alt="Twitter"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.tiktok.com/@teamdao" target="_blank" rel="noreferrer">
                                        <Image width={20} height={20}
                                               src={ImgTiktokICO} alt="Tiktok"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://teamdao.medium.com" target="_blank" rel="noreferrer">
                                        <Image width={25} height={25} src={ImgMediumICO} alt="Telegram"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://discord.gg/TEAMDAO" target="_blank" rel="noreferrer">
                                        <Image width={25} height={25} src={ImgDiscordICO} alt="Discord"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://whitepaper.teamdao.com/" target="_blank" rel="noreferrer">
                                        <Image src={ImgLitePaperICO} width={20} height={20} alt="LitePaper"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://github.com/TEAMDAO" target="_blank" rel="noreferrer">
                                        <Image src={ImgGithubICO} width={25} height={25} alt="Github"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.youtube.com/c/TeamDAO" target="_blank" rel="noreferrer">
                                        <Image src={ImgYoutubeICO} width={25} height={25} alt="Youtube"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.twitch.tv/teamdaoTV" target="_blank" rel="noreferrer">
                                        <Image src={ImgTwitchICO} width={20} height={20} alt="Twitch"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://linktr.ee/TEAMDAO" target="_blank" rel="noreferrer">
                                        <Image src={ImgLinkTreeICO} width={20} height={20} alt="Linktr"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ms-auto mail-subscription">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                  className="cta6-form-wrap-2" aria-label="Email Form" _lpchecked="1"
                                  onSubmit={submitEmail}>
                                <input type="email" className="sub_input-2 w-input" maxLength="256" name="email"
                                       data-name="Email 3" placeholder="Enter your email" id="email-3" required/>
                                <button id="con_wallet-txt" className="btn_b ps-2 pe-2 flip" type="submit"
                                        style={{border: 'none'}}>
                                    <div className="btn_b--textwrap h-100">
                                        <div id="con_wallet"
                                             className="btn_b--txt d-flex align-items-center justify-content-center">
                                            Subscribe
                                        </div>
                                    </div>
                                    <div className="btn_b--bgwrap">
                                        <div className="btn_b--bg">
                                            <div className="btn_b--fill no_full"/>
                                        </div>
                                    </div>
                                </button>
                                {/*<input type="submit" value="Subscribe" data-wait="Please wait..."*/}
                                {/*       className="btn_b is--sub w-button"/>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className={'notification ' + (notification ? 'is-show' : '')}>
                <div className="notification-text-wrap">
                    <div className="notification-text d-flex justify-content-between w-100">
                        <span>{notification}</span>
                        <span className="close-btn" onClick={() => {
                            setNotification(null)
                        }}>x</span>
                    </div>
                </div>
                <div className="notification-bg-wrap">
                    <div className="notification-bg">
                        <div className="notification-fill"/>
                    </div>
                </div>
            </div>
        </>

    );
}
