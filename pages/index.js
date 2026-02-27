import Head from "next/head";
import About from "../components/About";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import HeroSlide from "../components/HeroSlide";
import meta from "../content/meta.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <HeroSlide />
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
