import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Portfolio from '../components/Portfolio';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Sections from '../data/Sections';

const IndexPage = () => {
  return (
    <Layout>
      <SideBar sections={Sections} />

      <div id="main">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </div>

      <PageFooter />
    </Layout>
  );
};

export default IndexPage;
