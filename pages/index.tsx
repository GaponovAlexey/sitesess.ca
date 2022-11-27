import Head from "next/head";
import Main from "./component/Main";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sitesess.ca</title>
        <meta
          name="description"
          content="This is a developer company, we create Websites, landing pages, Web App to order, promote SEO, create complex services, online stores"
        />
        <meta
          name="keywords"
          content="Developer company, Developer company Canada,Developer company Winnipeg, landing pages,landing,landing order, Website, Websites, web App, webApp, WebApp, SEO,promote SEO, services,online stores, online store, order, best price, best product, best company, best seo, best lending"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
