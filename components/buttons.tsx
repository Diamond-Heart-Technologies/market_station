// GetstartedButton
// SubmitButton

import styles from "../styles/componentstyles/buttondesign.module.scss";

export const GetstartedButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <button className={styles.Signin} type="button">
        GET STARTED
      </button>
    </div>
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
