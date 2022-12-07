import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import TeamLogo from "@public/images/team-logo.png";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {NavDropdown} from "react-bootstrap";
import Image from "next/image";
import Cursor from "../utils/cursor";


const RBNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ifWalletConnected = async () => {
        try {
            // make sure have access window ethereum
            const {ethereum} = window;

            if (!ethereum) {
                console.log("No ethereum found");
            } else {
                console.log("Ethereum found", ethereum);
            }

            // check if authorized using wallet connect
            const accounts = await ethereum.request({method: "eth_accounts"});

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Account found", account);
                setCurrentAccount(account);
            } else {
                console.log("No account found");
            }
        } catch (e) {
            console.log("Error", e);
        }
    }

    const disconnectWallet = async () => {
        try {
            setCurrentAccount("");
            handleClose();
        } catch (e) {
            console.log("Error", e);
        }
    }

    // connect wallet method
    const connectWallet = async () => {

        // // check if authorized using wallet connect
        // const accounts = await ethereum.request({method: "eth_accounts"});
        //
        // if (accounts.length !== 0) {
        //     // open modal disconnect
        //     console.log("open modal disconnect");
        //     handleShow();
        //     return true;
        // }
        // if not doing connect meta mask
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert("get metamask");
                return;
            }

            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (e) {
            console.log("Error", e);
        }
    }

    const addTeamToken = async () => {
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21", // The address that the token is at.
                    symbol: "TEAM", // A ticker symbol or shorthand, up to 5 chars.
                    decimals: 8, // The number of decimals in the token
                    image: "https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png", // A string url of the token logo
                },
            },
        });

    }

    // run function when page loaded
    useEffect(() => {
        ifWalletConnected();
    }, []);

    console.log(isOpen);
    return (
        <>
            <Navbar className="fixed-top bg-black" expand="lg" id="myNavbar">
                <div className="container">
                    <Link className="navbar-brand text-white" href="/">
                        <a>
                            <Image width={131}
                                   height={38}
                                   src={TeamLogo} alt="T.E.A.M Games" className={`brand_img`}/>
                        </a>
                    </Link>
                    <Navbar.Toggle onClick={() => setIsOpen(!isOpen)}
                                   aria-controls="basic-navbar-nav">
                        <span className={`navbar-toggler-icon ${isOpen ? `close` : ``}`}/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className={`collapse-animation`}>
                        <Nav className="ml-auto ms-auto" id="myNavItem">
                            <Link href="/#Home">
                                <a className="nav-link">About us</a>
                            </Link>
                            <Link href="grants">
                                <a className="nav-link">Grant Process</a>
                            </Link>
                            <Link href="/bounty-program">
                                <a className="nav-link">Bounty Program</a>
                            </Link>
                            <NavDropdown title="Security" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/security"> Security Policy</NavDropdown.Item>
                                <NavDropdown.Item href="/security/bug-bounty-program">Bug Bounty
                                    Program</NavDropdown.Item>
                                <NavDropdown.Item href="/security/known-scam">Known Scam</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SPORTS COLLECTION" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/permanent-sport-collection">Permanent Sport
                                    Collection</NavDropdown.Item>
                            </NavDropdown>
                            <Link href="/contact-us">
                                <a className="nav-link">Contact us</a>
                            </Link>
                        </Nav>

                        {/*<Nav className="ms-auto left-nav-menu" id="myNavItem">*/}
                        {/*    <div onClick={addTeamToken}*/}
                        {/*         className="btn_b me-2 reflect-left w-100">*/}
                        {/*        <div style={{width: 150 + 'px'}}*/}
                        {/*             className="d-flex flex-row justify-content-center align-items-center flex-grow-1 add-meta btn_b--textwrap">*/}
                        {/*            <img src="images/team-meta.png" alt="T.E.A.M METAMASK" className={`coin-link`}/>*/}
                        {/*            <span className={`text-center d-flex flex-column`}>*/}
                        {/*            <span>+ADD <span className="neon">$TEAM</span></span> <span>METAMASK</span>*/}
                        {/*        </span>*/}
                        {/*        </div>*/}
                        {/*        <div className="btn_b--bgwrap">*/}
                        {/*            <div className="btn_b--bg">*/}
                        {/*                <div className="btn_b--fill no_full"/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div onClick={connectWallet} id="con_wallet-txt" className="btn_b w-100">*/}
                        {/*        <div className="btn_b--textwrap h-100">*/}
                        {/*            {!currentAccount ?*/}
                        {/*                <div id="con_wallet" className="btn_b--txt d-flex flex-column"><span*/}
                        {/*                    className="neon">Connect</span> <span>Wallet</span></div> :*/}
                        {/*                <div id="con_wallet"*/}
                        {/*                     className="btn_b--txt d-flex align-items-center justify-content-center ">*/}
                        {/*                    {*/}
                        {/*                        <span*/}
                        {/*                            className="neon">{currentAccount.substr(0, 3)}...{currentAccount.substr(currentAccount.length - 4)}</span>*/}
                        {/*                    }*/}
                        {/*                </div>*/}
                        {/*            }*/}

                        {/*        </div>*/}
                        {/*        <div className="btn_b--bgwrap">*/}
                        {/*            <div className="btn_b--bg">*/}
                        {/*                <div className="btn_b--fill no_full"/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Nav>*/}

                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Modal show={show} onHide={handleClose} contentClassName="modal-disconnect" centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Disconnect Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={disconnectWallet} className="btn btn-default">Disconnect</button>
                </Modal.Body>
            </Modal>
            <Cursor/>
        </>
    );
};

export default RBNavBar;
