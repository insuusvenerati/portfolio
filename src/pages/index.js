import About from '../components/About';
import Contact from '../components/Contact';
import { FunctionLayout } from '../components/FunctionLayout';
import Hero from '../components/Hero';
import PageFooter from '../components/PageFooter';
import Portfolio from '../components/Portfolio';
import SideBar from '../components/SideBar';
import Sections from '../data/Sections';

const IndexPage = () => {
  return (
    <FunctionLayout>
      <SideBar sections={Sections} />

      <div id="main">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </div>

      <PageFooter />
    </FunctionLayout>
  );
};

export default IndexPage;
