import ServerSideSheets from '@material-ui/core/styles';
import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <body>
                        <Main/>
                        <NextScript/>
                    </body>
                </Head>
            </Html>
           
        )
    }
}

MyDocument.getInitialProps=async(ctx)=>{
    const sheets=new ServerSideSheets();
    const originalRenderPages=ctx.renderPages;
    ctx.renderPages=()=>{
        return originalRenderPages({
            enhanceApp: (App)=>(props)=>sheets.collect(<App {...props}/>)

        });
    };
    const initialProps=await Document.getInitialProps(ctx);
    return{
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles), 
            sheets.getStyleElement()
        ]
    }
}

