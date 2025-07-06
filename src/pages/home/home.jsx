import Hero from "../../components/hero/hero";
import FormSection from "../../components/form/form";
import Footer from "../../components/footer/footer";
import ImageLoader from "../../components/imageLoader/imageLoader";

function Home() {
  return (
    <div className="page"> 
      <Hero />
      <FormSection />
      <Footer />
    </div>
  );
}

export default Home;
