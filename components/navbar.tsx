import styles from "../styles/marketHeroDesigns/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";

const Navbar = () => {
  return (
    <>
      <main>
        <div className={styles.heroimageMobile}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <div className=" ms-auto " style={{ background: "#fff" }}>
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation ">
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
                        href="#AboutUs">
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
          </nav>

          <div className="container">
            <div className="row mt-4">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
                <div>
                  <h2
                    className="fw-bold"
                    style={{ color: "white", textAlign: "center" }}>
                    Lorem ipsum, dolor sit amet consectetur.
                  </h2>
                </div>
                <div>
                  <p style={{ color: "white", textAlign: "center" }}>
                    We make your trading dreams come true.
                  </p>
                  <div className="">
                    <GetstartedButton />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-lg-block d-md-block">
                <img src={mobilephones.src} alt="" />
              </div>
              <div className="col-xs-12 col-sm-12 w-50 d-sm-block d-md-none mx-auto d-block">
                <img src={mobilephones.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
