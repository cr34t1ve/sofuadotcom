/** @format */

import Head from "next/head";
import { styled } from "../stitches.config";
import { Text } from "../components";
import Link from "next/link";

const Work = [
  {
    title: "New Comma",
    link: "https://newcomma.com",
  },
  {
    title: "Sunami Games",
    link: "https://sunamigames.com",
  },
  {
    title: "Rare Goods Only",
    link: "https://raregoodsonly.webflow.io/",
  },
  {
    title: "Judical Service of Ghana",
    link: "https://apps.apple.com/gh/app/e-judgment-mobile/id1604602114?platform=ipad",
  },
  {
    title: "Simplecoins",
    link: "",
  },
  {
    title: "Rev Inc.",
    link: "",
  },
];

const Projects = [
  {
    title: "Hay",
    link: "https://usehay.com/",
  },
  {
    title: "FluffyShelf",
    link: "https://fluffyshelf.com/",
  },
  {
    title: "AuctionPapa",
    link: "https://www.auctionpapa.com/",
  },
  {
    title: "Hoprun",
    link: "https://www.hoprun.co/",
  },
];

const SideProjects = [
  {
    title: "Mound - Raycast Extensions",
    link: "https://www.raycast.com/desmondsofua/mound-for-pile",
  },
  {
    title: "Systemizer - Figma Plugin",
    link: "https://www.figma.com/community/plugin/1227072991823029464",
  },
  {
    title: "Mirage UI",
    link: "https://www.mirageui.com/",
  },
  {
    title: "CV Mason",
    link: "https://cosmic-log-resume-builder.vercel.app/",
  },
  {
    title: "SPAWN Campfire",
    link: "https://www.scfaccra.com/",
  },
  {
    title: "Restaurant Web Scraper",
    link: "https://github.com/cr34t1ve/zubzz-crawler",
  },
  {
    title: "Beautiful Stories",
    link: "https://beautifulstories.webflow.io/",
  },
];

const title = `Desmond Sofua`;
const image = `https://uploads-ssl.webflow.com/625def3e532869b398ef78cf/63ab0a35c73ddfb4d6fcb19b_og.png`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Desmond Sofua" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Desmond Sofua, Sofua, Desmond" />
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D0E13" />
        <link rel="apple-touch-icon" href="/favicon192.png" />
        <meta property="og:image" content={image} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sofua.co.uk/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:url" content="https://www.sofua.co.uk/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:image" content={title} />
        <link
          rel="preload"
          href="/fonts/Inter-variable-optimized.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <MaxWidth>
        <Wrapper>
          <Header>
            <Spacer
              css={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                "@sm": {
                  display: "none",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Text
                  link
                  as={Link}
                  target="_blank"
                  href="mailto: desmond@sofua.co.uk"
                >
                  Email
                </Text>
                <CircularDivider />
                <Text
                  link
                  as={Link}
                  target="_blank"
                  href="https://linkedin.com/in/desmondsofua"
                >
                  LinkedIn
                </Text>
                <CircularDivider />
                <Text
                  link
                  as={Link}
                  target="_blank"
                  href="https://github.com/cr34t1ve"
                >
                  Github
                </Text>
              </div>
              <Text css={{ fontWeight: "$medium" }}>Contact</Text>
            </Spacer>
            <Text>Currently builing an email server</Text>
            <Text
              css={{
                flex: 1,
                textAlign: "right",
                "@sm": { textAlign: "initial" },
              }}
            >
              Based in &nbsp; &nbsp; &nbsp; &nbsp;
              <br />
              Accra, Ghana
            </Text>
          </Header>
          <Hero>
            <Text size={10} transform="uppercase">
              <span>
                Desmond <br /> Sofua
              </span>
            </Text>
          </Hero>
          <Divider />
          <Text size={9} color="primaryLight" font="apercu">
            I&apos;m a Software Engineer based in Accra, Ghana. Previously
            worked as a <span> Frontend engineer at New Comma, </span> a startup
            connecting African creatives to lucrative opportunities.
          </Text>
          <WorksSection>
            <Text color="silver" size={4} font="apercu">
              Work
            </Text>
            <div>
              {Work.map((work, index) => (
                <WorkCard href={work.link} target="_blank" key={index}>
                  <Text font="apercu" size={5}>
                    {(index + 1).toString().padStart(2, "0")}
                  </Text>
                  <Text font="apercu" size={6}>
                    {work.title}
                  </Text>
                  {work.link && (
                    <>
                      <ChainLink>🔗</ChainLink>
                    </>
                  )}
                </WorkCard>
              ))}
            </div>
          </WorksSection>
          <WorksSection>
            <Text color="silver" size={4} font="apercu">
              Projects
            </Text>
            <div>
              {Projects.map((project, index) => (
                <WorkCard href={project.link} target="_blank" key={index}>
                  <Text font="apercu" size={5}>
                    {(index + 1).toString().padStart(2, "0")}
                  </Text>
                  <Text font="apercu" size={6}>
                    {project.title}
                  </Text>
                  <ChainLink>🔗</ChainLink>
                </WorkCard>
              ))}
            </div>
          </WorksSection>
          <WorksSection>
            <Text color="silver" size={4} font="apercu">
              Side Projects
            </Text>
            <div>
              {SideProjects.map((project, index) => (
                <WorkCard href={project.link} target="_blank" key={index}>
                  <Text font="apercu" size={5}>
                    {(index + 1).toString().padStart(2, "0")}
                  </Text>
                  <Text font="apercu" size={6}>
                    {project.title}
                  </Text>
                  <ChainLink>🔗</ChainLink>
                </WorkCard>
              ))}
            </div>
          </WorksSection>
          <Spacer
            css={{
              marginTop: 90,
              display: "none",
              "@sm": {
                display: "flex",
                flexDirection: "column",
                gap: 5,
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Text
                link
                as={Link}
                target="_blank"
                href="mailto: desmond@sofua.co.uk"
              >
                Email
              </Text>
              <CircularDivider />
              <Text
                link
                as={Link}
                target="_blank"
                href="https://read.cv/desmondsofua"
              >
                read.cv
              </Text>
              <CircularDivider />
              <Text
                link
                as={Link}
                target="_blank"
                href="https://github.com/cr34t1ve"
              >
                Github
              </Text>
            </div>
          </Spacer>
        </Wrapper>
      </MaxWidth>
    </>
  );
}

const MaxWidth = styled("main", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const Wrapper = styled("div", {
  maxWidth: "min(100%, calc(1350px + 32px * 2))",
  padding: "30px 32px 64px 32px",
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  "@sm": {
    padding: "60px 20px 120px 20px",
  },
});

const Header = styled("header", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  "@sm": {
    flexDirection: "column",
    gap: 60,
  },
});

const Spacer = styled("div", {
  flex: 1,
  "@sm": {
    display: "none",
  },
});

const Hero = styled("section", {
  marginTop: 325,
  marginBottom: 290,
  marginRight: "auto",
  backgroundColor: "$primaryText",
  width: "90%",

  "@sm": {
    marginTop: 60,
    marginBottom: "initial",
    width: "100%",
  },
});

const WorksSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 40,
  marginTop: 170,
  marginRight: "auto",
  width: "80%",
  "@sm": {
    width: "100%",
    gap: 5,
    marginTop: 90,
  },
});

const ChainLink = styled("p", {
  fontSize: 24,
  marginLeft: "auto",
  "@sm": {
    display: "none",
  },
});

const WorkCard = styled(Link, {
  display: "flex",
  alignItems: "center",
  padding: 30,
  gap: 50,
  borderBottom: "1px solid $silver",
  background: "$primaryBackground",
  color: "$primaryText",
  transition: "background 350ms ease",
  willChange: "auto",

  [`& ${ChainLink}`]: {
    opacity: "0",
    transition: "opacity 350ms ease",
  },

  "&:last-of-type": {
    borderBottom: "none",
  },

  "&:hover": {
    background: "$primaryText",
    color: "$primaryBackground",

    [`& ${ChainLink}`]: {
      opacity: "1",
    },
  },

  "@sm": {
    padding: "32px 10px",
    "&:hover": {
      background: "$primaryBackground",
      color: "$primaryText",
    },
  },
});

const Divider = styled("div", {
  display: "none",
  marginBottom: 90,
  marginTop: 90,
  height: 1,
  width: "100%",
  backgroundColor: "#2C2D30",
  "@sm": {
    display: "revert",
  },
});

const CircularDivider = styled("div", {
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "$primaryText",
});
