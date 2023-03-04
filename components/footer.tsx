import logofont from "../styles/generalstyles/fonts.module.scss";
import { SocialMediaIcons } from "./icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";
// import footerstyle from "../styles/componentstyles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import footer from "../public/images/footerimg/footerimg.png";

const Footer = () => {
  return (
    <footer className={` ${styles.pryColor}`}>
      <section className="container d-flex flex-column justify-content-center pt-4 ">
        {/* <Image src={footer} alt="Picture of the author" className="mb-4" /> */}
        <span className="text-white fs-6 mb-3 text-center">
          © copyright Market Station 2023
        </span>
        <div className=" mb-3">
          <SocialMediaIcons />
        </div>
        {/* Footer Menu Starts */}

        <ul
          className="
         mx-auto fs-6 mb-3 d-lg-flex d-md-flex pe-md-4"
        >
          <li className="me-md-4">
            <Link
              className={`nav-link  ${styles.secColor}`}
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="me-md-4">
            <Link
              className={`nav-link ${styles.secColor}`}
              aria-current="page"
              href="#AboutUs"
            >
              About Us
            </Link>
          </li>
          <li className="me-md-4">
            <Link
              className={`nav-link ${styles.secColor}`}
              aria-current="page"
              href="#Pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="">
            <Link
              className={`nav-link ${styles.secColor}`}
              aria-current="page"
              href="#ContactUs"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="d-flex justify-content-center  mx-auto pb-4  pe-md-4">
          <Link
            className="nav-link text-white fs-6 me-3 "
            aria-current="page"
            href="#ContactUs"
          >
            Terms And Conditions
          </Link>
          <Link
            className="nav-link text-white fs-6 ms-2"
            aria-current="page"
            href="#ContactUs"
          >
            Privacy Policy
          </Link>
        </ul>

        {/* Footer Menu ends */}
      </section>
    </footer>
  );
};

// const Footer = () => {
//   return (
//     <>
//       <div className={``}>
//         <div className="d-flex justify-content-center ">
//           <Image
//             src={footer}
//             alt="Picture of the author"
//             width={100}
//             height={90}
//             className="mt-5"
//           />
//         </div>
//         <div
//           className={` d-flex justify-content-center  mt-2
//       ${styles.secColor} `}
//         >
//           <p>© copyright Market Station 2023</p>
//         </div>
//         <div className="mb-3 ">
//           <SocialMediaIcons />
//         </div>
//         {/* next lime */}
//         <ul className="d-flex justify-content-center">
//           <li>
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="#AboutUs"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="#Pricing"
//             >
//               Pricing
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="#ContactUs"
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//         {/* Next line */}
//         <ul className="d-flex justify-content-center pb-5">
//           <li>
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="/"
//             >
//               Terms And Conditions
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link
//               className={`nav-link active me-5 ${styles.secColor}`}
//               aria-current="page"
//               href="/"
//             >
//               Privacy Policy
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

export default Footer;
