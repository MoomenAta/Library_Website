// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument()
{
    return(
        <Html>
        <Head />
            <body>
                <Main />
                <div id="modal"></div>
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument;
