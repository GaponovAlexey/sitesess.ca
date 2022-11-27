import s from "../../../styles/main.module.scss";


const Marketing = () => {
  return (
    <>
      <div id="marketing" className={s.main_marketing}>
        <div className={s.marketing_page}>
          <div className={s.marketing_info}>
            <h2>Your website can attract new customers through Google</h2>
            <p>
              You may be happy with the current size of your business, but every
              company experiences customer turnover. To encourage continued
              success, you need to attract new customers, and one of the best
              ways to do it is by making yourself more visible on Google. Social
              media networks are indexed on Google, and social media posts can
              be found with the search engine, but a website gives you access to
              many more tools and strategies for Search Engine Optimization
              (SEO). And SEO is the key to making your business appear on the
              front page of Google.
            </p>
          </div>
          <div className={s.marketing_top_page}>
            <section>
              <h3>
                <span className="text-orange-400">#</span>Paid Search
              </h3>
              <ul>
                <li className="w-4/5 mx-auto">
                  <a
                    className="hover:bg-blue-600 transition-all duration-200 delay-200 "
                    href="#FacebookAds"
                  >
                    Facebook Ads
                  </a>
                </li>
                <li>
                  <a href="#GoogleAds">Google Ads</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>
                <span className="text-blue-400">#</span>SEO
              </h3>
              <ul>
                <li>
                  <a href="#SSR">SSR</a>
                </li>
                <li>
                  <a href="#TechnicalSEO">Technical SEO</a>
                </li>
                <li>
                  <a href="#Links">Website Analytics</a>
                </li>
              </ul>
            </section>
          </div>
          <div className={s.info_marketing_services}>
            {/* <Switch
              fallback={<p className={s.list_services}>Hello who you need</p>}
            >
              <Match when={matches("FacebookAds")}>
                <div className={s.list_services}>
                  <Facebook />
                </div>
              </Match>
              <Match when={matches("GoogleAds")}>
                <div className={s.list_services}>Google Ads</div>
              </Match>
              <Match when={matches("SSR")}>
                <div className={s.list_services}>SSR</div>
              </Match>
              <Match when={matches("TechnicalSEO")}>
                <div className={s.list_services}>Technical SEO</div>
              </Match>
              <Match when={matches("Links")}>
                <div className={s.list_services}>Website Analytics</div>
              </Match>
            </Switch> */}
          </div>
        </div>
        <div className={s.marketing_map}>
          <div className={s.marketing_bot_content}></div>
        </div>
      </div>
    </>
  );
};

const Facebook = () => {
  return (
    <div>
      The campaign strength score is calculated from various factors including
      your campaign and ad settings, current campaign performance and analysis
      of performance potential for each recommendation that is relevant for your
      campaign. Campaign strength and its accompanying recommendations can
      change due to trends in the ads ecosystem and edits to your campaign
      setup.
      <br />
      We help you with it.
    </div>
  );
};

export default Marketing;
