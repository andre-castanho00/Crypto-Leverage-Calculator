import Hero from "../../components/hero/hero";
import FormSection from "../../components/form/form";
import Footer from "../../components/footer/footer";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="page">
      <Hero />
      <FormSection />
      <Footer />
    </div>
  );
}

export default Home;
