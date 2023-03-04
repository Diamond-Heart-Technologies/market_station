import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";
import Navbarr from "./navbarr";

const HeroSection = () => {
  return (
    <>
      <main>
        <div className={Navstyles.heroimage}>
          {/* Navbar starts here */}
          <Navbarr />
          {/* Navbar ends here */}

          {/* hero content start here */}

          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 ">
                <div className={` ${Navstyles.herotexts}`}>
                  <h2 className="fw-bold text-white ">
                    Lorem ipsum, dolor sit amet consectetur.
                  </h2>
                  <p className="text-white">
                    We make your trading dreams come true.
                  </p>
                  <div className={`mt-4 ${Navstyles.Herobutton}`}>
                    <GetstartedButton />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6  col-sm-12">
                <img
                  className={` ${Navstyles.HeroimageMobile}`}
                  src={mobilephones.src}
                  alt="mobilephone"
                />
              </div>
            </div>
          </div>

          {/* hero content ends here */}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
