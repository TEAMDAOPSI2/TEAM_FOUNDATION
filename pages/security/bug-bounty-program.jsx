import Head from "next/head";
import Navbar from "@components/Navbar";
import Link from "next/link";
import Footer from "@components/Footer";

export default function BugN() {
    return (
        <>
            <Head>
                <title>T.E.A.M  FOUNDATION | Security Policy & Bug Bounty</title>
            </Head>
            <Navbar/>

            <main id={`security`}>
                <section className="security-section" style={{paddingTop: '160px', paddingBottom: '60px'}}>
                    <div className="container">
                        <h2 style={{marginBottom: '40px'}}>Security Policy & Bug Bounty</h2>
                        <div className="row justify-content-md-center">
                            <div className="col-md-7 entry" style={{marginBottom: '20px;'}}>
                                <div className="entry box-security">
                                    <h3>Expectation</h3>
                                    <p>
                                        In order to continuously improve the security of team, the T.E.A.M Foundation has
                                        set up a Bug Bounty program. The policy below explains what security researchers
                                        and contributors can expect and the ground rules of the program. <br/>
                                        Security researchers and contributors can expect the T.E.A.M Foundation to:
                                    </p>
                                    <ul>
                                        <li>
                                            Review submissions relating to the improvement of the security of the team
                                            ecosystem,
                                        </li>
                                        <li>Work with them to understand and validate their reports, provide timely
                                            initial responses to submissions,
                                        </li>
                                        <li>Work to remediate discovered vulnerabilities in a reasonable timeframe,</li>
                                        <li>Reward original contributions that are submitted in a complete,
                                            well-documented way.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7 entry bg-third" style={{marginBottom: '20px;', color: '#333'}}>
                                <div className="box-security">
                                    <h3>Scope</h3>
                                    <p>
                                        In scope of this policy are all security-relevant bugs and errors found in the
                                        team
                                        ecosystem.
                                        <br/>
                                        These include, but are not limited to, the following:
                                    </p>
                                    <ol>
                                        <li>Bugs in the T.E.A.M protocol</li>
                                        <li>Bugs in T.E.A.M shells (Octeam, Teamedge)</li>
                                        <li>Bugs in any other software that uses the T.E.A.M blockchain</li>
                                    </ol>
                                    <h3>Out of Scope</h3>
                                    <p>
                                        The T.E.A.M Foundation’s infrastructure (web servers, DNS, email, CMS, etc.) is
                                        not in
                                        scope of this policy. Should you have doubts as to the eligibility of the
                                        identified
                                        bug please contact the T.E.A.M Foundation Security Team.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7 entry" style={{marginBottom: '20px;'}}>
                                <div className="entry box-security">
                                    <h3>Bug Bounties</h3>
                                    <p>
                                        For confirmed vulnerabilities, presented with a complete, well-documented report
                                        a bounty in T.E.A.M tokens (“TEAM”) will be offered. The bounty will be
                                        proportional to the frequency of occurrence and/or the severity of the
                                        vulnerability being reported. The report should include a full description of
                                        the bug/exploit along with when and how it was discovered. New bugs in any other
                                        software that uses the T.E.A.M blockchain (see number 3 in the list above) will be
                                        rewarded with a finder’s fee: the bounty for reporting these bugs, if there is
                                        one, is the responsibility of the T.E.A.M that developed the software.
                                    </p>
                                    <h5>Ground Rules</h5>
                                    <p>
                                        To encourage vulnerability research, and to avoid any confusion between
                                        legitimate research and malicious attacks, we ask that security researchers
                                        attempt, in good faith, to abide by the following:
                                    </p>
                                    <ul>
                                        <li>Play by the rules. This includes following this policy and any other
                                            commonly accepted best practices,
                                        </li>
                                        <li>Promptly report any vulnerability discovered,</li>
                                        <li>Avoid violating the privacy of others, disrupting systems, destroying data,
                                            and/or harming user experience,
                                        </li>
                                        <li>Use only the channels defined in section below “How to report” to discuss
                                            vulnerability information with the T.E.A.M Foundation,
                                        </li>
                                        <li>Handle details of any vulnerability discovered confidentially,</li>
                                        <li>Perform testing only on in-scope systems avoiding systems and activities
                                            which are out-of-scope,
                                        </li>
                                        <li>
                                            Should a vulnerability provide unintended access to data:
                                            <ul>
                                                <li>Limit the amount of data accessed to the minimum necessary to
                                                    demonstrate the vulnerability,
                                                </li>
                                                <li>Cease testing and submit a report the moment user data is
                                                    encountered including, but not limited to: Personally Identifiable
                                                    Information (PII), Personal Healthcare Information (PHI), credit
                                                    card data or proprietary information,
                                                </li>
                                                <li>Only interact with test accounts one owns or with explicit
                                                    permission from the account holder,
                                                </li>
                                                <li>Do not engage in extortion.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h5>Exclusion</h5>
                                    <p>
                                        In order to establish a fair reward program, the following user groups are not
                                        eligible to receive bug bounties:
                                    </p>
                                    <ul>
                                        <li>T.E.A.M core development teams, T.E.A.M Foundation employees and all other
                                            people paid directly or indirectly by the T.E.A.M Foundation (i.e.
                                            subsidiaries, service providers, grantees…),
                                        </li>
                                        <li>Any developer under contract with one of the T.E.A.M organizations.</li>
                                    </ul>
                                    <p>
                                        Furthermore, the following disqualifies the researcher from the Bug Bounty
                                        program:
                                    </p>
                                    <ul>
                                        <li>Public disclosure of the vulnerability without coordination with the team
                                            Foundation,
                                        </li>
                                        <li>Submitting issues which have already been submitted by another security
                                            researcher or that already known to the T.E.A.M Foundation. However,
                                            well-documented bugs submitted after having been previously submitted by
                                            other researchers lacking documentation, are acceptable.
                                        </li>
                                    </ul>
                                    <b>Legal Safe Harbor</b>
                                    <p>
                                        For vulnerability research abiding by the conditions set out in this policy, the
                                        T.E.A.M Foundation will consider said research to be:
                                    </p>
                                    <ul>
                                        <li>
                                            Authorized with respect to any applicable computer crime legislation:
                                            <ul>
                                                <li>The T.E.A.M Foundation will not initiate or support legal action
                                                    against the security researcher for accidental, good-faith
                                                    violations of this policy.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Authorized with respect to any relevant anti-reverse engineering
                                            legislation:
                                            <ul>
                                                <li>
                                                    The T.E.A.M Foundation will not initiate or support legal action
                                                    against the security researcher for circumvention of
                                                    anti-reverse engineering restrictions.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Exempt from restrictions in the T.E.A.M Foundation’s policy which would
                                            interfere with conducting security research, waiving said restrictions on a
                                            limited basis.
                                        </li>
                                    </ul>
                                    <p>
                                        Security researchers are expected to abide by all applicable laws. Should legal
                                        action be initiated by a third party against a security researcher, and the
                                        security researcher is in compliance with this policy, the T.E.A.M Foundation will
                                        take appropriate steps to make it known that the security researcher’s actions
                                        were conducted in compliance with this policy.
                                    </p>
                                    <p>
                                        Should a security researcher have concerns or doubts regarding the compliance of
                                        their research with this policy they are invited to contact the T.E.A.M Foundation
                                        Security Team.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7 entry bg-third" style={{marginBottom: '20px;', color: '#333'}}>
                                <div className="box-security">
                                    <h3>Reporting</h3>
                                    <p>
                                        The T.E.A.M Foundation Security T.E.A.M can be contacted via email to
                                        security@team.com (PGP key ID 16D0433F59CC3AC701C088E1FE0703C196EE4A04).
                                    </p>
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