import Navstyles from "../styles/componentstyles/marketHero.module.scss";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
// import NavLogo from "../public/assets/navLogo.png";

import { FaBars, FaTimes } from "react-icons/fa";

import Head from "next/head";
import Navstyle from "../styles/componentstyles/navbar.module.scss";
import navimage from "../public/images/pricingimg.png";
import Image from "next/image";

import { HomeIcon } from "./icons.js/SocialMediaIcons";

export function Navbarr() {
  const AboutUsSec = () => {
    const element = document.getElementById("AboutUsSec");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          collapseOnSelect
          className="mb-lg-5 mb-md-5"
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
                  <NavLink
                    href="#AboutUs"
                    eventKey={1}
                    className={`me-5 ${Navstyles.marketStationNavText}`}
                  >
                    <li className={`nav-item`}>ABOUT US</li>
                  </NavLink>

                  <NavLink
                    href="#scrollspyAboutUsSec"
                    // onClick={AboutUsSec}
                    // eventKey={1}
                    className={`me-5 ${Navstyles.marketStationNavText}`}
                  >
                    <li className={`nav-item`}>SERVICES</li>
                  </NavLink>

                  <NavLink
                    href="#AboutUs"
                    eventKey={1}
                    className={`me-5 ${Navstyles.marketStationNavText}`}
                  >
                    <li className={`nav-item`}>PRICING</li>
                  </NavLink>

                  <NavLink
                    href="#AboutUs"
                    eventKey={1}
                    className={`me-5 ${Navstyles.marketStationNavText}`}
                  >
                    <li className={`nav-item`}>CONTACT US</li>
                  </NavLink>
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
//           className={`mb-lg-5 mb-md-5 `}
//         >
//           <>
//             <Navbar.Brand href="#" className="ms-2">
//               <span className="text-success">MrPee</span>
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
