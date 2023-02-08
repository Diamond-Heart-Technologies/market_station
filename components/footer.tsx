import logofont from "../styles/generalstyles/fonts.module.scss";
import { SocialMediaIcons } from "./icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";
import footerstyle from "../styles/componentstyles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import footer from "../public/images/footerimg/footerimg.png";

const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <Image
          src={footer}
          alt="Picture of the author"
          width={100}
          height={90}
          className="mt-5"
        />
      </div>
      <div
        className={` d-flex justify-content-center  mt-2
      ${styles.secColor} `}
      >
        <p>© copyright Market Station 2023</p>
      </div>
      <div className="mb-3">
        <SocialMediaIcons />
      </div>
      {/* next lime */}
      <ul className="d-flex justify-content-center">
        <li>
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="#AboutUs"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="#Pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="#ContactUs"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      {/* Next line */}
      <ul className="d-flex justify-content-center">
        <li>
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="/"
          >
            Terms And Conditions
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`nav-link active me-5 ${styles.secColor}`}
            aria-current="page"
            href="/"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
