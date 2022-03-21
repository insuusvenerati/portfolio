import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import '../assets/sass/main.scss';

const avatar = '../assets/img/avatar.png';

export const FunctionLayout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    });

    return () => clearTimeout(timeoutId);
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQueryTest {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
            twitter
          }
        }
      }
    }
  `);

  const metas = [
    {
      name: 'description',
      content: data.site.siteMetadata.description,
    },
    {
      name: 'og:image',
      content: avatar,
    },
    {
      name: 'og:image:width',
      content: `421px`,
    },
    {
      name: 'og:image:height',
      content: `421px`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: data.site.siteMetadata.title,
    },
    {
      name: 'og:description',
      content: data.site.siteMetadata.description,
    },
    {
      name: 'og:site_name',
      content: data.site.siteMetadata.og.siteName,
    },
    {
      name: 'og:url',
      content: `${data.site?.siteMetadata?.siteUrl}${location.pathname}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: data.site.siteMetadata.description,
    },
    {
      name: 'twitter:title',
      content: data.site.siteMetadata.title,
    },
    {
      name: 'twitter:image',
      content: avatar,
    },
    {
      name: 'twitter:creator',
      content: data.site.siteMetadata.og.twitterCreator,
    },
  ];

  return (
    <>
      <Helmet title={data.site.siteMetadata.title}>
        <html lang="en" />

        {metas.map((meta) => (
          <meta key={meta.name} name={meta.name} content={meta.content} />
        ))}
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        {children}
      </div>
    </>
  );
};
