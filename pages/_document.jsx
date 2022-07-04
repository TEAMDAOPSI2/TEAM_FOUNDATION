import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"/>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2B1DBKSKZW"
                />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date()); gtag('config', 'G-2B1DBKSKZW');
                    `}
                </script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
