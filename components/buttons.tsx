// GetstartedButton
// SubmitButton

import styles from "../styles/componentstyles/buttondesign.module.scss";
import Link from "next/link";

export const GetstartedButton = () => {
  return (
    <Link href="#ContactUs">
      <button className={`px-4 ${styles.Signin}`} type="button">
        GET STARTED
      </button>
    </Link>
  );
};

export const SubmitButton = () => {
  return (
    <div>
      <button className={`  ${styles.Submit}`} type="button">
        Submit
      </button>
    </div>
  );
};
