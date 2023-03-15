import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";
import { Navbarr } from "./navbarr";

const HeroSection = () => {
  return (
    <>
      <main>
        <div className={` ${Navstyles.heroimage}`}>
          {/* Navbar starts here */}
          <Navbarr />
          {/* Navbar ends here */}

          {/* hero content start here */}

          <div className={`container-fluid ${Navstyles.HeroContent}`}>
            <div className="row mt-">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 ">
                <div className={`text-center`}>
                  <h1 className="fw-bold fs-1 text-white ">MARKET STATION</h1>
                  <p className="text-white fs-5 w-75 mx-auto">
                    Your one stop station for anything regarding forex
                    consultancy
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
