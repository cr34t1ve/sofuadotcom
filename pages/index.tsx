/** @format */

import Head from "next/head";
import Script from "next/script";
import { styled } from "../stitches.config";
import Lottie from "react-lottie";
import * as animationData from "../lottie/WOTW.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Master Sofua Desmond</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#111111" />
        <meta property="og:title" content="Desmond Sofua" />
        <meta name="description" content="Desmond Sofua"></meta>
        <meta
          property="og:image"
          content="https://uploads-ssl.webflow.com/625def3e532869b398ef78cf/62a8e8a6a9d847cdf54f4ef4_OpenGraph.png"
        />
        <meta
          name="keywords"
          content="Desmond, Sofua, Senanu, Desmond Sofua"
        ></meta>
        <meta name="author" content="Desmond Sofua"></meta>
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9W5L4788WZ"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-9W5L4788WZ');
    `}
      </Script>
      <Wrapper>
        <LottieWrapper>
          <Lottie
            options={defaultOptions}
            // width={100}
            // height={400}
            style={{ margin: "0px", width: "100%", height: "100%" }}
          />
        </LottieWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  "@sm": {
    height: "100vh",
  },
});

const LottieWrapper = styled("div", {
  // marginTop: "auto",
  padding: 30,
  width: "100%",
  "@sm": {
    marginTop: "initial",
  },
});
