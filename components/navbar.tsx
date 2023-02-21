import styles from "../styles/marketHeroDesigns/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";

const Navbar = () => {
  return (
    <>
      <main className="d-md-block d-sm-none ">
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
                        href="#">
                        ABOUT US
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item ">
                      <a className="nav-link" href="#">
                        SERVICES
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        PRICING
                      </a>
                    </li>
                  </div>
                  <div className={styles.marketStationText}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        CONTACT US
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <div className="row ">
              <div className="col-lg-6 mt-5 pt-5">
                <div>
                  <h4
                    className="d-sm-block d-lg-none"
                    style={{ color: "white", textAlign: "center" }}>
                    Lorem ipsum, dolor sit.
                  </h4>
                  <div className={styles.marketStationText}>
                    <h1
                      className="mt-5 d-lg-block d-none d-sm-none"
                      style={{ color: "white", textAlign: "center" }}>
                      Lorem ipsum, dolor sit amet consectetur.
                    </h1>
                  </div>
                  <div className="d-sm-none d-lg-block">
                    <p style={{ color: "white", textAlign: "center" }}>
                      We make your trading dreams come true.
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <GetstartedButton />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
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
