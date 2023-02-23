import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";
import Navbarr from "./navbarr";

const Navbar1 = () => {
  return (
    <>
      <main>
        <div className={Navstyles.heroimage}>
          {/* <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div className=" ms-auto " style={{ background: "#fff" }}>
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation "
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                  <div className={styles.marketStationText}>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#AboutUs"
                      >
                        ABOUT US
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item ">
                      <a className="nav-link" href="#OurServices">
                        SERVICES
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item">
                      <a className="nav-link" href="#Pricing">
                        PRICING
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item">
                      <a className="nav-link" href="#ContactUs">
                        CONTACT US
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav> */}

          {/* Navbar starts here */}
          <Navbarr />
          {/* Navbar ends here */}

          {/* hero content start here */}

          <div className="container">
            <div className="row  mt-4">
              <div className=" col-lg-6 col-md-6  col-sm-12  mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 ">
                <div className={` ${Navstyles.herotexts}`}>
                  <h2 className="fw-bold text-white ">
                    Lorem ipsum, dolor sit amet consectetur.
                  </h2>
                  <p className="text-white">
                    We make your trading dreams come true.
                  </p>
                  <div className={` mt-4 ${Navstyles.Herobutton}`}>
                    <GetstartedButton />
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6  col-sm-12">
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

export default Navbar1;
