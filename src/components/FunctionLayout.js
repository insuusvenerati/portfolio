import { useStaticQuery } from 'gatsby';

export const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Portfolio of Sean Norwood' },
          { name: 'keywords', content: 'site, web' },
        ]}
      >
        <html lang="en" />

        <meta property="og:url" content="https://stiforr.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sean Norwood" />
        <meta property="og:description" content="Portfolio of Sean Norwood" />
        <meta property="og:image" content="../assets/img/avatar.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stiforr.tech" />
        <meta property="twitter:url" content="https://stiforr.tech/" />
        <meta name="twitter:title" content="Sean Norwood" />
        <meta name="twitter:description" content="Portfolio of Sean Norwood" />
        <meta name="twitter:image" content="../assets/img/avatar.png" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        {children}
      </div>
    </>
  );
};
