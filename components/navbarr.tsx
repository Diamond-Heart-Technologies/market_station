import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HomeIcon } from "./icons.js/SocialMediaIcons";

export function Navbarr() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          collapseOnSelect
          className="mb-lg-5 mb-md-5 "
          id="navbar"
        >
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle
              className="bg-white me-1 ms-auto"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Nav.Link
                    className={` ${Navstyles.marketStationNavText}`}
                    href="/"
                  >
                    <HomeIcon />
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 mt-lg-4 mt-md-4">
                  <NavLink className="me-5" href="#AboutUs">
                    <li className={` ${Navstyles.marketStationNavText}`}>
                      ABOUT US
                    </li>
                  </NavLink>

                  <NavLink eventKey={2} href="#OurServices" className="me-5">
                    <li className={`${Navstyles.marketStationNavText}`}>
                      SERVICES
                    </li>
                  </NavLink>
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
          </Container>
        </Navbar>
      ))}
    </>
  );
}

// export function Navbarr() {
//   return (
//     <>
//       {["md"].map((expand) => (
//         <Navbar
//           key={expand}
//           expand={expand}
//           collapseOnSelect
//           className="mb-lg-5 mb-md-5"
//         >
//           <>
//             <Navbar.Brand href="#" className="ms-2">
//               {/* <span className="text-success">MrPee</span> */}
//             </Navbar.Brand>
//             <Navbar.Toggle
//               className="bg-white me-3 "
//               aria-controls={`offcanvasNavbar-expand-${expand}`}
//             />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title
//                   id={`offcanvasNavbarLabel-expand-${expand}`}
//                 ></Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="ms-auto mt-4">
//                   <NavLink className="me-5" href="#AboutUs">
//                     <li className={` ${Navstyles.marketStationNavText}`}>
//                       ABOUT US
//                     </li>
//                   </NavLink>

//                   <NavLink eventKey={2} href="#OurServices" className="me-5">
//                     <li className={`${Navstyles.marketStationNavText}`}>
//                       SERVICES
//                     </li>
//                   </NavLink>
//                   <Nav.Link eventKey={3} href="#Pricing " className="me-5">
//                     <li className={`${Navstyles.marketStationNavText}`}>
//                       PRICING
//                     </li>
//                   </Nav.Link>
//                   <Nav.Link eventKey={4} href="#ContactUs" className="me-5">
//                     <li className={`${Navstyles.marketStationNavText}`}>
//                       CONTACT US
//                     </li>
//                   </Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export function Navbarr() {
//   return (
//     <Navbar
//       className={` ${Navstyles.CollapseContent}`}
//       collapseOnSelect
//       expand="md"
//       bg=""
//       variant="dark"
//     >
//       <Container>
//         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           className="ms-auto text-light "
//           // aria-controls="responsive-navbar-nav"
//         />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav
//             className={`justify-content-end flex-grow-1 mt-lg-4 mt-md-4   ${Navstyles.marketStationNavText}`}
//           >
//             <NavLink className="me-5" href="#AboutUs">
//               <li className={` ${Navstyles.marketStationNavText}`}>ABOUT US</li>
//             </NavLink>

//             <NavLink eventKey={2} href="#OurServices" className="me-5">
//               <li className={`${Navstyles.marketStationNavText}`}>SERVICES</li>
//             </NavLink>

//             <Nav.Link eventKey={3} href="#Pricing " className="me-5">
//               <li className={`${Navstyles.marketStationNavText}`}>PRICING</li>
//             </Nav.Link>

//             <Nav.Link eventKey={4} href="#ContactUs" className="">
//               <li className={`${Navstyles.marketStationNavText}`}>
//                 CONTACT US
//               </li>
//             </Nav.Link>
//           </Nav>
//           ;
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
