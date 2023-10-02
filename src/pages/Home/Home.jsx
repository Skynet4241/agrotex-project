import { About } from './AboutUs/About';
import { Features } from './Features';
import { Hero } from './Hero';
import { Services } from './Services';
import { SpareParts } from './SpareParts';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <SpareParts />
    </>
  );
};

export default Home;
