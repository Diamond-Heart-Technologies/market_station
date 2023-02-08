import styles from "../styles/componentstyles/marketHero.module.scss";
import { GetstartedButton } from "./buttons";

const Navbar = () => {
  return (
    <main className={styles.heroImage}>
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
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="px-4 container-fluid  d-flex pt-5 pb-4 align-items-center ">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 mt-5 mx-auto">
            <div className={styles.marketStationText}>
              <h1
                className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 mx-5 mb-lg-0  "
                style={{ textAlign: "center" }}
              >
                LOREM IPSUM DOLOR SIT AMET CONSECTEUR.
              </h1>
            </div>

            <p
              className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-4"
              style={{ color: "white", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing eli.
            </p>

            <GetstartedButton />

            <div className="">
              <h2 className="d-xs-block d-sm-block d-md-block d-lg-none ">
                LOREM IPSUM DOLOR
              </h2>
              <p className="d-xs-block d-sm-block d-md-block d-lg-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                impedit ipsum, numquam totam. Nulla delectus aliquam ipsa
                doloribus <br />
                distinctio quia deleniti porro perferendis dolores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
