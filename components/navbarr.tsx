import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbarr() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-lg-5 mb-md-5">
          <>
            <Navbar.Brand href="#" className="ms-2">
              {/* <span className="text-success">MrPee</span> */}
            </Navbar.Brand>
            <Navbar.Toggle
              className="bg-white me-3 "
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto mt-4">
                  <div className=" ">
                    <Nav.Link className="me-5" href="#AboutUs">
                      <li className={`${Navstyles.marketStationNavText}`}>
                        ABOUT US
                      </li>
                    </Nav.Link>
                  </div>
                  <Nav.Link eventKey={2} href="#OurServices" className="me-5">
                    <li className={`${Navstyles.marketStationNavText}`}>
                      SERVICES
                    </li>
                  </Nav.Link>
                  <Nav.Link eventKey={3} href="#Pricing " className="me-5">
                    <li className={`${Navstyles.marketStationNavText}`}>
                      PRICING
                    </li>
                  </Nav.Link>
                  <Nav.Link eventKey={4} href="#ContactUs" className="me-5">
                    <li className={`${Navstyles.marketStationNavText}`}>
                      CONTACT US
                    </li>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;
