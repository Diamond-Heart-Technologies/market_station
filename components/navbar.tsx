import styles from "../styles/marketHeroDesigns/marketHero.module.scss";
import { GetstartedButton } from "./buttons";
import mobilephones from "../public/images/marketStationhero/mobilephones.png";

const Navbar = () => {
  return (
    <>
      <main className="d-none d-md-block d-sm-none ">
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
              <div className="col-lg-6  mt-5 pt-5">
                <div className={styles.marketStationText}>
                  <h1
                    className="mt-5"
                    style={{ color: "white", textAlign: "center" }}>
                    Lorem ipsum, dolor sit amet consectetur.
                  </h1>
                  <p style={{ color: "white", textAlign: "center" }}>
                    We make your tradind dreams come true.
                  </p>
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

      {/* Mobile Section */}
      <main className="d-md-none d-sm-block">
        <div className={styles.heroimageMobile}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <div className=" ms-auto mt-3" style={{ background: "#fff" }}>
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

          <div className="px-2 container-fluid align-items-center mb-5 pb-5">
            <div className="row ">
              <div className=" col-sm-12 mt-3 ">
                <div className="">
                  <h4
                    className="mt-5"
                    style={{ color: "white", textAlign: "center" }}>
                    Lorem ipsum, dolor sit.
                  </h4>
                  <p style={{ color: "white", textAlign: "center" }}>
                    We make your tradind dreams come true.
                  </p>
                </div>

                <div className="text-center mt-4">
                  <GetstartedButton />
                </div>
                <div className="mt-4 col-sm-12 text-center">
                  <img
                    src={mobilephones.src}
                    alt=""
                    style={{
                      width: "20rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
