import {Hero, PopularProducts,SuperQuality,Services,SpecialOffers,CustomerReviews,Subscribe,Footer,} from './Sections';
import Nav from './Components/Nav';
import { footerLinks, socialMedia } from "./constants";

const App = () => (
  <main className="relative">
    <Nav />

    <section className="xl:padding-l wide:padding-r wide:padding-b">
      <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>
    
    <section className="padding">
      <SuperQuality/>
    </section>
    
    <section className="padding">
      <Services/>
    </section>

    <section className="bg-pale-blue">
      <SpecialOffers/>
    </section>

    <section className="padding">
      <CustomerReviews/>
    </section>
    
    <section className="padding">
      <Subscribe/>
    </section>
    
    <section className="bg-black padding-x padding-t pb-8 text-white">
    <Footer footerLinks={footerLinks} socialMedia={socialMedia} />
    </section>
    

  </main>
)

export default App;