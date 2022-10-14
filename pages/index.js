/** @format */

import Head from "next/head";
import { styled } from "@stitches/react";
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
    <Wrapper>
      <Head>
        <title>Master Sofua Desmond</title>
        <meta name="Sofua" content="Desmond Sofua" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LottieWrapper>
        <Lottie
          options={defaultOptions}
          // width={100}
          // height={400}
          style={{ margin: "0px", width: "100vw" }}
        />
      </LottieWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const LottieWrapper = styled("div", {
  // backgroundColor: "pink",
  width: "100%",
});
