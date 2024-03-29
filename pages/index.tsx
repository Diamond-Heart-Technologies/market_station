import Head from "next/head";

import { Inter } from "@next/font/google";
import homestyles from "@/styles/pages/home.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";
import { SingleServiceCards } from "../components/AllCards/ourServiceCards";
import { SinglePricingCard } from "../components/AllCards/pricingCards";
import { SingleTestimonialCard } from "../components/AllCards/testimonialCards";
import { ContactUs } from "../components/contactUs";
import Footer from "@/components/footer";
// import Hero from "@/components/hero";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <>
      <Head>
        <title>MarketStation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero and Navbar */}
      <section className="">
        <HeroSection />
      </section>

      {/*  */}
      <main className={`container-fluid ${homestyles.homeSection}`}>
        <section
          className={`${homestyles.serviceSection}`}
          id="scrollspyAboutUsSec"
        >
          <h1 className={`text-center fw-bold ${styles.textColorWB}`}>
            Who We Are
          </h1>
          <p
            className={`d-flex mx-auto ${styles.textColorWB} ${homestyles.aboutUsText}`}
          >
            Lorem ipsum dolor sit amet consectetur. Orci massa nunc imperdiet
            ipsum. Nunc id tortor quam porttitor dictumst egestas euismod. Vitae
            maecenas vel bibendum dui dolor viverra neque viverra. Quam
            elementum nulla id vitae duis volutpat feugiat. Aliquet pulvinar
            nisi sit turpis nulla sit. Magnis ante cursus nulla mattis ipsum
            massa ultricies diam. Eleifend id volutpat tortor nibh fermentum
            enim in. Viverra urna aliquet neque eros aliquam molestie suscipit
            arcu ligula. Cras risus quis in ultricies donec vitae amet augue
            tristique. Aliquam congue porttitor quis pellentesque. Nunc donec ut
            a nulla sit aenean luctus. Nec est lobortis dolor et donec. sit{" "}
          </p>
        </section>
        <section
          className={` mx-auto   ${homestyles.serviceSection}  ${homestyles.ServiceCardSM}`}
          id="OurServices"
        >
          <h1 className={`text-center fw-bold ${styles.textColorWB}`}>
            Our Services
          </h1>
          <SingleServiceCards />
        </section>

        <section id="Pricing" className={`${styles.pricingSectionBG}`}>
          <h1
            className={`text-center fw-bold ${styles.textColorWB}  ${homestyles.pricingSection}`}
          >
            Pricing
          </h1>

          <p className="w-75 text-center mx-auto mb-5">
            Vulputate amet cursus molestie eget mauris. Nulla tincidunt turpis
            cursus et interdum gravida. In turpis ante facilisis nunc integer.
            Scelerisque dapibus ultrices sed arcu. Nisi augue faucibus rhoncus
            molestie tristique mi placerat ipsum luctus.
          </p>

          <SinglePricingCard />
        </section>

        <section
          className={`px-4 container ${homestyles.testimonialSection}`}
          id="scrollspyAboutUsSec"
        >
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center">
              <h1 className={`text-center fw-bold ${styles.textColorWB}`}>
                What our Customers are Saying
              </h1>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 container-fluid">
              <SingleTestimonialCard />
            </div>
          </div>
        </section>

        <section className={`${homestyles.contactUsSection}`} id="ContactUs">
          <ContactUs />
        </section>
      </main>

      <div className={`${styles.pryColor}`}>
        <Footer />
      </div>
    </>
  );
}
