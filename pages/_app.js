import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/partnersAdvisors.css';
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/png" sizes="32x32" href="images/round-team-logo.png"/>


                <link href="https://team-dao.games/images/round-team-logo.png" rel="apple-touch-icon"/>
            </Head>

            <Component {...pageProps}/>
        </>
    );
}

export default MyApp
