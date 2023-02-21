import Head from "next/head";

import { Inter } from "@next/font/google";
import homestyles from "@/styles/pages/home.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";

import { SingleServiceCards } from "../components/AllCards/ourServiceCards";
import { SinglePricingCard } from "../components/AllCards/pricingCards";
import { SingleTestimonialCard } from "../components/AllCards/testimonialCards";
import { ContactUs } from "../components/contactUs";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MarketStation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container-fluid`}>
        <Navbar />
        <section
          className={` mx-auto ${homestyles.serviceSection}  ${homestyles.ServiceCardSM}`}
          id="OurServices"
        >
          <h1 className="text-center fw-bold textColorWB">Our Services</h1>
          <SingleServiceCards />
        </section>

        <section className={`id="Pricing   ${styles.pricingSectionBG}`}>
          <h1 className={`text-center fw-bold ${homestyles.pricingSection} `}>
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
          id="AboutUs"
        >
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center">
              <h1
                className="fw-bold  text-center 
              "
              >
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
